class Character {
    constructor(classe) {
        this.classe = classe;
        this.niveau = 1;
        this.xp = 0;
        this.sorts = [];
        this.stats = {};
        this.pointsLvlUp = 0;
        const classes = {
            "Guerrier": { nom: "Boris",
            stats: {strength: 3, intelligence: 1, agility: 2, vitality: 3, willpower: 1},
            arme: Item.getItem("hache1"),
            armure: Item.getItem("heavyArmor1")},
            "Paladin": { nom: "Matthew",
            stats: {strength: 2, intelligence: 2, agility: 1, vitality: 2, willpower: 3},
            sorts: [Spell.getSpell("lightTarget1"), Spell.getSpell("healTarget1")],
            arme: Item.getItem("sword1"),
            armure: Item.getItem("magicArmor1")},
            "Chevalier noir": { nom: "Yaëlle",
            stats: {strength: 2, intelligence: 3, agility: 1, vitality: 2, willpower: 2},
            sorts: [Spell.getSpell("darkTarget1")],
            arme: Item.getItem("sword1"),
            armure: Item.getItem("magicArmor1")},
            "Élémentaliste": { nom: "Helmi",
            stats: {strength: 1, intelligence: 3, agility: 3, vitality: 1, willpower: 2},
            sorts: [Spell.getSpell("fireTarget1"), Spell.getSpell("lightningAoe1")],
            arme: Item.getItem("baton1"),
            armure: Item.getItem("robe1")},
            "Chaomancien": { nom: "Monadh",
            stats: {strength: 1, intelligence: 3, agility: 1, vitality: 2, willpower: 3},
            sorts: [Spell.getSpell("darkTarget1"), Spell.getSpell("lightAoe1")],
            arme: Item.getItem("baton1"),
            armure: Item.getItem("robe1")},
            "Magelame": { nom: "Inari",
            stats: {strength: 2, intelligence: 2, agility: 2, vitality: 2, willpower: 2},
            sorts: [Spell.getSpell("windTarget1"), Spell.getSpell("windAoe1")],
            arme: Item.getItem("sword1"),
            armure: Item.getItem("battleRobe1")},
            "Prêtresse": { nom: "Kita",
            stats: {strength: 1, intelligence: 2, agility: 2, vitality: 2, willpower: 3},
            sorts: [Spell.getSpell("lightTarget1"), Spell.getSpell("healTarget1"), Spell.getSpell("healAoe1")],
            arme: Item.getItem("baton1"),
            armure: Item.getItem("battleRobe1")},
            "Barbare": { nom: "Otnugh",
            stats: {strength: 3, intelligence: 1, agility: 2, vitality: 3, willpower: 1},
            arme: Item.getItem("hache1"),
            armure: Item.getItem("mediumArmor1")},
        };
        let config = classes[this.classe];
        this.nom = config.nom;
        this.stats = config.stats;
        this.arme = config.arme;
        this.armure = config.armure;
        if (config.sorts) config.sorts.forEach(sort => this.addSpell(sort));
        this.maxhp = 10 * (this.stats.vitality + this.armure.valeur.vitality);
        this.maxmp = 10 * (this.stats.willpower + this.armure.valeur.willpower);
        this.hp = this.maxhp;
        this.mp = this.maxmp;
        this.statsTemp = { ...this.stats };
    }

    static createCharacters() {
        const classe1 = document.getElementById("classe1").value;
        const classe2 = document.getElementById("classe2").value;
        const classe3 = document.getElementById("classe3").value;
        if ( classe1 === classe2 || classe2 === classe3 || classe1 === classe3 ) {
            tempoMsg = 0; addMessageToLog("Impossible de choisir deux fois le même personnage !");
            return;
        }
        document.getElementById("teamSelector").style.display = "none";
        document.getElementById("exploreWindow").style.opacity = "1";
        addSlowMsgToLog(`Bienvenue dans le Mode Arcade de WorldRoots !`)
        addSlowMsgToLog(`L'objectif est simple : avancer le plus loin possible.`)
        addSlowMsgToLog(`La partie se termine si vos trois personnages tombent à 0 HP...`)
        addSlowMsgToLog(`... ou s'ils atteignent tous le niveau 99 !`)
        addSlowMsgToLog(`Saurez-vous aller jusqu'au bout du donjon ?`)
        setTimeout(() => {
            msgLog.appendChild(startBtn); document.getElementById("startBtn").addEventListener("click", Mob.popMob);
        }, tempoMsg);
        charSheet.innerHTML = `
        <tr>
            <td id="inventory" rowspan="16"></td>
        </tr>
        <tr>
            <td id="nameClass0"></td>
            <td id="lvlXP0"></td>
        </tr>
        <tr>
            <td>
                <table class="charStats">
                    <tr>
                        <td id="agi0"></td>
                        <td class="lvlUp0" id="agiTemp0"></td>
                        <td class="lvlUp0" id="agiLvlUp0"><button id="AgiUp0">+</button><button id="AgiDwn0">-</button></td>
                    </tr>
                    <tr>
                        <td id="for0"></td>
                        <td class="lvlUp0" id="forTemp0"></td>
                        <td class="lvlUp0" id="forLvlUp0"><button id="ForUp0">+</button><button id="ForDwn0">-</button></td>
                    </tr>
                    <tr>
                        <td id="int0"></td>
                        <td class="lvlUp0" id="intTemp0"></td>
                        <td class="lvlUp0" id="intLvlUp0"><button id="IntUp0">+</button><button id="IntDwn0">-</button></td>
                    </tr>
                    <tr>
                        <td id="vit0"></td>
                        <td class="lvlUp0" id="vitTemp0"></td>
                        <td class="lvlUp0" id="vitLvlUp0"><button id="VitUp0">+</button><button id="VitDwn0">-</button></td>
                    </tr>
                    <tr>
                        <td id="vol0"></td>
                        <td class="lvlUp0" id="volTemp0"></td>
                        <td class="lvlUp0" id="volLvlUp0"><button id="VolUp0">+</button><button id="VolDwn0">-</button></td>
                    </tr>
                    <tr>
                        <td class="lvlUp0" id="lvlUpPoints0"></td>
                        <td class="lvlUp0" colspan="2" id="lvlUpBtnWrap0"><button id="LvlUpBtn0">Valider</button></td>
                    </tr>
                </table>
            </td>
            <td id="spells0"></td>
        </tr>
        <tr>
            <td colspan="2" style="text-align:center;" id="weapon0"></td>
        </tr>
        <tr>
            <td colspan="2" style="text-align:center;" id="armor0"></td>
        </tr>  
        <tr>
            <td id="HP0"></td>
            <td id="MP0"></td>
        </tr>
        </div>
        <tr>
            <td id="nameClass1"></td>
            <td id="lvlXP1"></td>
        </tr>
        <tr>
            <td>
                <table class="charStats">
                    <tr>
                        <td id="agi1"></td>
                        <td class="lvlUp1" id="agiTemp1"></td>
                        <td class="lvlUp1" id="agiLvlUp1"><button id="AgiUp1">+</button><button id="AgiDwn1">-</button></td>
                    </tr>
                    <tr>
                        <td id="for1"></td>
                        <td class="lvlUp1" id="forTemp1"></td>
                        <td class="lvlUp1" id="forLvlUp1"><button id="ForUp1">+</button><button id="ForDwn1">-</button></td>
                    </tr>
                    <tr>
                        <td id="int1"></td>
                        <td class="lvlUp1" id="intTemp1"></td>
                        <td class="lvlUp1" id="intLvlUp1"><button id="IntUp1">+</button><button id="IntDwn1">-</button></td>
                    </tr>
                    <tr>
                        <td id="vit1"></td>
                        <td class="lvlUp1" id="vitTemp1"></td>
                        <td class="lvlUp1" id="vitLvlUp1"><button id="VitUp1">+</button><button id="VitDwn1">-</button></td>
                    </tr>
                    <tr>
                        <td id="vol1"></td>
                        <td class="lvlUp1" id="volTemp1"></td>
                        <td class="lvlUp1" id="volLvlUp1"><button id="VolUp1">+</button><button id="VolDwn1">-</button></td>
                    </tr>
                    <tr>
                        <td class="lvlUp1" id="lvlUpPoints1"></td>
                        <td class="lvlUp1" colspan="2" id="lvlUpBtnWrap1"><button id="LvlUpBtn1">Valider</button></td>
                    </tr>
                </table>
            </td>
            <td id="spells1"></td>
        </tr>
        <tr>
            <td colspan="2" style="text-align:center;" id="weapon1"></td>
        </tr>
        <tr>
            <td colspan="2" style="text-align:center;" id="armor1"></td>
        </tr>  
        <tr>
            <td id="HP1"></td>
            <td id="MP1"></td>
        </tr>
        <tr>
            <td id="nameClass2"></td>
            <td id="lvlXP2"></td>
        </tr>
        <tr>
            <td>
                <table class="charStats">
                    <tr>
                        <td id="agi2"></td>
                        <td class="lvlUp2" id="agiTemp2"></td>
                        <td class="lvlUp2" id="agiLvlUp2"><button id="AgiUp2">+</button><button id="AgiDwn2">-</button></td>
                    </tr>
                    <tr>
                        <td id="for2"></td>
                        <td class="lvlUp2" id="forTemp2"></td>
                        <td class="lvlUp2" id="forLvlUp2"><button id="ForUp2">+</button><button id="ForDwn2">-</button></td>
                    </tr>
                    <tr>
                        <td id="int2"></td>
                        <td class="lvlUp2" id="intTemp2"></td>
                        <td class="lvlUp2" id="intLvlUp2"><button id="IntUp2">+</button><button id="IntDwn2">-</button></td>
                    </tr>
                    <tr>
                        <td id="vit2"></td>
                        <td class="lvlUp2" id="vitTemp2"></td>
                        <td class="lvlUp2" id="vitLvlUp2"><button id="VitUp2">+</button><button id="VitDwn2">-</button></td>
                    </tr>
                    <tr>
                        <td id="vol2"></td>
                        <td class="lvlUp2" id="volTemp2"></td>
                        <td class="lvlUp2" id="volLvlUp2"><button id="VolUp2">+</button><button id="VolDwn2">-</button></td>
                    </tr>
                    <tr>
                        <td class="lvlUp2" id="lvlUpPoints2"></td>
                        <td class="lvlUp2" colspan="2" id="lvlUpBtnWrap2"><button id="LvlUpBtn2">Valider</button></td>
                    </tr>
                </table>
            </td>
            <td id="spells2"></td>
        </tr>
        <tr>
            <td colspan="2" style="text-align:center;" id="weapon2"></td>
        </tr>
        <tr>
            <td colspan="2" style="text-align:center;" id="armor2"></td>
        </tr>  
        <tr>
            <td id="HP2"></td>
            <td id="MP2"></td>
        </tr>`;
        document.getElementById("teamWindow").appendChild(charSheet);
        chars.push(new Character(classe1));
        chars.push(new Character(classe2));
        chars.push(new Character(classe3));
        for ( let i = 0; i <=2; i++ ) Character.addItem(Item.getItem("potion1"));
        Character.addItem(Item.getItem("plumeAnge1"));
        Character.charSheet();
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
        addMessageToLog(`<span class="orange">${this.nom} gagne ${xp} XP</span>.`);
        this.xp += xp;
        while (this.xp >= 150 * this.niveau) {
            this.xp -= 150 * this.niveau;
            this.hp = this.maxhp;
            this.mp = this.maxmp;
            this.pointsLvlUp += 2;
            this.niveau++; this.levelUp();
            addMessageToLog(`<span class="orange">${this.nom} passe niveau ${this.niveau}</span> ! Les HP/MP ont été restaurés.`); Character.charSheet();
        }
    }

    levelUp() {
        this.statsTemp = { ...this.stats };
        const charIndex = chars.findIndex(char => char === this);
        this.addLevelUpListeners(charIndex);
    }
    
    addLevelUpListeners = (charIndex) => {
        document.querySelectorAll(".lvlUp" + charIndex).forEach(el => {
            el.style.display = "table-cell";
        });
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
    
        // Vérifier si les listeners sont déjà ajoutés, par exemple via un attribut "data-listener"
        if (!agiUpBtn.hasAttribute("data-listener")) {
            agiUpBtn.addEventListener("click", () => this.modifyStat(charIndex, "agility", "+"));
            agiUpBtn.setAttribute("data-listener", "true"); // Marque le bouton comme ayant son listener
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
                el.style.display = "none";
            });
        }
        chars[charIndex].maxhp = 10 * (chars[charIndex].stats.vitality + chars[charIndex].armure.valeur.vitality);
        chars[charIndex].maxmp = 10 * (chars[charIndex].stats.willpower + chars[charIndex].armure.valeur.willpower);
        Character.charSheet();
    }
    
    static charSheet() {
        const nomsObjets = inventaire.map(i => `${i.objet.nom} x${i.quantite}`);
        document.getElementById("inventory").innerHTML = `Inventaire :<br>${gold} pièces d'or<br>${nomsObjets.join("<br>")}`;
        for ( let i = 0; i <=2; i++ ) {
            document.getElementById("nameClass" + i).innerHTML = `${chars[i].nom}<br>${chars[i].classe}`;
            document.getElementById("lvlXP" + i).innerHTML = `Niveau : ${chars[i].niveau}<br>XP : ${chars[i].xp} / ${chars[i].niveau * 150}`;
            document.getElementById("agi" + i).innerHTML = `<abbr title="Régit la capacité d'esquive et l'initiative.">Agilité</abbr> : ${chars[i].stats.agility} <span class="grey">(${chars[i].armure.valeur.agility < 0 ? '-' : '+'}${Math.abs(chars[i].armure.valeur.agility)})</span>`;
            document.getElementById("for" + i).innerHTML = `<abbr title="Régit les dégâts physiques.">Force</abbr> : ${chars[i].stats.strength} <span class="grey">(${chars[i].arme.valeur.strength < 0 ? '-' : '+'}${Math.abs(chars[i].arme.valeur.strength)})</span>`;
            document.getElementById("int" + i).innerHTML = `<abbr title="Régit les dégâts magiques.">Intelligence</abbr> : ${chars[i].stats.intelligence} <span class="grey">(${chars[i].arme.valeur.intelligence < 0 ? '-' : '+'}${Math.abs(chars[i].arme.valeur.intelligence)})</span>`;
            document.getElementById("vit" + i).innerHTML = `<abbr title="Régit les HP max et la résistance physique.">Vitalité</abbr> : ${chars[i].stats.vitality} <span class="grey">(${chars[i].armure.valeur.vitality < 0 ? '-' : '+'}${Math.abs(chars[i].armure.valeur.vitality)})</span>`;
            document.getElementById("vol" + i).innerHTML = `<abbr title="Régit les MP max et la résistance magique.">Volonté</abbr> : ${chars[i].stats.willpower} <span class="grey">(${chars[i].armure.valeur.willpower < 0 ? '-' : '+'}${Math.abs(chars[i].armure.valeur.willpower)})</span>`;
            document.getElementById("agiTemp" + i).innerHTML = `-> ${chars[i].statsTemp.agility} <span class="grey">(${chars[i].armure.valeur.agility < 0 ? '-' : '+'}${Math.abs(chars[i].armure.valeur.agility)})</span>`;
            document.getElementById("forTemp" + i).innerHTML = `-> ${chars[i].statsTemp.strength} <span class="grey">(${chars[i].armure.valeur.strength < 0 ? '-' : '+'}${Math.abs(chars[i].arme.valeur.strength)})</span>`;
            document.getElementById("intTemp" + i).innerHTML = `-> ${chars[i].statsTemp.intelligence} <span class="grey">(${chars[i].armure.valeur.intelligence < 0 ? '-' : '+'}${Math.abs(chars[i].arme.valeur.intelligence)})</span>`;
            document.getElementById("vitTemp" + i).innerHTML = `-> ${chars[i].statsTemp.vitality} <span class="grey">(${chars[i].armure.valeur.vitality < 0 ? '-' : '+'}${Math.abs(chars[i].armure.valeur.vitality)})</span>`;
            document.getElementById("volTemp" + i).innerHTML = `-> ${chars[i].statsTemp.willpower} <span class="grey">(${chars[i].armure.valeur.willpower < 0 ? '-' : '+'}${Math.abs(chars[i].armure.valeur.willpower)})</span>`;
            document.getElementById("lvlUpPoints" + i).innerHTML = `Points disponibles : ${chars[i].pointsLvlUp}`;
            let nomsSorts = chars[i].sorts.map(sort => sort.nom);
            document.getElementById("spells" + i).innerHTML = `Sorts :<br>${nomsSorts.join("<br>")}`;
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
                selectArmeHTML += `<option value="${arme.nom}" ${selected}>${arme.nom} (${arme.valeur.strength < 0 ? '-' : '+'}${Math.abs(arme.valeur.strength)} FOR, ${arme.valeur.intelligence < 0 ? '-' : '+'}${Math.abs(arme.valeur.intelligence)} INT)</option>`;
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
                selectArmureHTML += `<option value="${armure.nom}" ${selected}>${armure.nom} (${armure.valeur.agility < 0 ? '-' : '+'}${Math.abs(armure.valeur.agility)} AGI, ${armure.valeur.vitality < 0 ? '-' : '+'}${Math.abs(armure.valeur.vitality)} VIT, ${armure.valeur.willpower < 0 ? '-' : '+'}${Math.abs(armure.valeur.willpower)} VOL)</option>`;
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
                Character.charSheet();
            });
        }
    }
};