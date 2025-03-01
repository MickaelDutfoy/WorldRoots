let personnage = null; let mob = null;
let fightConsole = document.getElementById("fightWindow");

const armurerie = {
    epee: {nom: "Epée", degats: 8},
    baton: {nom: "Bâton", degats: 3},
    dague: {nom: "Dague", degats: 5},
    epeeDiamant: {nom: "Epée de diamant", degats: 50},
}

const grimoire = {
    bouleDeFeu: {
        nom: "Boule de feu",
        id: "bouleDeFeu",
        degats: 15,
        mp: 10,
        cible: 1,
        message: "Tu envoies une grosse boule de feu brûlante !",
    },
    chaineDEclairs: {
        nom: "Chaîne d'éclairs",
        id: "chaineDEclairs",
        degats: 10,
        mp: 10,
        cible: "all",
        message: "Tu déchaînes la tempête !",
        cast() {
            let newMsg = document.createElement("p");
            newMsg.innerHTML = `Tu balances des éclairs bien chanmé !`;
            fightConsole.appendChild(newMsg);
        }
    },
    dagueFantome: {
        nom: "Dague fantôme",
        id: "dagueFantome",
        degats: 10,
        mp: 5,
        cible: 1,
        cast() {
            let newMsg = document.createElement("p");
            newMsg.innerHTML = `Tu send une grosse dagouze dans la face de ${mob.nom} !`;
            fightConsole.appendChild(newMsg);
        }
    },
    cast(sort) {
        let newMsg = document.createElement("p");
        if ( personnage.mp < sort.mp ) {
            newMsg.innerHTML = `Tu n'as pas assez de MP !`;
            fightConsole.appendChild(newMsg);
        } else {
            personnage.mp -= sort.mp;
            let mpCost = document.createElement("p");
            mpCost.innerHTML = `Tu perds ${sort.mp} MP.`;
            fightConsole.appendChild(mpCost);
            personnage.fichePerso();
            let dmg = Math.floor(( personnage.stats.intelligence + sort.degats - mob.stats.intelligence ) * ( Math.random() * 0.3 + 0.85 )); if ( dmg < 0 ) { dmg = 0 };
            newMsg.innerHTML = `${sort.message} ${mob.nom} perd ${dmg} HP.`;
            fightConsole.appendChild(newMsg);
            mob.hp = mob.hp - dmg;
            ennemis.isMobDead();
        }
        document.getElementById("spellList").remove();
    }
}

const ennemis = {
    mobList: [
        gobelin = {
            nom: "Gobelin",
            niveau: 1,
            xpDrop: 5,
            stats: {
                force: 2,
                intelligence: 1,
                agilite: 4,
                vitalite: 2,
            },
            lootTable: [
                {item: {nom: "3 pièces d'or"}, chance: 0.5},
                {item: {nom: "Potion"}, chance: 0.3},
                {item: armurerie.dague, chance: 0.2},
            ]
        },
        squelette = {
            nom: "Squelette",
            niveau: 1,
            xpDrop: 5,
            stats: {
                force: 3,
                intelligence: 1,
                agilite: 2,
                vitalite: 3,
            },
            lootTable: [
                {item: {nom: "3 pièces d'or"}, chance: 0.5},
                {item: {nom: "Potion"}, chance: 0.3},
                {item: armurerie.epee, chance: 0.2},
            ]
        },
        dragonRouge = {
            nom: "Dragon rouge",
            niveau: 100,
            xpDrop: 500,
            stats: {
                force: 68,
                intelligence: 42,
                agilite: 37,
                vitalite: 62,
            },
            lootTable: [
                {item: {nom: "300 pièces d'or"}, chance: 0.8},
                {item: {nom: "Potion XXL"}, chance: 0.5},
                {item: armurerie.epeeDiamant, chance: 0.1},
            ]
        },
    ],
    popMob() {
        mob = ennemis.mobList[Math.floor(Math.random() * ennemis.mobList.length)];
        mob.hp = 10 * mob.stats.vitalite;
        mob.mp = 5 * mob.stats.intelligence;
        document.getElementById("spawnMsg").innerHTML = `⚔️ Un ${mob.nom} apparaît ! <button id="fightBtn">Combattre</button>`;
        document.getElementById("fightBtn").addEventListener("click", fight);
    },
    isMobDead() {
        if ( mob.hp <= 0 ) {
            let newMsg = document.createElement("p");
            newMsg.innerHTML = `${mob.nom} meurt dans d'atroces souffrances.`;
            fightConsole.appendChild(newMsg);
            document.getElementById("fightButtons").remove();
            personnage.gagnerXP(mob.xpDrop);
            let loots = mob.lootTable.filter(objet => Math.random() < objet.chance);
            if (loots.length > 0) {
                let newMsg = document.createElement("p");
                newMsg.innerHTML = `Tu trouves : ${loots.map(objet => objet.item.nom).join(", ")}.`;
                fightConsole.appendChild(newMsg);
            }
            loots.forEach(objet => {
                if (objet.item.nom.endsWith("pièces d'or")) {
                    let montant = parseInt(objet.item.nom);
                    personnage.or += montant;
                } else {
                    personnage.ajouterObjet(objet.item);
                }
            });
            personnage.fichePerso();
            return;
        }
        ennemis.mobAttack();
    },
    mobAttack() {
        let dmg = Math.floor(( mob.stats.force - personnage.stats.vitalite ) * ( Math.random() * 0.3 + 0.85 )); if ( dmg < 0 ) { dmg = 0 }; // formule dégâts mob -> joueur
        let newMsg = document.createElement("p");
        newMsg.innerHTML = `${mob.nom} t'attaque furieusement et tu perds ${dmg} points de vie.`;
        fightConsole.appendChild(newMsg);
        personnage.hp = personnage.hp - dmg;
        personnage.fichePerso();
        if ( personnage.hp <= 0 ) {
            personnage.hp = 0;
            personnage.fichePerso();
            let newMsg = document.createElement("p");
            newMsg.innerHTML = `Tu décèdes dans d'atroces souffrances. Ton aventure s'achève ici et l'univers entier a déjà oublié ton nom misérable.`;
            fightConsole.appendChild(newMsg);
            document.getElementById("fightButtons").remove();
            return;
        }
    },
};
    
function createCharacter() {
    const nom = document.getElementById("nom").value;
    const classe = document.getElementById("classe").value;
    if ( !nom ) {
        console.log("Tu dois entrer un nom !");
        return;
    }
     personnage = {
        nom: nom,
        classe: classe,
        niveau: 1,
        experience: 0,
        or: 50,
        inventaire: [],
        sorts: [],
        stats: {
            force: 1,
            intelligence: 1,
            agilite: 1,
            vitalite: 1,
        },

        ajouterObjet(item) {
            this.inventaire.push(item);
            console.log(`${this.nom} a reçu ${item.nom}.`)
        },

        ajouterSort(spell) {
            this.sorts.push(spell);
            // message gain sort
        },

        gagnerXP(xp) {
            let fightConsole = document.getElementById("fightWindow");
            let newMsg = document.createElement("p");
            newMsg.innerHTML = `Tu gagnes ${xp} points d'expérience.`;
            fightConsole.appendChild(newMsg);
            this.experience += xp;
            while ( this.experience >= 100 ) {
                this.experience -= 100;
                this.niveau++;
                let newMsg = document.createElement("p");
                newMsg.innerHTML = `${this.nom} passe niveau ${this.niveau} !`;
                fightConsole.appendChild(newMsg);
            }
        },
        
        fichePerso() {
            document.getElementById("name").textContent = `${personnage.nom}`;
            document.getElementById("class").textContent = `${personnage.classe}`;
            document.getElementById("level").textContent = `Niveau : ${personnage.niveau}`;
            document.getElementById("stats").innerHTML = `Force : ${personnage.stats.force}<br>Intelligence : ${personnage.stats.intelligence}<br>Agilité : ${personnage.stats.agilite}<br>Vitalité : ${personnage.stats.vitalite}`;
            const nomsObjets = personnage.inventaire.map(objet => objet.nom);
            document.getElementById("inventory").innerHTML = `Inventaire :<br>${personnage.or} pièces d'or<br>${nomsObjets.join("<br>")}`;
            const nomsSorts = personnage.sorts.map(objet => objet.nom);
            document.getElementById("spells").innerHTML = `Sorts :<br>${nomsSorts.join("<br>")}`;
            document.getElementById("HP").textContent = `HP : ${personnage.hp} / ${personnage.maxhp}`;
            document.getElementById("MP").textContent = `MP : ${personnage.mp} / ${personnage.maxmp}`;
            document.getElementById("XP").textContent = `XP : ${personnage.experience}`;
        },
    };
    if ( personnage.classe === "Guerrier" ) {
    personnage.ajouterObjet(armurerie.epee);
    personnage.stats.force = 4;
    personnage.stats.intelligence = 1;
    personnage.stats.agilite = 2;
    personnage.stats.vitalite = 4;
    } else if ( personnage.classe === "Mage" ) {
    personnage.ajouterObjet(armurerie.baton);
    personnage.ajouterSort(grimoire.bouleDeFeu);
    personnage.ajouterSort(grimoire.chaineDEclairs);
    personnage.stats.force = 1;
    personnage.stats.intelligence = 5;
    personnage.stats.agilite = 3;
    personnage.stats.vitalite = 2;
    } else if ( personnage.classe === "Voleur" ) {
    personnage.ajouterObjet(armurerie.dague);
    personnage.ajouterSort(grimoire.dagueFantome);
    personnage.stats.force = 2;
    personnage.stats.intelligence = 2;
    personnage.stats.agilite = 4;
    personnage.stats.vitalite = 3;
    }
    personnage.maxhp = 10 * personnage.stats.vitalite;
    personnage.maxmp = 5 * personnage.stats.intelligence;
    personnage.hp = personnage.maxhp;
    personnage.mp = personnage.maxmp;
    personnage.arme = personnage.inventaire[0]; // sélection arme à implémenter
    let table = document.createElement('table');
    table.innerHTML = '<tr><td id="name"></td><td id="class"></td><td id="level"></td></tr><tr><td id="stats"></td><td id="inventory"></td><td id="spells"></td></tr><tr><td id="HP"></td><td id="MP"></td><td id="XP"></td></tr>';
    document.getElementById('creerPerso').parentNode.insertBefore(table, document.getElementById('creerPerso').nextSibling);
    personnage.fichePerso();
};

function fight() {
    if ( personnage === null ) {
        console.log("Tu dois d'abord créer un personnage !");
        return;
    }
    fightConsole.innerHTML = '<p class="combatMsg">Le combat commence !</p> <div id="fightButtons"><button id="Attack">Attaquer</button><button id="Spell">Lancer un sort</button></div>'
    document.getElementById("Attack").addEventListener("click", attack);
    document.getElementById("Spell").addEventListener("click", spell);

    function attack() {
        let dmg = Math.floor(( personnage.stats.force + personnage.arme.degats - mob.stats.vitalite ) * ( Math.random() * 0.3 + 0.85 )); if ( dmg < 0 ) { dmg = 0 }; // formule dégâts joueur -> mob
        let newMsg = document.createElement("p");
        newMsg.innerHTML = `Tu utilises ${personnage.arme.nom} et envoies des grosses patates à ${mob.nom} ! Il perd ${dmg} points de vie.`;
        fightConsole.appendChild(newMsg);
        mob.hp = mob.hp - dmg;
        ennemis.isMobDead();
    };

    function spell() { 
        const spellList = document.createElement("div");
        spellList.id = "spellList";
        fightConsole.appendChild(spellList);
        personnage.sorts.forEach(sort => {
            let spellBtn = document.createElement("button");
            spellBtn.innerHTML = `${sort.nom}`;
            spellBtn.id = `${sort.id}`;
            spellList.appendChild(spellBtn);
            spellBtn.onclick = () => grimoire.cast(sort);
        });
    };
}

document.getElementById("creerPerso").addEventListener("click", createCharacter);
document.getElementById("genererMob").addEventListener("click", ennemis.popMob);