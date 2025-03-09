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
            sorts: [],
            lootTable: [{ item: Item.getItem("batonArgent"), chance: 0.2 }]},
        ];

    constructor(nom, niveau, stats, sorts, lootTable = []) {
        this.nom = nom;
        this.niveau = niveau;
        this.stats = stats;
        this.sorts = sorts;
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
            tempoMsg = 0; addMessageToLog("Tu dois d'abord créer un char !");
            return;
        } else if ( char.niveau >= 8 ) {
            tempoMsg = 0; addMessageToLog(`Dans cette version, aucun ennemi n'est disponible pour un personnage de niveau ${char.niveau}. Recommencez un char en actualisant la page ou revenez un autre jour !`);
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
        addMessageToLog(`Impossible de générer une nouvelle rencontre avant d'avoir terminé celle-ci !`);
    }
};