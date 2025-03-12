class Mob {
    static mobList = [
        {
            nom: "Rat",
            id: "rat",
            niveau: 1,
            stats: { strength: 1, intelligence: 3, agility: 3, vitality: 2, willpower: 1 },
            resists: { fire: 2, ice: 1, lightning: 1, earth: 0.5, dark: 1, holy: 1 },
            sorts: [],
            lootTable: []
        },
        {
            nom: "Pillard gobelin",
            id: "pillardGobelin",
            niveau: 1,
            stats: { strength: 2, intelligence: 2, agility: 2, vitality: 2, willpower: 2 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [],
            lootTable: [{item: Item.getItem("lightArmor2"), chance: 0.1}]
        },
        {
            nom: "Zombie",
            id: "zombie",
            niveau: 2,
            stats: { strength: 3, intelligence: 2, agility: 1, vitality: 3, willpower: 3 },
            resists: { fire: 1, ice: 0.5, lightning: 1, earth: 1, dark: 1, holy: 2 },
            sorts: [],
            lootTable: []
        },
        {
            nom: "Bandit",
            id: "bandit",
            niveau: 2,
            stats: { strength: 3, intelligence: 2, agility: 2, vitality: 3, willpower: 2 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [],
            lootTable: [{item: Item.getItem("sword2"), chance: 0.1}]
        },
        {
            nom: "Araignée géante",
            id: "araigneeGeante",
            niveau: 3,
            stats: { strength: 2, intelligence: 2, agility: 4, vitality: 3, willpower: 3 },
            resists: { fire: 2, ice: 1, lightning: 1, earth: 0.5, dark: 1, holy: 1 },
            sorts: [],
            lootTable: []
        },
        {
            nom: "Élémentaire de feu",
            id: "elementaireFeu",
            niveau: 3,
            stats: { strength: 3, intelligence: 3, agility: 2, vitality: 3, willpower: 3 },
            resists: { fire: 0, ice: 2, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("fireTarget1"), Spell.getSpell("fireAoe1")],
            lootTable: [{item: Item.getItem("robe2"), chance: 0.1}]
        },
        {
            nom: "Squelette",
            id: "squelette",
            niveau: 4,
            stats: { strength: 3, intelligence: 3, agility: 2, vitality: 4, willpower: 4 },
            resists: { fire: 1, ice: 0.5, lightning: 1, earth: 1, dark: 1, holy: 2 },
            sorts: [],
            lootTable: [{item: Item.getItem("mediumArmor2"), chance: 0.1}]
        },
        {
            nom: "Maraudeur",
            id: "maraudeur",
            niveau: 4,
            stats: { strength: 4, intelligence: 3, agility: 2, vitality: 4, willpower: 3 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [],
            lootTable: [{item: Item.getItem("baton2"), chance: 0.1}]
        },
        {
            nom: "Scorpion géant",
            id: "scorpionGeant",
            niveau: 5,
            stats: { strength: 4, intelligence: 3, agility: 4, vitality: 3, willpower: 4 },
            resists: { fire: 2, ice: 1, lightning: 1, earth: 0.5, dark: 1, holy: 1 },
            sorts: [],
            lootTable: []
        },
        {
            nom: "Guerrier orc",
            id: "guerrierOrc",
            niveau: 5,
            stats: { strength: 5, intelligence: 3, agility: 2, vitality: 5, willpower: 3 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [],
            lootTable: [{item: Item.getItem("hache2"), chance: 0.1}]
        },
        {
            nom: "Goule",
            id: "goule",
            niveau: 6,
            stats: { strength: 4, intelligence: 3, agility: 2, vitality: 6, willpower: 5 },
            resists: { fire: 1, ice: 0.5, lightning: 1, earth: 1, dark: 1, holy: 2 },
            sorts: [],
            lootTable: []
        },
        {
            nom: "Mercenaire",
            id: "mercenaire",
            niveau: 6,
            stats: { strength: 5, intelligence: 3, agility: 4, vitality: 5, willpower: 3 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [],
            lootTable: [{ item: Item.getItem("heavyArmor2"), chance: 0.1 }]
        },
        {
            nom: "Sanglier",
            id: "sanglier",
            niveau: 7,
            stats: { strength: 6, intelligence: 3, agility: 3, vitality: 6, willpower: 4 },
            resists: { fire: 2, ice: 1, lightning: 1, earth: 0.5, dark: 1, holy: 1 },
            sorts: [],
            lootTable: []
        },
        {
            nom: "Élémentaire de glace",
            id: "elementaireGlace",
            niveau: 7,
            stats: { strength: 4, intelligence: 5, agility: 4, vitality: 5, willpower: 4 },
            resists: { fire: 2, ice: 0, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("iceTarget1"), Spell.getSpell("iceAoe1")],
            lootTable: [{ item: Item.getItem("battleRobe2"), chance: 0.1 }]
        },
        {
            nom: "Revenant",
            id: "revenant",
            niveau: 8,
            stats: { strength: 5, intelligence: 3, agility: 3, vitality: 7, willpower: 6 },
            resists: { fire: 1, ice: 0.5, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [],
            lootTable: [{ item: Item.getItem("baton2"), chance: 0.1 }]
        },
        {
            nom: "Barbare",
            id: "barbare",
            niveau: 8,
            stats: { strength: 7, intelligence: 4, agility: 3, vitality: 6, willpower: 4 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [],
            lootTable: [{ item: Item.getItem("hache2"), chance: 0.1 }]
        },
        {
            nom: "Loup",
            id: "loup",
            niveau: 9,
            stats: { strength: 6, intelligence: 5, agility: 7, vitality: 4, willpower: 4 },
            resists: { fire: 2, ice: 1, lightning: 1, earth: 0.5, dark: 1, holy: 1 },
            sorts: [],
            lootTable: []
        },
        {
            nom: "Hobgobelin",
            id: "hobgobelin",
            niveau: 9,
            stats: { strength: 5, intelligence: 4, agility: 6, vitality: 6, willpower: 5 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [],
            lootTable: [{ item: Item.getItem("magicArmor2"), chance: 0.1 }]
        },
        {
            nom: "Vampire",
            id: "vampire",
            niveau: 10,
            stats: { strength: 4, intelligence: 7, agility: 3, vitality: 7, willpower: 7 },
            resists: { fire: 1, ice: 0.5, lightning: 1, earth: 1, dark: 2, holy: 1 },
            sorts: [Spell.getSpell("darkTarget1")],
            lootTable: [{ item: Item.getItem("sword2"), chance: 0.1 }]
        },
        {
            nom: "Assassin",
            id: "assassin",
            niveau: 10,
            stats: { strength: 5, intelligence: 6, agility: 7, vitality: 5, willpower: 5 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [],
            lootTable: [{ item: Item.getItem("lightArmor3"), chance: 0.1 }]
        },
        {
            nom: "Ours",
            id: "ours",
            niveau: 11,
            stats: { strength: 8, intelligence: 4, agility: 4, vitality: 8, willpower: 6 },
            resists: { fire: 2, ice: 1, lightning: 1, earth: 0.5, dark: 1, holy: 1 },
            sorts: [],
            lootTable: []
        },
        {
            nom: "Élémentaire de terre",
            id: "elementaireTerre",
            niveau: 11,
            stats: { strength: 7, intelligence: 6, agility: 5, vitality: 7, willpower: 5 },
            resists: { fire: 1, ice: 1, lightning: 2, earth: 0, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("earthTarget1"), Spell.getSpell("earthAoe1")],
            lootTable: []
        },
        {
            nom: "Spectre",
            id: "spectre",
            niveau: 12,
            stats: { strength: 4, intelligence: 7, agility: 7, vitality: 7, willpower: 7 },
            resists: { fire: 1, ice: 0.5, lightning: 1, earth: 1, dark: 1, holy: 2 },
            sorts: [Spell.getSpell("iceTarget1")],
            lootTable: [{ item: Item.getItem("battleRobe3"), chance: 0.1 }]
        },
        {
            nom: "Nécromancien",
            id: "necromancien",
            niveau: 12,
            stats: { strength: 5, intelligence: 8, agility: 5, vitality: 6, willpower: 8 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 0.5, holy: 2 },
            sorts: [Spell.getSpell("darkAoe1")],
            lootTable: [{ item: Item.getItem("baton3"), chance: 0.1 }]
        },
        {
            nom: "Basilic",
            id: "basilic",
            niveau: 13,
            stats: { strength: 6, intelligence: 5, agility: 5, vitality: 9, willpower: 9 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [],
            lootTable: []
        },
        {
            nom: "Troll",
            id: "troll",
            niveau: 13,
            stats: { strength: 9, intelligence: 4, agility: 6, vitality: 9, willpower: 6 },
            resists: { fire: 2, ice: 0.5, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [],
            lootTable: [{ item: Item.getItem("heavyArmor3"), chance: 0.1 }]
        },
        {
            nom: "Momie",
            id: "momie",
            niveau: 14,
            stats: { strength: 8, intelligence: 6, agility: 4, vitality: 9, willpower: 9 },
            resists: { fire: 1, ice: 0.5, lightning: 1, earth: 1, dark: 2, holy: 1 },
            sorts: [],
            lootTable: [{ item: Item.getItem("robe3"), chance: 0.1 }]
        },
        {
            nom: "Chevalier noir",
            id: "chevalierNoir",
            niveau: 14,
            stats: { strength: 8, intelligence: 5, agility: 5, vitality: 9, willpower: 9 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 0.5, holy: 2 },
            sorts: [Spell.getSpell("darkTarget1"), Spell.getSpell("healTarget1")],
            lootTable: [{ item: Item.getItem("sword3"), chance: 0.1 }]
        },
        {
            nom: "Manticore",
            id: "manticore",
            niveau: 15,
            stats: { strength: 10, intelligence: 6, agility: 6, vitality: 10, willpower: 6 },
            resists: { fire: 0.5, ice: 1, lightning: 1, earth: 1, dark: 2, holy: 1 },
            sorts: [],
            lootTable: []
        },
        {
            nom: "Élémentaire de foudre",
            id: "elementaireFoudre",
            niveau: 15,
            stats: { strength: 5, intelligence: 9, agility: 9, vitality: 6, willpower: 9 },
            resists: { fire: 1, ice: 0, lightning: 2, earth: 1, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("lightningTarget1"), Spell.getSpell("LightningAoe1")],
            lootTable: [{ item: Item.getItem("magicArmor3"), chance: 0.1 }]
        },
        {
            nom: "Crocodile",
            id: "crocodile",
            niveau: 16,
            stats: { strength: 8, intelligence: 5, agility: 5, vitality: 12, willpower: 10 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [],
            lootTable: [{ item: Item.getItem("mediumArmor3"), chance: 0.1 }]
        },
        {
            nom: "Berserker",
            id: "berserker",
            niveau: 16,
            stats: { strength: 11, intelligence: 5, agility: 6, vitality: 11, willpower: 7 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [],
            lootTable: [{ item: Item.getItem("hache3"), chance: 0.1 }]
        },
        {
            nom: "Chimère",
            id: "chimere",
            niveau: 17,
            stats: { strength: 11, intelligence: 7, agility: 10, vitality: 7, willpower: 7 },
            resists: { fire: 0.5, ice: 1, lightning: 1, earth: 1, dark: 2, holy: 1 },
            sorts: [Spell.getSpell("fireTarget1")],
            lootTable: []
        },
        {
            nom: "Géant",
            id: "geant",
            niveau: 17,
            stats: { strength: 12, intelligence: 5, agility: 5, vitality: 12, willpower: 8 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [],
            lootTable: [{ item: Item.getItem("hache3"), chance: 0.1 }]
        },
        {
            nom: "Dragonnet rouge",
            id: "dragonnetRouge",
            niveau: 18,
            stats: { strength: 9, intelligence: 9, agility: 8, vitality: 9, willpower: 9 },
            resists: { fire: 0.5, ice: 2, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("fireAoe1")],
            lootTable: []
        },
        {
            nom: "Apôtre maudit",
            id: "apotreMaudit",
            niveau: 18,
            stats: { strength: 7, intelligence: 12, agility: 9, vitality: 8, willpower: 8 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("holyAoe1"), Spell.getSpell("healTarget1")],
            lootTable: [{ item: Item.getItem("baton3"), chance: 0.1 }]
        },
        {
            nom: "Griffon",
            id: "griffon",
            niveau: 19,
            stats: { strength: 12, intelligence: 7, agility: 12, vitality: 8, willpower: 7 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [],
            lootTable: []
        },
        {
            nom: "Élémentaire de ténèbres",
            id: "elementaireTenebres",
            niveau: 19,
            stats: { strength: 8, intelligence: 12, agility: 7, vitality: 7, willpower: 12 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 0, holy: 2 },
            sorts: [Spell.getSpell("darkTarget1"), Spell.getSpell("darkAoe1")],
            lootTable: []
        },
        {
            nom: "Centaure",
            id: "centaure",
            niveau: 20,
            stats: { strength: 12, intelligence: 8, agility: 8, vitality: 12, willpower: 8 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [],
            lootTable: [{ item: Item.getItem("sword3"), chance: 0.1 }]
        },
        {
            nom: "Avatar martial",
            id: "avatarMartial",
            niveau: 20,
            stats: { strength: 12, intelligence: 6, agility: 10, vitality: 10, willpower: 10 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [],
            lootTable: []
        },
        {
            nom: "Wyverne",
            id: "wyverne",
            niveau: 21,
            stats: { strength: 10, intelligence: 10, agility: 10, vitality: 10, willpower: 10 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [],
            lootTable: []
        },
        {
            nom: "Chaman gobelin",
            id: "chamanGobelin",
            niveau: 21,
            stats: { strength: 7, intelligence: 13, agility: 10, vitality: 7, willpower: 13 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("darkTarget2"), Spell.getSpell("healTarget2")],
            lootTable: [{ item: Item.getItem("robe4"), chance: 0.1 }]
        },
        {
            nom: "Dragonnet blanc",
            id: "dragonnetBlanc",
            niveau: 22,
            stats: { strength: 11, intelligence: 10, agility: 10, vitality: 11, willpower: 10 },
            resists: { fire: 2, ice: 0.5, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("iceAoe2")],
            lootTable: []
        },
        {
            nom: "Titan délabré",
            id: "titanDelabre",
            niveau: 22,
            stats: { strength: 13, intelligence: 8, agility: 8, vitality: 13, willpower: 10 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [],
            lootTable: [{ item: Item.getItem("heavyArmor4"), chance: 0.1 }]
        },
        {
            nom: "Sphinx",
            id: "sphinx",
            niveau: 23,
            stats: { strength: 10, intelligence: 14, agility: 8, vitality: 8, willpower: 14 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("fireAoe2"), Spell.getSpell("healAoe2")],
            lootTable: [{ item: Item.getItem("baton4"), chance: 0.1 }]
        },
        {
            nom: "Élémentaire de lumière",
            id: "elementaireLumiere",
            niveau: 23,
            stats: { strength: 9, intelligence: 13, agility: 10, vitality: 10, willpower: 12 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 2, holy: 0 },
            sorts: [Spell.getSpell("holyTarget2"), Spell.getSpell("holyAoe2")],
            lootTable: []
        },
        {
            nom: "Diablotin",
            id: "diablotin",
            niveau: 24,
            stats: { strength: 8, intelligence: 14, agility: 14, vitality: 10, willpower: 10 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 0.5, holy: 2 },
            sorts: [],
            lootTable: [{ item: Item.getItem("sword4"), chance: 0.1 }]
        },
        {
            nom: "Golem de pierre",
            id: "golemPierre",
            niveau: 24,
            stats: { strength: 15, intelligence: 8, agility: 8, vitality: 15, willpower: 10 },
            resists: { fire: 1, ice: 2, lightning: 1, earth: 0.5, dark: 1, holy: 1 },
            sorts: [],
            lootTable: []
        },
        {
            nom: "Naga",
            id: "naga",
            niveau: 25,
            stats: { strength: 13, intelligence: 15, agility: 13, vitality: 7, willpower: 10 },
            resists: { fire: 1, ice: 0.5, lightning: 2, earth: 1, dark: 1, holy: 1 },
            sorts: [],
            lootTable: [{ item: Item.getItem("mediumArmor4"), chance: 0.1 }]
        },
        {
            nom: "Chaman orc",
            id: "chamanOrc",
            niveau: 25,
            stats: { strength: 10, intelligence: 14, agility: 10, vitality: 12, willpower: 12 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("fireTarget2"), Spell.getSpell("healTarget2")],
            lootTable: [{ item: Item.getItem("battleRobe4"), chance: 0.1 }]
        },
        {
            nom: "Dragonnet vert",
            id: "dragonnetVert",
            niveau: 26,
            stats: { strength: 12, intelligence: 12, agility: 12, vitality: 12, willpower: 12 },
            resists: { fire: 1, ice: 1, lightning: 2, earth: 0.5, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("earthAoe2")],
            lootTable: []
        },
        {
            nom: "Cultiste",
            id: "cultiste",
            niveau: 26,
            stats: { strength: 10, intelligence: 15, agility: 14, vitality: 12, willpower: 9 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [],
            lootTable: [{ item: Item.getItem("sword4"), chance: 0.1 }]
        },
        {
            nom: "Hippogriffe",
            id: "hippogriffe",
            niveau: 27,
            stats: { strength: 13, intelligence: 12, agility: 12, vitality: 13, willpower: 12 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [],
            lootTable: [{ item: Item.getItem("lightArmor4"), chance: 0.1 }]
        },
        {
            nom: "Élémentaire de vent",
            id: "elementaireVent",
            niveau: 27,
            stats: { strength: 12, intelligence: 15, agility: 15, vitality: 10, willpower: 10 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("windTarget2"), Spell.getSpell("windAoe2")],
            lootTable: []
        },
        {
            nom: "Démon mineur",
            id: "demonMineur",
            niveau: 28,
            stats: { strength: 13, intelligence: 13, agility: 12, vitality: 13, willpower: 13 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 0.5, holy: 2 },
            sorts: [Spell.getSpell("darkAoe2")],
            lootTable: [{ item: Item.getItem("magicArmor4"), chance: 0.1 }]
        },
        {
            nom: "Golem de fer",
            id: "golemFer",
            niveau: 28,
            stats: { strength: 16, intelligence: 11, agility: 9, vitality: 17, willpower: 11 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [],
            lootTable: []
        },
        {
            nom: "Liche",
            id: "liche",
            niveau: 29,
            stats: { strength: 8, intelligence: 18, agility: 10, vitality: 12, willpower: 18 },
            resists: { fire: 1, ice: 0.5, lightning: 1, earth: 1, dark: 1, holy: 2 },
            sorts: [Spell.getSpell("iceAoe2")],
            lootTable: [{ item: Item.getItem("baton4"), chance: 0.1 }]
        },
        {
            nom: "Ogre",
            id: "ogre",
            niveau: 29,
            stats: { strength: 19, intelligence: 9, agility: 9, vitality: 17, willpower: 12 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [],
            lootTable: [{ item: Item.getItem("hache4"), chance: 0.1 }]
        },
        {
            nom: "Dragonnet bleu",
            id: "dragonnetBleu",
            niveau: 30,
            stats: { strength: 15, intelligence: 15, agility: 15, vitality: 12, willpower: 11 },
            resists: { fire: 1, ice: 1, lightning: 0.5, earth: 2, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("lightningAoe2")],
            lootTable: []
        },
        {
            nom: "Zélote",
            id: "zelote",
            niveau: 30,
            stats: { strength: 14, intelligence: 14, agility: 14, vitality: 13, willpower: 13 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [],
            lootTable: []
        },
        {
            nom: "Béhémoth",
            id: "behemoth",
            niveau: 31,
            stats: { strength: 18, intelligence: 14, agility: 12, vitality: 14, willpower: 12 },
            resists: { fire: 2, ice: 1, lightning: 1, earth: 0.5, dark: 1, holy: 1 },
            sorts: [],
            lootTable: []
        },
        {
            nom: "Élémentaire d'eau",
            id: "elementaireEau",
            niveau: 31,
            stats: { strength: 12, intelligence: 18, agility: 12, vitality: 10, willpower: 18 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("healTarget2"), Spell.getSpell("healAoe2")],
            lootTable: []
        },
        {
            nom: "Ange déchu",
            id: "angeDechu",
            niveau: 32,
            stats: { strength: 12, intelligence: 16, agility: 14, vitality: 16, willpower: 14 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 2, holy: 0.5 },
            sorts: [Spell.getSpell("holyAoe2")],
            lootTable: [{ item: Item.getItem("baton5"), chance: 0.1 }]
        },
        {
            nom: "Golem de chair",
            id: "golemChair",
            niveau: 32,
            stats: { strength: 16, intelligence: 10, agility: 10, vitality: 20, willpower: 16 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [],
            lootTable: []
        },
        {
            nom: "Satyr",
            id: "satyr",
            niveau: 33,
            stats: { strength: 14, intelligence: 20, agility: 16, vitality: 12, willpower: 12 },
            resists: { fire: 0.5, ice: 1, lightning: 1, earth: 1, dark: 2, holy: 1 },
            sorts: [],
            lootTable: [{ item: Item.getItem("hache5"), chance: 0.1 }]
        },
        {
            nom: "Colosse",
            id: "colosse",
            niveau: 33,
            stats: { strength: 20, intelligence: 10, agility: 10, vitality: 20, willpower: 14 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [],
            lootTable: [{ item: Item.getItem("sword5"), chance: 0.1 }]
        }
    ];

    constructor(nom, niveau, stats, resists, sorts, lootTable = []) {
        this.nom = nom;
        this.niveau = niveau;
        this.stats = stats;
        this.resists = resists;
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
        this.lootTable.push({item: potion, chance: 0.3});
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
        this.lootTable.push({item: ether, chance: 0.2});
        let rez;
        if (niveau >= 0 && niveau <= 9) rez = Item.getItem("rez1");
        else if (niveau >= 10 && niveau <= 19) rez = Item.getItem("rez2");
        else if (niveau >= 20 && niveau <= 29) rez = Item.getItem("rez3");
        else if (niveau >= 30 && niveau <= 39) rez = Item.getItem("rez4");
        else if (niveau >= 40 && niveau <= 49) rez = Item.getItem("rez5");
        else if (niveau >= 50 && niveau <= 59) rez = Item.getItem("rez6");
        else if (niveau >= 60 && niveau <= 69) rez = Item.getItem("rez7");
        else if (niveau >= 70 && niveau <= 79) rez = Item.getItem("rez8");
        else if (niveau >= 80 && niveau <= 89) rez = Item.getItem("rez9");
        else if (niveau >= 90 && niveau <= 99) rez = Item.getItem("rez10");
        this.lootTable.push({item: rez, chance: 0.1});
    }

    static getMob(id) {
        return this.mobList.find(item => item.id === id);
    }

    static popMob() {
        if ( chars[0].hp <= 0 && chars[1].hp <= 0 && chars[2].hp <= 0 ) {
            window.location.href = "index.html";
            return;
        }
        fightLog.innerHTML = ""; mobs = []; msgLog.innerHTML = "";
        if ( document.getElementById("ennemyTargets") ) { document.getElementById("ennemyTargets").remove() };
        let lvlTeam = chars.reduce((sum, char) => sum + char.niveau, 0) / chars.length;
        const eligibleMobs = Mob.mobList.filter(mobData => mobData.niveau >= lvlTeam - 2 && mobData.niveau <= lvlTeam + 2);
        while ( mobs.reduce((sum, mob) => sum + mob.niveau, 0) <= lvlTeam ) {
            let mobData = eligibleMobs[Math.floor(Math.random() * eligibleMobs.length)];  // Choisir un mob avec ce niveau
            mobs.push(new Mob(mobData.nom, mobData.niveau, mobData.stats, mobData.resists, mobData.sorts, mobData.lootTable));
            if (mobs.length > 4) {  // Par exemple, on limite à 10 mobs pour éviter une boucle infinie
                break;
            }
        }
        if (mobs.reduce((sum, mob) => sum + mob.niveau, 0) > 2 * chars.length * lvlTeam ) {
            // Supprimer des mobs trop puissants si la somme des niveaux des mobs est trop élevée
            mobs.sort((a, b) => a.niveau - b.niveau);
            while (mobs.reduce((sum, mob) => sum + mob.niveau, 0) > 2 * chars.length * lvlTeam) {
                mobs.pop();  // Enlever le mob avec le plus haut niveau
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
};