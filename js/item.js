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