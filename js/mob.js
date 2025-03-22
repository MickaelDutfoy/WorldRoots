class Mob {
    static mobList = [
        {
            nom: "Rat",
            id: "rat",
            niveau: 1,
            stats: { strength: 2, intelligence: 4, agility: 4, vitality: 2, willpower: 2 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [],
            lootTable: []
        },
        {
            nom: "Pillard gobelin",
            id: "pillardGobelin",
            niveau: 1,
            stats: { strength: 3, intelligence: 3, agility: 3, vitality: 2, willpower: 3 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [],
            lootTable: [{item: Item.getItem("lightArmor2"), chance: 0.1}]
        },
        {
            nom: "Zombie",
            id: "zombie",
            niveau: 2,
            stats: { strength: 4, intelligence: 2, agility: 1, vitality: 5, willpower: 4 },
            resists: { fire: 1, ice: 0.5, lightning: 1, earth: 1, dark: 1, holy: 2 },
            sorts: [],
            lootTable: []
        },
        {
            nom: "Bandit",
            id: "bandit",
            niveau: 2,
            stats: { strength: 4, intelligence: 2, agility: 3, vitality: 4, willpower: 3 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [],
            lootTable: [{item: Item.getItem("sword2"), chance: 0.1}]
        },
        {
            nom: "Araignée géante",
            id: "araigneeGeante",
            niveau: 3,
            stats: { strength: 3, intelligence: 2, agility: 5, vitality: 4, willpower: 4 },
            resists: { fire: 2, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [],
            lootTable: []
        },
        {
            nom: "Élémentaire de feu",
            id: "elementaireFeu",
            niveau: 3,
            stats: { strength: 4, intelligence: 5, agility: 2, vitality: 3, willpower: 4 },
            resists: { fire: 0, ice: 2, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("fireTarget1"), Spell.getSpell("fireAoe1")],
            lootTable: [{item: Item.getItem("robe2"), chance: 0.1}]
        },
        {
            nom: "Squelette",
            id: "squelette",
            niveau: 4,
            stats: { strength: 5, intelligence: 3, agility: 2, vitality: 5, willpower: 5 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 2 },
            sorts: [],
            lootTable: [{item: Item.getItem("mediumArmor2"), chance: 0.1}]
        },
        {
            nom: "Maraudeur",
            id: "maraudeur",
            niveau: 4,
            stats: { strength: 6, intelligence: 3, agility: 3, vitality: 5, willpower: 3 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 0.5 },
            sorts: [Spell.getSpell("healTarget1")],
            lootTable: [{item: Item.getItem("baton2"), chance: 0.1}]
        },
        {
            nom: "Scorpion géant",
            id: "scorpionGeant",
            niveau: 5,
            stats: { strength: 5, intelligence: 4, agility: 4, vitality: 4, willpower: 5 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [],
            lootTable: []
        },
        {
            nom: "Guerrier orc",
            id: "guerrierOrc",
            niveau: 5,
            stats: { strength: 6, intelligence: 3, agility: 3, vitality: 6, willpower: 4 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [],
            lootTable: [{item: Item.getItem("hache2"), chance: 0.1}]
        },
        {
            nom: "Goule",
            id: "goule",
            niveau: 6,
            stats: { strength: 5, intelligence: 4, agility: 2, vitality: 7, willpower: 6 },
            resists: { fire: 1, ice: 0.5, lightning: 1, earth: 1, dark: 1, holy: 2 },
            sorts: [Spell.getSpell("debuffVitality1")],
            lootTable: [{item: Item.getItem("sword2"), chance: 0.1}]
        },
        {
            nom: "Mercenaire",
            id: "mercenaire",
            niveau: 6,
            stats: { strength: 6, intelligence: 3, agility: 5, vitality: 6, willpower: 4 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [],
            lootTable: [{item: Item.getItem("heavyArmor2"), chance: 0.1}]
        },
        {
            nom: "Sanglier",
            id: "sanglier",
            niveau: 7,
            stats: { strength: 8, intelligence: 3, agility: 3, vitality: 7, willpower: 5 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [],
            lootTable: []
        },
        {
            nom: "Élémentaire de glace",
            id: "elementaireGlace",
            niveau: 7,
            stats: { strength: 5, intelligence: 7, agility: 4, vitality: 5, willpower: 5 },
            resists: { fire: 2, ice: 0, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("iceTarget1"), Spell.getSpell("iceAoe1")],
            lootTable: [{item: Item.getItem("battleRobe2"), chance: 0.1}]
        },
        {
            nom: "Revenant",
            id: "revenant",
            niveau: 8,
            stats: { strength: 7, intelligence: 3, agility: 3, vitality: 8, willpower: 7 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 2 },
            sorts: [Spell.getSpell("debuffAgility1"), Spell.getSpell("healAoe1")],
            lootTable: [{item: Item.getItem("baton2"), chance: 0.1}]
        },
        {
            nom: "Barbare",
            id: "barbare",
            niveau: 8,
            stats: { strength: 9, intelligence: 4, agility: 5, vitality: 6, willpower: 4 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 0.5 },
            sorts: [Spell.getSpell("buffStrength1")],
            lootTable: [{item: Item.getItem("hache2"), chance: 0.1}]
        },
        {
            nom: "Loup",
            id: "loup",
            niveau: 9,
            stats: { strength: 7, intelligence: 5, agility: 8, vitality: 5, willpower: 5 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [],
            lootTable: []
        },
        {
            nom: "Hobgobelin",
            id: "hobgobelin",
            niveau: 9,
            stats: { strength: 6, intelligence: 5, agility: 7, vitality: 6, willpower: 6 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [],
            lootTable: [{item: Item.getItem("magicArmor2"), chance: 0.1}]
        },
        {
            nom: "Vampire",
            id: "vampire",
            niveau: 10,
            stats: { strength: 6, intelligence: 9, agility: 4, vitality: 8, willpower: 9 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 0.5, holy: 1 },
            sorts: [Spell.getSpell("darkTarget2"), Spell.getSpell("debuffWillpower2")],
            lootTable: []
        },
        {
            nom: "Assassin",
            id: "assassin",
            niveau: 10,
            stats: { strength: 8, intelligence: 6, agility: 9, vitality: 6, willpower: 7 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("buffAgility2")],
            lootTable: [{item: Item.getItem("lightArmor3"), chance: 0.1}]
        },
        {
            nom: "Ours",
            id: "ours",
            niveau: 11,
            stats: { strength: 11, intelligence: 5, agility: 6, vitality: 9, willpower: 7 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [],
            lootTable: []
        },
        {
            nom: "Élémentaire de terre",
            id: "elementaireTerre",
            niveau: 11,
            stats: { strength: 9, intelligence: 8, agility: 6, vitality: 9, willpower: 6 },
            resists: { fire: 1, ice: 1, lightning: 2, earth: 0, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("earthTarget2"), Spell.getSpell("earthAoe2")],
            lootTable: []
        },
        {
            nom: "Spectre",
            id: "spectre",
            niveau: 12,
            stats: { strength: 4, intelligence: 9, agility: 9, vitality: 9, willpower: 9 },
            resists: { fire: 1, ice: 0.5, lightning: 1, earth: 1, dark: 1, holy: 2 },
            sorts: [Spell.getSpell("iceTarget2"), Spell.getSpell("debuffStrength2")],
            lootTable: [{item: Item.getItem("battleRobe3"), chance: 0.1}]
        },
        {
            nom: "Nécromancien",
            id: "necromancien",
            niveau: 12,
            stats: { strength: 6, intelligence: 9, agility: 6, vitality: 8, willpower: 11 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("darkAoe2"), Spell.getSpell("debuffVitality2")],
            lootTable: [{item: Item.getItem("baton3"), chance: 0.1}]
        },
        {
            nom: "Basilic",
            id: "basilic",
            niveau: 13,
            stats: { strength: 9, intelligence: 6, agility: 6, vitality: 11, willpower: 10 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 0.5, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("debuffAgility2")],
            lootTable: []
        },
        {
            nom: "Troll",
            id: "troll",
            niveau: 13,
            stats: { strength: 12, intelligence: 5, agility: 7, vitality: 11, willpower: 7 },
            resists: { fire: 2, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [],
            lootTable: [{item: Item.getItem("heavyArmor3"), chance: 0.1}]
        },
        {
            nom: "Momie",
            id: "momie",
            niveau: 14,
            stats: { strength: 10, intelligence: 7, agility: 5, vitality: 11, willpower: 11 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 2 },
            sorts: [Spell.getSpell("debuffIntelligence2")],
            lootTable: [{item: Item.getItem("robe3"), chance: 0.1}]
        },
        {
            nom: "Templier noir",
            id: "templierNoir",
            niveau: 14,
            stats: { strength: 10, intelligence: 7, agility: 6, vitality: 11, willpower: 10 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 0.5, holy: 1 },
            sorts: [Spell.getSpell("darkTarget2"), Spell.getSpell("buffVitality2")],
            lootTable: [{item: Item.getItem("sword3"), chance: 0.1}]
        },
        {
            nom: "Manticore",
            id: "manticore",
            niveau: 15,
            stats: { strength: 13, intelligence: 8, agility: 7, vitality: 11, willpower: 7 },
            resists: { fire: 0.5, ice: 2, lightning: 0.5, earth: 1, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("fireAoe2"), Spell.getSpell("healTarget2")],
            lootTable: []
        },
        {
            nom: "Élémentaire de foudre",
            id: "elementaireFoudre",
            niveau: 15,
            stats: { strength: 8, intelligence: 10, agility: 9, vitality: 8, willpower: 11 },
            resists: { fire: 1, ice: 1, lightning: 0, earth: 2, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("lightningTarget2"), Spell.getSpell("lightningAoe2")],
            lootTable: [{item: Item.getItem("magicArmor3"), chance: 0.1}]
        },
        {
            nom: "Crocodile",
            id: "crocodile",
            niveau: 16,
            stats: { strength: 11, intelligence: 6, agility: 6, vitality: 13, willpower: 12 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [],
            lootTable: [{item: Item.getItem("mediumArmor3"), chance: 0.1}]
        },
        {
            nom: "Berserker",
            id: "berserker",
            niveau: 16,
            stats: { strength: 14, intelligence: 6, agility: 8, vitality: 12, willpower: 8 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 0.5 },
            sorts: [Spell.getSpell("buffStrength2")],
            lootTable: [{item: Item.getItem("hache3"), chance: 0.1}]
        },
        {
            nom: "Chimère",
            id: "chimere",
            niveau: 17,
            stats: { strength: 13, intelligence: 8, agility: 11, vitality: 9, willpower: 9 },
            resists: { fire: 0.5, ice: 2, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("fireTarget2"), Spell.getSpell("buffWillpower2")],
            lootTable: []
        },
        {
            nom: "Géant",
            id: "geant",
            niveau: 17,
            stats: { strength: 15, intelligence: 6, agility: 5, vitality: 15, willpower: 9 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 2, dark: 1, holy: 1 },
            sorts: [],
            lootTable: [{item: Item.getItem("hache3"), chance: 0.1}]
        },
        {
            nom: "Dragonnet rouge",
            id: "dragonnetRouge",
            niveau: 18,
            stats: { strength: 11, intelligence: 11, agility: 10, vitality: 10, willpower: 10 },
            resists: { fire: 0.5, ice: 2, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("fireAoe2")],
            lootTable: []
        },
        {
            nom: "Apôtre maudit",
            id: "apotreMaudit",
            niveau: 18,
            stats: { strength: 9, intelligence: 13, agility: 10, vitality: 10, willpower: 10 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 2, holy: 0.5 },
            sorts: [Spell.getSpell("holyAoe2"), Spell.getSpell("healTarget2")],
            lootTable: [{item: Item.getItem("baton3"), chance: 0.1}]
        },
        {
            nom: "Griffon",
            id: "griffon",
            niveau: 19,
            stats: { strength: 14, intelligence: 9, agility: 14, vitality: 9, willpower: 8 },
            resists: { fire: 0.5, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("buffIntelligence2")],
            lootTable: [{item: Item.getItem("sword3"), chance: 0.1}]
        },
        {
            nom: "Élémentaire de ténèbres",
            id: "elementaireTenebres",
            niveau: 19,
            stats: { strength: 10, intelligence: 14, agility: 8, vitality: 9, willpower: 13 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 0, holy: 2 },
            sorts: [Spell.getSpell("darkTarget2"), Spell.getSpell("darkAoe2")],
            lootTable: []
        },
        {
            nom: "Centaure",
            id: "centaure",
            niveau: 20,
            stats: { strength: 15, intelligence: 9, agility: 11, vitality: 15, willpower: 10 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 2, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("debuffAgility3")],
            lootTable: []
        },
        {
            nom: "Avatar martial",
            id: "avatarMartial",
            niveau: 20,
            stats: { strength: 15, intelligence: 8, agility: 13, vitality: 12, willpower: 12 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 0.5 },
            sorts: [Spell.getSpell("buffAgility3")],
            lootTable: [{item: Item.getItem("lightArmor4"), chance: 0.1}]
        },
        {
            nom: "Wyverne",
            id: "wyverne",
            niveau: 21,
            stats: { strength: 14, intelligence: 10, agility: 12, vitality: 14, willpower: 12 },
            resists: { fire: 1, ice: 1, lightning: 0.5, earth: 1, dark: 1, holy: 1 },
            sorts: [],
            lootTable: []
        },
        {
            nom: "Chaman gobelin",
            id: "chamanGobelin",
            niveau: 21,
            stats: { strength: 9, intelligence: 15, agility: 13, vitality: 10, willpower: 15 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("buffIntelligence3"), Spell.getSpell("healTarget3")],
            lootTable: [{item: Item.getItem("robe4"), chance: 0.1}]
        },
        {
            nom: "Dragonnet blanc",
            id: "dragonnetBlanc",
            niveau: 22,
            stats: { strength: 12, intelligence: 13, agility: 13, vitality: 13, willpower: 13 },
            resists: { fire: 2, ice: 0.5, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("iceAoe3")],
            lootTable: []
        },
        {
            nom: "Titan délabré",
            id: "titanDelabre",
            niveau: 22,
            stats: { strength: 16, intelligence: 10, agility: 8, vitality: 16, willpower: 14 },
            resists: { fire: 1, ice: 0.5, lightning: 1, earth: 0.5, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("buffStrength3")],
            lootTable: [{item: Item.getItem("heavyArmor4"), chance: 0.1}]
        },
        {
            nom: "Sphinx",
            id: "sphinx",
            niveau: 23,
            stats: { strength: 12, intelligence: 17, agility: 10, vitality: 10, willpower: 17 },
            resists: { fire: 1, ice: 1, lightning: 0.5, earth: 1, dark: 1, holy: 0.5 },
            sorts: [Spell.getSpell("fireAoe3"), Spell.getSpell("healAoe3")],
            lootTable: [{item: Item.getItem("baton4"), chance: 0.1}]
        },
        {
            nom: "Élémentaire de lumière",
            id: "elementaireLumiere",
            niveau: 23,
            stats: { strength: 11, intelligence: 16, agility: 12, vitality: 12, willpower: 15 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 2, holy: 0 },
            sorts: [Spell.getSpell("holyTarget3"), Spell.getSpell("holyAoe3")],
            lootTable: []
        },
        {
            nom: "Diablotin",
            id: "diablotin",
            niveau: 24,
            stats: { strength: 10, intelligence: 17, agility: 17, vitality: 12, willpower: 12 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 0.5, holy: 1 },
            sorts: [Spell.getSpell("debuffIntelligence3"), Spell.getSpell("darkTarget3")],
            lootTable: [{item: Item.getItem("sword4"), chance: 0.1}]
        },
        {
            nom: "Golem de pierre",
            id: "golemPierre",
            niveau: 24,
            stats: { strength: 18, intelligence: 10, agility: 10, vitality: 17, willpower: 13 },
            resists: { fire: 1, ice: 2, lightning: 0.5, earth: 0.5, dark: 1, holy: 1 },
            sorts: [],
            lootTable: []
        },
        {
            nom: "Naga",
            id: "naga",
            niveau: 25,
            stats: { strength: 15, intelligence: 18, agility: 16, vitality: 9, willpower: 12 },
            resists: { fire: 1, ice: 1, lightning: 2, earth: 1, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("debuffWillpower3"), Spell.getSpell("buffVitality3")],
            lootTable: [{item: Item.getItem("hache4"), chance: 0.1}]
        },
        {
            nom: "Chaman orc",
            id: "chamanOrc",
            niveau: 25,
            stats: { strength: 12, intelligence: 17, agility: 12, vitality: 15, willpower: 14 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("fireTarget3"), Spell.getSpell("healTarget3")],
            lootTable: [{item: Item.getItem("battleRobe4"), chance: 0.1}]
        },
        {
            nom: "Dragonnet vert",
            id: "dragonnetVert",
            niveau: 26,
            stats: { strength: 14, intelligence: 15, agility: 14, vitality: 15, willpower: 14 },
            resists: { fire: 1, ice: 1, lightning: 2, earth: 0.5, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("earthAoe3")],
            lootTable: []
        },
        {
            nom: "Cultiste",
            id: "cultiste",
            niveau: 26,
            stats: { strength: 12, intelligence: 18, agility: 16, vitality: 14, willpower: 12 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 0.5 },
            sorts: [Spell.getSpell("debuffVitality3"), Spell.getSpell("buffWillpower3")],
            lootTable: [{item: Item.getItem("sword4"), chance: 0.1}]
        },
        {
            nom: "Hippogriffe",
            id: "hippogriffe",
            niveau: 27,
            stats: { strength: 16, intelligence: 14, agility: 14, vitality: 16, willpower: 14 },
            resists: { fire: 0.5, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [],
            lootTable: [{item: Item.getItem("mediumArmor4"), chance: 0.1}]
        },
        {
            nom: "Élémentaire d’énergie",
            id: "elementaireEnergie",
            niveau: 27,
            stats: { strength: 14, intelligence: 18, agility: 18, vitality: 12, willpower: 12 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("windTarget3"), Spell.getSpell("windAoe3")],
            lootTable: []
        },
        {
            nom: "Démon mineur",
            id: "demonMineur",
            niveau: 28,
            stats: { strength: 16, intelligence: 16, agility: 14, vitality: 15, willpower: 15 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 0.5, holy: 2 },
            sorts: [Spell.getSpell("darkAoe3")],
            lootTable: [{item: Item.getItem("magicArmor4"), chance: 0.1}]
        },
        {
            nom: "Golem de fer",
            id: "golemFer",
            niveau: 28,
            stats: { strength: 19, intelligence: 13, agility: 11, vitality: 20, willpower: 13 },
            resists: { fire: 1, ice: 1, lightning: 2, earth: 1, dark: 1, holy: 1 },
            sorts: [],
            lootTable: []
        },
        {
            nom: "Liche",
            id: "liche",
            niveau: 29,
            stats: { strength: 10, intelligence: 21, agility: 12, vitality: 14, willpower: 21 },
            resists: { fire: 1, ice: 0.5, lightning: 1, earth: 1, dark: 1, holy: 2 },
            sorts: [Spell.getSpell("iceAoe3"), Spell.getSpell("debuffStrength3")],
            lootTable: [{item: Item.getItem("baton4"), chance: 0.1}]
        },
        {
            nom: "Ogre",
            id: "ogre",
            niveau: 29,
            stats: { strength: 22, intelligence: 11, agility: 11, vitality: 20, willpower: 14 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 2, dark: 1, holy: 1 },
            sorts: [],
            lootTable: [{item: Item.getItem("hache4"), chance: 0.1}]
        },
        {
            nom: "Dragonnet bleu",
            id: "dragonnetBleu",
            niveau: 30,
            stats: { strength: 18, intelligence: 18, agility: 18, vitality: 15, willpower: 15 },
            resists: { fire: 1, ice: 1, lightning: 0.5, earth: 2, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("lightningAoe4")],
            lootTable: []
        },
        {
            nom: "Zélote",
            id: "zelote",
            niveau: 30,
            stats: { strength: 17, intelligence: 17, agility: 18, vitality: 16, willpower: 16 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 0.5 },
            sorts: [Spell.getSpell("buffStrength4"), Spell.getSpell("buffAgility4")],
            lootTable: [{item: Item.getItem("magicArmor5"), chance: 0.1}]
        },
        {
            nom: "Béhémoth",
            id: "behemoth",
            niveau: 31,
            stats: { strength: 22, intelligence: 17, agility: 15, vitality: 17, willpower: 15 },
            resists: { fire: 2, ice: 1, lightning: 0.5, earth: 1, dark: 1, holy: 1 },
            sorts: [],
            lootTable: []
        },
        {
            nom: "Élémentaire d’eau",
            id: "elementaireEau",
            niveau: 31,
            stats: { strength: 15, intelligence: 22, agility: 15, vitality: 13, willpower: 21 },
            resists: { fire: 0.5, ice: 1, lightning: 2, earth: 1, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("healTarget4"), Spell.getSpell("healAoe4")],
            lootTable: []
        },
        {
            nom: "Ange déchu",
            id: "angeDechu",
            niveau: 32,
            stats: { strength: 15, intelligence: 20, agility: 17, vitality: 19, willpower: 17 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 2, holy: 0.5 },
            sorts: [Spell.getSpell("holyAoe4"), Spell.getSpell("debuffWillpower4")],
            lootTable: [{item: Item.getItem("baton5"), chance: 0.1}]
        },
        {
            nom: "Golem de chair",
            id: "golemChair",
            niveau: 32,
            stats: { strength: 19, intelligence: 13, agility: 13, vitality: 24, willpower: 19 },
            resists: { fire: 1, ice: 2, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("debuffVitality4")],
            lootTable: []
        },
        {
            nom: "Satyr",
            id: "satyr",
            niveau: 33,
            stats: { strength: 17, intelligence: 24, agility: 19, vitality: 15, willpower: 15 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 0.5, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("buffIntelligence4"), Spell.getSpell("debuffIntelligence4")],
            lootTable: [{item: Item.getItem("hache5"), chance: 0.1}]
        },
        {
            nom: "Colosse",
            id: "colosse",
            niveau: 33,
            stats: { strength: 24, intelligence: 13, agility: 13, vitality: 24, willpower: 16 },
            resists: { fire: 1, ice: 1, lightning: 2, earth: 2, dark: 1, holy: 1 },
            sorts: [],
            lootTable: [{item: Item.getItem("sword5"), chance: 0.1}]
        },
        {
            nom: "Rat géant",
            id: "ratGeant",
            niveau: 34,
            stats: { strength: 13, intelligence: 26, agility: 27, vitality: 13, willpower: 13 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [],
            lootTable: []
        },
        {
            nom: "Gobelin de la lune",
            id: "gobelinLune",
            niveau: 34,
            stats: { strength: 20, intelligence: 20, agility: 20, vitality: 13, willpower: 19 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [],
            lootTable: [{item: Item.getItem("lightArmor5"), chance: 0.1}]
        },
        {
            nom: "Désossé",
            id: "desosse",
            niveau: 35,
            stats: { strength: 24, intelligence: 12, agility: 6, vitality: 29, willpower: 23 },
            resists: { fire: 1, ice: 0.5, lightning: 1, earth: 1, dark: 1, holy: 2 },
            sorts: [Spell.getSpell("debuffStrength4")],
            lootTable: []
        },
        {
            nom: "Tortionnaire",
            id: "tortionnaire",
            niveau: 35,
            stats: { strength: 23, intelligence: 12, agility: 18, vitality: 23, willpower: 18 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("debuffAgility4")],
            lootTable: [{item: Item.getItem("baton5"), chance: 0.1}]
        },
        {
            nom: "Araignée des tréfonds",
            id: "araigneeTrefonds",
            niveau: 36,
            stats: { strength: 16, intelligence: 11, agility: 27, vitality: 21, willpower: 21 },
            resists: { fire: 2, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [],
            lootTable: []
        },
        {
            nom: "Grand élémentaire de feu",
            id: "grandElementaireFeu",
            niveau: 36,
            stats: { strength: 21, intelligence: 27, agility: 11, vitality: 16, willpower: 21 },
            resists: { fire: 0, ice: 2, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("fireTarget4"), Spell.getSpell("fireAoe4")],
            lootTable: [{item: Item.getItem("robe5"), chance: 0.1}]
        },
        {
            nom: "Seigneur mort-vivant",
            id: "seigneurMortVivant",
            niveau: 37,
            stats: { strength: 24, intelligence: 15, agility: 10, vitality: 25, willpower: 24 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 2 },
            sorts: [Spell.getSpell("darkTarget4")],
            lootTable: [{item: Item.getItem("sword5"), chance: 0.1}]
        },
        {
            nom: "Bourreau des bas-fonds",
            id: "bourreauBasFonds",
            niveau: 37,
            stats: { strength: 28, intelligence: 15, agility: 15, vitality: 25, willpower: 15 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 0.5 },
            sorts: [Spell.getSpell("healTarget4")],
            lootTable: [{item: Item.getItem("mediumArmor5"), chance: 0.1}]
        },
        {
            nom: "Scorpion-titan",
            id: "scorpionTitan",
            niveau: 38,
            stats: { strength: 23, intelligence: 18, agility: 18, vitality: 18, willpower: 23 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [],
            lootTable: []
        },
        {
            nom: "Chef de guerre orc",
            id: "chefGuerreOrc",
            niveau: 38,
            stats: { strength: 27, intelligence: 14, agility: 14, vitality: 27, willpower: 18 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("buffVitality4")],
            lootTable: [{item: Item.getItem("heavyArmor5"), chance: 0.1}]
        },
        {
            nom: "Goule millénaire",
            id: "gouleMillenaire",
            niveau: 39,
            stats: { strength: 21, intelligence: 17, agility: 9, vitality: 29, willpower: 26 },
            resists: { fire: 1, ice: 0.5, lightning: 1, earth: 1, dark: 1, holy: 2 },
            sorts: [Spell.getSpell("debuffVitality1"), Spell.getSpell("darkAoe4")],
            lootTable: [{item: Item.getItem("battleRobe5"), chance: 0.1}]
        },
        {
            nom: "Mercenaire maudit",
            id: "mercenaireMaudit",
            niveau: 39,
            stats: { strength: 26, intelligence: 13, agility: 21, vitality: 25, willpower: 17 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("buffWillpower4")],
            lootTable: [{item: Item.getItem("hache5"), chance: 0.1}]
        },
        {
            nom: "Sanglier démoniaque",
            id: "sanglierDemoniaque",
            niveau: 40,
            stats: { strength: 34, intelligence: 12, agility: 12, vitality: 29, willpower: 21 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [],
            lootTable: []
        },
        {
            nom: "Grand élémentaire de glace",
            id: "grandElementaireGlace",
            niveau: 40,
            stats: { strength: 21, intelligence: 28, agility: 17, vitality: 21, willpower: 21 },
            resists: { fire: 2, ice: 0, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("iceTarget5"), Spell.getSpell("iceAoe5")],
            lootTable: [{item: Item.getItem("robe6"), chance: 0.1}]
        },
        {
            nom: "Roi des tombes",
            id: "roiTombes",
            niveau: 41,
            stats: { strength: 28, intelligence: 12, agility: 12, vitality: 30, willpower: 28 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 2 },
            sorts: [Spell.getSpell("debuffAgility5"), Spell.getSpell("healAoe5")],
            lootTable: [{item: Item.getItem("battleRobe6"), chance: 0.1}]
        },
        {
            nom: "Chef de clan barbare",
            id: "chefClanBarbare",
            niveau: 41,
            stats: { strength: 34, intelligence: 16, agility: 20, vitality: 24, willpower: 16 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 0.5 },
            sorts: [Spell.getSpell("buffStrength5")],
            lootTable: [{item: Item.getItem("mediumArmor6"), chance: 0.1}]
        },
        {
            nom: "Loup lugubre",
            id: "loupLugubre",
            niveau: 42,
            stats: { strength: 26, intelligence: 19, agility: 29, vitality: 19, willpower: 19 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [],
            lootTable: []
        },
        {
            nom: "Hobgobelin de la lune",
            id: "hobgobelinLune",
            niveau: 42,
            stats: { strength: 22, intelligence: 19, agility: 27, vitality: 22, willpower: 22 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [],
            lootTable: [{item: Item.getItem("hache6"), chance: 0.1}]
        },
        {
            nom: "Vampire ancien",
            id: "vampireAncien",
            niveau: 43,
            stats: { strength: 19, intelligence: 29, agility: 13, vitality: 25, willpower: 28 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 0.5, holy: 1 },
            sorts: [Spell.getSpell("darkTarget5"), Spell.getSpell("debuffWillpower5")],
            lootTable: [{item: Item.getItem("sword6"), chance: 0.1}]
        },
        {
            nom: "Assassin des ombres",
            id: "assassinOmbres",
            niveau: 43,
            stats: { strength: 25, intelligence: 19, agility: 29, vitality: 19, willpower: 22 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("buffAgility5")],
            lootTable: [{item: Item.getItem("lightArmor6"), chance: 0.1}]
        },
        {
            nom: "Ours démoniaque",
            id: "oursDemoniaque",
            niveau: 44,
            stats: { strength: 35, intelligence: 15, agility: 18, vitality: 27, willpower: 21 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [],
            lootTable: []
        },
        {
            nom: "Grand élémentaire de terre",
            id: "grandElementaireTerre",
            niveau: 44,
            stats: { strength: 28, intelligence: 24, agility: 18, vitality: 28, willpower: 18 },
            resists: { fire: 1, ice: 1, lightning: 2, earth: 0, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("earthTarget5"), Spell.getSpell("earthAoe5")],
            lootTable: [{item: Item.getItem("heavyArmor6"), chance: 0.1}]
        },
        {
            nom: "Apparition spectrale",
            id: "apparitionSpectrale",
            niveau: 45,
            stats: { strength: 12, intelligence: 27, agility: 26, vitality: 26, willpower: 27 },
            resists: { fire: 1, ice: 0.5, lightning: 1, earth: 1, dark: 1, holy: 2 },
            sorts: [Spell.getSpell("iceTarget5"), Spell.getSpell("debuffStrength5")],
            lootTable: []
        },
        {
            nom: "Démonomancien",
            id: "demonomancien",
            niveau: 45,
            stats: { strength: 18, intelligence: 26, agility: 18, vitality: 24, willpower: 32 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("darkAoe5"), Spell.getSpell("debuffVitality5")],
            lootTable: [{item: Item.getItem("baton6"), chance: 0.1}]
        },
        {
            nom: "Basilic des tréfonds",
            id: "basilicTrefonds",
            niveau: 46,
            stats: { strength: 26, intelligence: 17, agility: 17, vitality: 31, willpower: 29 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 0.5, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("debuffAgility5")],
            lootTable: []
        },
        {
            nom: "Troll de la lune",
            id: "trollLune",
            niveau: 46,
            stats: { strength: 35, intelligence: 14, agility: 20, vitality: 31, willpower: 20 },
            resists: { fire: 2, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [],
            lootTable: [{item: Item.getItem("hache6"), chance: 0.1}]
        },
        {
            nom: "Orc momifié",
            id: "orcMomifie",
            niveau: 47,
            stats: { strength: 28, intelligence: 19, agility: 14, vitality: 31, willpower: 30 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 2 },
            sorts: [Spell.getSpell("debuffIntelligence5")],
            lootTable: []
        },
        {
            nom: "Inquisiteur noir",
            id: "inquisiteurNoir",
            niveau: 47,
            stats: { strength: 28, intelligence: 19, agility: 17, vitality: 30, willpower: 28 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 0.5, holy: 1 },
            sorts: [Spell.getSpell("darkTarget5"), Spell.getSpell("buffVitality5")],
            lootTable: [{item: Item.getItem("baton6"), chance: 0.1}]
        },
        {
            nom: "Manticore embrasée",
            id: "manticoreEmbrasee",
            niveau: 48,
            stats: { strength: 34, intelligence: 22, agility: 19, vitality: 30, willpower: 19 },
            resists: { fire: 0.5, ice: 2, lightning: 0.5, earth: 1, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("fireAoe5"), Spell.getSpell("healTarget5")],
            lootTable: []
        },
        {
            nom: "Grand élémentaire de foudre",
            id: "grandElementaireFoudre",
            niveau: 48,
            stats: { strength: 22, intelligence: 27, agility: 24, vitality: 22, willpower: 29 },
            resists: { fire: 1, ice: 1, lightning: 0, earth: 2, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("lightningTarget5"), Spell.getSpell("lightningAoe5")],
            lootTable: [{item: Item.getItem("magicArmor6"), chance: 0.1}]
        },
        {
            nom: "Crocodile-démon",
            id: "crocodileDemon",
            niveau: 49,
            stats: { strength: 29, intelligence: 16, agility: 16, vitality: 33, willpower: 32 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [],
            lootTable: []
        },
        {
            nom: "Berserker corrompu",
            id: "berserkerCorrompu",
            niveau: 49,
            stats: { strength: 36, intelligence: 16, agility: 21, vitality: 32, willpower: 21 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 0.5 },
            sorts: [Spell.getSpell("buffStrength5")],
            lootTable: [{item: Item.getItem("sword6"), chance: 0.1}]
        },
        {
            nom: "Chimère enflammée",
            id: "chimereEnflammee",
            niveau: 50,
            stats: { strength: 34, intelligence: 21, agility: 29, vitality: 24, willpower: 24 },
            resists: { fire: 0.5, ice: 2, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("fireTarget6"), Spell.getSpell("buffWillpower6")],
            lootTable: []
        },
        {
            nom: "Cyclope",
            id: "cyclope",
            niveau: 50,
            stats: { strength: 40, intelligence: 16, agility: 13, vitality: 39, willpower: 24 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 2, dark: 1, holy: 1 },
            sorts: [],
            lootTable: [{item: Item.getItem("hache7"), chance: 0.1}]
        },
        {
            nom: "Drake rouge",
            id: "drakeRouge",
            niveau: 51,
            stats: { strength: 28, intelligence: 28, agility: 26, vitality: 26, willpower: 26 },
            resists: { fire: 0.5, ice: 2, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("fireAoe6")],
            lootTable: []
        },
        {
            nom: "Adorateur ténébreux",
            id: "adorateurTenebreux",
            niveau: 51,
            stats: { strength: 23, intelligence: 33, agility: 26, vitality: 26, willpower: 26 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 2, holy: 0.5 },
            sorts: [Spell.getSpell("holyAoe6"), Spell.getSpell("healTarget6")],
            lootTable: [{item: Item.getItem("lightArmor7"), chance: 0.1}]
        },
        {
            nom: "Griffon des flammes",
            id: "griffonFlammes",
            niveau: 52,
            stats: { strength: 35, intelligence: 23, agility: 35, vitality: 23, willpower: 20 },
            resists: { fire: 0.5, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("buffIntelligence6")],
            lootTable: []
        },
        {
            nom: "Grand élémentaire de ténèbres",
            id: "grandElementaireTenebres",
            niveau: 52,
            stats: { strength: 25, intelligence: 35, agility: 20, vitality: 23, willpower: 33 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 0, holy: 2 },
            sorts: [Spell.getSpell("darkTarget6"), Spell.getSpell("darkAoe6")],
            lootTable: []
        },
        {
            nom: "Centaure brutal",
            id: "centaureBrutal",
            niveau: 53,
            stats: { strength: 35, intelligence: 21, agility: 25, vitality: 34, willpower: 23 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 2, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("debuffAgility6")],
            lootTable: [{item: Item.getItem("sword7"), chance: 0.1}]
        },
        {
            nom: "Avatar tempétueux",
            id: "avatarTempetueux",
            niveau: 53,
            stats: { strength: 34, intelligence: 18, agility: 30, vitality: 28, willpower: 28 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 0.5 },
            sorts: [Spell.getSpell("buffAgility6")],
            lootTable: [{item: Item.getItem("hache7"), chance: 0.1}]
        },
        {
            nom: "Wyverne porte-foudre",
            id: "wyvernePorteFoudre",
            niveau: 54,
            stats: { strength: 32, intelligence: 23, agility: 27, vitality: 31, willpower: 27 },
            resists: { fire: 1, ice: 1, lightning: 0.5, earth: 1, dark: 1, holy: 1 },
            sorts: [],
            lootTable: [{item: Item.getItem("magicArmor7"), chance: 0.1}]
        },
        {
            nom: "Chaman gobelin de la lune",
            id: "chamanGobelinLune",
            niveau: 54,
            stats: { strength: 20, intelligence: 34, agility: 29, vitality: 23, willpower: 34 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("buffIntelligence6"), Spell.getSpell("healTarget6")],
            lootTable: [{item: Item.getItem("baton7"), chance: 0.1}]
        },
        {
            nom: "Drake blanc",
            id: "drakeBlanc",
            niveau: 55,
            stats: { strength: 27, intelligence: 29, agility: 28, vitality: 29, willpower: 29 },
            resists: { fire: 2, ice: 0.5, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("iceAoe6")],
            lootTable: []
        },
        {
            nom: "Titan recomposé",
            id: "titanRecompose",
            niveau: 55,
            stats: { strength: 36, intelligence: 22, agility: 18, vitality: 35, willpower: 31 },
            resists: { fire: 1, ice: 0.5, lightning: 1, earth: 0.5, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("buffStrength6")],
            lootTable: [{item: Item.getItem("heavyArmor7"), chance: 0.1}]
        },
        {
            nom: "Sphinx omniscient",
            id: "sphinxOmniscient",
            niveau: 56,
            stats: { strength: 26, intelligence: 37, agility: 22, vitality: 22, willpower: 37 },
            resists: { fire: 1, ice: 1, lightning: 0.5, earth: 1, dark: 1, holy: 0.5 },
            sorts: [Spell.getSpell("fireAoe6"), Spell.getSpell("healAoe6")],
            lootTable: [{item: Item.getItem("baton7"), chance: 0.1}]
        },
        {
            nom: "Grand élémentaire de lumière",
            id: "grandElementaireLumiere",
            niveau: 56,
            stats: { strength: 24, intelligence: 35, agility: 26, vitality: 26, willpower: 33 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 2, holy: 0 },
            sorts: [Spell.getSpell("holyTarget6"), Spell.getSpell("holyAoe6")],
            lootTable: []
        },
        {
            nom: "Diable féroce",
            id: "diableFeroce",
            niveau: 57,
            stats: { strength: 21, intelligence: 37, agility: 36, vitality: 26, willpower: 26 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 0.5, holy: 1 },
            sorts: [Spell.getSpell("debuffIntelligence6"), Spell.getSpell("darkTarget6")],
            lootTable: [{item: Item.getItem("mediumArmor7"), chance: 0.1}]
        },
        {
            nom: "Golem de granite",
            id: "golemGranite",
            niveau: 57,
            stats: { strength: 39, intelligence: 21, agility: 21, vitality: 37, willpower: 28 },
            resists: { fire: 1, ice: 2, lightning: 0.5, earth: 0.5, dark: 1, holy: 1 },
            sorts: [],
            lootTable: []
        },
        {
            nom: "Naga mille-yeux",
            id: "nagaMilleYeux",
            niveau: 58,
            stats: { strength: 32, intelligence: 38, agility: 34, vitality: 19, willpower: 25 },
            resists: { fire: 1, ice: 1, lightning: 2, earth: 1, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("debuffWillpower6"), Spell.getSpell("buffVitality6")],
            lootTable: [{item: Item.getItem("battleRobe7"), chance: 0.1}]
        },
        {
            nom: "Chaman orc de la lune",
            id: "chamanOrcLune",
            niveau: 58,
            stats: { strength: 25, intelligence: 36, agility: 25, vitality: 32, willpower: 30 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("fireTarget6"), Spell.getSpell("healTarget6")],
            lootTable: [{item: Item.getItem("sword7"), chance: 0.1}]
        },
        {
            nom: "Drake vert",
            id: "drakeVert",
            niveau: 59,
            stats: { strength: 29, intelligence: 32, agility: 29, vitality: 31, willpower: 29 },
            resists: { fire: 1, ice: 1, lightning: 2, earth: 0.5, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("earthAoe6")],
            lootTable: []
        },
        {
            nom: "Invocateur démoniaque",
            id: "invocateurDemoniaque",
            niveau: 59,
            stats: { strength: 25, intelligence: 38, agility: 33, vitality: 29, willpower: 25 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 0.5 },
            sorts: [Spell.getSpell("debuffVitality6"), Spell.getSpell("buffWillpower6")],
            lootTable: [{item: Item.getItem("robe7"), chance: 0.1}]
        },
        {
            nom: "Hippogriffe ignifugé",
            id: "hippogriffeIgnifuge",
            niveau: 60,
            stats: { strength: 33, intelligence: 30, agility: 30, vitality: 33, willpower: 30 },
            resists: { fire: 0.5, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [],
            lootTable: []
        },
        {
            nom: "Grand élémentaire d’énergie",
            id: "grandElementaireEnergie",
            niveau: 60,
            stats: { strength: 30, intelligence: 38, agility: 38, vitality: 25, willpower: 25 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("windTarget7"), Spell.getSpell("windAoe7")],
            lootTable: [{item: Item.getItem("baton8"), chance: 0.1}]
        },
        {
            nom: "Démon majeur",
            id: "demonMajeur",
            niveau: 61,
            stats: { strength: 34, intelligence: 33, agility: 29, vitality: 31, willpower: 31 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 0.5, holy: 2 },
            sorts: [Spell.getSpell("darkAoe7")],
            lootTable: [{item: Item.getItem("sword8"), chance: 0.1}]
        },
        {
            nom: "Golem d’acier",
            id: "golemAcier",
            niveau: 61,
            stats: { strength: 40, intelligence: 27, agility: 23, vitality: 41, willpower: 27 },
            resists: { fire: 1, ice: 1, lightning: 2, earth: 1, dark: 1, holy: 1 },
            sorts: [],
            lootTable: [{item: Item.getItem("heavyArmor8"), chance: 0.1}]
        },
        {
            nom: "Liche omnisciente",
            id: "licheOmnisciente",
            niveau: 62,
            stats: { strength: 21, intelligence: 42, agility: 25, vitality: 29, willpower: 43 },
            resists: { fire: 1, ice: 0.5, lightning: 1, earth: 1, dark: 1, holy: 2 },
            sorts: [Spell.getSpell("iceAoe7"), Spell.getSpell("debuffStrength7")],
            lootTable: [{item: Item.getItem("robe8"), chance: 0.1}]
        },
        {
            nom: "Ogre brutal",
            id: "ogreBrutal",
            niveau: 62,
            stats: { strength: 44, intelligence: 23, agility: 23, vitality: 41, willpower: 29 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 2, dark: 1, holy: 1 },
            sorts: [],
            lootTable: [{item: Item.getItem("hache8"), chance: 0.1}]
        },
        {
            nom: "Drake bleu",
            id: "drakeBleu",
            niveau: 63,
            stats: { strength: 35, intelligence: 35, agility: 34, vitality: 29, willpower: 29 },
            resists: { fire: 1, ice: 1, lightning: 0.5, earth: 2, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("lightningAoe7")],
            lootTable: []
        },
        {
            nom: "Zélote des ténèbres",
            id: "zeloteTenebres",
            niveau: 63,
            stats: { strength: 33, intelligence: 33, agility: 34, vitality: 31, willpower: 31 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 0.5 },
            sorts: [Spell.getSpell("buffStrength7"), Spell.getSpell("buffAgility7")],
            lootTable: [{item: Item.getItem("lightArmor8"), chance: 0.1}]
        },
        {
            nom: "Béhémoth ancien",
            id: "behemothAncien",
            niveau: 64,
            stats: { strength: 42, intelligence: 32, agility: 29, vitality: 32, willpower: 29 },
            resists: { fire: 2, ice: 1, lightning: 0.5, earth: 1, dark: 1, holy: 1 },
            sorts: [],
            lootTable: []
        },
        {
            nom: "Grand élémentaire d’eau",
            id: "grandElementaireEau",
            niveau: 64,
            stats: { strength: 29, intelligence: 41, agility: 29, vitality: 25, willpower: 40 },
            resists: { fire: 0.5, ice: 1, lightning: 2, earth: 1, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("healTarget7"), Spell.getSpell("healAoe7")],
            lootTable: [{item: Item.getItem("battleRobe8"), chance: 0.1}]
        },
        {
            nom: "Ange voleur d’âmes",
            id: "angeVoleurAmes",
            niveau: 65,
            stats: { strength: 28, intelligence: 38, agility: 32, vitality: 36, willpower: 32 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 2, holy: 0.5 },
            sorts: [Spell.getSpell("holyAoe7"), Spell.getSpell("debuffWillpower7")],
            lootTable: [{item: Item.getItem("magicArmor8"), chance: 0.1}]
        },
        {
            nom: "Golem organique",
            id: "golemOrganique",
            niveau: 65,
            stats: { strength: 36, intelligence: 25, agility: 25, vitality: 44, willpower: 36 },
            resists: { fire: 1, ice: 2, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("debuffVitality7")],
            lootTable: []
        },
        {
            nom: "Satyr des tréfonds",
            id: "satyrTrefonds",
            niveau: 66,
            stats: { strength: 32, intelligence: 45, agility: 35, vitality: 28, willpower: 28 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 0.5, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("buffIntelligence7"), Spell.getSpell("debuffIntelligence7")],
            lootTable: []
        },
        {
            nom: "Colosse sans âme",
            id: "colosseSansAme",
            niveau: 66,
            stats: { strength: 45, intelligence: 24, agility: 24, vitality: 45, willpower: 30 },
            resists: { fire: 1, ice: 1, lightning: 2, earth: 2, dark: 1, holy: 1 },
            sorts: [],
            lootTable: [{item: Item.getItem("hache8"), chance: 0.1}]
        },
        {
            nom: "Rat morbide",
            id: "ratMorbide",
            niveau: 67,
            stats: { strength: 24, intelligence: 48, agility: 50, vitality: 24, willpower: 24 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [],
            lootTable: []
        },
        {
            nom: "Pillard gobelin du chaos",
            id: "pillardGobelinChaos",
            niveau: 67,
            stats: { strength: 37, intelligence: 37, agility: 37, vitality: 24, willpower: 35 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [],
            lootTable: [{item: Item.getItem("sword8"), chance: 0.1}]
        },
        {
            nom: "Ogre zombie",
            id: "ogreZombie",
            niveau: 68,
            stats: { strength: 44, intelligence: 22, agility: 11, vitality: 53, willpower: 42 },
            resists: { fire: 1, ice: 0.5, lightning: 1, earth: 1, dark: 1, holy: 2 },
            sorts: [Spell.getSpell("debuffStrength7")],
            lootTable: []
        },
        {
            nom: "Bourreau démoniaque",
            id: "bourreauDemoniaque",
            niveau: 68,
            stats: { strength: 42, intelligence: 22, agility: 33, vitality: 42, willpower: 33 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("debuffAgility7")],
            lootTable: [{item: Item.getItem("mediumArmor8"), chance: 0.1}]
        },
        {
            nom: "Araignée mange-chair",
            id: "araigneeMangeChair",
            niveau: 69,
            stats: { strength: 29, intelligence: 20, agility: 49, vitality: 38, willpower: 38 },
            resists: { fire: 2, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [],
            lootTable: []
        },
        {
            nom: "Élémentaire de feu majeur",
            id: "elementaireFeuMajeur",
            niveau: 69,
            stats: { strength: 38, intelligence: 49, agility: 20, vitality: 29, willpower: 38 },
            resists: { fire: 0, ice: 2, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("fireTarget7"), Spell.getSpell("fireAoe7")],
            lootTable: [{item: Item.getItem("baton8"), chance: 0.1}]
        },
        {
            nom: "Troll squelette",
            id: "trollSquelette",
            niveau: 70,
            stats: { strength: 44, intelligence: 28, agility: 18, vitality: 46, willpower: 44 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 2 },
            sorts: [Spell.getSpell("darkTarget8")],
            lootTable: [{item: Item.getItem("hache9"), chance: 0.1}]
        },
        {
            nom: "Élu des démons",
            id: "eluDemons",
            niveau: 70,
            stats: { strength: 50, intelligence: 28, agility: 28, vitality: 46, willpower: 28 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 0.5 },
            sorts: [Spell.getSpell("healTarget8")],
            lootTable: []
        },
        {
            nom: "Scorpion abyssal",
            id: "scorpionAbyssal",
            niveau: 71,
            stats: { strength: 42, intelligence: 33, agility: 33, vitality: 33, willpower: 41 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [],
            lootTable: []
        },
        {
            nom: "Guerrier orc du chaos",
            id: "guerrierOrcChaos",
            niveau: 71,
            stats: { strength: 50, intelligence: 25, agility: 25, vitality: 49, willpower: 33 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("buffVitality8")],
            lootTable: [{item: Item.getItem("heavyArmor9"), chance: 0.1}]
        },
        {
            nom: "Goule éternelle",
            id: "gouleEternelle",
            niveau: 72,
            stats: { strength: 38, intelligence: 31, agility: 16, vitality: 52, willpower: 47 },
            resists: { fire: 1, ice: 0.5, lightning: 1, earth: 1, dark: 1, holy: 2 },
            sorts: [Spell.getSpell("debuffVitality8"), Spell.getSpell("darkAoe8")],
            lootTable: [{item: Item.getItem("baton9"), chance: 0.1}]
        },
        {
            nom: "Serviteur du Mal Absolu",
            id: "serviteurMalAbsolu",
            niveau: 72,
            stats: { strength: 47, intelligence: 23, agility: 38, vitality: 45, willpower: 31 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("buffWillpower8")],
            lootTable: [{item: Item.getItem("sword9"), chance: 0.1}]
        },
        {
            nom: "Warg piétine-âmes",
            id: "wargPietineAmes",
            niveau: 73,
            stats: { strength: 58, intelligence: 21, agility: 21, vitality: 50, willpower: 36 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [],
            lootTable: []
        },
        {
            nom: "Élémentaire de glace majeur",
            id: "elementaireGlaceMajeur",
            niveau: 73,
            stats: { strength: 36, intelligence: 49, agility: 29, vitality: 36, willpower: 36 },
            resists: { fire: 2, ice: 0, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("iceTarget8"), Spell.getSpell("iceAoe8")],
            lootTable: [{item: Item.getItem("magicArmor9"), chance: 0.1}]
        },
        {
            nom: "Éternel sans-âme",
            id: "eternelSansAme",
            niveau: 74,
            stats: { strength: 48, intelligence: 21, agility: 21, vitality: 50, willpower: 48 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 2 },
            sorts: [Spell.getSpell("debuffAgility8"), Spell.getSpell("healAoe8")],
            lootTable: [{item: Item.getItem("battleRobe9"), chance: 0.1}]
        },
        {
            nom: "Champion invaincu",
            id: "championInvaincu",
            niveau: 74,
            stats: { strength: 59, intelligence: 27, agility: 34, vitality: 41, willpower: 27 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 0.5 },
            sorts: [Spell.getSpell("buffStrength8")],
            lootTable: [{item: Item.getItem("mediumArmor9"), chance: 0.1}]
        },
        {
            nom: "Loup spectral",
            id: "loupSpectral",
            niveau: 75,
            stats: { strength: 44, intelligence: 32, agility: 50, vitality: 32, willpower: 32 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [],
            lootTable: []
        },
        {
            nom: "Hobgobelin du chaos",
            id: "hobgobelinChaos",
            niveau: 75,
            stats: { strength: 37, intelligence: 32, agility: 47, vitality: 37, willpower: 37 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [],
            lootTable: [{item: Item.getItem("sword9"), chance: 0.1}]
        },
        {
            nom: "Seigneur vampire",
            id: "seigneurVampire",
            niveau: 76,
            stats: { strength: 32, intelligence: 49, agility: 22, vitality: 42, willpower: 47 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 0.5, holy: 1 },
            sorts: [Spell.getSpell("darkTarget8"), Spell.getSpell("debuffWillpower8")],
            lootTable: [{item: Item.getItem("baton9"), chance: 0.1}]
        },
        {
            nom: "Assassin royal",
            id: "assassinRoyal",
            niveau: 76,
            stats: { strength: 42, intelligence: 32, agility: 49, vitality: 32, willpower: 37 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("buffAgility8")],
            lootTable: [{item: Item.getItem("lightArmor9"), chance: 0.1}]
        },
        {
            nom: "Grizzli destructeur",
            id: "grizzliDestructeur",
            niveau: 77,
            stats: { strength: 59, intelligence: 25, agility: 30, vitality: 45, willpower: 35 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [],
            lootTable: []
        },
        {
            nom: "Élémentaire de terre majeur",
            id: "elementaireTerreMajeur",
            niveau: 77,
            stats: { strength: 47, intelligence: 40, agility: 30, vitality: 47, willpower: 30 },
            resists: { fire: 1, ice: 1, lightning: 2, earth: 0, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("earthTarget8"), Spell.getSpell("earthAoe8")],
            lootTable: []
        },
        {
            nom: "Âme vorace",
            id: "ameVorace",
            niveau: 78,
            stats: { strength: 20, intelligence: 45, agility: 43, vitality: 43, willpower: 45 },
            resists: { fire: 1, ice: 0.5, lightning: 1, earth: 1, dark: 1, holy: 2 },
            sorts: [Spell.getSpell("iceTarget8"), Spell.getSpell("debuffStrength8")],
            lootTable: []
        },
        {
            nom: "Archinécromant",
            id: "archinecromant",
            niveau: 78,
            stats: { strength: 30, intelligence: 43, agility: 30, vitality: 40, willpower: 53 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("darkAoe8"), Spell.getSpell("debuffVitality8")],
            lootTable: [{item: Item.getItem("robe9"), chance: 0.1}]
        },
        {
            nom: "Basilic tremble-monde",
            id: "basilicTrembleMonde",
            niveau: 79,
            stats: { strength: 43, intelligence: 28, agility: 28, vitality: 51, willpower: 48 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 0.5, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("debuffAgility8")],
            lootTable: []
        },
        {
            nom: "Troll du chaos",
            id: "trollChaos",
            niveau: 79,
            stats: { strength: 58, intelligence: 23, agility: 33, vitality: 51, willpower: 33 },
            resists: { fire: 2, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [],
            lootTable: [{item: Item.getItem("hache9"), chance: 0.1}]
        },
        {
            nom: "Troll momifié",
            id: "trollMomifie",
            niveau: 80,
            stats: { strength: 47, intelligence: 32, agility: 23, vitality: 52, willpower: 50 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 2 },
            sorts: [Spell.getSpell("debuffIntelligence9")],
            lootTable: []
        },
        {
            nom: "Cavalier maudit",
            id: "cavalierMaudit",
            niveau: 80,
            stats: { strength: 47, intelligence: 32, agility: 28, vitality: 50, willpower: 47 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 0.5, holy: 1 },
            sorts: [Spell.getSpell("darkTarget9"), Spell.getSpell("buffVitality9")],
            lootTable: [{item: Item.getItem("heavyArmor10"), chance: 0.1}]
        },
        {
            nom: "Manticore brûleterre",
            id: "manticoreBruleterre",
            niveau: 81,
            stats: { strength: 55, intelligence: 37, agility: 32, vitality: 50, willpower: 32 },
            resists: { fire: 0.5, ice: 2, lightning: 0.5, earth: 1, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("fireAoe9"), Spell.getSpell("healTarget9")],
            lootTable: [{item: Item.getItem("sword10"), chance: 0.1}]
        },
        {
            nom: "Élémentaire de foudre majeur",
            id: "elementaireFoudreMajeur",
            niveau: 81,
            stats: { strength: 37, intelligence: 45, agility: 40, vitality: 37, willpower: 47 },
            resists: { fire: 1, ice: 1, lightning: 0, earth: 2, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("lightningTarget9"), Spell.getSpell("lightningAoe9")],
            lootTable: []
        },
        {
            nom: "Démonosaure",
            id: "demonosaure",
            niveau: 82,
            stats: { strength: 48, intelligence: 26, agility: 26, vitality: 55, willpower: 53 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [],
            lootTable: []
        },
        {
            nom: "Berserker adorateur du mal",
            id: "berserkerAdorateurMal",
            niveau: 82,
            stats: { strength: 59, intelligence: 26, agility: 35, vitality: 53, willpower: 35 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 0.5 },
            sorts: [Spell.getSpell("buffStrength9")],
            lootTable: [{item: Item.getItem("mediumArmor10"), chance: 0.1}]
        },
        {
            nom: "Chimère traîneflammes",
            id: "chimereTraineflammes",
            niveau: 83,
            stats: { strength: 55, intelligence: 33, agility: 46, vitality: 38, willpower: 38 },
            resists: { fire: 0.5, ice: 2, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("fireTarget9"), Spell.getSpell("buffWillpower9")],
            lootTable: [{item: Item.getItem("baton10"), chance: 0.1}]
        },
        {
            nom: "Cyclope-démon",
            id: "cyclopeDemon",
            niveau: 83,
            stats: { strength: 64, intelligence: 25, agility: 21, vitality: 62, willpower: 38 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 2, dark: 1, holy: 1 },
            sorts: [],
            lootTable: []
        },
        {
            nom: "Dragon rouge",
            id: "dragonRouge",
            niveau: 84,
            stats: { strength: 45, intelligence: 44, agility: 41, vitality: 41, willpower: 41 },
            resists: { fire: 0.5, ice: 2, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("fireAoe9")],
            lootTable: [{item: Item.getItem("magicArmor10"), chance: 0.1}]
        },
        {
            nom: "Adorateur du Mal Absolu",
            id: "adorateurMalAbsolu",
            niveau: 84,
            stats: { strength: 36, intelligence: 53, agility: 41, vitality: 41, willpower: 41 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 2, holy: 0.5 },
            sorts: [Spell.getSpell("holyAoe9"), Spell.getSpell("healTarget9")],
            lootTable: [{item: Item.getItem("robe10"), chance: 0.1}]
        },
        {
            nom: "Griffon embrase-monde",
            id: "griffonEmbraseMonde",
            niveau: 85,
            stats: { strength: 55, intelligence: 36, agility: 56, vitality: 36, willpower: 31 },
            resists: { fire: 0.5, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("buffIntelligence9")],
            lootTable: [{item: Item.getItem("sword10"), chance: 0.1}]
        },
        {
            nom: "Élémentaire de ténèbres majeur",
            id: "elementaireTenebresMajeur",
            niveau: 85,
            stats: { strength: 39, intelligence: 56, agility: 31, vitality: 36, willpower: 52 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 0, holy: 2 },
            sorts: [Spell.getSpell("darkTarget9"), Spell.getSpell("darkAoe9")],
            lootTable: []
        },
        {
            nom: "Centaure démoniaque",
            id: "centaureDemoniaque",
            niveau: 86,
            stats: { strength: 55, intelligence: 33, agility: 39, vitality: 53, willpower: 36 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 2, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("debuffAgility9")],
            lootTable: [{item: Item.getItem("hache10"), chance: 0.1}]
        },
        {
            nom: "Avatar du vide",
            id: "avatarVide",
            niveau: 86,
            stats: { strength: 53, intelligence: 28, agility: 47, vitality: 44, willpower: 44 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 0.5 },
            sorts: [Spell.getSpell("buffAgility9")],
            lootTable: []
        },
        {
            nom: "Wyverne frappe-tonnerre",
            id: "wyverneFrappeTonnerre",
            niveau: 87,
            stats: { strength: 50, intelligence: 36, agility: 42, vitality: 48, willpower: 42 },
            resists: { fire: 1, ice: 1, lightning: 0.5, earth: 1, dark: 1, holy: 1 },
            sorts: [],
            lootTable: []
        },
        {
            nom: "Chaman gobelin de la lune",
            id: "chamanGobelinLune",
            niveau: 87,
            stats: { strength: 31, intelligence: 53, agility: 45, vitality: 36, willpower: 53 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("buffIntelligence9"), Spell.getSpell("healTarget9")],
            lootTable: [{item: Item.getItem("battleRobe10"), chance: 0.1}]
        },
        {
            nom: "Dragon blanc",
            id: "dragonBlanc",
            niveau: 88,
            stats: { strength: 42, intelligence: 45, agility: 43, vitality: 45, willpower: 45 },
            resists: { fire: 2, ice: 0.5, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("iceAoe9")],
            lootTable: [{item: Item.getItem("lightArmor10"), chance: 0.1}]
        },
        {
            nom: "Titan intact",
            id: "titanIntact",
            niveau: 88,
            stats: { strength: 56, intelligence: 34, agility: 28, vitality: 54, willpower: 48 },
            resists: { fire: 1, ice: 0.5, lightning: 1, earth: 0.5, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("buffStrength9")],
            lootTable: [{item: Item.getItem("hache10"), chance: 0.1}]
        },
        {
            nom: "Hiérosphinx",
            id: "hierosphinx",
            niveau: 89,
            stats: { strength: 40, intelligence: 57, agility: 34, vitality: 34, willpower: 57 },
            resists: { fire: 1, ice: 1, lightning: 0.5, earth: 1, dark: 1, holy: 0.5 },
            sorts: [Spell.getSpell("fireAoe9"), Spell.getSpell("healAoe9")],
            lootTable: [{item: Item.getItem("baton10"), chance: 0.1}]
        },
        {
            nom: "Élémentaire de lumière majeur",
            id: "elementaireLumiereMajeur",
            niveau: 89,
            stats: { strength: 37, intelligence: 54, agility: 40, vitality: 40, willpower: 51 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 2, holy: 0 },
            sorts: [Spell.getSpell("holyTarget3"), Spell.getSpell("holyAoe9")],
            lootTable: []
        },
        {
            nom: "Diable sans cœur",
            id: "diableSansCoeur",
            niveau: 90,
            stats: { strength: 33, intelligence: 57, agility: 56, vitality: 41, willpower: 41 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 0.5, holy: 1 },
            sorts: [Spell.getSpell("debuffIntelligence10"), Spell.getSpell("darkTarget10")],
            lootTable: []
        },
        {
            nom: "Golem d’obsidienne",
            id: "golemObsidienne",
            niveau: 90,
            stats: { strength: 60, intelligence: 33, agility: 33, vitality: 58, willpower: 44 },
            resists: { fire: 1, ice: 2, lightning: 0.5, earth: 0.5, dark: 1, holy: 1 },
            sorts: [],
            lootTable: [{item: Item.getItem("hache11"), chance: 0.1}]
        },
        {
            nom: "Naga perce-âme",
            id: "nagaPerceAme",
            niveau: 91,
            stats: { strength: 50, intelligence: 58, agility: 53, vitality: 30, willpower: 39 },
            resists: { fire: 1, ice: 1, lightning: 2, earth: 1, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("debuffWillpower10"), Spell.getSpell("buffVitality10")],
            lootTable: [{item: Item.getItem("battleRobe11"), chance: 0.1}]
        },
        {
            nom: "Chaman orc du chaos",
            id: "chamanOrcChaos",
            niveau: 91,
            stats: { strength: 39, intelligence: 55, agility: 39, vitality: 50, willpower: 47 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("fireTarget10"), Spell.getSpell("healTarget10")],
            lootTable: [{item: Item.getItem("magicArmor11"), chance: 0.1}]
        },
        {
            nom: "Dragon vert",
            id: "dragonVert",
            niveau: 92,
            stats: { strength: 45, intelligence: 49, agility: 45, vitality: 48, willpower: 45 },
            resists: { fire: 1, ice: 1, lightning: 2, earth: 0.5, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("earthAoe10")],
            lootTable: []
        },
        {
            nom: "Émissaire du Mal Absolu",
            id: "emissaireMalAbsolu",
            niveau: 92,
            stats: { strength: 39, intelligence: 58, agility: 51, vitality: 45, willpower: 39 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 0.5 },
            sorts: [Spell.getSpell("debuffVitality10"), Spell.getSpell("buffWillpower10")],
            lootTable: [{item: Item.getItem("robe11"), chance: 0.1}]
        },
        {
            nom: "Hippogriffe pluie-de-braises",
            id: "hippogriffePluieBraises",
            niveau: 93,
            stats: { strength: 50, intelligence: 45, agility: 45, vitality: 49, willpower: 45 },
            resists: { fire: 0.5, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [],
            lootTable: []
        },
        {
            nom: "Élémentaire d’énergie majeur",
            id: "elementaireEnergieMajeur",
            niveau: 93,
            stats: { strength: 45, intelligence: 57, agility: 56, vitality: 38, willpower: 38 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("windTarget10"), Spell.getSpell("windAoe10")],
            lootTable: []
        },
        {
            nom: "Archidémon",
            id: "archidemon",
            niveau: 94,
            stats: { strength: 52, intelligence: 49, agility: 43, vitality: 46, willpower: 46 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 0.5, holy: 2 },
            sorts: [Spell.getSpell("darkAoe10")],
            lootTable: [{item: Item.getItem("sword11"), chance: 0.1}]
        },
        {
            nom: "Golem d’adamantium",
            id: "golemAdamantium",
            niveau: 94,
            stats: { strength: 61, intelligence: 40, agility: 34, vitality: 61, willpower: 40 },
            resists: { fire: 1, ice: 1, lightning: 2, earth: 1, dark: 1, holy: 1 },
            sorts: [],
            lootTable: [{item: Item.getItem("heavyArmor11"), chance: 0.1}]
        },
        {
            nom: "Archiliche",
            id: "archiliche",
            niveau: 95,
            stats: { strength: 31, intelligence: 63, agility: 37, vitality: 43, willpower: 64 },
            resists: { fire: 1, ice: 0.5, lightning: 1, earth: 1, dark: 1, holy: 2 },
            sorts: [Spell.getSpell("iceAoe10"), Spell.getSpell("debuffStrength10")],
            lootTable: [{item: Item.getItem("baton11"), chance: 0.1}]
        },
        {
            nom: "Ogre élu du chaos",
            id: "ogreEluChaos",
            niveau: 95,
            stats: { strength: 66, intelligence: 34, agility: 34, vitality: 61, willpower: 43 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 2, dark: 1, holy: 1 },
            sorts: [],
            lootTable: [{item: Item.getItem("hache11"), chance: 0.1}]
        },
        {
            nom: "Dragon bleu",
            id: "dragonBleu",
            niveau: 96,
            stats: { strength: 52, intelligence: 52, agility: 50, vitality: 43, willpower: 43 },
            resists: { fire: 1, ice: 1, lightning: 0.5, earth: 2, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("lightningAoe10")],
            lootTable: []
        },
        {
            nom: "Élu du Mal Absolu",
            id: "eluMalAbsolu",
            niveau: 96,
            stats: { strength: 49, intelligence: 49, agility: 50, vitality: 46, willpower: 46 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 1, holy: 0.5 },
            sorts: [Spell.getSpell("buffStrength10"), Spell.getSpell("buffAgility10")],
            lootTable: [{item: Item.getItem("lightArmor11"), chance: 0.1}]
        },
        {
            nom: "Roi béhémoth",
            id: "roiBehemoth",
            niveau: 97,
            stats: { strength: 62, intelligence: 47, agility: 43, vitality: 47, willpower: 43 },
            resists: { fire: 2, ice: 1, lightning: 0.5, earth: 1, dark: 1, holy: 1 },
            sorts: [],
            lootTable: []
        },
        {
            nom: "Élémentaire d’eau majeur",
            id: "elementaireEauMajeur",
            niveau: 97,
            stats: { strength: 43, intelligence: 60, agility: 43, vitality: 37, willpower: 59 },
            resists: { fire: 0.5, ice: 1, lightning: 2, earth: 1, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("healTarget10"), Spell.getSpell("healAoe10")],
            lootTable: []
        },
        {
            nom: "Archange diabolique",
            id: "archangeDiabolique",
            niveau: 98,
            stats: { strength: 41, intelligence: 56, agility: 47, vitality: 53, willpower: 47 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 1, dark: 2, holy: 0.5 },
            sorts: [Spell.getSpell("holyAoe10"), Spell.getSpell("debuffWillpower10")],
            lootTable: [{item: Item.getItem("mediumArmor11"), chance: 0.1}]
        },
        {
            nom: "Golem de sang",
            id: "golemSang",
            niveau: 98,
            stats: { strength: 53, intelligence: 37, agility: 37, vitality: 64, willpower: 53 },
            resists: { fire: 1, ice: 2, lightning: 1, earth: 1, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("debuffVitality10")],
            lootTable: []
        },
        {
            nom: "Roi satyr",
            id: "roiSatyr",
            niveau: 99,
            stats: { strength: 47, intelligence: 66, agility: 51, vitality: 41, willpower: 41 },
            resists: { fire: 1, ice: 1, lightning: 1, earth: 0.5, dark: 1, holy: 1 },
            sorts: [Spell.getSpell("buffIntelligence10"), Spell.getSpell("debuffIntelligence10")],
            lootTable: [{item: Item.getItem("baton11"), chance: 0.1}]
        },
        {
            nom: "Démon colossal",
            id: "demonColossal",
            niveau: 99,
            stats: { strength: 66, intelligence: 35, agility: 35, vitality: 66, willpower: 44 },
            resists: { fire: 1, ice: 1, lightning: 2, earth: 2, dark: 1, holy: 1 },
            sorts: [],
            lootTable: [{item: Item.getItem("sword11"), chance: 0.1}]
        }
    ]

    constructor(nom, niveau, stats, resists, sorts, lootTable = []) {
        this.nom = nom;
        this.niveau = niveau;
        this.stats = stats;
        this.statsTemp = { ...this.stats };
        this.statusEffects = {};
        this.resists = resists;
        this.sorts = sorts;
        this.hp = 10 * stats.vitality;
        this.maxhp = this.hp;
        this.mp = 10 * stats.willpower;
        this.maxmp = this.mp;
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
        if (niveau >= 0 && niveau <= 9) rez = Item.getItem("rez2");
        else if (niveau >= 10 && niveau <= 19) rez = Item.getItem("rez3");
        else if (niveau >= 20 && niveau <= 29) rez = Item.getItem("rez4");
        else if (niveau >= 30 && niveau <= 39) rez = Item.getItem("rez5");
        else if (niveau >= 40 && niveau <= 49) rez = Item.getItem("rez6");
        else if (niveau >= 50 && niveau <= 59) rez = Item.getItem("rez7");
        else if (niveau >= 60 && niveau <= 69) rez = Item.getItem("rez8");
        else if (niveau >= 70 && niveau <= 79) rez = Item.getItem("rez9");
        else if (niveau >= 80 && niveau <= 89) rez = Item.getItem("rez10");
        else if (niveau >= 90 && niveau <= 99) rez = Item.getItem("rez11");
        this.lootTable.push({item: rez, chance: 0.1});
    }

    static getMob(id) {
        return this.mobList.find(item => item.id === id);
    }

    static popMob() {
        if ( document.getElementById("magicShop") ) document.getElementById("magicShop").remove();
        if ( document.getElementById("sellShop") ) document.getElementById("sellShop").remove();
        if ( chars.every(char => char.hp <= 0) || abandonned === true ) {
            window.location.href = "index.html";
            return;
        }
        const statsDifferentes = chars.some(char => 
            JSON.stringify(char.stats) !== JSON.stringify(char.statsTemp)
        );
        if (statsDifferentes) {
            tempoMsg = 0;
            addMessageToLog("Veuillez terminer l'attribution des points en cours ou l'abandonner avant de continuer.");
            return;
        }
        mobs = []; msgLog.innerHTML = "";
        if ( document.getElementById("ennemyTargets") ) { document.getElementById("ennemyTargets").remove() };
        let lvlTeam = chars.reduce((sum, char) => sum + char.niveau, 0);
        const eligibleMobs = Mob.mobList.filter(mobData => mobData.niveau >= lvlTeam / chars.length - 3 && mobData.niveau <= lvlTeam / chars.length + 3);
        let mobCount = 1 + Math.floor(Math.random() * 4);
        while ( mobs.reduce((sum, mob) => sum + mob.niveau, 0) < lvlTeam ) {
            let mobData = eligibleMobs[Math.floor(Math.random() * eligibleMobs.length)];
            mobs.push(new Mob(mobData.nom, mobData.niveau, mobData.stats, mobData.resists, mobData.sorts, mobData.lootTable));
            if (mobs.length >= mobCount) break;
        }
        mobs.sort((a, b) => a.nom.localeCompare(b.nom));
        let ennemyList = "";
        let ennemyTargets = document.createElement("div"); ennemyTargets.id = "ennemyTargets";
        for ( let i = 0 ; i < mobs.length ; i++ ) {
            ennemyList += ` ${mobs[i].nom}`;
            if (i < mobs.length ) ennemyList += ", ";
        }
        if ( mobs.length === 1 ) {
            ennemyList = `Un(e) ${mobs[0].nom} apparaît dans la salle`;
        } else {
            ennemyList = `Les ennemis suivants apparaissent dans la salle :`;
            for ( let i = 0 ; i < mobs.length ; i++ ) {
                ennemyList += ` ${mobs[i].nom}`;
                if (i < mobs.length - 1 ) ennemyList += ", ";
            }
        }
        ennemyList += ` ! <button id="fightBtn">Combattre</button>`
        ennemyTargets.innerHTML = ennemyList;
        msgLog.appendChild(ennemyTargets);
        document.getElementById("fightBtn").addEventListener("click", fight);
    }
};