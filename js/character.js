class Character { // fonctionnement des chars
    constructor(nom, classe) {
        this.nom = nom;
        this.classe = classe;
        this.niveau = 1;
        this.experience = 0;
        this.or = 50;
        this.inventaire = [];
        this.sorts = [];
        this.stats = {};
        this.pointsLvlUp = 0;
        const classes = {
            "Guerrier": { stats: {strength: 3, intelligence: 1, agility: 2, vitality: 3, willpower: 1}, arme: Item.getItem("epee"), armure: Item.getItem("cotteDeMailles")},
            "Mage": { stats: {strength: 1, intelligence: 3, agility: 3, vitality: 1, willpower: 2}, sorts: [Spell.getSpell("bouleDeFeu1"), Spell.getSpell("chaineEclairs1")], arme: Item.getItem("baton"), armure: Item.getItem("robe")},
            "Voleur": { stats: {strength: 2, intelligence: 2, agility: 3, vitality: 2, willpower: 1}, sorts: [Spell.getSpell("rafale1")], arme: Item.getItem("dague"), armure: Item.getItem("armureDeCuir")},
            "Paladin": { stats: {strength: 2, intelligence: 2, agility: 1, vitality: 2, willpower: 3}, sorts: [ Spell.getSpell("bannissement1"), Spell.getSpell("eauRevitalisante1")], arme: Item.getItem("epee"), armure: Item.getItem("cotteDeMailles")}
        };
        let config = classes[this.classe];
        this.stats = config.stats;
        this.arme = config.arme;
        this.armure = config.armure;
        if (config.sorts) config.sorts.forEach(sort => this.addSpell(sort));
        this.addItem(Item.getItem("potionXXS"));
        this.maxhp = 10 * (this.stats.vitality + this.armure.valeur.vitality);
        this.maxmp = 10 * (this.stats.willpower + this.armure.valeur.willpower);
        this.hp = this.maxhp;
        this.mp = this.maxmp;
    }

    static createCharacter() {
        const nom = document.getElementById("nom").value;
        const classe = document.getElementById("classe").value;
        if (!nom) {
            tempoMsg = 0; addMessageToLog("Tu dois entrer un nom !");
            return;
        }
        char = new Character(nom, classe);
        createBtn.style.display = "none";
        charSheet.innerHTML = `
            <tr>
                <td id="name"></td>
                <td id="class"></td>
                <td id="level"></td>
            </tr>
            <tr>
                <td id="stats"></td>
                <td id="inventory"></td>
                <td id="spells"></td>
            </tr>
            <tr>
                <td colspan="3" style="text-align:center;" id="weapon"></td>
            </tr>
            <tr>
                <td colspan="3" style="text-align:center;" id="armor"></td>
            </tr>  
            <tr>
                <td id="HP"></td>
                <td id="MP"></td>
                <td id="XP"></td>
            </tr>`;
        document.getElementById("teamWindow").appendChild(charSheet);
        char.charSheet();
    };

    addItem(objet) {
        let itemTrouve = this.inventaire.find(i => i.objet.id === objet.id);
        if (itemTrouve) {
            itemTrouve.quantite++;
        } else {
            this.inventaire.push({ objet, quantite: 1 });
        }
        this.charSheet();
    }

    addSpell(sort) {
        this.sorts.push(sort);
        this.charSheet();
    }

    gainXP(xp) {
        addMessageToLog(`<span class="orange">${this.nom} gagne ${xp} XP</span>.`);
        this.experience += xp;
        while (this.experience >= 10 * this.niveau) {
            this.experience -= 10 * this.niveau;
            this.hp = this.maxhp;
            this.mp = this.maxmp;
            if ( this.pointsLvlUp === 0 ) { document.getElementById("teamWindow").appendChild(lvlUpWindow) }
            this.pointsLvlUp += 2;
            this.niveau++; this.levelUp();
            addMessageToLog(`<span class="orange">${this.nom} passe niveau ${this.niveau}</span> ! Les HP/MP ont été restaurés.`); this.charSheet();
        }
    }

    levelUp() {
        this.statsTemp = { ...this.stats };
        this.levelUpTable();
        this.addLevelUpListeners();
    }
    
    levelUpTable = () => {
        lvlUpWindow.innerHTML = `
            <tr><td colspan="5" style="text-align:center;">Points disponibles : ${this.pointsLvlUp}</td></tr>
            <tr>
                <td><abbr title="Régit la capacité d'esquive.">Agilité</abbr></td>
                <td><abbr title="Régit les dégâts physiques.">Force</abbr></td>
                <td><abbr title="Régit les dégâts magiques.">Intelligence</abbr></td>
                <td><abbr title="Régit les HP max et la résistance physique.">Vitalité</abbr></td>
                <td><abbr title="Régit les MP max et la résistance magique.">Volonté</abbr></td>
            </tr>
            <tr>
                <td>${this.statsTemp.agility}</td>
                <td>${this.statsTemp.strength}</td>
                <td>${this.statsTemp.intelligence}</td>
                <td>${this.statsTemp.vitality}</td>
                <td>${this.statsTemp.willpower}</td>
            </tr>
            <tr>
                <td><button id="AgiUp">+</button><button id="AgiDwn">-</button></td>
                <td><button id="ForUp">+</button><button id="ForDwn">-</button></td>
                <td><button id="IntUp">+</button><button id="IntDwn">-</button></td>
                <td><button id="VitUp">+</button><button id="VitDwn">-</button></td>
                <td><button id="VolUp">+</button><button id="VolDwn">-</button></td>
            </tr>
            <tr><td colspan="5" style="text-align:center;"><button id="LvlUp">Valider</button></td></tr>`;
    }
    
    addLevelUpListeners = () => {
        document.getElementById("AgiUp").addEventListener("click", () => this.modifyStat("agility", "+"));
        document.getElementById("ForUp").addEventListener("click", () => this.modifyStat("strength", "+"));
        document.getElementById("IntUp").addEventListener("click", () => this.modifyStat("intelligence", "+"));
        document.getElementById("VitUp").addEventListener("click", () => this.modifyStat("vitality", "+"));
        document.getElementById("VolUp").addEventListener("click", () => this.modifyStat("willpower", "+"));
        document.getElementById("AgiDwn").addEventListener("click", () => this.modifyStat("agility", "-"));
        document.getElementById("ForDwn").addEventListener("click", () => this.modifyStat("strength", "-"));
        document.getElementById("IntDwn").addEventListener("click", () => this.modifyStat("intelligence", "-"));
        document.getElementById("VitDwn").addEventListener("click", () => this.modifyStat("vitality", "-"));
        document.getElementById("VolDwn").addEventListener("click", () => this.modifyStat("willpower", "-"));
        document.getElementById("LvlUp").addEventListener("click", this.validateLvlUp)
    }
    
    modifyStat = (stat, operation) => {
        if ( onFight ) {
            tempoMsg = 0; addMessageToLog(`Impossible d'attribuer des points pendant le combat !`)
            return;
        }
        if (operation === "+" && this.pointsLvlUp > 0) {
            this.statsTemp[stat]++;
            this.pointsLvlUp--;
        } else if (operation === "-" && this.statsTemp[stat] > this.stats[stat]) {
            this.statsTemp[stat]--;
            this.pointsLvlUp++;
        } else if (operation === "-" && this.statsTemp[stat] === this.stats[stat]) {
            tempoMsg = 0; addMessageToLog(`Impossible de baisser une statistique sous sa valeur actuelle !`)
        } else if (this.pointsLvlUp === 0) {
            tempoMsg = 0; addMessageToLog(`Plus de points disponibles !`)
        }
        this.levelUpTable();
        this.addLevelUpListeners(); 
    }

    validateLvlUp = () => {
        if ( char.stats.vitality < char.statsTemp.vitality ) {
            this.hp += 10 * ( char.statsTemp.vitality - char.stats.vitality );
        }
        if ( char.stats.willpower < char.statsTemp.willpower ) {
            this.mp += 10 * ( char.statsTemp.willpower - char.stats.willpower );
        }
        this.stats = { ...this.statsTemp };
        if ( this.pointsLvlUp === 0 ) { lvlUpWindow.remove(); }
        this.maxhp = 10 * (this.stats.vitality + this.armure.valeur.vitality);
        this.maxmp = 10 * (this.stats.willpower + this.armure.valeur.willpower);
        this.charSheet();
    }
    
    charSheet() {
        if (!document.getElementById("name")) return;
        document.getElementById("name").textContent = this.nom;
        document.getElementById("class").textContent = this.classe;
        document.getElementById("level").textContent = `Niveau : ${this.niveau}`;
        document.getElementById("stats").innerHTML = `
        <abbr title="Régit la capacité d'esquive.">Agilité</abbr> : ${this.stats.agility} (${this.armure.valeur.agility < 0 ? '-' : '+'}${Math.abs(this.armure.valeur.agility)})<br>
        <abbr title="Régit les dégâts physiques.">Force</abbr> : ${this.stats.strength} (${this.arme.valeur.strength < 0 ? '-' : '+'}${Math.abs(this.arme.valeur.strength)})<br>
        <abbr title="Régit les dégâts magiques.">Intelligence</abbr> : ${this.stats.intelligence} (${this.arme.valeur.intelligence < 0 ? '-' : '+'}${Math.abs(this.arme.valeur.intelligence)})<br>
        <abbr title="Régit les HP max et la résistance physique.">Vitalité</abbr> : ${this.stats.vitality} (${this.armure.valeur.vitality < 0 ? '-' : '+'}${Math.abs(this.armure.valeur.vitality)})<br>
        <abbr title="Régit les MP max et la résistance magique.">Volonté</abbr> : ${this.stats.willpower} (${this.armure.valeur.willpower < 0 ? '-' : '+'}${Math.abs(this.armure.valeur.willpower)})<br>
        `;
        const nomsObjets = this.inventaire.map(i => `${i.objet.nom} x${i.quantite}`);
        document.getElementById("inventory").innerHTML = `Inventaire :<br>${this.or} pièces d'or<br>${nomsObjets.join("<br>")}`;
        const nomsSorts = this.sorts.map(sort => sort.nom);
        document.getElementById("spells").innerHTML = `Sorts :<br>${nomsSorts.join("<br>")}`;
        let displayHP = document.getElementById("HP");
        displayHP.textContent = `HP : ${this.hp} / ${this.maxhp}`;
        displayHP.style.color = this.hp <= this.maxhp / 4 ? "red" : "black";
        let displayMP = document.getElementById("MP");
        displayMP.textContent = `MP : ${this.mp} / ${this.maxmp}`;
        displayMP.style.color = this.mp <= this.maxmp / 4 ? "purple" : "black";
        document.getElementById("XP").textContent = `XP : ${this.experience} / ${10 * this.niveau}`;
        if (this.hp <= 0) {
            charSheet.remove();
            lvlUpWindow.remove();
            return;
        }
        let armesDispo = this.inventaire
            .filter(item => item.objet.effet === "arme")
            .map(item => item.objet)
            .filter((arme, index, self) => self.findIndex(a => a.nom === arme.nom) === index);   
        if (this.arme) armesDispo.unshift(this.arme);
        let selectArmeHTML = `<select id="selectArme">`;
        armesDispo.forEach(arme => {
            let selected = this.arme && this.arme.nom === arme.nom ? "selected" : "";
            selectArmeHTML += `<option value="${arme.nom}" ${selected}>${arme.nom} (${arme.valeur.strength < 0 ? '-' : '+'}${Math.abs(arme.valeur.strength)} FOR, ${arme.valeur.intelligence < 0 ? '-' : '+'}${Math.abs(arme.valeur.intelligence)} INT)</option>`;
        });
        selectArmeHTML += `</select>`; 
        document.getElementById("weapon").innerHTML = `Arme : ${selectArmeHTML}`;
        let armuresDispo = this.inventaire
            .filter(item => item.objet.effet === "armure")
            .map(item => item.objet)
            .filter((armure, index, self) => self.findIndex(a => a.nom === armure.nom) === index); 
        if (this.armure) armuresDispo.unshift(this.armure);
        let selectArmureHTML = `<select id="selectArmure">`;
        armuresDispo.forEach(armure => {
            let selected = this.armure && this.armure.nom === armure.nom ? "selected" : "";
            selectArmureHTML += `<option value="${armure.nom}" ${selected}>${armure.nom} (${armure.valeur.agility < 0 ? '-' : '+'}${Math.abs(armure.valeur.agility)} AGI, ${armure.valeur.vitality < 0 ? '-' : '+'}${Math.abs(armure.valeur.vitality)} VIT, ${armure.valeur.willpower < 0 ? '-' : '+'}${Math.abs(armure.valeur.willpower)} VOL)</option>`;
        });
        selectArmureHTML += `</select>`;  
        document.getElementById("armor").innerHTML = `Armure : ${selectArmureHTML}`;
        document.getElementById("selectArme").addEventListener("change", (e) => {
            let nouvelleArme = armesDispo.find(obj => obj.nom === e.target.value);
            if (this.arme) {
                let armeExistante = this.inventaire.find(obj => obj.objet.nom === this.arme.nom);
                if (armeExistante) {
                    armeExistante.quantite++;
                } else {
                    this.inventaire.push({ objet: this.arme, quantite: 1 });
                }
            }
            let itemInventaire = this.inventaire.find(obj => obj.objet.nom === nouvelleArme.nom);
            if (itemInventaire) {
                if (itemInventaire.quantite > 1) {
                    itemInventaire.quantite--;
                } else {
                    this.inventaire = this.inventaire.filter(obj => obj.objet.nom !== nouvelleArme.nom);
                }
            }
            this.arme = nouvelleArme;
            this.charSheet();
        });
        document.getElementById("selectArmure").addEventListener("change", (e) => {
            let nouvelleArmure = armuresDispo.find(obj => obj.nom === e.target.value);
            if (this.armure) {
                let armureExistante = this.inventaire.find(obj => obj.objet.nom === this.armure.nom);
                if (armureExistante) {
                    armureExistante.quantite++;
                } else {
                    this.inventaire.push({ objet: this.armure, quantite: 1 });
                }
            }
            let itemInventaire = this.inventaire.find(obj => obj.objet.nom === nouvelleArmure.nom);
            if (itemInventaire) {
                if (itemInventaire.quantite > 1) {
                    itemInventaire.quantite--;
                } else {
                    this.inventaire = this.inventaire.filter(obj => obj.objet.nom !== nouvelleArmure.nom);
                }
            }
            this.armure = nouvelleArmure;
            this.maxhp = 10 * (this.stats.vitality + this.armure.valeur.vitality);
            this.maxmp = 10 * (this.stats.willpower + this.armure.valeur.willpower);
            if (this.hp > this.maxhp) this.hp = this.maxhp;
            if (this.mp > this.maxmp) this.mp = this.maxmp;
            this.charSheet();
        });
    }
};