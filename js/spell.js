class Spell {
    static grimoire = {
        rafale1: new Spell("Rafale", "rafale1", 3, "attack", 10, "none", 1),
        rafale2: new Spell("Rafale +", "rafale2", 6, "attack", 20, "none", 1),
        rafale3: new Spell("Rafale X", "rafale3", 12, "attack", 40, "none", 1),
        rafale4: new Spell("Rafale Ω", "rafale4", 24, "attack", 80, "none", 1),
        rafale5: new Spell("Rafale ∞", "rafale5", 48, "attack", 160, "none", 1),

        tornade1: new Spell("Tornade", "tornade1", 5, "attack", 9, "none", "all"),
        tornade2: new Spell("Tornade +", "tornade2", 10, "attack", 18, "none", "all"),
        tornade3: new Spell("Tornade X", "tornade3", 20, "attack", 36, "none", "all"),
        tornade4: new Spell("Tornade Ω", "tornade4", 40, "attack", 72, "none", "all"),
        tornade5: new Spell("Tornade ∞", "tornade5", 80, "attack", 144, "none", "all"),

        bouleDeFeu1: new Spell("Boule de feu", "bouleDeFeu1", 5, "attack", 15, "feu", 1),
        bouleDeFeu2: new Spell("Boule de feu +", "bouleDeFeu2", 10, "attack", 30, "feu", 1),
        bouleDeFeu3: new Spell("Boule de feu X", "bouleDeFeu3", 20, "attack", 60, "feu", 1),
        bouleDeFeu4: new Spell("Boule de feu Ω", "bouleDeFeu4", 40, "attack", 120, "feu", 1),
        bouleDeFeu5: new Spell("Boule de feu ∞", "bouleDeFeu5", 80, "attack", 240, "feu", 1),

        vagueDeFlammes1: new Spell("Vague de flammes", "vagueDeFlammes1", 8, "attack", 12, "feu", "all"),
        vagueDeFlammes2: new Spell("Vague de flammes +", "vagueDeFlammes2", 16, "attack", 24, "feu", "all"),
        vagueDeFlammes3: new Spell("Vague de flammes X", "vagueDeFlammes3", 32, "attack", 48, "feu", "all"),
        vagueDeFlammes4: new Spell("Vague de flammes Ω", "vagueDeFlammes4", 64, "attack", 96, "feu", "all"),
        vagueDeFlammes5: new Spell("Vague de flammes ∞", "vagueDeFlammes5", 128, "attack", 192, "feu", "all"),

        pieuDeGlace1: new Spell("Pieu de glace", "pieuDeGlace1", 5, "attack", 15, "glace", 1),
        pieuDeGlace2: new Spell("Pieu de glace +", "pieuDeGlace2", 10, "attack", 30, "glace", 1),
        pieuDeGlace3: new Spell("Pieu de glace X", "pieuDeGlace3", 20, "attack", 60, "glace", 1),
        pieuDeGlace4: new Spell("Pieu de glace Ω", "pieuDeGlace4", 40, "attack", 120, "glace", 1),
        pieuDeGlace5: new Spell("Pieu de glace ∞", "pieuDeGlace5", 80, "attack", 240, "glace", 1),

        blizzard1: new Spell("Blizzard", "blizzard1", 8, "attack", 12, "glace", "all"),
        blizzard2: new Spell("Blizzard +", "blizzard2", 16, "attack", 24, "glace", "all"),
        blizzard3: new Spell("Blizzard X", "blizzard3", 32, "attack", 48, "glace", "all"),
        blizzard4: new Spell("Blizzard Ω", "blizzard4", 64, "attack", 96, "glace", "all"),
        blizzard5: new Spell("Blizzard ∞", "blizzard5", 128, "attack", 192, "glace", "all"),

        foudre1: new Spell("Foudre", "foudre1", 5, "attack", 15, "foudre", 1),
        foudre2: new Spell("Foudre +", "foudre2", 10, "attack", 30, "foudre", 1),
        foudre3: new Spell("Foudre X", "foudre3", 20, "attack", 60, "foudre", 1),
        foudre4: new Spell("Foudre Ω", "foudre4", 40, "attack", 120, "foudre", 1),
        foudre5: new Spell("Foudre ∞", "foudre5", 80, "attack", 240, "foudre", 1),

        chaineEclairs1: new Spell("Chaîne d'éclairs", "chaineEclairs1", 8, "attack", 12, "foudre", "all"),
        chaineEclairs2: new Spell("Chaîne d'éclairs +", "chaineEclairs2", 16, "attack", 24, "foudre", "all"),
        chaineEclairs3: new Spell("Chaîne d'éclairs X", "chaineEclairs3", 32, "attack", 48, "foudre", "all"),
        chaineEclairs4: new Spell("Chaîne d'éclairs Ω", "chaineEclairs4", 64, "attack", 96, "foudre", "all"),
        chaineEclairs5: new Spell("Chaîne d'éclairs ∞", "chaineEclairs5", 128, "attack", 192, "foudre", "all"),
        
        racines1: new Spell("Racines", "racines1", 5, "attack", 15, "terre", 1),
        racines2: new Spell("Racines +", "racines2", 10, "attack", 30, "terre", 1),
        racines3: new Spell("Racines X", "racines3", 20, "attack", 60, "terre", 1),
        racines4: new Spell("Racines Ω", "racines4", 40, "attack", 120, "terre", 1),
        racines5: new Spell("Racines ∞", "racines5", 80, "attack", 240, "terre", 1),

        seisme1: new Spell("Séisme", "seisme1", 8, "attack", 12, "terre", "all"),
        seisme2: new Spell("Séisme +", "seisme2", 16, "attack", 24, "terre", "all"),
        seisme3: new Spell("Séisme X", "seisme3", 32, "attack", 48, "terre", "all"),
        seisme4: new Spell("Séisme Ω", "seisme4", 64, "attack", 96, "terre", "all"),
        seisme5: new Spell("Séisme ∞", "seisme5", 128, "attack", 192, "terre", "all"),

        vortex1: new Spell("Vortex", "vortex1", 10, "attack", 25, "tenebres", 1),
        vortex2: new Spell("Vortex +", "vortex2", 20, "attack", 50, "tenebres", 1),
        vortex3: new Spell("Vortex X", "vortex3", 40, "attack", 100, "tenebres", 1),
        vortex4: new Spell("Vortex Ω", "vortex4", 80, "attack", 200, "tenebres", 1),
        vortex5: new Spell("Vortex ∞", "vortex5", 160, "attack", 400, "tenebres", 1),

        trouNoir1: new Spell("Trou noir", "trouNoir1", 15, "attack", 20, "tenebres", "all"),
        trouNoir2: new Spell("Trou noir +", "trouNoir2", 30, "attack", 40, "tenebres", "all"),
        trouNoir3: new Spell("Trou noir X", "trouNoir3", 60, "attack", 80, "tenebres", "all"),
        trouNoir4: new Spell("Trou noir Ω", "trouNoir4", 120, "attack", 160, "tenebres", "all"),
        trouNoir5: new Spell("Trou noir ∞", "trouNoir5", 240, "attack", 320, "tenebres", "all"),

        bannissement1: new Spell("Bannissement", "bannissement1", 10, "attack", 25, "lumiere", 1),
        bannissement2: new Spell("Bannissement +", "bannissement2", 20, "attack", 50, "lumiere", 1),
        bannissement3: new Spell("Bannissement X", "bannissement3", 40, "attack", 100, "lumiere", 1),
        bannissement4: new Spell("Bannissement Ω", "bannissement4", 80, "attack", 200, "lumiere", 1),
        bannissement5: new Spell("Bannissement ∞", "bannissement5", 160, "attack", 400, "lumiere", 1),

        pluieSolaire1: new Spell("Pluie solaire", "pluieSolaire1", 15, "attack", 20, "lumiere", "all"),
        pluieSolaire2: new Spell("Pluie solaire +", "pluieSolaire2", 30, "attack", 40, "lumiere", "all"),
        pluieSolaire3: new Spell("Pluie solaire X", "pluieSolaire3", 60, "attack", 80, "lumiere", "all"),
        pluieSolaire4: new Spell("Pluie solaire Ω", "pluieSolaire4", 120, "attack", 160, "lumiere", "all"),
        pluieSolaire5: new Spell("Pluie solaire ∞", "pluieSolaire5", 240, "attack", 320, "lumiere", "all"),

        eauRevitalisante1: new Spell("Eau revitalisante", "eauRevitalisante1", 10, "heal", 25, "none", 1),
        eauRevitalisante2: new Spell("Eau revitalisante +", "eauRevitalisante2", 20, "heal", 50, "none", 1),
        eauRevitalisante3: new Spell("Eau revitalisante X", "eauRevitalisante3", 40, "heal", 100, "none", 1),
        eauRevitalisante4: new Spell("Eau revitalisante Ω", "eauRevitalisante4", 80, "heal", 200, "none", 1),
        eauRevitalisante5: new Spell("Eau revitalisante ∞", "eauRevitalisante5", 160, "heal", 400, "none", 1),

        vagueDeGuerison1: new Spell("Vague de guérison", "vagueDeGuerison1", 15, "heal", 20, "none", "all"),
        vagueDeGuerison2: new Spell("Vague de guérison +", "vagueDeGuerison2", 30, "heal", 40, "none", "all"),
        vagueDeGuerison3: new Spell("Vague de guérison X", "vagueDeGuerison3", 60, "heal", 80, "none", "all"),
        vagueDeGuerison4: new Spell("Vague de guérison Ω", "vagueDeGuerison4", 120, "heal", 160, "none", "all"),
        vagueDeGuerison5: new Spell("Vague de guérison ∞", "vagueDeGuerison5", 240, "heal", 320, "none", "all"),
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