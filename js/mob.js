class Mob {
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
            resists: { ice : 0.5, fire : 2},
            sorts: [Spell.getSpell("blizzard1"), Spell.getSpell("vortex1")],
            lootTable: [{ item: Item.getItem("baton2"), chance: 0.1 }, { item: Item.getItem("robe2"), chance: 0.1 }]},
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
        if (niveau >= 0 && niveau <= 9) potion = Item.getItem("potion2");
        else if (niveau >= 10 && niveau <= 19) potion = Item.getItem("potion3");
        else if (niveau >= 20 && niveau <= 29) potion = Item.getItem("potion4");
        else if (niveau >= 30 && niveau <= 39) potion = Item.getItem("potion5");
        else if (niveau >= 40 && niveau <= 49) potion = Item.getItem("potion6");
        else if (niveau >= 50 && niveau <= 59) potion = Item.getItem("potion7");
        else if (niveau >= 60 && niveau <= 69) potion = Item.getItem("potion8");
        else if (niveau >= 70 && niveau <= 79) potion = Item.getItem("potion9");
        else if (niveau >= 80 && niveau <= 89) potion = Item.getItem("potion10");
        else if (niveau >= 90 && niveau <= 99) potion = Item.getItem("potion11");
        this.lootTable.push({ item: potion, chance: 0.4 });
        let ether;
        if (niveau >= 0 && niveau <= 9) ether = Item.getItem("ether2");
        else if (niveau >= 10 && niveau <= 19) ether = Item.getItem("ether3");
        else if (niveau >= 20 && niveau <= 29) ether = Item.getItem("ether4");
        else if (niveau >= 30 && niveau <= 39) ether = Item.getItem("ether5");
        else if (niveau >= 40 && niveau <= 49) ether = Item.getItem("ether6");
        else if (niveau >= 50 && niveau <= 59) ether = Item.getItem("ether7");
        else if (niveau >= 60 && niveau <= 69) ether = Item.getItem("ether8");
        else if (niveau >= 70 && niveau <= 79) ether = Item.getItem("ether9");
        else if (niveau >= 80 && niveau <= 89) ether = Item.getItem("ether10");
        else if (niveau >= 90 && niveau <= 99) ether = Item.getItem("ether11");
        this.lootTable.push({ item: ether, chance: 0.3 });
    }

    static getMob(id) {
        return this.mobList.find(item => item.id === id);
    }

    static popMob() {
        fightLog.innerHTML = "";
        let lvlTeam = chars.reduce((sum, char) => sum + char.niveau, 0);
        if ( lvlTeam >= 8 ) {
            tempoMsg = 0; addMessageToLog(`Dans cette version, aucun ennemi n'est disponible pour une équipe de niveau ${lvlTeam}. Recommencez en actualisant la page ou revenez un autre jour !`);
            return;
        }
        mobs = []; msgLog.innerHTML = "";
        if ( document.getElementById("ennemyTargets") ) { document.getElementById("ennemyTargets").remove() };
        // document.getElementById("startBtn").style.display = "none";
        let mobCount = 1 + Math.floor(Math.random() * 3);
        for ( let i = 0 ; i < mobCount ; i++ ) {
            let mobData = Mob.mobList[Math.floor(Math.random() * Mob.mobList.length)];
            if ( mobData.niveau < lvlTeam - 2 || mobData.niveau > lvlTeam ) { i--; } else {
                mobs.push(new Mob(mobData.nom, mobData.niveau, mobData.stats, mobData.lootTable));
            }
        }
        let ennemyList = "";
        let ennemyTargets = document.createElement("div"); ennemyTargets.id = "ennemyTargets";
        for ( let i = 0 ; i < mobs.length ; i++ ) {
            ennemyList += ` ${mobs[i].nom} (niveau ${mobs[i].niveau})`;
            if (i < mobs.length ) ennemyList += ", ";
        }
        if ( mobs.length === 1 ) {
            ennemyList = `Un(e) ${mobs[0].nom} (niveau ${mobs[0].niveau}) apparaît dans la salle`;
        } else {
            ennemyList = `Les ennemis suivants apparaissent dans la salle :`;
            for ( let i = 0 ; i < mobs.length ; i++ ) {
                ennemyList += ` ${mobs[i].nom} (niveau ${mobs[i].niveau})`;
                if (i < mobs.length - 1 ) ennemyList += ", ";
            }
        }
        ennemyList += ` ! <button id="fightBtn">Combattre</button>`
        ennemyTargets.innerHTML = ennemyList;
        msgLog.appendChild(ennemyTargets);
        document.getElementById("fightBtn").addEventListener("click", fight);
    }

    static disablePopMob() { 
        tempoMsg = 0;
        addMessageToLog(`Impossible de générer une nouvelle rencontre avant d'avoir terminé celle-ci !`);
    }
};