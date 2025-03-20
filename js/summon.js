class Summon {
    constructor(type, owner) {
        this.nom = type === "renard" ? "Renard agile" : "Rejeton du néant";
        this.owner = owner;
        this.niveau = owner.niveau;
        this.sorts = [];
        this.stats = this.calculateStats();
        this.statsTemp = { ...this.stats };
        this.statusEffects = {};
        this.maxhp = 10 * this.stats.vitality;
        this.hp = (type === "renard" ? this.maxhp : 0);
        this.maxmp = 10 * this.stats.willpower;
        this.mp = this.maxmp;
    }

    static generateSummons() {
        let rodeur = chars.find(char => char.classe === "Rôdeuse");
        let invocateur = chars.find(char => char.classe === "Invocateur");
        if (rodeur) summons.push(new Summon("renard", rodeur));
        if (invocateur) summons.push(new Summon("rejeton", invocateur));
    }

    calculateStats() {
        let multipliers = this.nom === "Renard agile"
        ? { strength: 1.2, agility: 1.4, intelligence: 0.9, vitality: 0.8, willpower: 0.7 }
        : { strength: 1.2, agility: 0.7, intelligence: 1.4, vitality: 0.8, willpower: 0.9 };
        let points = 8 + 2 * this.niveau + 4 * (Math.floor(this.niveau / 10) + 1);
        let baseStat = Math.floor(points / 5);
        let stats = {
            strength: Math.floor(baseStat * multipliers.strength),
            agility: Math.floor(baseStat * multipliers.agility),
            intelligence: Math.floor(baseStat * multipliers.intelligence),
            vitality: Math.floor(baseStat * multipliers.vitality),
            willpower: Math.floor(baseStat * multipliers.willpower)
        };
        let usedPoints = Object.values(stats).reduce((a, b) => a + b, 0);
        let remaining = points - usedPoints;
        let sortedStats = Object.keys(multipliers).sort((a, b) => multipliers[b] - multipliers[a]);
        for (let i = 0; i < remaining; i++) {
            stats[sortedStats[i % sortedStats.length]] += 1;
        }
        if (this.nom === "Rejeton du néant") {
            this.sorts.length = 0;
            this.sorts.push(Spell.getSpell("darkTarget" + Math.floor((this.niveau / 10) + 1)));
            this.sorts.push(Spell.getSpell("darkAoe" + Math.floor((this.niveau / 10) + 1)));
        }
        return stats;
    }

    static levelUp(summon) {
        let previousVit = summon.stats.vitality
        let previousWil = summon.stats.willpower
        summon.niveau = summon.owner.niveau;
        summon.stats = summon.calculateStats();
        summon.statsTemp = { ...summon.stats };
        summon.maxhp = 10 * summon.stats.vitality;
        summon.maxmp = 10 * summon.stats.willpower;
        summon.hp += 10 * (summon.stats.vitality - previousVit)
        summon.mp += 10 * (summon.stats.willpower - previousWil)
    }   
    
}