function fight() { // fonctionnement du combat
    if ( char === null || char.hp <= 0 ) {
        tempoMsg = 0; addMessageToLog("Tu dois d'abord créer un personnage !");
        return;
    }
    document.getElementById("genererMob").removeEventListener("click", Mob.popMob);
    document.getElementById("genererMob").addEventListener("click", Mob.disablePopMob);
    document.getElementById("fightBtn").remove();
    const combatStart = document.createElement("div");
    combatStart.innerHTML = '<p class="combatMsg">Le combat commence !</p> <div id="fightButtons"><button id="attack">Attaquer</button><button id="spell">Lancer un sort</button><button id="item">Utiliser un objet</button></div>'
    msgLog.appendChild(combatStart);
    onFight = true; document.getElementById("exploreWindow").classList.add("fight");
    let ennemyTargets = document.createElement("div");
    let xpGained = 0; let lootsGained = []; let goldGained = 0;
    document.getElementById("attack").addEventListener("click", attack);
    document.getElementById("spell").addEventListener("click", spell);
    document.getElementById("item").addEventListener("click", items);

    function targetSelect(action, effect = null) {
        let ennemyList = ``;
        for ( let i = 0 ; i < mobs.length ; i++ ) {
            ennemyList += `<button id="target${i}">${mobs[i].nom}</button>`;
        }
        ennemyTargets.innerHTML = ennemyList; ennemyTargets.id = "TargetBtns";
        msgLog.appendChild(ennemyTargets);  
        for (let i = 0; i < mobs.length; i++) {
            let targetBtn = document.getElementById(`target${i}`);
            let newTargetBtn = targetBtn.cloneNode(true);
            targetBtn.parentNode.replaceChild(newTargetBtn, targetBtn);
            newTargetBtn.addEventListener("click", () => { 
                cibleIndex = i;
                if ( action === "attack" ) {
                    attackDmg();
                } else if ( action === "spell" ) {
                    spellResolve(effect);
                } else if ( action === "item" ) {
                    useItem(effect);
                }
            });
        }
    }  

    function attack() {
        if ( document.getElementById("TargetBtns") ) { document.getElementById("TargetBtns").remove(); }
        if ( document.getElementById("itemList") ) { document.getElementById("itemList").remove(); }
        if ( document.getElementById("spellList") ) { document.getElementById("spellList").remove(); }
        targetSelect("attack");
    };

    function attackDmg() {
        ennemyTargets.remove();
        tempoMsg = 0;
        if ( Math.random() * 100 < Math.min(mobs[cibleIndex].stats.agility, 50) ) {
            addMessageToLog(`${cible.nom} <strong>esquive</strong> l'attaque de ${char.nom} !`);
        } else {
            let dmg = Math.floor(( 3 * ( char.stats.strength + char.arme.valeur.strength ) - mobs[cibleIndex].stats.vitality ) * ( Math.random() * 0.3 + 0.85 )); if ( dmg < 0 ) { dmg = 0 };
            addMessageToLog(`${char.nom} attaque ${mobs[cibleIndex].nom} avec ${char.arme.nom} ! <span class="red">${mobs[cibleIndex].nom} perd ${dmg} HP</span>.`);
            mobs[cibleIndex].hp = mobs[cibleIndex].hp - dmg;
            if (isFightOver()) return;
        }
        mobAttack(char);
    }

    function spell() {
        if ( document.getElementById("TargetBtns") ) { document.getElementById("TargetBtns").remove(); }
        if ( document.getElementById("itemList") ) { document.getElementById("itemList").remove(); }
        if ( document.getElementById("spellList") ) { document.getElementById("spellList").remove(); }
        tempoMsg = 0;
        const spellList = document.createElement("div");
        spellList.id = "spellList";
        msgLog.appendChild(spellList);
        char.sorts.forEach(sort => {
            let spellBtn = document.createElement("button");
            spellBtn.innerHTML = `${sort.nom}`;
            spellBtn.id = `${sort.id}`;
            spellList.appendChild(spellBtn);
            if ( sort.type === "attack" && sort.cible === 1 ) {
                spellBtn.onclick = () => targetSelect("spell", sort);
            } else if ( sort.type === "attack" && sort.cible === "all" ) {
                spellBtn.onclick = () => spellResolve(sort);
            } else if ( sort.type === "heal" ) {
                spellBtn.onclick = () => spellResolve(sort);
            }
        });
    };

    function spellResolve(sort) {
        if ( char.mp < sort.mp ) {
            addMessageToLog(`${char.nom} n'a pas assez de MP !`);
            return;
        }
        document.getElementById("spellList").remove();
        ennemyTargets.remove();
        char.mp -= sort.mp;
        addMessageToLog(`<span class="purple">${char.nom} perd ${sort.mp} MP</span> et utilise ${sort.nom}.`);
        char.charSheet();
        if ( sort.type === "attack" && sort.cible === 1 ) {
            let dmg = Math.floor(( 2 * ( char.stats.intelligence + char.arme.valeur.intelligence ) + sort.valeur - mobs[cibleIndex].stats.willpower ) * ( Math.random() * 0.3 + 0.85 )); if ( dmg < 0 ) { dmg = 0 };
            addMessageToLog(`<span class="red">${mobs[cibleIndex].nom} perd ${dmg} HP</span>.`);
            mobs[cibleIndex].hp = mobs[cibleIndex].hp - dmg;
            if (isFightOver()) return;
        } else if ( sort.type === "attack" && sort.cible === "all" ) {
            cibleIndex = "all";
            for (let i = 0; i < mobs.length; i++) {
                let dmg = Math.floor(( 2 * ( char.stats.intelligence + char.arme.valeur.intelligence ) + sort.valeur - mobs[i].stats.willpower ) * ( Math.random() * 0.3 + 0.85 )); if ( dmg < 0 ) { dmg = 0 };
                addMessageToLog(`<span class="red">${mobs[i].nom} perd ${dmg} HP</span>.`);
                mobs[i].hp = mobs[i].hp - dmg;
            }
            if (isFightOver()) return;
        } else if ( sort.type === "heal" ) {
            char.hp += sort.valeur; if ( char.hp > char.maxhp ) { char.hp = char.maxhp };
            addMessageToLog(`${char.nom} utilise ${sort.nom} ! <span class="green">${char.nom} gagne ${sort.valeur} HP</span>.`);

        }
        mobAttack(char);
    }

    function items() {
        if ( document.getElementById("TargetBtns") ) { document.getElementById("TargetBtns").remove(); }
        if ( document.getElementById("itemList") ) { document.getElementById("itemList").remove(); }
        if ( document.getElementById("spellList") ) { document.getElementById("spellList").remove(); }
        tempoMsg = 0;
        const itemList = document.createElement("div");
        itemList.id = "itemList";
        msgLog.appendChild(itemList);
        const objetsUtilisables = char.inventaire.filter(i => i.objet.type === "consommable");
        objetsUtilisables.forEach(i => {
            let itemBtn = document.createElement("button");
            itemBtn.innerHTML = `${i.objet.nom} x${i.quantite}`;
            itemBtn.id = i.objet.id;
            itemList.appendChild(itemBtn);
            if ( i.objet.effet === "dégâts" ) {
                itemBtn.onclick = () => targetSelect("item", i.objet);
            } else if ( i.objet.effet === "heal" || i.objet.effet === "regen" ) {
                itemBtn.onclick = () => useItem(i.objet);
            }
        });
    }

    function useItem(item) {
        if (item.effet === "heal") {
            char.hp += item.valeur;
            if (char.hp > char.maxhp) char.hp = char.maxhp;
            addMessageToLog(`${char.nom} utilise ${item.nom}. <span class="green">${char.nom} récupère ${item.valeur} HP</span> !`);
        } else if (item.effet === "regen") {
            char.mp += item.valeur;
            if (char.mp > char.maxmp) char.mp = char.maxmp;
            addMessageToLog(`${char.nom} utilise ${item.nom}. <span class="blue">${char.nom} récupère ${item.valeur} MP</span> !`);
        } else if (item.effet === "dégâts") {
            let dmg = Math.floor((item.valeur) * (Math.random() * 0.3 + 0.85));
            addMessageToLog(`${char.nom} lance ${item.nom} sur ${mobs[cibleIndex].nom} ! <span class="red">${mob.nom} perd ${dmg} HP</span>.`);
            mob.hp -= dmg;
            if (isFightOver()) return;
        }
        let index = char.inventaire.findIndex(i => i.objet.id === item.id);
        if (index !== -1) {
            char.inventaire[index].quantite--;
            if (char.inventaire[index].quantite <= 0) {
                char.inventaire.splice(index, 1);
            }
        }
        char.charSheet();
        document.getElementById("itemList").remove(); 
        mobAttack(char);
    }

    function mobAttack(cible) {
        for (let i = 0; i < mobs.length; i++) {
            if ( Math.random() * 100 < Math.min((char.stats.agility + char.arme.valeur.agility), 50) ) {
                addMessageToLog(`${cible.nom} <strong>esquive</strong> l'attaque de ${mobs[i].nom} !`);
            } else {
                let dmg = Math.floor((3 * mobs[i].stats.strength - (cible.stats.vitality + cible.armure.valeur.vitality)) * (Math.random() * 0.3 + 0.85));
                if (dmg < 0) dmg = 0;
                addMessageToLog(`${mobs[i].nom} attaque ! <span class="red">${cible.nom} perd ${dmg} HP</span>.`);
                cible.hp -= dmg;
                cible.charSheet();
                if (cible.hp <= 0) {
                    document.getElementById("genererMob").addEventListener("click", Mob.popMob);
                    document.getElementById("genererMob").removeEventListener("click", Mob.disablePopMob);
                    addMessageToLog(`${cible.nom} est <strong>vaincu(e)</strong> !`);
                    onFight = false; document.getElementById("exploreWindow").classList.remove("fight");
                    createBtn.style.display = "inline-block";
                    document.getElementById("fightButtons").remove();
                    break;
                }
            }
        }
    }

    function deadMob(cible) {
        addMessageToLog(`${mobs[cible].nom} est <strong>vaincu(e)</strong>.`);
        xpGained += 5 + mobs[cible].niveau * 5;
        if ( Math.random() < 0.8 ) {
            goldGained += Math.floor((Math.random() * 0.2 + 0.4 ) * mobs[cible].niveau * 6);
        }
        let loots = mobs[cible].lootTable.filter(objet => Math.random() < objet.chance);
        if (loots.length > 0) {
            loots.forEach(objet => {
                lootsGained.push(objet.item);
            });
        }
    }

    function isFightOver() {
        if ( cibleIndex === "all" ) {
            let indicesToRemove = [];
            for (let i = 0; i < mobs.length; i++) {
                if ( mobs[i].hp <= 0 ) {
                    deadMob(i);
                    indicesToRemove.push(i);
                }
            }
            for (let i = indicesToRemove.length - 1; i >= 0; i--) {
                mobs.splice(indicesToRemove[i], 1);
            }
        } else {
            if ( mobs[cibleIndex].hp <= 0 ) {
                deadMob(cibleIndex);
                mobs.splice(cibleIndex, 1);
            }
        }
        if ( mobs.length === 0 ) {
            document.getElementById("genererMob").addEventListener("click", Mob.popMob);
            document.getElementById("genererMob").removeEventListener("click", Mob.disablePopMob);
            document.getElementById("fightButtons").remove();
            char.gainXP(xpGained);
            char.or += goldGained;
            if ( goldGained > 0 ) addMessageToLog(`${char.nom} obtient ${goldGained} pièces d'or.`);
            if ( lootsGained.length > 0 ) { 
                addMessageToLog(`${char.nom} trouve : ${lootsGained.map(objet => objet.nom).join(", ")}.`);
                lootsGained.forEach(objet => {
                    char.addItem(objet);
                });
            }
            char.charSheet();
            onFight = false; document.getElementById("exploreWindow").classList.remove("fight"); return true;
        }
        return false;
    }
};