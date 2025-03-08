class Item { // liste des objets
    static catalog = {
        baton: new Item("Bâton", "baton", "equipement", "arme", {strength: 0, intelligence: 1}),
        batonArgent: new Item("Bâton d'argent", "batonArgent", "equipement", "arme", {strength: 0, intelligence: 3}),
        dague: new Item("Dague", "dague", "equipement", "arme", {strength: 1, intelligence: 0}),
        epee: new Item("Épée", "epee", "equipement", "arme", {strength: 2, intelligence: 0}),
        hache: new Item("Hache", "hache", "equipement", "arme", {strength: 3, intelligence: 0}),
        massue: new Item("Massue", "massue", "equipement", "arme", {strength: 4, intelligence: -1}),

        robe: new Item("Robe", "robe", "equipement", "armure", {agility: 1, vitality: 0, willpower: 1}),
        cotteDeMailles: new Item("Cotte de mailles", "cotteDeMailles", "equipement", "armure", {agility: 0, vitality: 1, willpower: 0}),
        plastron: new Item("Plastron", "plastron", "equipement", "armure", {agility: 0, vitality: 3, willpower: 0}),
        armureDeCuir: new Item("Armure de cuir", "armureDeCuir", "equipement", "armure", {agility: 2, vitality: 0, willpower: 0}),
    
        potionXXS: new Item("Potion XXS", "potionXXS", "consommable", "heal", 15),
        potionXS: new Item("Potion XS", "potionXS", "consommable", "heal", 30),
        potionS: new Item("Potion S", "potionS", "consommable", "heal", 60),
        potionM: new Item("Potion M", "potionM", "consommable", "heal", 120),
        potionL: new Item("Potion L", "potionL", "consommable", "heal", 240),
    
        etherXXS: new Item("Ether XXS", "etherXXS", "consommable", "regen", 10),
        etherXS: new Item("Ether XS", "etherXS", "consommable", "regen", 20),
        etherS: new Item("Ether S", "etherS", "consommable", "regen", 40),
        etherM: new Item("Ether M", "etherM", "consommable", "regen", 80),
        etherL: new Item("Ether L", "etherL", "consommable", "regen", 160),
    
        grenade: new Item("Grenade", "grenade", "consommable", "dégâts", 25)
    };
    
    constructor(nom, id, type, effet, valeur) {
        this.nom = nom;
        this.id = id;
        this.type = type;
        this.effet = effet;
        this.valeur = valeur;
    }

    static getItem(id) {
        return this.catalog[id]
    }
};

class Spell { // liste des sorts
    static grimoire = {
        bouleDeFeu: new Spell("Boule de feu", "bouleDeFeu", "attack", 5, 15, 1),
        chaineEclairs: new Spell("Chaîne d'éclairs", "chaineEclairs", "attack", 8, 12, "all"),
        dagueFantome: new Spell("Dague fantôme", "daguefantome", "attack", 3, 10, 1),
        lumiereDivine: new Spell("Lumière divine", "lumiereDivine", "heal", 5, 10, 1),
    };

    constructor(nom, id, type, mp, valeur, cible) {
        this.nom = nom;
        this.id = id;
        this.type = type; // "attack" ou "heal"
        this.mp = mp;
        this.valeur = valeur; // "heal", "dégâts", "buff", "arme"
        this.cible = cible; // Dégâts pour une arme, soin pour une potion, etc.
    }

    static getSpell(id) {
        return this.grimoire[id]
    }
};

class Mob { // fonctionnement des ennemis
    static mobList = [
        // mobs level 0
        { nom: "Rat", id: "rat", niveau: 0,
            stats: { strength: 1, intelligence: 2, agility: 3, vitality: 1, willpower: 1 }},
        { nom: "Zombie", id: "zombie", niveau: 0,
            stats: { strength: 1, intelligence: 1, agility: 1, vitality: 3, willpower: 2 }},
        // mobs level 1
        { nom: "Gobelin", id: "gobelin", niveau: 1,
            stats: { strength: 2, intelligence: 1, agility: 3, vitality: 2, willpower: 2 },
            lootTable: [{ item: Item.getItem("dague"), chance: 0.2 }]},
        { nom: "Squelette", id: "squelette", niveau: 1,
            stats: { strength: 2, intelligence: 1, agility: 1, vitality: 3, willpower: 3 },
            lootTable: [{ item: Item.getItem("epee"), chance: 0.2 }]},
        // mobs level 2
        { nom: "Loup", id: "loup", niveau: 2,
            stats: { strength: 2, intelligence: 1, agility: 4, vitality: 3, willpower: 2 }},
        { nom: "Goule", id: "goule", niveau: 2,
            stats: { strength: 1, intelligence: 1, agility: 1, vitality: 5, willpower: 4 }},
        // mobs level 3
        { nom: "Orc", id: "orc", niveau: 3,
            stats: { strength: 5, intelligence: 1, agility: 1, vitality: 4, willpower: 3 },
            lootTable: [{ item: Item.getItem("hache"), chance: 0.2 }]},
        { nom: "Spectre", id: "spectre", niveau: 3,
            stats: { strength: 2, intelligence: 3, agility: 2, vitality: 3, willpower: 4 }},
        // mobs level 4
        { nom: "Hobgobelin", id: "hobgobelin", niveau: 3,
            stats: { strength: 4, intelligence: 2, agility: 4, vitality: 3, willpower: 3 },
            lootTable: [{ item: Item.getItem("plastron"), chance: 0.2 }]},
        { nom: "Vampire", id: "spectre", niveau: 3,
            stats: { strength: 3, intelligence: 3, agility: 2, vitality: 4, willpower: 4 }},
        // mobs level 5
        { nom: "Troll", id: "troll", niveau: 5,
            stats: { strength: 6, intelligence: 1, agility: 1, vitality: 6, willpower: 4 },
            lootTable: [{ item: Item.getItem("massue"), chance: 0.2 }]},
        { nom: "Liche", id: "liche", niveau: 5,
            stats: { strength: 3, intelligence: 4, agility: 2, vitality: 3, willpower: 5 },
            lootTable: [{ item: Item.getItem("batonArgent"), chance: 0.2 }]},
        ];

    constructor(nom, niveau, stats, lootTable = []) {
        this.nom = nom;
        this.niveau = niveau;
        this.stats = stats;
        this.hp = 10 * stats.vitality;
        this.mp = 5 * stats.intelligence;
        this.lootTable = [...lootTable];
        let potion;
        if (niveau >= 0 && niveau <= 4) potion = Item.getItem("potionXXS");
        else if (niveau >= 5 && niveau <= 9) potion = Item.getItem("potionXS");
        else if (niveau >= 10 && niveau <= 14) potion = Item.getItem("potionS");
        else if (niveau >= 15 && niveau <= 19) potion = Item.getItem("potionM");
        else if (niveau >= 20 && niveau <= 24) potion = Item.getItem("potionL");
        this.lootTable.push({ item: potion, chance: 0.5 });
        let ether;
        if (niveau >= 0 && niveau <= 4) ether = Item.getItem("etherXXS");
        else if (niveau >= 5 && niveau <= 9) ether = Item.getItem("etherXS");
        else if (niveau >= 10 && niveau <= 14) ether = Item.getItem("etherS");
        else if (niveau >= 15 && niveau <= 19) ether = Item.getItem("etherM");
        else if (niveau >= 20 && niveau <= 24) ether = Item.getItem("etherL");
        this.lootTable.push({ item: ether, chance: 0.3 });
    }
    
    static getMob(id) {
        return this.mobList.find(item => item.id === id);
    }

    static popMob() {
        if ( char === null || char.hp <= 0 ) {
            tempoMsg = 0; logMsg("Tu dois d'abord créer un char !");
            return;
        } else if ( char.niveau >= 8 ) {
            tempoMsg = 0; logMsg(`Dans cette version, aucun ennemi n'est disponible pour un personnage de niveau ${char.niveau}. Recommencez un char en actualisant la page ou revenez un autre jour !`);
            return;
        }
        mobs = []; msgLog.innerHTML = "";
        if ( document.getElementById("ennemyTargets") ) { document.getElementById("ennemyTargets").remove() };
        let mobCount = 1 + Math.floor(Math.random() * 3);
        for ( let i = 0 ; i < mobCount ; i++ ) {
            let mobData = Mob.mobList[Math.floor(Math.random() * Mob.mobList.length)];
            if ( mobData.niveau < char.niveau - 2 || mobData.niveau > char.niveau ) { i--; } else {
                mobs.push(new Mob(mobData.nom, mobData.niveau, mobData.stats, mobData.lootTable));
            }
        }
        let ennemyTargets = document.createElement("div"); ennemyTargets.id = "ennemyTargets"; let ennemyList = "";
        for ( let i = 0 ; i < mobs.length ; i++ ) {
            ennemyList += ` ${mobs[i].nom} (niveau ${mobs[i].niveau})`;
            if (i < mobs.length ) ennemyList += ", ";
        }
        if ( mobs.length === 1 ) {
            ennemyList = `Un(e) ${mobs[0].nom} (niveau ${mobs[0].niveau}) apparaît`;
        } else {
            ennemyList = `Les ennemis suivants apparaissent :`;
            for ( let i = 1 ; i <= mobs.length ; i++ ) {
                ennemyList += ` ${mobs[i-1].nom} (niveau ${mobs[i-1].niveau})`;
                if (i < mobs.length ) ennemyList += ", ";
            }
        }
        ennemyList += `. <button id="fightBtn">Combattre</button>`
        ennemyTargets.innerHTML = ennemyList;
        msgLog.appendChild(ennemyTargets);
        document.getElementById("fightBtn").addEventListener("click", fight);
    }

    static disablePopMob() { 
        tempoMsg = 0;
        logMsg(`Impossible de générer une nouvelle rencontre avant d'avoir terminé celle-ci !`);
    }
};

class Character { // fonctionnement des chars
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
        const classes = {
            "Guerrier": { stats: {strength: 3, intelligence: 1, agility: 2, vitality: 3, willpower: 1}, arme: Item.getItem("epee"), armure: Item.getItem("cotteDeMailles")},
            "Mage": { stats: {strength: 1, intelligence: 3, agility: 3, vitality: 1, willpower: 2}, sorts: [Spell.getSpell("bouleDeFeu"), Spell.getSpell("chaineEclairs")], arme: Item.getItem("baton"), armure: Item.getItem("robe")},
            "Voleur": { stats: {strength: 2, intelligence: 2, agility: 3, vitality: 2, willpower: 1}, sorts: [Spell.getSpell("dagueFantome")], arme: Item.getItem("dague"), armure: Item.getItem("armureDeCuir")},
            "Paladin": { stats: {strength: 2, intelligence: 2, agility: 1, vitality: 2, willpower: 3}, sorts: [Spell.getSpell("lumiereDivine")], arme: Item.getItem("epee"), armure: Item.getItem("cotteDeMailles")}
        };
        let config = classes[this.classe];
        this.stats = config.stats;
        this.arme = config.arme;
        this.armure = config.armure;
        if (config.sorts) config.sorts.forEach(sort => this.addSpell(sort));
        this.addItem(Item.getItem("potionXXS"));
        this.maxhp = 10 * (this.stats.vitality + this.armure.valeur.vitality);
        this.maxmp = 10 * (this.stats.willpower + this.armure.valeur.willpower);
        this.hp = this.maxhp;
        this.mp = this.maxmp;
    }

    static createCharacter() {
        const nom = document.getElementById("nom").value;
        const classe = document.getElementById("classe").value;
        if (!nom) {
            tempoMsg = 0; logMsg("Tu dois entrer un nom !");
            return;
        }
        char = new Character(nom, classe);
        createBtn.style.display = "none";
        charSheet.innerHTML = `
            <tr>
                <td id="name"></td>
                <td id="class"></td>
                <td id="level"></td>
            </tr>
            <tr>
                <td id="stats"></td>
                <td id="inventory"></td>
                <td id="spells"></td>
            </tr>
            <tr>
                <td colspan="3" style="text-align:center;" id="weapon"></td>
            </tr>
            <tr>
                <td colspan="3" style="text-align:center;" id="armor"></td>
            </tr>  
            <tr>
                <td id="HP"></td>
                <td id="MP"></td>
                <td id="XP"></td>
            </tr>`;
        document.getElementById("teamWindow").appendChild(charSheet);
        char.charSheet();
    };

    addItem(objet) {
        let itemTrouve = this.inventaire.find(i => i.objet.id === objet.id);
        if (itemTrouve) {
            itemTrouve.quantite++;
        } else {
            this.inventaire.push({ objet, quantite: 1 });
        }
        this.charSheet();
    }

    addSpell(sort) {
        this.sorts.push(sort);
        this.charSheet();
    }

    gainXP(xp) {
        logMsg(`<span class="orange">${this.nom} gagne ${xp} XP</span>.`);
        this.experience += xp;
        while (this.experience >= 10 * this.niveau) {
            this.experience -= 10 * this.niveau;
            this.hp = this.maxhp;
            this.mp = this.maxmp;
            if ( this.pointsLvlUp === 0 ) { document.getElementById("teamWindow").appendChild(lvlUpWindow) }
            this.pointsLvlUp += 2;
            this.niveau++; this.levelUp();
            logMsg(`<span class="orange">${this.nom} passe niveau ${this.niveau}</span> ! Les HP/MP ont été restaurés.`); this.charSheet();
        }
    }

    levelUp() {
        this.statsTemp = { ...this.stats };
        this.levelUpTable();
        this.addLevelUpListeners();
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
                <td>${this.statsTemp.agility}</td>
                <td>${this.statsTemp.strength}</td>
                <td>${this.statsTemp.intelligence}</td>
                <td>${this.statsTemp.vitality}</td>
                <td>${this.statsTemp.willpower}</td>
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
        document.getElementById("AgiUp").addEventListener("click", () => this.modifyStat("agility", "+"));
        document.getElementById("ForUp").addEventListener("click", () => this.modifyStat("strength", "+"));
        document.getElementById("IntUp").addEventListener("click", () => this.modifyStat("intelligence", "+"));
        document.getElementById("VitUp").addEventListener("click", () => this.modifyStat("vitality", "+"));
        document.getElementById("VolUp").addEventListener("click", () => this.modifyStat("willpower", "+"));
        document.getElementById("AgiDwn").addEventListener("click", () => this.modifyStat("agility", "-"));
        document.getElementById("ForDwn").addEventListener("click", () => this.modifyStat("strength", "-"));
        document.getElementById("IntDwn").addEventListener("click", () => this.modifyStat("intelligence", "-"));
        document.getElementById("VitDwn").addEventListener("click", () => this.modifyStat("vitality", "-"));
        document.getElementById("VolDwn").addEventListener("click", () => this.modifyStat("willpower", "-"));
        document.getElementById("LvlUp").addEventListener("click", this.validateLvlUp)
    }
    
    modifyStat = (stat, operation) => {
        if ( onFight ) {
            tempoMsg = 0; logMsg(`Impossible d'attribuer des points pendant le combat !`)
            return;
        }
        if (operation === "+" && this.pointsLvlUp > 0) {
            this.statsTemp[stat]++;
            this.pointsLvlUp--;
        } else if (operation === "-" && this.statsTemp[stat] > this.stats[stat]) {
            this.statsTemp[stat]--;
            this.pointsLvlUp++;
        } else if (operation === "-" && this.statsTemp[stat] === this.stats[stat]) {
            tempoMsg = 0; logMsg(`Impossible de baisser une statistique sous sa valeur actuelle !`)
        } else if (this.pointsLvlUp === 0) {
            tempoMsg = 0; logMsg(`Plus de points disponibles !`)
        }
        this.levelUpTable();
        this.addLevelUpListeners(); 
    }

    validateLvlUp = () => {
        if ( char.stats.vitality < char.statsTemp.vitality ) {
            this.hp += 10 * ( char.statsTemp.vitality - char.stats.vitality );
        }
        if ( char.stats.willpower < char.statsTemp.willpower ) {
            this.mp += 10 * ( char.statsTemp.willpower - char.stats.willpower );
        }
        this.stats = { ...this.statsTemp };
        if ( this.pointsLvlUp === 0 ) { lvlUpWindow.remove(); }
        this.maxhp = 10 * (this.stats.vitality + this.armure.valeur.vitality);
        this.maxmp = 10 * (this.stats.willpower + this.armure.valeur.willpower);
        this.charSheet();
    }
    
    charSheet() {
        if (!document.getElementById("name")) return;
        document.getElementById("name").textContent = this.nom;
        document.getElementById("class").textContent = this.classe;
        document.getElementById("level").textContent = `Niveau : ${this.niveau}`;
        document.getElementById("stats").innerHTML = `
        <abbr title="Régit la capacité d'esquive.">Agilité</abbr> : ${this.stats.agility} (${this.armure.valeur.agility < 0 ? '-' : '+'}${Math.abs(this.armure.valeur.agility)})<br>
        <abbr title="Régit les dégâts physiques.">Force</abbr> : ${this.stats.strength} (${this.arme.valeur.strength < 0 ? '-' : '+'}${Math.abs(this.arme.valeur.strength)})<br>
        <abbr title="Régit les dégâts magiques.">Intelligence</abbr> : ${this.stats.intelligence} (${this.arme.valeur.intelligence < 0 ? '-' : '+'}${Math.abs(this.arme.valeur.intelligence)})<br>
        <abbr title="Régit les HP max et la résistance physique.">Vitalité</abbr> : ${this.stats.vitality} (${this.armure.valeur.vitality < 0 ? '-' : '+'}${Math.abs(this.armure.valeur.vitality)})<br>
        <abbr title="Régit les MP max et la résistance magique.">Volonté</abbr> : ${this.stats.willpower} (${this.armure.valeur.willpower < 0 ? '-' : '+'}${Math.abs(this.armure.valeur.willpower)})<br>
        `;
        const nomsObjets = this.inventaire.map(i => `${i.objet.nom} x${i.quantite}`);
        document.getElementById("inventory").innerHTML = `Inventaire :<br>${this.or} pièces d'or<br>${nomsObjets.join("<br>")}`;
        const nomsSorts = this.sorts.map(sort => sort.nom);
        document.getElementById("spells").innerHTML = `Sorts :<br>${nomsSorts.join("<br>")}`;
        let displayHP = document.getElementById("HP");
        displayHP.textContent = `HP : ${this.hp} / ${this.maxhp}`;
        displayHP.style.color = this.hp <= this.maxhp / 4 ? "red" : "black";
        let displayMP = document.getElementById("MP");
        displayMP.textContent = `MP : ${this.mp} / ${this.maxmp}`;
        displayMP.style.color = this.mp <= this.maxmp / 4 ? "purple" : "black";
        document.getElementById("XP").textContent = `XP : ${this.experience} / ${10 * this.niveau}`;
        if (this.hp <= 0) {
            charSheet.remove();
            lvlUpWindow.remove();
            return;
        }
        let armesDispo = this.inventaire
            .filter(item => item.objet.effet === "arme")
            .map(item => item.objet)
            .filter((arme, index, self) => self.findIndex(a => a.nom === arme.nom) === index);   
        if (this.arme) armesDispo.unshift(this.arme);
        let selectArmeHTML = `<select id="selectArme">`;
        armesDispo.forEach(arme => {
            let selected = this.arme && this.arme.nom === arme.nom ? "selected" : "";
            selectArmeHTML += `<option value="${arme.nom}" ${selected}>${arme.nom} (${arme.valeur.strength < 0 ? '-' : '+'}${Math.abs(arme.valeur.strength)} FOR, ${arme.valeur.intelligence < 0 ? '-' : '+'}${Math.abs(arme.valeur.intelligence)} INT)</option>`;
        });
        selectArmeHTML += `</select>`; 
        document.getElementById("weapon").innerHTML = `Arme : ${selectArmeHTML}`;
        let armuresDispo = this.inventaire
            .filter(item => item.objet.effet === "armure")
            .map(item => item.objet)
            .filter((armure, index, self) => self.findIndex(a => a.nom === armure.nom) === index); 
        if (this.armure) armuresDispo.unshift(this.armure);
        let selectArmureHTML = `<select id="selectArmure">`;
        armuresDispo.forEach(armure => {
            let selected = this.armure && this.armure.nom === armure.nom ? "selected" : "";
            selectArmureHTML += `<option value="${armure.nom}" ${selected}>${armure.nom} (${armure.valeur.agility < 0 ? '-' : '+'}${Math.abs(armure.valeur.agility)} AGI, ${armure.valeur.vitality < 0 ? '-' : '+'}${Math.abs(armure.valeur.vitality)} VIT, ${armure.valeur.willpower < 0 ? '-' : '+'}${Math.abs(armure.valeur.willpower)} VOL)</option>`;
        });
        selectArmureHTML += `</select>`;  
        document.getElementById("armor").innerHTML = `Armure : ${selectArmureHTML}`;
        document.getElementById("selectArme").addEventListener("change", (e) => {
            let nouvelleArme = armesDispo.find(obj => obj.nom === e.target.value);
            if (this.arme) {
                let armeExistante = this.inventaire.find(obj => obj.objet.nom === this.arme.nom);
                if (armeExistante) {
                    armeExistante.quantite++;
                } else {
                    this.inventaire.push({ objet: this.arme, quantite: 1 });
                }
            }
            let itemInventaire = this.inventaire.find(obj => obj.objet.nom === nouvelleArme.nom);
            if (itemInventaire) {
                if (itemInventaire.quantite > 1) {
                    itemInventaire.quantite--;
                } else {
                    this.inventaire = this.inventaire.filter(obj => obj.objet.nom !== nouvelleArme.nom);
                }
            }
            this.arme = nouvelleArme;
            this.charSheet();
        });
        document.getElementById("selectArmure").addEventListener("change", (e) => {
            let nouvelleArmure = armuresDispo.find(obj => obj.nom === e.target.value);
            if (this.armure) {
                let armureExistante = this.inventaire.find(obj => obj.objet.nom === this.armure.nom);
                if (armureExistante) {
                    armureExistante.quantite++;
                } else {
                    this.inventaire.push({ objet: this.armure, quantite: 1 });
                }
            }
            let itemInventaire = this.inventaire.find(obj => obj.objet.nom === nouvelleArmure.nom);
            if (itemInventaire) {
                if (itemInventaire.quantite > 1) {
                    itemInventaire.quantite--;
                } else {
                    this.inventaire = this.inventaire.filter(obj => obj.objet.nom !== nouvelleArmure.nom);
                }
            }
            this.armure = nouvelleArmure;
            this.maxhp = 10 * (this.stats.vitality + this.armure.valeur.vitality);
            this.maxmp = 10 * (this.stats.willpower + this.armure.valeur.willpower);
            if (this.hp > this.maxhp) this.hp = this.maxhp;
            if (this.mp > this.maxmp) this.mp = this.maxmp;
            this.charSheet();
        });
    }
};

function fight() { // fonctionnement du combat
    if ( char === null || char.hp <= 0 ) {
        tempoMsg = 0; logMsg("Tu dois d'abord créer un personnage !");
        return;
    }
    document.getElementById("genererMob").removeEventListener("click", Mob.popMob);
    document.getElementById("genererMob").addEventListener("click", Mob.disablePopMob);
    document.getElementById("fightBtn").remove();
    const combatStart = document.createElement("div");
    combatStart.innerHTML = '<p class="combatMsg">Le combat commence !</p> <div id="fightButtons"><button id="attack">Attaquer</button><button id="spell">Lancer un sort</button><button id="item">Utiliser un objet</button></div>'
    msgLog.appendChild(combatStart);
    onFight = true; document.getElementById("exploreWindow").classList.add("fight");
    let ennemyTargets = document.createElement("div");
    let xpGained = 0; let lootsGained = []; let goldGained = 0;
    document.getElementById("attack").addEventListener("click", attack);
    document.getElementById("spell").addEventListener("click", spell);
    document.getElementById("item").addEventListener("click", items);

    function targetSelect(action, effect = null) {
        let ennemyList = ``;
        for ( let i = 0 ; i < mobs.length ; i++ ) {
            ennemyList += `<button id="target${i}">${mobs[i].nom}</button>`;
        }
        ennemyTargets.innerHTML = ennemyList; ennemyTargets.id = "TargetBtns";
        msgLog.appendChild(ennemyTargets);  
        for (let i = 0; i < mobs.length; i++) {
            let targetBtn = document.getElementById(`target${i}`);
            let newTargetBtn = targetBtn.cloneNode(true);
            targetBtn.parentNode.replaceChild(newTargetBtn, targetBtn);
            newTargetBtn.addEventListener("click", () => { 
                cibleIndex = i;
                if ( action === "attack" ) {
                    attackDmg();
                } else if ( action === "spell" ) {
                    spellResolve(effect);
                } else if ( action === "item" ) {
                    useItem(effect);
                }
            });
        }
    }  

    function attack() {
        if ( document.getElementById("TargetBtns") ) { document.getElementById("TargetBtns").remove(); }
        if ( document.getElementById("itemList") ) { document.getElementById("itemList").remove(); }
        if ( document.getElementById("spellList") ) { document.getElementById("spellList").remove(); }
        targetSelect("attack");
    };

    function attackDmg() {
        ennemyTargets.remove();
        tempoMsg = 0;
        if ( Math.random() * 100 < Math.min(mobs[cibleIndex].stats.agility, 50) ) {
            logMsg(`${cible.nom} <strong>esquive</strong> l'attaque de ${char.nom} !`);
        } else {
            let dmg = Math.floor(( 3 * ( char.stats.strength + char.arme.valeur.strength ) - mobs[cibleIndex].stats.vitality ) * ( Math.random() * 0.3 + 0.85 )); if ( dmg < 0 ) { dmg = 0 };
            logMsg(`${char.nom} attaque ${mobs[cibleIndex].nom} avec ${char.arme.nom} ! <span class="red">${mobs[cibleIndex].nom} perd ${dmg} HP</span>.`);
            mobs[cibleIndex].hp = mobs[cibleIndex].hp - dmg;
            if (isFightOver()) return;
        }
        mobAttack(char);
    }

    function spell() {
        if ( document.getElementById("TargetBtns") ) { document.getElementById("TargetBtns").remove(); }
        if ( document.getElementById("itemList") ) { document.getElementById("itemList").remove(); }
        if ( document.getElementById("spellList") ) { document.getElementById("spellList").remove(); }
        tempoMsg = 0;
        const spellList = document.createElement("div");
        spellList.id = "spellList";
        msgLog.appendChild(spellList);
        char.sorts.forEach(sort => {
            let spellBtn = document.createElement("button");
            spellBtn.innerHTML = `${sort.nom}`;
            spellBtn.id = `${sort.id}`;
            spellList.appendChild(spellBtn);
            if ( sort.type === "attack" && sort.cible === 1 ) {
                spellBtn.onclick = () => targetSelect("spell", sort);
            } else if ( sort.type === "attack" && sort.cible === "all" ) {
                spellBtn.onclick = () => spellResolve(sort);
            } else if ( sort.type === "heal" ) {
                spellBtn.onclick = () => spellResolve(sort);
            }
        });
    };

    function spellResolve(sort) {
        if ( char.mp < sort.mp ) {
            logMsg(`${char.nom} n'a pas assez de MP !`);
            return;
        }
        document.getElementById("spellList").remove();
        ennemyTargets.remove();
        char.mp -= sort.mp;
        logMsg(`<span class="purple">${char.nom} perd ${sort.mp} MP</span> et utilise ${sort.nom}.`);
        char.charSheet();
        if ( sort.type === "attack" && sort.cible === 1 ) {
            let dmg = Math.floor(( 2 * ( char.stats.intelligence + char.arme.valeur.intelligence ) + sort.valeur - mobs[cibleIndex].stats.willpower ) * ( Math.random() * 0.3 + 0.85 )); if ( dmg < 0 ) { dmg = 0 };
            logMsg(`<span class="red">${mobs[cibleIndex].nom} perd ${dmg} HP</span>.`);
            mobs[cibleIndex].hp = mobs[cibleIndex].hp - dmg;
            if (isFightOver()) return;
        } else if ( sort.type === "attack" && sort.cible === "all" ) {
            cibleIndex = "all";
            for (let i = 0; i < mobs.length; i++) {
                let dmg = Math.floor(( 2 * ( char.stats.intelligence + char.arme.valeur.intelligence ) + sort.valeur - mobs[i].stats.willpower ) * ( Math.random() * 0.3 + 0.85 )); if ( dmg < 0 ) { dmg = 0 };
                logMsg(`<span class="red">${mobs[i].nom} perd ${dmg} HP</span>.`);
                mobs[i].hp = mobs[i].hp - dmg;
            }
            if (isFightOver()) return;
        } else if ( sort.type === "heal" ) {
            char.hp += sort.valeur; if ( char.hp > char.maxhp ) { char.hp = char.maxhp };
            logMsg(`${char.nom} utilise ${sort.nom} ! <span class="green">${char.nom} gagne ${sort.valeur} HP</span>.`);

        }
        mobAttack(char);
    }

    function items() {
        if ( document.getElementById("TargetBtns") ) { document.getElementById("TargetBtns").remove(); }
        if ( document.getElementById("itemList") ) { document.getElementById("itemList").remove(); }
        if ( document.getElementById("spellList") ) { document.getElementById("spellList").remove(); }
        tempoMsg = 0;
        const itemList = document.createElement("div");
        itemList.id = "itemList";
        msgLog.appendChild(itemList);
        const objetsUtilisables = char.inventaire.filter(i => i.objet.type === "consommable");
        objetsUtilisables.forEach(i => {
            let itemBtn = document.createElement("button");
            itemBtn.innerHTML = `${i.objet.nom} x${i.quantite}`;
            itemBtn.id = i.objet.id;
            itemList.appendChild(itemBtn);
            if ( i.objet.effet === "dégâts" ) {
                itemBtn.onclick = () => targetSelect("item", i.objet);
            } else if ( i.objet.effet === "heal" || i.objet.effet === "regen" ) {
                itemBtn.onclick = () => useItem(i.objet);
            }
        });
    }

    function useItem(item) {
        if (item.effet === "heal") {
            char.hp += item.valeur;
            if (char.hp > char.maxhp) char.hp = char.maxhp;
            logMsg(`${char.nom} utilise ${item.nom}. <span class="green">${char.nom} récupère ${item.valeur} HP</span> !`);
        } else if (item.effet === "regen") {
            char.mp += item.valeur;
            if (char.mp > char.maxmp) char.mp = char.maxmp;
            logMsg(`${char.nom} utilise ${item.nom}. <span class="blue">${char.nom} récupère ${item.valeur} MP</span> !`);
        } else if (item.effet === "dégâts") {
            let dmg = Math.floor((item.valeur) * (Math.random() * 0.3 + 0.85));
            logMsg(`${char.nom} lance ${item.nom} sur ${mobs[cibleIndex].nom} ! <span class="red">${mob.nom} perd ${dmg} HP</span>.`);
            mob.hp -= dmg;
            if (isFightOver()) return;
        }
        let index = char.inventaire.findIndex(i => i.objet.id === item.id);
        if (index !== -1) {
            char.inventaire[index].quantite--;
            if (char.inventaire[index].quantite <= 0) {
                char.inventaire.splice(index, 1);
            }
        }
        char.charSheet();
        document.getElementById("itemList").remove(); 
        mobAttack(char);
    }

    function mobAttack(cible) {
        for (let i = 0; i < mobs.length; i++) {
            if ( Math.random() * 100 < Math.min((char.stats.agility + char.arme.valeur.agility), 50) ) {
                logMsg(`${cible.nom} <strong>esquive</strong> l'attaque de ${mobs[i].nom} !`);
            } else {
                let dmg = Math.floor((3 * mobs[i].stats.strength - (cible.stats.vitality + cible.armure.valeur.vitality)) * (Math.random() * 0.3 + 0.85));
                if (dmg < 0) dmg = 0;
                logMsg(`${mobs[i].nom} attaque ! <span class="red">${cible.nom} perd ${dmg} HP</span>.`);
                cible.hp -= dmg;
                cible.charSheet();
                if (cible.hp <= 0) {
                    document.getElementById("genererMob").addEventListener("click", Mob.popMob);
                    document.getElementById("genererMob").removeEventListener("click", Mob.disablePopMob);
                    logMsg(`${cible.nom} est <strong>vaincu(e)</strong> !`);
                    onFight = false; document.getElementById("exploreWindow").classList.remove("fight");
                    createBtn.style.display = "inline-block";
                    document.getElementById("fightButtons").remove();
                    break;
                }
            }
        }
    }

    function deadMob(cible) {
        logMsg(`${mobs[cible].nom} est <strong>vaincu(e)</strong>.`);
        xpGained += 5 + mobs[cible].niveau * 5;
        if ( Math.random() < 0.8 ) {
            goldGained += Math.floor((Math.random() * 0.2 + 0.4 ) * mobs[cible].niveau * 6);
        }
        let loots = mobs[cible].lootTable.filter(objet => Math.random() < objet.chance);
        if (loots.length > 0) {
            loots.forEach(objet => {
                lootsGained.push(objet.item);
            });
        }
    }

    function isFightOver() {
        if ( cibleIndex === "all" ) {
            let indicesToRemove = [];
            for (let i = 0; i < mobs.length; i++) {
                if ( mobs[i].hp <= 0 ) {
                    deadMob(i);
                    indicesToRemove.push(i);
                }
            }
            for (let i = indicesToRemove.length - 1; i >= 0; i--) {
                mobs.splice(indicesToRemove[i], 1);
            }
        } else {
            if ( mobs[cibleIndex].hp <= 0 ) {
                deadMob(cibleIndex);
                mobs.splice(cibleIndex, 1);
            }
        }
        if ( mobs.length === 0 ) {
            document.getElementById("genererMob").addEventListener("click", Mob.popMob);
            document.getElementById("genererMob").removeEventListener("click", Mob.disablePopMob);
            document.getElementById("fightButtons").remove();
            char.gainXP(xpGained);
            char.or += goldGained;
            if ( goldGained > 0 ) logMsg(`${char.nom} obtient ${goldGained} pièces d'or.`);
            if ( lootsGained.length > 0 ) { 
                logMsg(`${char.nom} trouve : ${lootsGained.map(objet => objet.nom).join(", ")}.`);
                lootsGained.forEach(objet => {
                    char.addItem(objet);
                });
            }
            char.charSheet();
            onFight = false; document.getElementById("exploreWindow").classList.remove("fight"); return true;
        }
        return false;
    }
};

function logMsg(message) { // fonctionnement de la fenêtre d'évènements
    setTimeout(() => {
        let newMsg = document.createElement("p");
        newMsg.innerHTML = message;
        msgLog.appendChild(newMsg);
    }, tempoMsg);
    tempoMsg += 400;
}

let char = null; let mobs = []; let tempoMsg = 0; let onFight = false;
const msgLog = document.createElement("div"); msgLog.id = "msgLog"; msgLog.innerHTML = "";
const charSheet = document.createElement('table'); charSheet.id = "charSheet"; charSheet.innerHTML = "";
const lvlUpWindow = document.createElement("table"); lvlUpWindow.id = "lvlUpWindow";
const exploreWindow = document.getElementById("exploreWindow"); exploreWindow.appendChild(msgLog);
const createBtn = document.getElementById("creerPerso");
createBtn.addEventListener("click", Character.createCharacter);
document.getElementById("genererMob").addEventListener("click", Mob.popMob);