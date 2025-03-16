class Spell {
    static grimoire = {
        windTarget1: new Spell("Rafale", "windTarget1", 4, "attack", 9, "none", 1),
        windTarget2: new Spell("Rafale +", "windTarget2", 8, "attack", 18, "none", 1),
        windTarget3: new Spell("Rafale α", "windTarget3", 12, "attack", 27, "none", 1),
        windTarget4: new Spell("Rafale β", "windTarget4", 16, "attack", 36, "none", 1),
        windTarget5: new Spell("Rafale X", "windTarget5", 20, "attack", 45, "none", 1),
        windTarget6: new Spell("Rafale Δ", "windTarget6", 24, "attack", 54, "none", 1),
        windTarget7: new Spell("Rafale Σ", "windTarget7", 28, "attack", 63, "none", 1),
        windTarget8: new Spell("Rafale Φ", "windTarget8", 32, "attack", 72, "none", 1),
        windTarget9: new Spell("Rafale Ω", "windTarget9", 36, "attack", 81, "none", 1),
        windTarget10: new Spell("Rafale ∞", "windTarget10", 40, "attack", 90, "none", 1),

        windAoe1: new Spell("Tornade", "windAoe1", 5, "attack", 8, "none", "all"),
        windAoe2: new Spell("Tornade +", "windAoe2", 10, "attack", 16, "none", "all"),
        windAoe3: new Spell("Tornade α", "windAoe3", 15, "attack", 24, "none", "all"),
        windAoe4: new Spell("Tornade β", "windAoe4", 20, "attack", 32, "none", "all"),
        windAoe5: new Spell("Tornade X", "windAoe5", 25, "attack", 40, "none", "all"),
        windAoe6: new Spell("Tornade Δ", "windAoe6", 30, "attack", 48, "none", "all"),
        windAoe7: new Spell("Tornade Σ", "windAoe7", 35, "attack", 56, "none", "all"),
        windAoe8: new Spell("Tornade Φ", "windAoe8", 40, "attack", 64, "none", "all"),
        windAoe9: new Spell("Tornade Ω", "windAoe9", 45, "attack", 72, "none", "all"),
        windAoe10: new Spell("Tornade ∞", "windAoe10", 50, "attack", 80, "none", "all"),
        
        fireTarget1: new Spell("Brasier", "fireTarget1", 5, "attack", 12, "fire", 1),
        fireTarget2: new Spell("Brasier +", "fireTarget2", 10, "attack", 24, "fire", 1),
        fireTarget3: new Spell("Brasier α", "fireTarget3", 15, "attack", 36, "fire", 1),
        fireTarget4: new Spell("Brasier β", "fireTarget4", 20, "attack", 48, "fire", 1),
        fireTarget5: new Spell("Brasier X", "fireTarget5", 25, "attack", 60, "fire", 1),
        fireTarget6: new Spell("Brasier Δ", "fireTarget6", 30, "attack", 72, "fire", 1),
        fireTarget7: new Spell("Brasier Σ", "fireTarget7", 35, "attack", 84, "fire", 1),
        fireTarget8: new Spell("Brasier Φ", "fireTarget8", 40, "attack", 96, "fire", 1),
        fireTarget9: new Spell("Brasier Ω", "fireTarget9", 45, "attack", 108, "fire", 1),
        fireTarget10: new Spell("Brasier ∞", "fireTarget10", 50, "attack", 120, "fire", 1),        

        fireAoe1: new Spell("Météores", "fireAoe1", 6, "attack", 11, "fire", "all"),
        fireAoe2: new Spell("Météores +", "fireAoe2", 12, "attack", 22, "fire", "all"),
        fireAoe3: new Spell("Météores α", "fireAoe3", 18, "attack", 33, "fire", "all"),
        fireAoe4: new Spell("Météores β", "fireAoe4", 24, "attack", 44, "fire", "all"),
        fireAoe5: new Spell("Météores X", "fireAoe5", 30, "attack", 55, "fire", "all"),
        fireAoe6: new Spell("Météores Δ", "fireAoe6", 36, "attack", 66, "fire", "all"),
        fireAoe7: new Spell("Météores Σ", "fireAoe7", 42, "attack", 77, "fire", "all"),
        fireAoe8: new Spell("Météores Φ", "fireAoe8", 48, "attack", 88, "fire", "all"),
        fireAoe9: new Spell("Météores Ω", "fireAoe9", 54, "attack", 99, "fire", "all"),
        fireAoe10: new Spell("Météores ∞", "fireAoe10", 60, "attack", 110, "fire", "all"),        

        iceTarget1: new Spell("Congélation", "iceTarget1", 5, "attack", 12, "ice", 1),
        iceTarget2: new Spell("Congélation +", "iceTarget2", 10, "attack", 24, "ice", 1),
        iceTarget3: new Spell("Congélation α", "iceTarget3", 15, "attack", 36, "ice", 1),
        iceTarget4: new Spell("Congélation β", "iceTarget4", 20, "attack", 48, "ice", 1),
        iceTarget5: new Spell("Congélation X", "iceTarget5", 25, "attack", 60, "ice", 1),
        iceTarget6: new Spell("Congélation Δ", "iceTarget6", 30, "attack", 72, "ice", 1),
        iceTarget7: new Spell("Congélation Σ", "iceTarget7", 35, "attack", 84, "ice", 1),
        iceTarget8: new Spell("Congélation Φ", "iceTarget8", 40, "attack", 96, "ice", 1),
        iceTarget9: new Spell("Congélation Ω", "iceTarget9", 45, "attack", 108, "ice", 1),
        iceTarget10: new Spell("Congélation ∞", "iceTarget10", 50, "attack", 120, "ice", 1),        

        iceAoe1: new Spell("Blizzard", "iceAoe1", 6, "attack", 11, "ice", "all"),
        iceAoe2: new Spell("Blizzard +", "iceAoe2", 12, "attack", 22, "ice", "all"),
        iceAoe3: new Spell("Blizzard α", "iceAoe3", 18, "attack", 33, "ice", "all"),
        iceAoe4: new Spell("Blizzard β", "iceAoe4", 24, "attack", 44, "ice", "all"),
        iceAoe5: new Spell("Blizzard X", "iceAoe5", 30, "attack", 55, "ice", "all"),
        iceAoe6: new Spell("Blizzard Δ", "iceAoe6", 36, "attack", 66, "ice", "all"),
        iceAoe7: new Spell("Blizzard Σ", "iceAoe7", 42, "attack", 77, "ice", "all"),
        iceAoe8: new Spell("Blizzard Φ", "iceAoe8", 48, "attack", 88, "ice", "all"),
        iceAoe9: new Spell("Blizzard Ω", "iceAoe9", 54, "attack", 99, "ice", "all"),
        iceAoe10: new Spell("Blizzard ∞", "iceAoe10", 60, "attack", 110, "ice", "all"),        

        lightningTarget1: new Spell("Foudre", "lightningTarget1", 5, "attack", 12, "lightning", 1),
        lightningTarget2: new Spell("Foudre +", "lightningTarget2", 10, "attack", 24, "lightning", 1),
        lightningTarget3: new Spell("Foudre α", "lightningTarget3", 15, "attack", 36, "lightning", 1),
        lightningTarget4: new Spell("Foudre β", "lightningTarget4", 20, "attack", 48, "lightning", 1),
        lightningTarget5: new Spell("Foudre X", "lightningTarget5", 25, "attack", 60, "lightning", 1),
        lightningTarget6: new Spell("Foudre Δ", "lightningTarget6", 30, "attack", 72, "lightning", 1),
        lightningTarget7: new Spell("Foudre Σ", "lightningTarget7", 35, "attack", 84, "lightning", 1),
        lightningTarget8: new Spell("Foudre Φ", "lightningTarget8", 40, "attack", 96, "lightning", 1),
        lightningTarget9: new Spell("Foudre Ω", "lightningTarget9", 45, "attack", 108, "lightning", 1),
        lightningTarget10: new Spell("Foudre ∞", "lightningTarget10", 50, "attack", 120, "lightning", 1),        

        lightningAoe1: new Spell("Orage", "lightningAoe1", 6, "attack", 11, "lightning", "all"),
        lightningAoe2: new Spell("Orage +", "lightningAoe2", 12, "attack", 22, "lightning", "all"),
        lightningAoe3: new Spell("Orage α", "lightningAoe3", 18, "attack", 33, "lightning", "all"),
        lightningAoe4: new Spell("Orage β", "lightningAoe4", 24, "attack", 44, "lightning", "all"),
        lightningAoe5: new Spell("Orage X", "lightningAoe5", 30, "attack", 55, "lightning", "all"),
        lightningAoe6: new Spell("Orage Δ", "lightningAoe6", 36, "attack", 66, "lightning", "all"),
        lightningAoe7: new Spell("Orage Σ", "lightningAoe7", 42, "attack", 77, "lightning", "all"),
        lightningAoe8: new Spell("Orage Φ", "lightningAoe8", 48, "attack", 88, "lightning", "all"),
        lightningAoe9: new Spell("Orage Ω", "lightningAoe9", 54, "attack", 99, "lightning", "all"),
        lightningAoe10: new Spell("Orage ∞", "lightningAoe10", 60, "attack", 110, "lightning", "all"),        
        
        earthTarget1: new Spell("Tremblement", "earthTarget1", 5, "attack", 12, "earth", 1),
        earthTarget2: new Spell("Tremblement +", "earthTarget2", 10, "attack", 24, "earth", 1),
        earthTarget3: new Spell("Tremblement α", "earthTarget3", 15, "attack", 36, "earth", 1),
        earthTarget4: new Spell("Tremblement β", "earthTarget4", 20, "attack", 48, "earth", 1),
        earthTarget5: new Spell("Tremblement X", "earthTarget5", 25, "attack", 60, "earth", 1),
        earthTarget6: new Spell("Tremblement Δ", "earthTarget6", 30, "attack", 72, "earth", 1),
        earthTarget7: new Spell("Tremblement Σ", "earthTarget7", 35, "attack", 84, "earth", 1),
        earthTarget8: new Spell("Tremblement Φ", "earthTarget8", 40, "attack", 96, "earth", 1),
        earthTarget9: new Spell("Tremblement Ω", "earthTarget9", 45, "attack", 108, "earth", 1),
        earthTarget10: new Spell("Tremblement ∞", "earthTarget10", 50, "attack", 120, "earth", 1),        

        earthAoe1: new Spell("Séisme", "earthAoe1", 6, "attack", 11, "earth", "all"),
        earthAoe2: new Spell("Séisme +", "earthAoe2", 12, "attack", 22, "earth", "all"),
        earthAoe3: new Spell("Séisme α", "earthAoe3", 18, "attack", 33, "earth", "all"),
        earthAoe4: new Spell("Séisme β", "earthAoe4", 24, "attack", 44, "earth", "all"),
        earthAoe5: new Spell("Séisme X", "earthAoe5", 30, "attack", 55, "earth", "all"),
        earthAoe6: new Spell("Séisme Δ", "earthAoe6", 36, "attack", 66, "earth", "all"),
        earthAoe7: new Spell("Séisme Σ", "earthAoe7", 42, "attack", 77, "earth", "all"),
        earthAoe8: new Spell("Séisme Φ", "earthAoe8", 48, "attack", 88, "earth", "all"),
        earthAoe9: new Spell("Séisme Ω", "earthAoe9", 54, "attack", 99, "earth", "all"),
        earthAoe10: new Spell("Séisme ∞", "earthAoe10", 60, "attack", 110, "earth", "all"),        

        darkTarget1: new Spell("Vortex", "darkTarget1", 6, "attack", 16, "dark", 1),
        darkTarget2: new Spell("Vortex +", "darkTarget2", 12, "attack", 32, "dark", 1),
        darkTarget3: new Spell("Vortex α", "darkTarget3", 18, "attack", 48, "dark", 1),
        darkTarget4: new Spell("Vortex β", "darkTarget4", 24, "attack", 64, "dark", 1),
        darkTarget5: new Spell("Vortex X", "darkTarget5", 30, "attack", 80, "dark", 1),
        darkTarget6: new Spell("Vortex Δ", "darkTarget6", 36, "attack", 96, "dark", 1),
        darkTarget7: new Spell("Vortex Σ", "darkTarget7", 42, "attack", 112, "dark", 1),
        darkTarget8: new Spell("Vortex Φ", "darkTarget8", 48, "attack", 128, "dark", 1),
        darkTarget9: new Spell("Vortex Ω", "darkTarget9", 54, "attack", 144, "dark", 1),
        darkTarget10: new Spell("Vortex ∞", "darkTarget10", 60, "attack", 160, "dark", 1),        

        darkAoe1: new Spell("Éclipse", "darkAoe1", 7, "attack", 15, "dark", "all"),
        darkAoe2: new Spell("Éclipse +", "darkAoe2", 14, "attack", 30, "dark", "all"),
        darkAoe3: new Spell("Éclipse α", "darkAoe3", 21, "attack", 45, "dark", "all"),
        darkAoe4: new Spell("Éclipse β", "darkAoe4", 28, "attack", 60, "dark", "all"),
        darkAoe5: new Spell("Éclipse X", "darkAoe5", 35, "attack", 75, "dark", "all"),
        darkAoe6: new Spell("Éclipse Δ", "darkAoe6", 42, "attack", 90, "dark", "all"),
        darkAoe7: new Spell("Éclipse Σ", "darkAoe7", 49, "attack", 105, "dark", "all"),
        darkAoe8: new Spell("Éclipse Φ", "darkAoe8", 56, "attack", 120, "dark", "all"),
        darkAoe9: new Spell("Éclipse Ω", "darkAoe9", 63, "attack", 135, "dark", "all"),
        darkAoe10: new Spell("Éclipse ∞", "darkAoe10", 70, "attack", 150, "dark", "all"),        

        holyTarget1: new Spell("Bannissement", "holyTarget1", 6, "attack", 16, "holy", 1),
        holyTarget2: new Spell("Bannissement +", "holyTarget2", 12, "attack", 32, "holy", 1),
        holyTarget3: new Spell("Bannissement α", "holyTarget3", 18, "attack", 48, "holy", 1),
        holyTarget4: new Spell("Bannissement β", "holyTarget4", 24, "attack", 64, "holy", 1),
        holyTarget5: new Spell("Bannissement X", "holyTarget5", 30, "attack", 80, "holy", 1),
        holyTarget6: new Spell("Bannissement Δ", "holyTarget6", 36, "attack", 96, "holy", 1),
        holyTarget7: new Spell("Bannissement Σ", "holyTarget7", 42, "attack", 112, "holy", 1),
        holyTarget8: new Spell("Bannissement Φ", "holyTarget8", 48, "attack", 128, "holy", 1),
        holyTarget9: new Spell("Bannissement Ω", "holyTarget9", 54, "attack", 144, "holy", 1),
        holyTarget10: new Spell("Bannissement ∞", "holyTarget10", 60, "attack", 160, "holy", 1),        

        holyAoe1: new Spell("Radiance", "holyAoe1", 7, "attack", 15, "holy", "all"),
        holyAoe2: new Spell("Radiance +", "holyAoe2", 14, "attack", 30, "holy", "all"),
        holyAoe3: new Spell("Radiance α", "holyAoe3", 21, "attack", 45, "holy", "all"),
        holyAoe4: new Spell("Radiance β", "holyAoe4", 28, "attack", 60, "holy", "all"),
        holyAoe5: new Spell("Radiance X", "holyAoe5", 35, "attack", 75, "holy", "all"),
        holyAoe6: new Spell("Radiance Δ", "holyAoe6", 42, "attack", 90, "holy", "all"),
        holyAoe7: new Spell("Radiance Σ", "holyAoe7", 49, "attack", 105, "holy", "all"),
        holyAoe8: new Spell("Radiance Φ", "holyAoe8", 56, "attack", 120, "holy", "all"),
        holyAoe9: new Spell("Radiance Ω", "holyAoe9", 63, "attack", 135, "holy", "all"),
        holyAoe10: new Spell("Radiance ∞", "holyAoe10", 70, "attack", 150, "holy", "all"),        

        healTarget1: new Spell("Geyser", "healTarget1", 10, "heal", 20, "none", 1),
        healTarget2: new Spell("Geyser +", "healTarget2", 20, "heal", 40, "none", 1),
        healTarget3: new Spell("Geyser α", "healTarget3", 30, "heal", 60, "none", 1),
        healTarget4: new Spell("Geyser β", "healTarget4", 40, "heal", 80, "none", 1),
        healTarget5: new Spell("Geyser X", "healTarget5", 50, "heal", 100, "none", 1),
        healTarget6: new Spell("Geyser Δ", "healTarget6", 60, "heal", 120, "none", 1),
        healTarget7: new Spell("Geyser Σ", "healTarget7", 70, "heal", 140, "none", 1),
        healTarget8: new Spell("Geyser Φ", "healTarget8", 80, "heal", 160, "none", 1),
        healTarget9: new Spell("Geyser Ω", "healTarget9", 90, "heal", 180, "none", 1),
        healTarget10: new Spell("Geyser ∞", "healTarget10", 100, "heal", 200, "none", 1),        

        healAoe1: new Spell("Cascade", "healAoe1", 15, "heal", 15, "none", "all"),
        healAoe2: new Spell("Cascade +", "healAoe2", 30, "heal", 30, "none", "all"),
        healAoe3: new Spell("Cascade α", "healAoe3", 45, "heal", 45, "none", "all"),
        healAoe4: new Spell("Cascade β", "healAoe4", 60, "heal", 60, "none", "all"),
        healAoe5: new Spell("Cascade X", "healAoe5", 75, "heal", 75, "none", "all"),
        healAoe6: new Spell("Cascade Δ", "healAoe6", 90, "heal", 90, "none", "all"),
        healAoe7: new Spell("Cascade Σ", "healAoe7", 105, "heal", 105, "none", "all"),
        healAoe8: new Spell("Cascade Φ", "healAoe8", 120, "heal", 120, "none", "all"),
        healAoe9: new Spell("Cascade Ω", "healAoe9", 135, "heal", 135, "none", "all"),
        healAoe10: new Spell("Cascade ∞", "healAoe10", 150, "heal", 150, "none", "all"),

        buffStr1: new Spell("Renforcement", "buffStr1", 10, "buff", 2, "none", "all"),
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