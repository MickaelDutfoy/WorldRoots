class Item { // création des objets
    constructor(nom, id, type, effet, valeur) {
        this.nom = nom;
        this.id = id;
        this.type = type; // "equipement" ou "consommable"
        this.effet = effet; // "heal", "dégâts", "buff", "arme"
        this.valeur = valeur; // Dégâts pour une arme, soin pour une potion, etc.
    }
};

const catalogueItems = { // liste des objets
    baton: new Item("Bâton", "baton", "equipement", "arme", 3),
    dague: new Item("Dague", "dague", "equipement", "arme", 5),
    epee: new Item("Épée", "epee", "equipement", "arme", 8),
    hache: new Item("Hache", "hache", "equipement", "arme", 10),
    massue: new Item("Massue", "massue", "equipement", "arme", 12),

    potionXXS: new Item("Potion XXS", "potionXXS", "consommable", "heal", 10),
    potionXS: new Item("Potion XS", "potionXS", "consommable", "heal", 20),
    potionS: new Item("Potion S", "potionS", "consommable", "heal", 30),
    potionM: new Item("Potion M", "potionM", "consommable", "heal", 40),
    potionL: new Item("Potion L", "potionL", "consommable", "heal", 50),

    etherXXS: new Item("Ether XXS", "etherXXS", "consommable", "regen", 10),
    etherXS: new Item("Ether XS", "etherXS", "consommable", "regen", 20),
    etherS: new Item("Ether S", "etherS", "consommable", "regen", 30),

    grenade: new Item("Grenade", "grenade", "consommable", "dégâts", 25)
};

class Spell { // création des sorts
    constructor(nom, id, type, mp, valeur, cible) {
        this.nom = nom;
        this.id = id;
        this.type = type; // "attack" ou "heal"
        this.mp = mp;
        this.valeur = valeur; // "heal", "dégâts", "buff", "arme"
        this.cible = cible; // Dégâts pour une arme, soin pour une potion, etc.
    }
};

const grimoire = { // liste et fonctionnement des sorts
    bouleDeFeu: new Spell("Boule de feu", "bouleDeFeu", "attack", 5, 15, 1),
    chaineDEclairs: new Spell("Chaîne d'éclairs", "chaineDEclairs", "attack", 8, 12, "all"),
    dagueFantome: new Spell("Dague fantôme", "daguefantome", "attack", 3, 10, 1),
    lumiereDivine: new Spell("Lumière divine", "lumiereDivine", "heal", 5, 10, 1),

    cast(sort) {
        document.getElementById("spellList").remove();
        if ( personnage.mp < sort.mp ) {
            fightMsg(`${personnage.nom} n'a pas assez de MP !`);
        } else {
            personnage.mp -= sort.mp;
            fightMsg(`<span class="purple">${personnage.nom} perd ${sort.mp} MP</span>.`);
            personnage.fichePerso();
            if ( sort.type === "attack" ) {
                let dmg = Math.floor(( 2 * personnage.stats.intelligence + sort.valeur - mob.stats.volonte ) * ( Math.random() * 0.3 + 0.85 )); if ( dmg < 0 ) { dmg = 0 };
                fightMsg(`${personnage.nom} utilise ${sort.nom} ! <span class="red">${mob.nom} perd ${dmg} HP</span>.`);
                mob.hp = mob.hp - dmg;
                if (mob.isDead()) return;
                mob.attaquer(personnage);
            } else if ( sort.type === "heal" ) {
                personnage.hp += sort.valeur; if ( personnage.hp > personnage.maxhp ) { personnage.hp = personnage.maxhp };
                fightMsg(`${personnage.nom} utilise ${sort.nom} ! <span class="green">${personnage.nom} gagne ${sort.valeur} HP</span>.`);
                mob.attaquer(personnage);
            }
        }
    }
};

class Ennemi { // fonctionnement d'un ennemi
    constructor(nom, niveau, stats, lootTable) {
        this.nom = nom;
        this.niveau = niveau;
        this.stats = stats;
        this.hp = 10 * stats.vitalite;
        this.mp = 5 * stats.intelligence;
        this.lootTable = lootTable;
    }

    attaquer(cible) {
        if ( Math.random() * 100 < Math.min(personnage.stats.agilite, 50) ) {
            fightMsg(`${cible.nom} <strong>esquive</strong> l'attaque de ${this.nom} !`);
        } else {
            let dmg = Math.floor((3 * this.stats.force - cible.stats.vitalite) * (Math.random() * 0.3 + 0.85));
            if (dmg < 0) dmg = 0;
            fightMsg(`${this.nom} attaque ! <span class="red">${cible.nom} perd ${dmg} HP</span>.`);
            cible.hp -= dmg;
            cible.fichePerso(); // Mettre à jour l'affichage du personnage
            if (cible.hp <= 0) {
                document.getElementById("genererMob").addEventListener("click", ennemis.popMob);
                document.getElementById("genererMob").removeEventListener("click", ennemis.disablePopMob);
                fightMsg(`${cible.nom} est vaincu(e) !`, tempoMsg);
                createBtn.style.display = "inline-block";
                document.getElementById("fightButtons").remove();
            }
        }
    }

    isDead() {
        if (this.hp <= 0) {
            document.getElementById("genererMob").addEventListener("click", ennemis.popMob);
            document.getElementById("genererMob").removeEventListener("click", ennemis.disablePopMob);
            fightMsg(`${this.nom} est vaincu(e).`);
            document.getElementById("fightButtons").remove();
            personnage.gagnerXP(this.niveau * 5);
            if ( Math.random() < 0.8 ) {
                let goldLoot = Math.floor((Math.random() * 0.2 + 0.4 ) * this.niveau * 6);
                personnage.or += goldLoot;
                fightMsg(`${personnage.nom} obtient ${goldLoot} pièces d'or.`);
            }
            let loots = mob.lootTable.filter(objet => Math.random() < objet.chance);
            if (loots.length > 0) {
                fightMsg(`${personnage.nom} trouve : ${loots.map(objet => objet.item.nom).join(", ")}.`);
            }
            loots.forEach(objet => {
                personnage.ajouterObjet(objet.item);
            });
            personnage.fichePerso();
            return true; // Pour dire que le mob est mort
        }
        return false; // Il est encore vivant
    }
};

const ennemis = { // liste et génération des ennemis
    mobList: [
        { nom: "Gobelin", niveau: 1,
            stats: { force: 2, intelligence: 1, agilite: 3, vitalite: 2, volonte: 2 },
            lootTable: [
            { item: catalogueItems.potionXXS, chance: 0.5 },
            { item: catalogueItems.dague, chance: 0.2 }]},
        { nom: "Orc", niveau: 2,
            stats: { force: 4, intelligence: 1, agilite: 1, vitalite: 4, volonte: 2 },
            lootTable: [
            { item: catalogueItems.potionXS, chance: 0.5 },
            { item: catalogueItems.hache, chance: 0.2 }]},
        { nom: "Squelette", niveau: 1,
            stats: { force: 2, intelligence: 1, agilite: 1, vitalite: 3, volonte: 3 },
            lootTable: [
            { item: catalogueItems.potionXXS, chance: 0.5 },
            { item: catalogueItems.epee, chance: 0.2 }]},
        { nom: "Zombie", niveau: 2,
            stats: { force: 1, intelligence: 1, agilite: 1, vitalite: 5, volonte: 4 },
            lootTable: [
            { item: catalogueItems.potionXS, chance: 0.5 },
            { item: catalogueItems.etherXXS, chance: 0.3 }]},
        { nom: "Troll", niveau: 5,
            stats: { force: 6, intelligence: 1, agilite: 1, vitalite: 6, volonte: 4 },
            lootTable: [
            { item: catalogueItems.potionS, chance: 0.5 },
            { item: catalogueItems.etherXS, chance: 0.3 },
            { item: catalogueItems.massue, chance: 0.2 }]},
        ],
    
    popMob() {
        let mobData = ennemis.mobList[Math.floor(Math.random() * ennemis.mobList.length)];
        mob = new Ennemi(mobData.nom, mobData.niveau, mobData.stats, mobData.lootTable);
        exploreWindow.appendChild(spawnMsg);
        fightConsole.innerHTML = "";
        document.getElementById("spawnMsg").innerHTML = `Un ${mob.nom} (niveau ${mob.niveau}) apparaît ! <button id="fightBtn">Combattre</button>`;
        exploreWindow.appendChild(fightConsole);
        document.getElementById("fightBtn").addEventListener("click", fight);
    },

    disablePopMob() { 
        tempoMsg = 0;
        fightMsg(`Impossible de générer un nouvel ennemi avant que celui-ci ne soit vaincu !`);
    }
};

class Personnage { // fonctionnement d'un personnage
    constructor(nom, classe) {
        this.nom = nom;
        this.classe = classe;
        this.niveau = 1;
        this.experience = 0;
        this.or = 50;
        this.inventaire = [];
        this.sorts = [];
        this.stats = {};
        this.pointsLvlUp = 0;

        this.definirStatsDeClasse();
        this.maxhp = 10 * this.stats.vitalite;
        this.maxmp = 10 * this.stats.volonte;
        this.hp = this.maxhp;
        this.mp = this.maxmp;
    }

    definirStatsDeClasse() {
        const classes = {
            "Guerrier": { stats: {force: 3, intelligence: 1, agilite: 2, vitalite: 3, volonte: 1}, arme: catalogueItems.epee },
            "Mage": { stats: {force: 1, intelligence: 3, agilite: 3, vitalite: 1, volonte: 2}, sorts: [grimoire.bouleDeFeu, grimoire.chaineDEclairs], arme: catalogueItems.baton },
            "Voleur": { stats: {force: 2, intelligence: 2, agilite: 3, vitalite: 2, volonte: 1}, sorts: [grimoire.dagueFantome], arme: catalogueItems.dague },
            "Paladin": { stats: {force: 2, intelligence: 2, agilite: 1, vitalite: 2, volonte: 3}, sorts: [grimoire.lumiereDivine], arme: catalogueItems.epee }
        };
    
        let config = classes[this.classe];
        if (!config) return;
    
        Object.assign(this.stats, config.stats); // On ne copie que les stats, pas les autres propriétés
    
        if (config.arme) this.ajouterObjet(config.arme);
        if (config.sorts) config.sorts.forEach(sort => this.ajouterSort(sort));
    
        this.ajouterObjet(catalogueItems.potionXXS); // Tous les persos démarrent avec une potion
        this.arme = this.inventaire[0].objet; // Equipement par défaut
    }

    ajouterObjet(objet) {
        let itemTrouve = this.inventaire.find(i => i.objet.id === objet.id);
        if (itemTrouve) {
            itemTrouve.quantite++;
        } else {
            this.inventaire.push({ objet, quantite: 1 });
        }
        this.fichePerso();
    }

    ajouterSort(sort) {
        this.sorts.push(sort);
        this.fichePerso();
    }

    gagnerXP(xp) {
        fightMsg(`<span class="orange">${this.nom} gagne ${xp} XP</span>.`);
        this.experience += xp;
        while (this.experience >= 10 * this.niveau) {
            this.experience -= 10 * this.niveau;
            this.hp = this.maxhp;
            this.mp = this.maxmp;
            if ( this.pointsLvlUp === 0 ) { document.getElementById("teamWindow").appendChild(lvlUpWindow) }
            this.pointsLvlUp += 2;
            this.niveau++; this.levelUp();
            fightMsg(`<span class="orange">${this.nom} passe niveau ${this.niveau}</span> ! Les HP/MP ont été restaurés.`); this.fichePerso();
        }
    }

    levelUp() {
        this.statsTemp = { ...this.stats }; // Copie temporaire des stats pour l'affichage
        this.levelUpTable(); // Utilisation de `this.` pour éviter les problèmes de contexte
        this.addLevelUpListeners(); // Ajout des events
    }
    
    levelUpTable = () => {
        lvlUpWindow.innerHTML = `
            <tr><td colspan="5" style="text-align:center;">Points disponibles : ${this.pointsLvlUp}</td></tr>
            <tr>
                <td><abbr title="Régit la capacité d'esquive.">Agilité</abbr></td>
                <td><abbr title="Régit les dégâts physiques.">Force</abbr></td>
                <td><abbr title="Régit les dégâts magiques.">Intelligence</abbr></td>
                <td><abbr title="Régit les HP max et la résistance physique.">Vitalité</abbr></td>
                <td><abbr title="Régit les MP max et la résistance magique.">Volonté</abbr></td>
            </tr>
            <tr>
                <td>${this.statsTemp.agilite}</td>
                <td>${this.statsTemp.force}</td>
                <td>${this.statsTemp.intelligence}</td>
                <td>${this.statsTemp.vitalite}</td>
                <td>${this.statsTemp.volonte}</td>
            </tr>
            <tr>
                <td><button id="AgiUp">+</button><button id="AgiDwn">-</button></td>
                <td><button id="ForUp">+</button><button id="ForDwn">-</button></td>
                <td><button id="IntUp">+</button><button id="IntDwn">-</button></td>
                <td><button id="VitUp">+</button><button id="VitDwn">-</button></td>
                <td><button id="VolUp">+</button><button id="VolDwn">-</button></td>
            </tr>
            <tr><td colspan="5" style="text-align:center;"><button id="LvlUp">Valider</button></td></tr>`;
    }
    
    addLevelUpListeners = () => {
        document.getElementById("AgiUp").addEventListener("click", () => this.modifyStat("agilite", "+"));
        document.getElementById("ForUp").addEventListener("click", () => this.modifyStat("force", "+"));
        document.getElementById("IntUp").addEventListener("click", () => this.modifyStat("intelligence", "+"));
        document.getElementById("VitUp").addEventListener("click", () => this.modifyStat("vitalite", "+"));
        document.getElementById("VolUp").addEventListener("click", () => this.modifyStat("volonte", "+"));
        document.getElementById("AgiDwn").addEventListener("click", () => this.modifyStat("agilite", "-"));
        document.getElementById("ForDwn").addEventListener("click", () => this.modifyStat("force", "-"));
        document.getElementById("IntDwn").addEventListener("click", () => this.modifyStat("intelligence", "-"));
        document.getElementById("VitDwn").addEventListener("click", () => this.modifyStat("vitalite", "-"));
        document.getElementById("VolDwn").addEventListener("click", () => this.modifyStat("volonte", "-"));
        document.getElementById("LvlUp").addEventListener("click", this.validateLvlUp)
    }
    
    modifyStat = (stat, operation) => {
        if (operation === "+" && this.pointsLvlUp > 0) {
            this.statsTemp[stat]++;
            this.pointsLvlUp--;
        } else if (operation === "-" && this.statsTemp[stat] > this.stats[stat]) {
            this.statsTemp[stat]--;
            this.pointsLvlUp++;
        } else if (operation === "-" && this.statsTemp[stat] === this.stats[stat]) {
            tempoMsg = 0; fightMsg(`Impossible de baisser une statistique sous sa valeur de départ !`)
        } else if (this.pointsLvlUp === 0) {
            tempoMsg = 0; fightMsg(`Plus de points disponibles !`)
        }
    
        this.levelUpTable();
        this.addLevelUpListeners(); 
    }

    validateLvlUp = () => {
        if ( personnage.stats.vitalite < personnage.statsTemp.vitalite ) {
            this.hp += 10 * ( personnage.statsTemp.vitalite - personnage.stats.vitalite );
        }
        if ( personnage.stats.volonte < personnage.statsTemp.volonte ) {
            this.mp += 10 * ( personnage.statsTemp.volonte - personnage.stats.volonte );
        }
        this.stats = { ...this.statsTemp };
        if ( this.pointsLvlUp === 0 ) { lvlUpWindow.remove(); }
        this.maxhp = 10 * this.stats.vitalite;
        this.maxmp = 10 * this.stats.volonte;
        this.fichePerso();
    }
    
    fichePerso() {
        if (!document.getElementById("name")) return; // Si la fiche n'est pas encore affichée, on ne fait rien
        document.getElementById("name").textContent = this.nom;
        document.getElementById("class").textContent = this.classe;
        document.getElementById("level").textContent = `Niveau : ${this.niveau}`;
        document.getElementById("stats").innerHTML = `
        <abbr title="Régit la capacité d'esquive.">Agilité</abbr> : ${this.stats.agilite}<br>
        <abbr title="Régit les dégâts physiques.">Force</abbr> : ${this.stats.force}<br>
        <abbr title="Régit les dégâts magiques.">Intelligence</abbr> : ${this.stats.intelligence}<br>
        <abbr title="Régit les HP max et la résistance physique.">Vitalité</abbr> : ${this.stats.vitalite}<br>
        <abbr title="Régit les MP max et la résistance magique.">Volonté</abbr> : ${this.stats.volonte}`;
        const nomsObjets = this.inventaire.map(i => `${i.objet.nom} x${i.quantite}`);
        document.getElementById("inventory").innerHTML = `Inventaire :<br>${this.or} pièces d'or<br>${nomsObjets.join("<br>")}`;
        const nomsSorts = this.sorts.map(sort => sort.nom);
        document.getElementById("spells").innerHTML = `Sorts :<br>${nomsSorts.join("<br>")}`;
        let displayHP = document.getElementById("HP");
        if ( this.hp <= this.maxhp / 4 ) {
            displayHP.style.color = "red";
        } else {
            displayHP.style.color = "black";
        }
        displayHP.textContent = `HP : ${this.hp} / ${this.maxhp}`;
        let displayMP = document.getElementById("MP");
        if ( this.mp <= this.maxmp / 4 ) {
            displayMP.style.color = "purple";
        } else {
            displayMP.style.color = "black";
        }
        document.getElementById("MP").textContent = `MP : ${this.mp} / ${this.maxmp}`;
        document.getElementById("XP").textContent = `XP : ${this.experience} / ${10 * this.niveau}`;
        if ( personnage.hp <= 0 ) {
            fichePerso.remove();
            lvlUpWindow.remove();
        }
    }
};

function createCharacter() { // création d'un personnage
    const nom = document.getElementById("nom").value;
    const classe = document.getElementById("classe").value;
    if (!nom) {
        console.log("Tu dois entrer un nom !");
        return;
    }
    personnage = new Personnage(nom, classe);
    fightConsole.innerHTML = "";
    spawnMsg.innerHTML = "";
    fichePerso.innerHTML = '<tr><td id="name"></td><td id="class"></td><td id="level"></td></tr><tr><td id="stats"></td><td id="inventory"></td><td id="spells"></td></tr><tr><td id="HP"></td><td id="MP"></td><td id="XP"></td></tr>';
    document.getElementById("teamWindow").appendChild(fichePerso);
    personnage.fichePerso();
    createBtn.style.display = "none";
};

function fight() { // options de combat
    if ( !personnage ) {
        fightMsg("Tu dois d'abord créer un personnage !");
        return;
    }
    if ( personnage.hp <= 0 ) {
        fightMsg("Les morts ne combattent pas.");
        return;
    }
    document.getElementById("genererMob").removeEventListener("click", ennemis.popMob);
    document.getElementById("genererMob").addEventListener("click", ennemis.disablePopMob);
    document.getElementById("fightBtn").remove();
    fightConsole.innerHTML = '<p class="combatMsg">Le combat commence !</p> <div id="fightButtons"><button id="attack">Attaquer</button><button id="spell">Lancer un sort</button><button id="item">Utiliser un objet</button></div>'
    document.getElementById("attack").addEventListener("click", attack);
    document.getElementById("spell").addEventListener("click", spell);
    document.getElementById("item").addEventListener("click", afficherItems);

    function attack() {
        if ( document.getElementById("itemList") ) { document.getElementById("itemList").remove(); }
        if ( document.getElementById("spellList") ) { document.getElementById("spellList").remove(); }
        tempoMsg = 0;
        if ( Math.random() * 100 < Math.min(mob.stats.agilite, 50) ) {
            fightMsg(`${mob.nom} <strong>esquive</strong> l'attaque de ${personnage.nom} !`);
        } else {
            let dmg = Math.floor(( 2 * personnage.stats.force + personnage.arme.valeur - mob.stats.vitalite ) * ( Math.random() * 0.3 + 0.85 )); if ( dmg < 0 ) { dmg = 0 }; // formule dégâts joueur -> mob
            fightMsg(`${personnage.nom} attaque ${mob.nom} avec ${personnage.arme.nom} ! <span class="red">${mob.nom} perd ${dmg} HP</span>.`);
            mob.hp = mob.hp - dmg;
            if (mob.isDead()) return;
        }
        mob.attaquer(personnage);
    };

    function spell() {
        if ( document.getElementById("itemList") ) { document.getElementById("itemList").remove(); }
        tempoMsg = 0;
        const spellList = document.createElement("div");
        spellList.id = "spellList";
        fightConsole.appendChild(spellList);
        personnage.sorts.forEach(sort => {
            let spellBtn = document.createElement("button");
            spellBtn.innerHTML = `${sort.nom}`;
            spellBtn.id = `${sort.id}`;
            spellList.appendChild(spellBtn);
            spellBtn.onclick = () => grimoire.cast(sort);
        });
    };

    function afficherItems() {
        if ( document.getElementById("spellList") ) { document.getElementById("spellList").remove(); }
        tempoMsg = 0;
        const itemList = document.createElement("div");
        itemList.id = "itemList";
        fightConsole.appendChild(itemList);
    
        // Filtrer uniquement les objets consommables
        const objetsUtilisables = personnage.inventaire.filter(i => i.objet.type === "consommable");
    
        objetsUtilisables.forEach(i => {
            let itemBtn = document.createElement("button");
            itemBtn.innerHTML = `${i.objet.nom} x${i.quantite}`;
            itemBtn.id = i.objet.id;
            itemList.appendChild(itemBtn);
            itemBtn.onclick = () => utiliserItem(i.objet);
        });
    }
    
    function utiliserItem(item) {
        if (item.effet === "heal") {
            personnage.hp += item.valeur;
            if (personnage.hp > personnage.maxhp) personnage.hp = personnage.maxhp;
            fightMsg(`${personnage.nom} utilise ${item.nom}. <span class="green">${personnage.nom} récupère ${item.valeur} HP</span> !`);
        } else if (item.effet === "regen") {
            personnage.mp += item.valeur;
            if (personnage.mp > personnage.maxmp) personnage.mp = personnage.maxmp;
            fightMsg(`${personnage.nom} utilise ${item.nom}. <span class="blue">${personnage.nom} récupère ${item.valeur} MP</span> !`);
        } else if (item.effet === "dégâts") {
            let dmg = Math.floor((item.valeur) * (Math.random() * 0.3 + 0.85));
            fightMsg(`${personnage.nom} lance ${item.nom} sur ${mob.nom} ! <span class="red">${mob.nom} perd ${dmg} HP</span>.`);
            mob.hp -= dmg;
            if (mob.isDead()) return;
        }
        // Trouver l'objet dans l'inventaire
        let index = personnage.inventaire.findIndex(i => i.objet.id === item.id);
        if (index !== -1) {
            personnage.inventaire[index].quantite--;
            if (personnage.inventaire[index].quantite <= 0) {
                personnage.inventaire.splice(index, 1); // Supprimer si plus de stock
            }
        }
        // MAJ de l'affichage après utilisation
        personnage.fichePerso();
        document.getElementById("itemList").remove(); 
        mob.attaquer(personnage);
    }
    
};

let tempoMsg = 0;
function fightMsg(message) {
    setTimeout(() => {
        let newMsg = document.createElement("p");
        newMsg.innerHTML = message;
        fightConsole.appendChild(newMsg);
    }, tempoMsg);
    tempoMsg += 400;
}

let personnage = false;
const fightConsole = document.createElement("div"); fightConsole.id = "fightConsole";
const fichePerso = document.createElement('table'); fichePerso.id = "fichePerso";
const lvlUpWindow = document.createElement("table"); lvlUpWindow.id = "lvlUpWindow";
const exploreWindow = document.getElementById("exploreWindow");
const spawnMsg = document.createElement("p"); spawnMsg.id = "spawnMsg";
const createBtn = document.getElementById("creerPerso");
createBtn.addEventListener("click", createCharacter);
document.getElementById("genererMob").addEventListener("click", ennemis.popMob);