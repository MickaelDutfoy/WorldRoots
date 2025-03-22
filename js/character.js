class Character {
    constructor(classe) {
        this.classe = classe;
        this.niveau = 1;
        this.xp = 0;
        this.sorts = [];
        this.stats = {};
        this.pointsLvlUp = 0;
        const classes = {
            "Guerrier": { nom: "Boris", skill: "Provocation",
            stats: {strength: 3, intelligence: 1, agility: 2, vitality: 3, willpower: 1},
            arme: Item.getItem("hache1"),
            armure: Item.getItem("heavyArmor1")},
            "Paladin": { nom: "Matthew", skill: "Action divine",
            stats: {strength: 2, intelligence: 2, agility: 1, vitality: 2, willpower: 3},
            sorts: [Spell.getSpell("healTarget1"), Spell.getSpell("buffWillpower1")],
            arme: Item.getItem("sword1"),
            armure: Item.getItem("magicArmor1")},
            "Chevalier noir": { nom: "Yaëlle", skill: "Siphon vital",
            stats: {strength: 2, intelligence: 3, agility: 1, vitality: 2, willpower: 2},
            sorts: [Spell.getSpell("darkTarget1"), Spell.getSpell("debuffStrength1")],
            arme: Item.getItem("sword1"),
            armure: Item.getItem("magicArmor1")},
            "Aéromancienne": { nom: "Helmi", skill: "Manamnesis",
            stats: {strength: 1, intelligence: 3, agility: 1, vitality: 2, willpower: 3},
            sorts: [Spell.getSpell("iceTarget1"), Spell.getSpell("lightningAoe1"), Spell.getSpell("debuffAgility1")],
            arme: Item.getItem("baton1"),
            armure: Item.getItem("robe1")},
            "Géomancienne": { nom: "Tilkka", skill: "Élémantra",
            stats: {strength: 1, intelligence: 3, agility: 1, vitality: 3, willpower: 2},
            sorts: [Spell.getSpell("earthTarget1"), Spell.getSpell("fireAoe1"), Spell.getSpell("buffVitality1")],
            arme: Item.getItem("baton1"),
            armure: Item.getItem("robe1")},
            "Chaomancien": { nom: "Monadh", skill: "Discorde",
            stats: {strength: 1, intelligence: 3, agility: 2, vitality: 2, willpower: 2},
            sorts: [Spell.getSpell("darkTarget1"), Spell.getSpell("holyAoe1"), Spell.getSpell("debuffWillpower1")],
            arme: Item.getItem("baton1"),
            armure: Item.getItem("robe1")},
            "Magelame": { nom: "Inari", skill: "Analyse",
            stats: {strength: 2, intelligence: 2, agility: 2, vitality: 2, willpower: 2},
            sorts: [Spell.getSpell("windAoe1"), Spell.getSpell("debuffIntelligence1")],
            arme: Item.getItem("sword1"),
            armure: Item.getItem("battleRobe1")},
            "Prêtresse": { nom: "Kita", skill: "Don de mana",
            stats: {strength: 1, intelligence: 2, agility: 2, vitality: 2, willpower: 3},
            sorts: [Spell.getSpell("holyTarget1"), Spell.getSpell("healTarget1"), Spell.getSpell("buffIntelligence1")],
            arme: Item.getItem("baton1"),
            armure: Item.getItem("battleRobe1")},
            "Barbare": { nom: "Otnugh", skill: "Tourbillon",
            stats: {strength: 3, intelligence: 1, agility: 2, vitality: 3, willpower: 1},
            sorts: [Spell.getSpell("buffStrength1")],
            arme: Item.getItem("hache1"),
            armure: Item.getItem("mediumArmor1")},
            "Voleur": { nom: "Tyven", skill: "Larcin",
            stats: {strength: 2, intelligence: 2, agility: 3, vitality: 2, willpower: 1},
            sorts: [Spell.getSpell("buffAgility1")],
            arme: Item.getItem("sword1"),
            armure: Item.getItem("lightArmor1")},
            "Rôdeuse": { nom: "Électra", skill: "Lien animal",
            stats: {strength: 2, intelligence: 1, agility: 3, vitality: 2, willpower: 2},
            sorts: [Spell.getSpell("debuffVitality1")],
            arme: Item.getItem("hache1"),
            armure: Item.getItem("lightArmor1")},
            "Invocateur": { nom: "Kairos", skill: "Portail",
            stats: {strength: 1, intelligence: 3, agility: 1, vitality: 2, willpower: 3},
            sorts: [Spell.getSpell("darkAoe1"), Spell.getSpell("healTarget1")],
            arme: Item.getItem("baton1"),
            armure: Item.getItem("battleRobe1")},
        };
        let config = classes[this.classe];
        this.nom = config.nom;
        this.skill = config.skill;
        this.stats = config.stats;
        this.arme = config.arme;
        this.armure = config.armure;
        if (config.sorts) config.sorts.forEach(sort => this.addSpell(sort));
        this.maxhp = 10 * (this.stats.vitality + this.armure.valeur.vitality);
        this.maxmp = 10 * (this.stats.willpower + this.armure.valeur.willpower);
        this.hp = this.maxhp;
        this.mp = this.maxmp;
        this.statsTemp = { ...this.stats };
        this.statusEffects = {};
    }

    static createCharacters() {
        const classe1 = document.getElementById("classe1").value;
        const classe2 = document.getElementById("classe2").value;
        const classe3 = document.getElementById("classe3").value;
        if ( classe1 === classe2 || classe2 === classe3 || classe1 === classe3 ) {
            tempoMsg = 0; addMessageToLog("Impossible de choisir deux fois le même personnage !");
            return;
        }
        chars.push(new Character(classe1));
        chars.push(new Character(classe2));
        chars.push(new Character(classe3));
        for ( let i = 0; i <=2; i++ ) Character.addItem(Item.getItem("potion1"));
        for ( let i = 0; i <=1; i++ ) Character.addItem(Item.getItem("ether1"));
        Character.addItem(Item.getItem("rez2"));
        Summon.generateSummons();
        initGame();
        Character.collapseExpand();
        tempoMsg = 3000;
        addSlowMsgToLog(`Bienvenue dans le Mode Arcade de WorldRoots !`)
        addSlowMsgToLog(`L'objectif est simple : avancer le plus loin possible.`)
        addSlowMsgToLog(`La partie se termine si vos trois personnages tombent à 0 HP...`)
        addSlowMsgToLog(`... ou s'ils atteignent tous le niveau 99 !`)
        addSlowMsgToLog(`Saurez-vous aller jusqu'au bout du donjon ?`)
        setTimeout(() => {
            msgLog.appendChild(startBtn); startBtn.addEventListener("click", Mob.popMob);
            document.getElementById("msgLog").style.borderBottom = "3px solid #121212";
        }, tempoMsg);
    };

    static addItem(objet) {
        let itemTrouve = inventaire.find(i => i.objet.id === objet.id);
        if (itemTrouve) {
            itemTrouve.quantite++;
        } else {
            inventaire.push({ objet, quantite: 1 });
        }
    }

    addSpell(sort) {
        this.sorts.push(sort);
    }

    gainXP(xp) {
        if ( this.hp <= 0 ) return;
        addMessageToLog(`<span class="orange">${this.nom} gagne ${xp} XP</span>.`);
        this.xp += xp;
        while (this.xp >= 100 * this.niveau) {
            this.xp -= 100 * this.niveau;
            this.pointsLvlUp += 2;
            this.niveau++; this.levelUp();
            addMessageToLog(`<span class="orange">${this.nom} passe niveau ${this.niveau}</span> !`); Character.charSheet();
        }
    }

    levelUp() {
        this.statsTemp = { ...this.stats };
        const charIndex = chars.findIndex(char => char === this);
        this.addLevelUpListeners(charIndex);
        if (this.classe === "Rôdeuse") {
            let renard = summons.find(summon => summon.nom === "Renard agile");
            if (renard.niveau < this.niveau) Summon.levelUp(renard)
        }

        if (this.classe === "Invocateur") {
            let rejeton = summons.find(summon => summon.nom === "Rejeton du néant");
            if (rejeton.niveau < this.niveau) Summon.levelUp(rejeton)
        }
    }
    
    addLevelUpListeners = (charIndex) => {
        document.querySelectorAll(".lvlUp" + charIndex).forEach(el => {
            el.style.visibility = "visible";
        });
        document.getElementById("lvlUpRow" + charIndex).style.display = "flex";
        const agiUpBtn = document.getElementById("AgiUp" + charIndex);
        const forUpBtn = document.getElementById("ForUp" + charIndex);
        const intUpBtn = document.getElementById("IntUp" + charIndex);
        const vitUpBtn = document.getElementById("VitUp" + charIndex);
        const volUpBtn = document.getElementById("VolUp" + charIndex);
        const agiDwnBtn = document.getElementById("AgiDwn" + charIndex);
        const forDwnBtn = document.getElementById("ForDwn" + charIndex);
        const intDwnBtn = document.getElementById("IntDwn" + charIndex);
        const vitDwnBtn = document.getElementById("VitDwn" + charIndex);
        const volDwnBtn = document.getElementById("VolDwn" + charIndex);
        const lvlUpBtn = document.getElementById("LvlUpBtn" + charIndex);
    
        if (!agiUpBtn.hasAttribute("data-listener")) {
            agiUpBtn.addEventListener("click", () => this.modifyStat(charIndex, "agility", "+"));
            agiUpBtn.setAttribute("data-listener", "true"); 
        }
        if (!forUpBtn.hasAttribute("data-listener")) {
            forUpBtn.addEventListener("click", () => this.modifyStat(charIndex, "strength", "+"));
            forUpBtn.setAttribute("data-listener", "true");
        }
        if (!intUpBtn.hasAttribute("data-listener")) {
            intUpBtn.addEventListener("click", () => this.modifyStat(charIndex, "intelligence", "+"));
            intUpBtn.setAttribute("data-listener", "true");
        }
        if (!vitUpBtn.hasAttribute("data-listener")) {
            vitUpBtn.addEventListener("click", () => this.modifyStat(charIndex, "vitality", "+"));
            vitUpBtn.setAttribute("data-listener", "true");
        }
        if (!volUpBtn.hasAttribute("data-listener")) {
            volUpBtn.addEventListener("click", () => this.modifyStat(charIndex, "willpower", "+"));
            volUpBtn.setAttribute("data-listener", "true");
        }
        if (!agiDwnBtn.hasAttribute("data-listener")) {
            agiDwnBtn.addEventListener("click", () => this.modifyStat(charIndex, "agility", "-"));
            agiDwnBtn.setAttribute("data-listener", "true");
        }
        if (!forDwnBtn.hasAttribute("data-listener")) {
            forDwnBtn.addEventListener("click", () => this.modifyStat(charIndex, "strength", "-"));
            forDwnBtn.setAttribute("data-listener", "true");
        }
        if (!intDwnBtn.hasAttribute("data-listener")) {
            intDwnBtn.addEventListener("click", () => this.modifyStat(charIndex, "intelligence", "-"));
            intDwnBtn.setAttribute("data-listener", "true");
        }
        if (!vitDwnBtn.hasAttribute("data-listener")) {
            vitDwnBtn.addEventListener("click", () => this.modifyStat(charIndex, "vitality", "-"));
            vitDwnBtn.setAttribute("data-listener", "true");
        }
        if (!volDwnBtn.hasAttribute("data-listener")) {
            volDwnBtn.addEventListener("click", () => this.modifyStat(charIndex, "willpower", "-"));
            volDwnBtn.setAttribute("data-listener", "true");
        }
        if (!lvlUpBtn.hasAttribute("data-listener")) {
            lvlUpBtn.addEventListener("click", () => this.validateLvlUp(charIndex));
            lvlUpBtn.setAttribute("data-listener", "true");
        }
    }
    
    modifyStat (charIndex, stat, operation) {
        if ( onFight ) {
            tempoMsg = 0; addMessageToLog(`Impossible d'attribuer des points pendant le combat !`)
            return;
        }
        if (operation === "+" && chars[charIndex].pointsLvlUp > 0) {
            chars[charIndex].statsTemp[stat]++;
            chars[charIndex].pointsLvlUp--;
            Character.charSheet();
        } else if (operation === "-" && chars[charIndex].statsTemp[stat] > chars[charIndex].stats[stat]) {
            chars[charIndex].statsTemp[stat]--;
            chars[charIndex].pointsLvlUp++;
            Character.charSheet();
        } else if (operation === "-" && chars[charIndex].statsTemp[stat] === chars[charIndex].stats[stat]) {
            tempoMsg = 0; addMessageToLog(`Impossible de baisser une statistique sous sa valeur actuelle !`)
        } else if (chars[charIndex].pointsLvlUp === 0) {
            tempoMsg = 0; addMessageToLog(`Plus de points disponibles !`)
        }
    }

    validateLvlUp (charIndex) {
        if ( chars[charIndex].stats.vitality < chars[charIndex].statsTemp.vitality ) {
            chars[charIndex].hp += 10 * ( chars[charIndex].statsTemp.vitality - chars[charIndex].stats.vitality );
        }
        if ( chars[charIndex].stats.willpower < chars[charIndex].statsTemp.willpower ) {
            chars[charIndex].mp += 10 * ( chars[charIndex].statsTemp.willpower - chars[charIndex].stats.willpower );
        }
        chars[charIndex].stats = { ...chars[charIndex].statsTemp };
        if ( chars[charIndex].pointsLvlUp === 0 ) { 
            document.querySelectorAll(".lvlUp" + charIndex).forEach(el => {
                el.style.visibility = "hidden";
            });
            document.getElementById("lvlUpRow" + charIndex).style.display = "none";
        }
        chars[charIndex].maxhp = 10 * (chars[charIndex].stats.vitality + chars[charIndex].armure.valeur.vitality);
        chars[charIndex].maxmp = 10 * (chars[charIndex].stats.willpower + chars[charIndex].armure.valeur.willpower);
        save();
        Character.charSheet();
    }
    
    static charSheet() {
        const nomsObjets = inventaire.map(i => `${i.objet.nom} x${i.quantite}`);
        document.getElementById("inventory").innerHTML = `Inventaire :<br>${gold} fragments de magie<br>${nomsObjets.join("<br>")}`;
        for ( let i = 0; i <= 2; i++ ) {
            document.getElementById("nameClass" + i).innerHTML = `${chars[i].nom}<br>${chars[i].classe}`;
            document.getElementById("lvlXP" + i).innerHTML = `Niveau : ${chars[i].niveau}<br>XP : ${chars[i].xp} / ${chars[i].niveau * 100}`;
            document.getElementById("agi" + i).innerHTML = `<span class="tooltip" data-tooltip="Régit la capacité d'esquive, la précision et l'initiative">Agilité</span> :`;
            document.getElementById("agiVal" + i).innerHTML = `<span ${chars[i].statsTemp.agility > chars[i].stats.agility ? 'class="greenbold"' : ''}${chars[i].statsTemp.agility < chars[i].stats.agility ? 'class="redbold"' : ''}>${chars[i].statsTemp.agility + chars[i].armure.valeur.agility}</span>`;
            document.getElementById("for" + i).innerHTML = `<span class="tooltip" data-tooltip="Régit les dégâts physiques">Force</span> :`;
            document.getElementById("forVal" + i).innerHTML = ` <span ${chars[i].statsTemp.strength > chars[i].stats.strength ? 'class="greenbold"' : ''}${chars[i].statsTemp.strength < chars[i].stats.strength ? 'class="redbold"' : ''}>${chars[i].statsTemp.strength + chars[i].arme.valeur.strength}</span>`
            document.getElementById("int" + i).innerHTML = `<span class="tooltip" data-tooltip="Régit les dégâts magiques et l'efficacité des sorts de soin">Sagesse</span> :`;
            document.getElementById("intVal" + i).innerHTML = `<span ${chars[i].statsTemp.intelligence > chars[i].stats.intelligence ? 'class="greenbold"' : ''}${chars[i].statsTemp.intelligence < chars[i].stats.intelligence ? 'class="redbold"' : ''}>${chars[i].statsTemp.intelligence + chars[i].arme.valeur.intelligence}</span>`;
            document.getElementById("vit" + i).innerHTML = `<span class="tooltip" data-tooltip="Régit les HP max et la résistance physique">Vitalité</span> :`;
            document.getElementById("vitVal" + i).innerHTML = `<span ${chars[i].statsTemp.vitality > chars[i].stats.vitality ? 'class="greenbold"' : ''}${chars[i].statsTemp.vitality < chars[i].stats.vitality ? 'class="redbold"' : ''}>${chars[i].statsTemp.vitality + chars[i].armure.valeur.vitality}</span>`;
            document.getElementById("vol" + i).innerHTML = `<span class="tooltip" data-tooltip="Régit les MP max et la résistance magique">Volonté</span> :`;
            document.getElementById("volVal" + i).innerHTML = `<span ${chars[i].statsTemp.willpower > chars[i].stats.willpower ? 'class="greenbold"' : ''}${chars[i].statsTemp.willpower < chars[i].stats.willpower ? 'class="redbold"' : ''}>${chars[i].statsTemp.willpower + chars[i].armure.valeur.willpower}</span>`;
            document.getElementById("lvlUpPoints" + i).innerHTML = `Disponibles :`;
            document.getElementById("lvlUpPointsTot" + i).innerHTML = ` ${chars[i].pointsLvlUp}`;
            let elements = {fire: "Feu", earth: "Terre", ice: "Glace", lightning: "Foudre", dark: "Ténèbres", holy: "Sacré"};
            let descSorts = chars[i].sorts.map(sort => {
                const statNames = {
                    Strength: "Force", 
                    Agility: "Agilité", 
                    Intelligence: "Sagesse", 
                    Vitality: "Vitalité", 
                    Willpower: "Volonté" 
                };
                let match = sort.id.match(/(buff|debuff)([A-Za-z]+)(\d+)/);
                let [_, type, stat] = match || [];
                let typeText = sort.type === "attack" ? "Attaque" 
                             : sort.type === "heal" ? "Soin" 
                             : sort.type === "buff" ? "Bénédiction" 
                             : "Malédiction";
                let statText = (sort.type === "buff" || sort.type === "debuff") && statNames[stat] 
                             ? ` ${statNames[stat]}` 
                             : "";
                let elementText = elements[sort.element] ? `, Élément : ${elements[sort.element]}` : "";
                let intensityText = `${sort.type === "attack" ? "Puissance" : "Intensité"} : ${sort.valeur}`;
                let cibleText = (sort.type === "attack" || sort.type === "heal") 
                              ? (sort.cible === 1 ? " sur cible" : " de zone") 
                              : "";
                return `<span class="tooltip" data-tooltip="${typeText}${statText}${cibleText}${elementText}, ${intensityText}, Coût : ${sort.mp} MP">${sort.nom}</span>`;
            });
            document.getElementById("spells" + i).innerHTML = `<strong>Sorts</strong> :<br>${descSorts.join("<br>")}`;            
            let displayHP = document.getElementById("HP" + i);
            if ( chars[i].hp < 0 ) chars[i].hp = 0;
            displayHP.textContent = `HP : ${chars[i].hp} / ${chars[i].maxhp}`;
            displayHP.style.color = chars[i].hp <= chars[i].maxhp / 4 ? "red" : "black";
            let displayMP = document.getElementById("MP" + i);
            if ( chars[i].mp < 0 ) chars[i].mp = 0;
            displayMP.textContent = `MP : ${chars[i].mp} / ${chars[i].maxmp}`;
            displayMP.style.color = chars[i].mp <= chars[i].maxmp / 4 ? "purple" : "black";
            let armesDispo = inventaire
                .filter(item => item.objet.effet === "arme")
                .map(item => item.objet)
                .filter((arme, index, self) => self.findIndex(a => a.nom === arme.nom) === index);   
            if (chars[i].arme) armesDispo.unshift(chars[i].arme);
            let selectArmeHTML = `<select id=${"selectArme" + i}>`;
            armesDispo.forEach(arme => {
                let selected = chars[i].arme && chars[i].arme.nom === arme.nom ? "selected" : "";
                selectArmeHTML += `<option value="${arme.nom}" ${selected}>
                ${arme.nom} (${[ 
                    arme.valeur.strength > 0 ? `+${arme.valeur.strength} FOR` : '',
                    arme.valeur.intelligence > 0 ? `+${arme.valeur.intelligence} SAG` : ''
                ].filter(Boolean).join(', ')})
                </option>`;
            });
            selectArmeHTML += `</select>`; 
            document.getElementById("weapon" + i).innerHTML = `Arme : ${selectArmeHTML}`;
            let armuresDispo = inventaire
                .filter(item => item.objet.effet === "armure")
                .map(item => item.objet)
                .filter((armure, index, self) => self.findIndex(a => a.nom === armure.nom) === index); 
            if (chars[i].armure) armuresDispo.unshift(chars[i].armure);
            let selectArmureHTML = `<select id=${"selectArmure" + i}>`;
            armuresDispo.forEach(armure => {
                let selected = chars[i].armure && chars[i].armure.nom === armure.nom ? "selected" : "";
                selectArmureHTML += `<option value="${armure.nom}" ${selected}>
                    ${armure.nom} (${[ 
                        armure.valeur.agility > 0 ? `+${armure.valeur.agility} AGI` : '',
                        armure.valeur.vitality > 0 ? `+${armure.valeur.vitality} VIT` : '',
                        armure.valeur.willpower > 0 ? `+${armure.valeur.willpower} VOL` : ''
                    ].filter(Boolean).join(', ')})
                </option>
                `;
            });
            selectArmureHTML += `</select>`;  
            document.getElementById("armor" + i).innerHTML = `Armure : ${selectArmureHTML}`;
            document.getElementById("selectArme" + i).addEventListener("change", (e) => {
                if ( onFight ) { tempoMsg = 0; addMessageToLog(`Impossible de changer d'équipement en combat !`); chars[i].charSheet(); return; }
                let nouvelleArme = armesDispo.find(obj => obj.nom === e.target.value);
                if (chars[i].arme) {
                    let armeExistante = inventaire.find(obj => obj.objet.nom === chars[i].arme.nom);
                    if (armeExistante) {
                        armeExistante.quantite++;
                    } else {
                        inventaire.push({ objet: chars[i].arme, quantite: 1 });
                    }
                }
                let itemInventaire = inventaire.find(obj => obj.objet.nom === nouvelleArme.nom);
                if (itemInventaire) {
                    if (itemInventaire.quantite > 1) {
                        itemInventaire.quantite--;
                    } else {
                        inventaire = inventaire.filter(obj => obj.objet.nom !== nouvelleArme.nom);
                    }
                }
                chars[i].arme = nouvelleArme;
                if (document.getElementById("sellShop")) {
                    document.getElementById("sellShop").remove(); // Supprime l'ancien shop
                    Character.sellShop(); // Le recrée immédiatement
                }
                Character.charSheet();
            });
            document.getElementById("selectArmure" + i).addEventListener("change", (e) => {
                if ( onFight ) { tempoMsg = 0; addMessageToLog(`Impossible de changer d'équipement en combat !`); chars[i].charSheet(); return; }
                let nouvelleArmure = armuresDispo.find(obj => obj.nom === e.target.value);
                if (chars[i].armure) {
                    let armureExistante = inventaire.find(obj => obj.objet.nom === chars[i].armure.nom);
                    if (armureExistante) {
                        armureExistante.quantite++;
                    } else {
                        inventaire.push({ objet: chars[i].armure, quantite: 1 });
                    }
                }
                let itemInventaire = inventaire.find(obj => obj.objet.nom === nouvelleArmure.nom);
                if (itemInventaire) {
                    if (itemInventaire.quantite > 1) {
                        itemInventaire.quantite--;
                    } else {
                        inventaire = inventaire.filter(obj => obj.objet.nom !== nouvelleArmure.nom);
                    }
                }
                chars[i].armure = nouvelleArmure;
                chars[i].maxhp = 10 * (chars[i].stats.vitality + chars[i].armure.valeur.vitality);
                chars[i].maxmp = 10 * (chars[i].stats.willpower + chars[i].armure.valeur.willpower);
                if (chars[i].hp > chars[i].maxhp) chars[i].hp = chars[i].maxhp;
                if (chars[i].mp > chars[i].maxmp) chars[i].mp = chars[i].maxmp;
                if (document.getElementById("sellShop")) {
                    document.getElementById("sellShop").remove(); // Supprime l'ancien shop
                    Character.sellShop(); // Le recrée immédiatement
                }
                Character.charSheet();
            });
        }
    }

    static collapseExpand() {
        let collapsabletd = document.querySelectorAll(".collapsabletd");
        let collapsabletr = document.querySelectorAll(".collapsabletr");
        if ( charSheetState === "expanded" ) {
            charSheetState = "collapsed";
            collapseBtn.innerHTML = "Agrandir la fiche";
            collapsabletd.forEach(el => el.style.display = "none");
            collapsabletr.forEach(el => el.style.display = "none");
        } else {
            charSheetState = "expanded";
            collapseBtn.innerHTML = "Réduire la fiche";
            collapsabletd.forEach(el => el.style.display = "table-cell");
            collapsabletr.forEach(el => el.style.display = "table-row");
        }
    }

    static regenChars() {
        tempoMsg = 0;
        let cost = Math.floor(chars.reduce((sum, char) => sum + char.niveau, 0) / chars.length * 10);
        if ( gold < cost ) {
            addMessageToLog(`Vous n'avez pas assez de fragments de magie !`);
            return;
        }
        gold -= cost;
        addMessageToLog(`Vous payez ${cost} fragments de magie.`);
        let targets = [...chars, ...summons];
        let rejetonIndex = targets.findIndex(target => target.nom === "Rejeton du néant");
        
        if (rejetonIndex !== -1) {
            targets.splice(rejetonIndex, 1);
        }     
        targets.forEach(char => {
            if ( char.hp > 0 ) {
                char.hp = char.maxhp;
                char.mp = char.maxmp;
                addMessageToLog(`${char.nom} récupère tous ses HP/MP.`);
            } else {
                addMessageToLog(`Impossible de soigner un personnage mort : vous devez d'abord le réanimer.`);
            }
            Character.charSheet();
        })
    }

    static rezChars() {
        tempoMsg = 0;
        let cost = Math.floor(chars.reduce((sum, char) => sum + char.niveau, 0) / chars.length * 20);
        let targets = [...chars, ...summons];
        let rejetonIndex = targets.findIndex(target => target.nom === "Rejeton du néant");
        
        if (rejetonIndex !== -1) {
            targets.splice(rejetonIndex, 1);
        }        
        if (targets.every(char => char.hp > 0)) {
            addMessageToLog("Aucun personnage n'est mort !");
        } else if (gold < cost) {
            addMessageToLog("Vous n'avez pas assez de fragments de magie !");
        } else {
            targets.forEach(char => {
                if (char.hp <= 0) char.hp = 1;
            });
            gold -= cost;
            addMessageToLog(`Vous payez ${cost} fragments de magie.`);
            addMessageToLog("Les personnages morts ont été réanimés.");
            Character.charSheet();
        }
    }

    static magicShop() {
        if (document.getElementById("magicShop")) return;
        const magicShop = document.createElement("div"); magicShop.id = "magicShop"; document.getElementById("exploreWindow").insertBefore(magicShop, fightLog);
        const table = document.createElement("table");
        table.style.width = "100%";
        const thead = document.createElement("thead");
        const headerRow = document.createElement("tr");
        ["Personnage", "Sorts disponibles", "Acheter"].forEach(text => {
            const th = document.createElement("th");
            th.textContent = text;
            th.style.textAlign = "center";
            headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);
        table.appendChild(thead);
        const tbody = document.createElement("tbody");

        function generateSpellShop(char, spellPrefixes, spellTypes, costMultiplier = 150) {
            const X = Math.floor(char.niveau / 10) + 1;
            const row = document.createElement("tr");
            const charNameCell = document.createElement("td");
            charNameCell.textContent = `${char.nom}`;
            row.appendChild(charNameCell);
            const spellSelectCell = document.createElement("td");
            const spellSelect = document.createElement("select");
            spellPrefixes.forEach(prefix => {
                spellTypes.forEach(type => {
                    const spellId = `${prefix}${type}${X}`;
                    const spell = Spell.getSpell(spellId);
                    if (spell && !char.sorts.some(sort => sort.id === spellId)) {
                        const option = document.createElement("option");
                        option.value = spellId;
                        let elements = { fire: "Feu", earth: "Terre", ice: "Glace", lightning: "Foudre", dark: "Ténèbres", holy: "Sacré" };
                        const statNames = {
                            Strength: "Force", 
                            Agility: "Agilité", 
                            intelligence: "Sagesse", 
                            Vitality: "Vitalité", 
                            Willpower: "Volonté"
                        };
                        let match = spell.id.match(/(buff|debuff)([A-Za-z]+)(\d+)/);
                        let [_, type, stat] = match || [];
                        let typeText = spell.type === "attack" ? "Attaque" 
                                     : spell.type === "heal" ? "Soin" 
                                     : spell.type === "buff" ? "Bénédiction" 
                                     : "Malédiction";
                        let statText = (spell.type === "buff" || spell.type === "debuff") && statNames[stat] 
                                     ? ` ${statNames[stat]}` 
                                     : "";
                        let elementText = elements[spell.element] ? `, Élément : ${elements[spell.element]}` : "";
                        let cibleText = (spell.type === "attack" || spell.type === "heal") 
                                      ? (spell.cible === 1 ? " sur cible" : " de zone") 
                                      : "";
    
                        option.textContent = `${spell.nom} (${typeText}${statText}${cibleText}${elementText}) - ${costMultiplier * X} fragments`;
                        spellSelect.appendChild(option);
                    }
                });
            });
            spellSelectCell.appendChild(spellSelect);
            row.appendChild(spellSelectCell);
            if (spellSelect.innerHTML === "") {
                spellSelect.innerHTML = "<option disabled selected>Aucun sort n'est disponible</option>";
            } else {
                const buyButtonCell = document.createElement("td");
                const buyButton = document.createElement("button");
                buyButton.textContent = "Acheter";
                buyButton.addEventListener("click", () => {
                    const selectedSpellId = spellSelect.value;
                    if (!selectedSpellId) return;
                    const spell = Spell.getSpell(selectedSpellId);
                    const cost = costMultiplier * X;
                    if (gold < cost) {
                        tempoMsg = 0; 
                        addMessageToLog("Vous n'avez pas assez de fragments de magie !");
                        return;
                    }
                    gold -= cost;
                    const spellMatch = selectedSpellId.match(/([a-zA-Z]+)(\d+)$/);
                    const spellBase = spellMatch[1];
                    const spellLevel = parseInt(spellMatch[2]);
                    char.sorts = char.sorts.filter(s => {
                        const sMatch = s.id.match(/([a-zA-Z]+)(\d+)$/);
                        return !(sMatch && sMatch[1] === spellBase && parseInt(sMatch[2]) < spellLevel);
                    });
                    char.sorts.push(spell);
                    tempoMsg = 0;
                    addMessageToLog(`${char.nom} apprend ${spell.nom} pour ${cost} fragments de magie.`);
                    Character.charSheet();
                    spellSelect.querySelector(`option[value="${selectedSpellId}"]`).remove();
                    if (spellSelect.innerHTML === "") {
                        spellSelect.innerHTML = "<option disabled selected>Aucun sort n'est disponible</option>";
                        buyButton.remove();
                    }
                });
                buyButtonCell.appendChild(buyButton);
                row.appendChild(buyButtonCell);
            }
            tbody.appendChild(row);
        }

        table.appendChild(tbody);
        magicShop.appendChild(table);

        chars.forEach(char => {
            if (char.classe === "Guerrier") generateSpellShop(char, [], []);
            if (char.classe === "Paladin") generateSpellShop(char, ["holy", "heal", "buff"], ["Target", "Willpower"]);
            if (char.classe === "Chevalier noir") generateSpellShop(char, ["dark", "debuff"], ["Target", "Strength"]);
            if (char.classe === "Aéromancienne") generateSpellShop(char, ["ice", "lightning", "debuff"], ["Target", "Aoe", "Agility"]);
            if (char.classe === "Géomancienne") generateSpellShop(char, ["fire", "earth", "buff"], ["Target", "Aoe", "Vitality"]);
            if (char.classe === "Chaomancien") generateSpellShop(char, ["dark", "holy", "debuff"], ["Target", "Aoe", "Willpower"]);
            if (char.classe === "Magelame") generateSpellShop(char, ["wind", "debuff"], ["Target", "Aoe", "Intelligence"]);
            if (char.classe === "Prêtresse") generateSpellShop(char, ["holy", "heal", "buff"], ["Target", "Aoe", "Intelligence"]);
            if (char.classe === "Barbare") generateSpellShop(char, ["buff"], ["Strength"]);
            if (char.classe === "Voleur") generateSpellShop(char, ["buff"], ["Agility"]);
            if (char.classe === "Rôdeuse") generateSpellShop(char, ["debuff"], ["Vitality"]);
            if (char.classe === "Invocateur") generateSpellShop(char, ["dark", "heal"], ["Target", "Aoe"]);
        });
    }

    static sellShop() {
        if (document.getElementById("sellShop")) return;
        const shopContainer = document.createElement("div"); shopContainer.id = "sellShop";
        if (document.getElementById("magicShop")) {
            document.getElementById("exploreWindow").insertBefore(shopContainer, magicShop);
        } else {
            document.getElementById("exploreWindow").insertBefore(shopContainer, fightLog);
        }
        const table = document.createElement("table");
        table.style.width = "100%";
        const thead = document.createElement("thead");
        const headerRow = document.createElement("tr");
        ["Objet", "Prix", "Vendre"].forEach(text => {
            const th = document.createElement("th");
            th.textContent = text;
            headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);
        table.appendChild(thead);
        const tbody = document.createElement("tbody");
        inventaire.forEach(entry => {
            const item = entry.objet;
            const quantity = entry.quantite;
            const match = item.id.match(/(\d+)$/);
            const level = match ? parseInt(match[1]) : 1;
            let price = item.type === "equipement" ? 20 * level : 5 * level;
            const row = document.createElement("tr");
            const nameCell = document.createElement("td");
            nameCell.textContent = item.nom;
            row.appendChild(nameCell);
            const priceCell = document.createElement("td");
            priceCell.textContent = `${price} fragments/unité`;
            row.appendChild(priceCell);
            const actionCell = document.createElement("td");
            const sellSelect = document.createElement("select");
            for (let i = 1; i <= quantity; i++) {
                let option = document.createElement("option");
                option.value = i;
                option.textContent = i;
                sellSelect.appendChild(option);
            }
            const sellButton = document.createElement("button");
            sellButton.innerHTML = "Vendre";
            sellButton.addEventListener("click", () => {
                const amount = parseInt(sellSelect.value);
                inventaire = inventaire.map(entry => {
                    if (entry.objet.id === item.id) {
                        entry.quantite -= amount;
                    }
                    return entry;
                }).filter(entry => entry.quantite > 0);
    
                gold += price * amount;
                tempoMsg = 0;
                addMessageToLog(`Vous vendez ${amount} ${item.nom} pour ${price * amount} fragments de magie.`);
                Character.charSheet();
                shopContainer.remove();
                Character.sellShop();
            });
            actionCell.appendChild(sellSelect);
            actionCell.appendChild(sellButton);
            row.appendChild(actionCell);
            tbody.appendChild(row);
        });
        table.appendChild(tbody);
        shopContainer.appendChild(table);
    }
};