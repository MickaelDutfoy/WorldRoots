class Spell {
    static grimoire = {
        windTarget1: new Spell("Rafale", "windTarget1", 3, "attack", 10, "none", 1),
        windTarget2: new Spell("Rafale +", "windTarget2", 6, "attack", 20, "none", 1),
        windTarget3: new Spell("Rafale X", "windTarget3", 12, "attack", 40, "none", 1),
        windTarget4: new Spell("Rafale Ω", "windTarget4", 24, "attack", 80, "none", 1),
        windTarget5: new Spell("Rafale ∞", "windTarget5", 48, "attack", 160, "none", 1),

        windAoe1: new Spell("Tornade", "windAoe1", 5, "attack", 9, "none", "all"),
        windAoe2: new Spell("Tornade +", "windAoe2", 10, "attack", 18, "none", "all"),
        windAoe3: new Spell("Tornade X", "windAoe3", 20, "attack", 36, "none", "all"),
        windAoe4: new Spell("Tornade Ω", "windAoe4", 40, "attack", 72, "none", "all"),
        windAoe5: new Spell("Tornade ∞", "windAoe5", 80, "attack", 144, "none", "all"),

        fireTarget1: new Spell("Boule de feu", "fireTarget1", 5, "attack", 15, "feu", 1),
        fireTarget2: new Spell("Boule de feu +", "fireTarget2", 10, "attack", 30, "feu", 1),
        fireTarget3: new Spell("Boule de feu X", "fireTarget3", 20, "attack", 60, "feu", 1),
        fireTarget4: new Spell("Boule de feu Ω", "fireTarget4", 40, "attack", 120, "feu", 1),
        fireTarget5: new Spell("Boule de feu ∞", "fireTarget5", 80, "attack", 240, "feu", 1),

        fireAoe1: new Spell("Vague de flammes", "fireAoe1", 8, "attack", 12, "feu", "all"),
        fireAoe2: new Spell("Vague de flammes +", "fireAoe2", 16, "attack", 24, "feu", "all"),
        fireAoe3: new Spell("Vague de flammes X", "fireAoe3", 32, "attack", 48, "feu", "all"),
        fireAoe4: new Spell("Vague de flammes Ω", "fireAoe4", 64, "attack", 96, "feu", "all"),
        fireAoe5: new Spell("Vague de flammes ∞", "fireAoe5", 128, "attack", 192, "feu", "all"),

        iceTarget1: new Spell("Pieu de glace", "iceTarget1", 5, "attack", 15, "glace", 1),
        iceTarget2: new Spell("Pieu de glace +", "iceTarget2", 10, "attack", 30, "glace", 1),
        iceTarget3: new Spell("Pieu de glace X", "iceTarget3", 20, "attack", 60, "glace", 1),
        iceTarget4: new Spell("Pieu de glace Ω", "iceTarget4", 40, "attack", 120, "glace", 1),
        iceTarget5: new Spell("Pieu de glace ∞", "iceTarget5", 80, "attack", 240, "glace", 1),

        iceAoe1: new Spell("Blizzard", "iceAoe1", 8, "attack", 12, "glace", "all"),
        iceAoe2: new Spell("Blizzard +", "iceAoe2", 16, "attack", 24, "glace", "all"),
        iceAoe3: new Spell("Blizzard X", "iceAoe3", 32, "attack", 48, "glace", "all"),
        iceAoe4: new Spell("Blizzard Ω", "iceAoe4", 64, "attack", 96, "glace", "all"),
        iceAoe5: new Spell("Blizzard ∞", "iceAoe5", 128, "attack", 192, "glace", "all"),

        lightningTarget1: new Spell("Foudre", "lightningTarget1", 5, "attack", 15, "lightningTarget", 1),
        lightningTarget2: new Spell("Foudre +", "lightningTarget2", 10, "attack", 30, "lightningTarget", 1),
        lightningTarget3: new Spell("Foudre X", "lightningTarget3", 20, "attack", 60, "lightningTarget", 1),
        lightningTarget4: new Spell("Foudre Ω", "lightningTarget4", 40, "attack", 120, "lightningTarget", 1),
        lightningTarget5: new Spell("Foudre ∞", "lightningTarget5", 80, "attack", 240, "lightningTarget", 1),

        lightningAoe1: new Spell("Chaîne d'éclairs", "lightningAoe1", 8, "attack", 12, "lightningTarget", "all"),
        lightningAoe2: new Spell("Chaîne d'éclairs +", "lightningAoe2", 16, "attack", 24, "lightningTarget", "all"),
        lightningAoe3: new Spell("Chaîne d'éclairs X", "lightningAoe3", 32, "attack", 48, "lightningTarget", "all"),
        lightningAoe4: new Spell("Chaîne d'éclairs Ω", "lightningAoe4", 64, "attack", 96, "lightningTarget", "all"),
        lightningAoe5: new Spell("Chaîne d'éclairs ∞", "lightningAoe5", 128, "attack", 192, "lightningTarget", "all"),
        
        earthTarget1: new Spell("Racines", "earthTarget1", 5, "attack", 15, "terre", 1),
        earthTarget2: new Spell("Racines +", "earthTarget2", 10, "attack", 30, "terre", 1),
        earthTarget3: new Spell("Racines X", "earthTarget3", 20, "attack", 60, "terre", 1),
        earthTarget4: new Spell("Racines Ω", "earthTarget4", 40, "attack", 120, "terre", 1),
        earthTarget5: new Spell("Racines ∞", "earthTarget5", 80, "attack", 240, "terre", 1),

        earthAoe1: new Spell("Séisme", "earthAoe1", 8, "attack", 12, "terre", "all"),
        earthAoe2: new Spell("Séisme +", "earthAoe2", 16, "attack", 24, "terre", "all"),
        earthAoe3: new Spell("Séisme X", "earthAoe3", 32, "attack", 48, "terre", "all"),
        earthAoe4: new Spell("Séisme Ω", "earthAoe4", 64, "attack", 96, "terre", "all"),
        earthAoe5: new Spell("Séisme ∞", "earthAoe5", 128, "attack", 192, "terre", "all"),

        darkTarget1: new Spell("Vortex", "darkTarget1", 10, "attack", 25, "tenebres", 1),
        darkTarget2: new Spell("Vortex +", "darkTarget2", 20, "attack", 50, "tenebres", 1),
        darkTarget3: new Spell("Vortex X", "darkTarget3", 40, "attack", 100, "tenebres", 1),
        darkTarget4: new Spell("Vortex Ω", "darkTarget4", 80, "attack", 200, "tenebres", 1),
        darkTarget5: new Spell("Vortex ∞", "darkTarget5", 160, "attack", 400, "tenebres", 1),

        darkAoe1: new Spell("Trou noir", "darkAoe1", 15, "attack", 20, "tenebres", "all"),
        darkAoe2: new Spell("Trou noir +", "darkAoe2", 30, "attack", 40, "tenebres", "all"),
        darkAoe3: new Spell("Trou noir X", "darkAoe3", 60, "attack", 80, "tenebres", "all"),
        darkAoe4: new Spell("Trou noir Ω", "darkAoe4", 120, "attack", 160, "tenebres", "all"),
        darkAoe5: new Spell("Trou noir ∞", "darkAoe5", 240, "attack", 320, "tenebres", "all"),

        lightTarget1: new Spell("Bannissement", "lightTarget1", 10, "attack", 25, "lumiere", 1),
        lightTarget2: new Spell("Bannissement +", "lightTarget2", 20, "attack", 50, "lumiere", 1),
        lightTarget3: new Spell("Bannissement X", "lightTarget3", 40, "attack", 100, "lumiere", 1),
        lightTarget4: new Spell("Bannissement Ω", "lightTarget4", 80, "attack", 200, "lumiere", 1),
        lightTarget5: new Spell("Bannissement ∞", "lightTarget5", 160, "attack", 400, "lumiere", 1),

        lightAoe1: new Spell("Pluie solaire", "lightAoe1", 15, "attack", 20, "lumiere", "all"),
        lightAoe2: new Spell("Pluie solaire +", "lightAoe2", 30, "attack", 40, "lumiere", "all"),
        lightAoe3: new Spell("Pluie solaire X", "lightAoe3", 60, "attack", 80, "lumiere", "all"),
        lightAoe4: new Spell("Pluie solaire Ω", "lightAoe4", 120, "attack", 160, "lumiere", "all"),
        lightAoe5: new Spell("Pluie solaire ∞", "lightAoe5", 240, "attack", 320, "lumiere", "all"),

        healTarget1: new Spell("Eau revitalisante", "healTarget1", 10, "heal", 25, "none", 1),
        healTarget2: new Spell("Eau revitalisante +", "healTarget2", 20, "heal", 50, "none", 1),
        healTarget3: new Spell("Eau revitalisante X", "healTarget3", 40, "heal", 100, "none", 1),
        healTarget4: new Spell("Eau revitalisante Ω", "healTarget4", 80, "heal", 200, "none", 1),
        healTarget5: new Spell("Eau revitalisante ∞", "healTarget5", 160, "heal", 400, "none", 1),

        healAoe1: new Spell("Vague de guérison", "healAoe1", 15, "heal", 20, "none", "all"),
        healAoe2: new Spell("Vague de guérison +", "healAoe2", 30, "heal", 40, "none", "all"),
        healAoe3: new Spell("Vague de guérison X", "healAoe3", 60, "heal", 80, "none", "all"),
        healAoe4: new Spell("Vague de guérison Ω", "healAoe4", 120, "heal", 160, "none", "all"),
        healAoe5: new Spell("Vague de guérison ∞", "healAoe5", 240, "heal", 320, "none", "all"),
    };

    constructor(nom, id, mp, type, valeur, element, cible) {
        this.nom = nom;
        this.id = id;
        this.type = type; // "attack" ou "heal"
        this.mp = mp;
        this.valeur = valeur; // "heal", "dégâts", "buff", "arme"
        this.element = element;
        this.cible = cible; // Dégâts pour une arme, soin pour une potion, etc.
    }

    static getSpell(id) {
        return this.grimoire[id]
    }
};