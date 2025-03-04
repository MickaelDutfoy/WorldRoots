let fightConsole = document.getElementById("fightWindow");

class Item { // création des objets
    constructor(nom, id, type, effet, valeur) {
        this.nom = nom;
        this.id = id;
        this.type = type; // "equipement" ou "consommable"
        this.effet = effet; // "heal", "dégâts", "buff", "arme"
        this.valeur = valeur; // Dégâts pour une arme, soin pour une potion, etc.
    }
}

const catalogueItems = { // liste des objets
    epee: new Item("Épée", "epee", "equipement", "arme", 8),
    baton: new Item("Bâton", "baton", "equipement", "arme", 3),
    dague: new Item("Dague", "dague", "equipement", "arme", 5),
    epeeDiamant: new Item("Épée de diamant", "epeeDiamant", "equipement", "arme", 50),

    potion: new Item("Potion", "potion", "consommable", "heal", 10),
    potionXXL: new Item("Potion XXL", "potionXXL", "consommable", "heal", 50),
    grenade: new Item("Grenade", "grenade", "consommable", "dégâts", 25)
};

const grimoire = { // liste et fonctionnement des sorts
    bouleDeFeu: {
        nom: "Boule de feu",
        id: "bouleDeFeu",
        type: "attack",
        degats: 15,
        mp: 10,
        cible: 1,
    },
    chaineDEclairs: {
        nom: "Chaîne d'éclairs",
        id: "chaineDEclairs",
        type: "attack",
        degats: 10,
        mp: 10,
        cible: "all",
    },
    dagueFantome: {
        nom: "Dague fantôme",
        id: "dagueFantome",
        type: "attack",
        degats: 10,
        mp: 5,
        cible: 1,
    },
    lumiereDivine: {
        nom: "Lumière divine",
        id: "lumiereDivine",
        type: "heal",
        soin: 10,
        mp: 5,
        cible: 1,
    },

    cast(sort) {
        document.getElementById("spellList").remove();
        let newMsg = document.createElement("p");
        if ( personnage.mp < sort.mp ) {
            newMsg.innerHTML = `Tu n'as pas assez de MP !`;
            fightConsole.appendChild(newMsg);
        } else {
            personnage.mp -= sort.mp;
            let mpCost = document.createElement("p");
            mpCost.innerHTML = `Tu perds ${sort.mp} MP.`;
            fightConsole.appendChild(mpCost);
            personnage.fichePerso();
            if ( sort.type === "attack" ) {
                let dmg = Math.floor(( personnage.stats.intelligence + sort.degats - mob.stats.volonte ) * ( Math.random() * 0.3 + 0.85 )); if ( dmg < 0 ) { dmg = 0 };
                newMsg.innerHTML = `Tu utilises ${sort.nom} ! ${mob.nom} perd ${dmg} HP.`;
                fightConsole.appendChild(newMsg);
                mob.hp = mob.hp - dmg;
                if (mob.isDead()) return;
                mob.attaquer(personnage);
            } else if ( sort.type === "heal" ) {
                personnage.hp += sort.soin; if ( personnage.hp > personnage.maxhp ) { personnage.hp = personnage.maxhp };
                newMsg.innerHTML = `Tu utilises ${sort.nom} ! Tu gagnes ${sort.soin} HP.`;
                fightConsole.appendChild(newMsg);
                mob.attaquer(personnage);
            }
        }
    }
}

const ennemis = { // liste et génération des ennemis
    mobList: [
        { 
            nom: "Gobelin",
            niveau: 1,
            xpDrop: 5,
            stats: { force: 3, intelligence: 1, agilite: 4, vitalite: 2, volonte: 1 },
            lootTable: [
                { item: { nom: "3 pièces d'or" }, chance: 0.5 },
                { item: catalogueItems.potion, chance: 0.3 },
                { item: catalogueItems.dague, chance: 0.2 }
            ]
        },
        { 
            nom: "Squelette",
            niveau: 1,
            xpDrop: 5,
            stats: { force: 2, intelligence: 1, agilite: 1, vitalite: 3, volonte: 3 },
            lootTable: [
                { item: { nom: "3 pièces d'or" }, chance: 0.5 },
                { item: catalogueItems.potion, chance: 0.3 },
                { item: catalogueItems.epee, chance: 0.2 }
            ]
        },
        { 
            nom: "Dragon rouge",
            niveau: 100,
            xpDrop: 500,
            stats: { force: 58, intelligence: 32, agilite: 27, vitalite: 52, volonte: 42 },
            lootTable: [
                { item: { nom: "300 pièces d'or" }, chance: 0.8 },
                { item: catalogueItems.potionXXL, chance: 0.5 },
                { item: catalogueItems.epeeDiamant, chance: 0.1 }
            ]
        }
    ],
    
    popMob() {
        let mobData = ennemis.mobList[Math.floor(Math.random() * ennemis.mobList.length)];
        mob = new Ennemi(mobData.nom, mobData.niveau, mobData.stats, mobData.xpDrop, mobData.lootTable);
        
        document.getElementById("spawnMsg").innerHTML = `⚔️ Un ${mob.nom} apparaît ! <button id="fightBtn">Combattre</button>`;
        document.getElementById("fightBtn").addEventListener("click", fight);
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
        this.stats = {
            force: 1,
            intelligence: 1,
            agilite: 1,
            vitalite: 1,
            volonte: 1
        };

        this.definirStatsDeClasse();
        this.maxhp = 10 * this.stats.vitalite;
        this.maxmp = 10 * this.stats.volonte;
        this.hp = this.maxhp;
        this.mp = this.maxmp;
        this.arme = this.inventaire[0] || null;
    }

    definirStatsDeClasse() {
        const classes = {
            "Guerrier": { force: 4, intelligence: 1, agilite: 2, vitalite: 4, volonte: 2, arme: catalogueItems.epee },
            "Mage": { force: 1, intelligence: 4, agilite: 3, vitalite: 2, volonte: 3, arme: catalogueItems.baton, sorts: [grimoire.bouleDeFeu, grimoire.chaineDEclairs] },
            "Voleur": { force: 2, intelligence: 2, agilite: 4, vitalite: 3, volonte: 2, arme: catalogueItems.dague, sorts: [grimoire.dagueFantome] },
            "Paladin": { force: 2, intelligence: 2, agilite: 2, vitalite: 3, volonte: 4, arme: catalogueItems.epee, sorts: [grimoire.lumiereDivine] }
        };

        let config = classes[this.classe];
        if (!config) return;

        Object.assign(this.stats, config);
        if (config.arme) this.ajouterObjet(config.arme);
        if (config.sorts) config.sorts.forEach(sort => this.ajouterSort(sort));
        this.ajouterObjet(catalogueItems.potion); // Tous les persos démarrent avec une potion
    }

    ajouterObjet(item) {
        this.inventaire.push(item);
        console.log(`${this.nom} a reçu ${item.nom}.`);
    }

    ajouterSort(sort) {
        this.sorts.push(sort);
        console.log(`${this.nom} a appris ${sort.nom}.`);
    }

    gagnerXP(xp) {
        console.log(`Tu gagnes ${xp} XP.`);
        this.experience += xp;
        while (this.experience >= 100) {
            this.experience -= 100;
            this.niveau++;
            console.log(`${this.nom} passe niveau ${this.niveau} !`);
        }
    }

    fichePerso() {
        document.getElementById("name").textContent = this.nom;
        document.getElementById("class").textContent = this.classe;
        document.getElementById("level").textContent = `Niveau : ${this.niveau}`;
        document.getElementById("stats").innerHTML = `Force : ${this.stats.force}<br>Intelligence : ${this.stats.intelligence}<br>Agilité : ${this.stats.agilite}<br>Vitalité : ${this.stats.vitalite}<br>Volonté : ${this.stats.volonte}`;
        const nomsObjets = this.inventaire.map(objet => objet.nom);
        document.getElementById("inventory").innerHTML = `Inventaire :<br>${this.or} pièces d'or<br>${nomsObjets.join("<br>")}`;
        const nomsSorts = this.sorts.map(sort => sort.nom);
        document.getElementById("spells").innerHTML = `Sorts :<br>${nomsSorts.join("<br>")}`;
        document.getElementById("HP").textContent = `HP : ${this.hp} / ${this.maxhp}`;
        document.getElementById("MP").textContent = `MP : ${this.mp} / ${this.maxmp}`;
        document.getElementById("XP").textContent = `XP : ${this.experience}`;
    }
}

function createCharacter() { // création d'un personnage
    const nom = document.getElementById("nom").value;
    const classe = document.getElementById("classe").value;
    if (!nom) {
        console.log("Tu dois entrer un nom !");
        return;
    }

    personnage = new Personnage(nom, classe);
    
    let table = document.createElement('table');
    table.innerHTML = '<tr><td id="name"></td><td id="class"></td><td id="level"></td></tr><tr><td id="stats"></td><td id="inventory"></td><td id="spells"></td></tr><tr><td id="HP"></td><td id="MP"></td><td id="XP"></td></tr>';
    document.getElementById('creerPerso').parentNode.insertBefore(table, document.getElementById('creerPerso').nextSibling);
    
    personnage.fichePerso();
}

class Ennemi { // fonctionnement d'un ennemi
    constructor(nom, niveau, stats, xpDrop, lootTable) {
        this.nom = nom;
        this.niveau = niveau;
        this.stats = stats;
        this.hp = 10 * stats.vitalite;
        this.mp = 5 * stats.intelligence;
        this.xpDrop = xpDrop;
        this.lootTable = lootTable;
    }

    attaquer(cible) {
        let dmg = Math.floor((this.stats.force - cible.stats.vitalite) * (Math.random() * 0.3 + 0.85));
        if (dmg < 0) dmg = 0;
        
        let newMsg = document.createElement("p");
        newMsg.innerHTML = `${this.nom} attaque ${cible.nom} et lui inflige ${dmg} dégâts.`;
        fightConsole.appendChild(newMsg);

        cible.hp -= dmg;
        cible.fichePerso(); // Mettre à jour l'affichage du personnage

        if (cible.hp <= 0) {
            cible.hp = 0;
            cible.fichePerso();
            let newMsg = document.createElement("p");
            newMsg.innerHTML = `${cible.nom} est vaincu(e) !`;
            fightConsole.appendChild(newMsg);
            document.getElementById("fightButtons").remove();
        }
    }

    isDead() {
        if (this.hp <= 0) {
            let newMsg = document.createElement("p");
            newMsg.innerHTML = `${this.nom} meurt dans d'atroces souffrances.`;
            fightConsole.appendChild(newMsg);
            document.getElementById("fightButtons").remove();

            personnage.gagnerXP(this.xpDrop);
            
            let loots = mob.lootTable.filter(objet => Math.random() < objet.chance);
            if (loots.length > 0) {
                let newMsg = document.createElement("p");
                newMsg.innerHTML = `Tu trouves : ${loots.map(objet => objet.item.nom).join(", ")}.`;
                fightConsole.appendChild(newMsg);
            }
            loots.forEach(objet => {
                if (objet.item.nom.endsWith("pièces d'or")) {
                    let montant = parseInt(objet.item.nom);
                    personnage.or += montant;
                } else {
                    personnage.ajouterObjet(objet.item);
                }
            });
            personnage.fichePerso();

            return true; // Pour dire que le mob est mort
        }
        return false; // Il est encore vivant
    }
}

function fight() { // options de combat
    if ( personnage === null ) {
        console.log("Tu dois d'abord créer un personnage !");
        return;
    }
    fightConsole.innerHTML = '<p class="combatMsg">Le combat commence !</p> <div id="fightButtons"><button id="attack">Attaquer</button><button id="spell">Lancer un sort</button><button id="item">Utiliser un objet</button></div>'
    document.getElementById("attack").addEventListener("click", attack);
    document.getElementById("spell").addEventListener("click", spell);
    document.getElementById("item").addEventListener("click", item);

    function attack() {
        let dmg = Math.floor(( personnage.stats.force + personnage.arme.valeur - mob.stats.vitalite ) * ( Math.random() * 0.3 + 0.85 )); if ( dmg < 0 ) { dmg = 0 }; // formule dégâts joueur -> mob
        let newMsg = document.createElement("p");
        newMsg.innerHTML = `Tu utilises ${personnage.arme.nom} et envoies des grosses patates à ${mob.nom} ! Il perd ${dmg} points de vie.`;
        fightConsole.appendChild(newMsg);
        mob.hp = mob.hp - dmg;
        if (mob.isDead()) return;
        mob.attaquer(personnage);
    };

    function spell() { 
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

    function item() {
        const itemList = document.createElement("div");
        itemList.id = "itemList";
        fightConsole.appendChild(itemList);
    
        // Filtrer uniquement les objets utilisables en combat
        const objetsUtilisables = personnage.inventaire.filter(obj => obj.type === "consommable");
    
        objetsUtilisables.forEach(item => {
            let itemBtn = document.createElement("button");
            itemBtn.innerHTML = `${item.nom}`;
            itemBtn.id = `${item.id}`;
            itemList.appendChild(itemBtn);
            itemBtn.onclick = () => utiliserItem(item);
        });
    }

    function utiliserItem(item) {
        let newMsg = document.createElement("p");
    
        if (item.effet === "heal") {
            personnage.hp += item.valeur;
            if (personnage.hp > personnage.maxhp) personnage.hp = personnage.maxhp;
            newMsg.innerHTML = `Tu utilises ${item.nom} et récupères ${item.valeur} HP !`;
        } 
        else if (item.effet === "dégâts") {
            let dmg = Math.floor((item.valeur) * (Math.random() * 0.3 + 0.85));
            newMsg.innerHTML = `Tu lances ${item.nom} sur ${mob.nom} ! Il perd ${dmg} HP.`;
            mob.hp -= dmg;
            if (mob.isDead()) return;
        }
    
        fightConsole.appendChild(newMsg);
    
        // Supprimer l'objet de l'inventaire après usage
        let index = personnage.inventaire.indexOf(item);
        if (index !== -1) personnage.inventaire.splice(index, 1);
    
        // MAJ de l'affichage après utilisation
        personnage.fichePerso();
        document.getElementById("itemList").remove(); 
        mob.attaquer(personnage);
    }
}

document.getElementById("creerPerso").addEventListener("click", createCharacter);
document.getElementById("genererMob").addEventListener("click", ennemis.popMob);