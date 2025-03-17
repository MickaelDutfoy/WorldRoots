function fight() {
    document.getElementById("ennemyTargets").remove();
    let fightMobDiv = document.createElement("div"); msgLog.appendChild(fightMobDiv); fightMobDiv.id = "FightMobList";
    let fightMobP = document.createElement("p"); fightMobP.innerHTML = "Ennemis présents dans la salle :"; fightMobDiv.appendChild(fightMobP);
    let fightMobList = document.createElement("ul"); fightMobDiv.appendChild(fightMobList)
    let xpGained = 0; let lootsGained = []; let goldGained = 0; tempoMsg = 0;
    onFight = true; exploreWindow.classList.add("fight");
    const combatActions = document.createElement("div");
    let targets = document.createElement("div");
    let initiativeTable = []; let round = 1; let taunt = false;
    chars.forEach((char, index) => {
        initiativeTable.push({ type: "char", entity: char, index: index, agility: char.stats.agility + char.armure.valeur.agility });
    });
    mobs.forEach((mob, index) => {
        initiativeTable.push({ type: "mob", entity: mob, index: index, agility: mob.stats.agility });
    });
    initiativeTable.sort((a, b) => b.agility - a.agility);
    for (let i = 0; i < initiativeTable.length - 1; i++) {
        if (initiativeTable[i].agility === initiativeTable[i + 1].agility) {
            if (Math.random() > 0.5) {
                [initiativeTable[i], initiativeTable[i + 1]] = [initiativeTable[i + 1], initiativeTable[i]];
            }
        }
    }
    let turnIndex = 0; nextTurn();  

    function nextTurn() {
        refreshMobList();
        if (isGameOver()) return;
        if ( turnIndex >= initiativeTable.length ) { turnIndex = 0; round++ }
        let fighter = initiativeTable[turnIndex];
        if ( fighter.type === "mob" && fighter.entity.hp > 0 ) {
            addMessageToLog(`Au tour de ${fighter.entity.nom} !`);
            decrementStatusEffects(fighter.entity);
            let target;
                do {
                    target = chars[Math.floor(Math.random() * chars.length)];
                } while (target.hp <= 0);
                if ( taunt === true && chars.find(personnage => personnage.skill === "Provocation").hp > 0 ) { target = chars.find(personnage => personnage.skill === "Provocation"); }
            mobAttack(fighter.entity, target);
            turnIndex++;
            nextTurn();
        } else if ( fighter.type === "char" && fighter.entity.hp > 0 ) {
            addMessageToLog(`Au tour de ${fighter.entity.nom} !`);
            decrementStatusEffects(fighter.entity);
            if ( fighter.entity.skill === "Provocation" && taunt === true ) taunt = false;
            let mpSkill = 0;
            if (fighter.entity.skill === "Provocation") {mpSkill = fighter.entity.niveau}
            else if (fighter.entity.skill === "Action divine") {mpSkill = Math.max(fighter.entity.mp, 1)}
            else if (fighter.entity.skill === "Siphon vital") {mpSkill = 2 * fighter.entity.niveau}
            else if (fighter.entity.skill === "Élémantra") {mpSkill = Math.max(fighter.entity.mp, 1)}
            else if (fighter.entity.skill === "Discorde") {mpSkill = 2 * fighter.entity.niveau}
            else if (fighter.entity.skill === "Manamnesis") {mpSkill = 3 * fighter.entity.niveau}
            else if (fighter.entity.skill === "Don de mana") {mpSkill = 3 * fighter.entity.niveau}
            else if (fighter.entity.skill === "Tourbillon") {mpSkill = 2 * fighter.entity.niveau}
            else if (fighter.entity.skill === "Analyse") {mpSkill = 2 * fighter.entity.niveau}
            else if (fighter.entity.skill === "Larcin") {mpSkill = fighter.entity.niveau}
            else if (fighter.entity.skill === "Fraternité") {
                // insérer ici coût capacité Rôdeur
            } else if (fighter.entity.skill === "Portail") {
                // insérer ici coût capacité Invocateur
            }
            setTimeout(() => {
                let actions = `<div id="fightButtons"><button id="attack">Attaquer</button><button id="skill">${fighter.entity.skill} (${mpSkill} MP)</button>`
                if ( fighter.entity.sorts.length > 0 ) actions += `<button id="spell">Lancer un sort</button>`
                if ( inventaire.length > 0 ) actions += `<button id="item">Utiliser un objet</button>`
                actions += `</div>`
                combatActions.innerHTML = actions;
                fightLog.insertBefore(combatActions, fightLog.firstChild);
                document.getElementById("attack").addEventListener("click", () => {
                    attack(fighter.entity);
                });
                document.getElementById("skill").addEventListener("click", () => {
                    skill(fighter.entity);
                });
                if ( document.getElementById("spell") ) {
                    document.getElementById("spell").addEventListener("click", () => {
                    spell(fighter.entity);
                    });
                }
                if ( document.getElementById("item") ) {
                    document.getElementById("item").addEventListener("click", () => {
                    items(fighter.entity);
                    });
                }
            }, tempoMsg);
            tempoMsg += 600;
        } else {
            turnIndex++;
            nextTurn();
        }
    }
    
    function proceed() {
        if ( document.getElementById("fightButtons") ) { document.getElementById("fightButtons").remove(); }
        if ( document.getElementById("TargetBtns") ) { document.getElementById("TargetBtns").remove(); }
        if ( document.getElementById("itemList") ) { document.getElementById("itemList").remove(); }
        if ( document.getElementById("spellList") ) { document.getElementById("spellList").remove(); }
        if ( targets ) targets.remove();
        combatActions.innerHTML = "";
        turnIndex++;
        nextTurn();
    }

    function decrementStatusEffects(fighter) {
        let effects = ["buffagility", "debuffagility", "buffstrength", "debuffstrength", "buffintelligence", "debuffintelligence", "buffvitality", "debuffvitality", "buffwillpower", "debuffwillpower"]
        effects.forEach(effect => {
            mobs.forEach(mob => {
                if (mob.statusEffects[effect] && mob.statusEffects[effect].caster === fighter) {
                    console.log(`Found a buff/debuff for ${mob.nom} that was cast by ${fighter.nom}`)
                    mob.statusEffects[effect].turns--;
                    if (mob.statusEffects[effect].turns === 0) {
                        let match = effect.match(/(buff|debuff)([A-Za-z]+)/);
                        let [_, type, stat] = match;
                        stat = stat.toLowerCase();
                        if (type === "buff") {
                            mob.statsTemp[stat] -= 3 * mob.statusEffects[effect].lvl
                        } else if (type === "debuff") {
                            mob.statsTemp[stat] += 3 * mob.statusEffects[effect].lvl
                        }
                        delete mob.statusEffects[effect]
                    }
                }
            })
            chars.forEach(char => {
                if (char.statusEffects[effect] && char.statusEffects[effect].caster === fighter) {
                    console.log(`Found a buff/debuff for ${char.nom} that was cast by ${fighter.nom}`)
                    char.statusEffects[effect].turns--;
                    if (char.statusEffects[effect].turns === 0) {
                        let match = effect.match(/(buff|debuff)([A-Za-z]+)/);
                        let [_, type, stat] = match;
                        stat = stat.toLowerCase();
                        if (type === "buff") {
                            char.statsTemp[stat] -= 3 * char.statusEffects[effect].lvl
                        } else if (type === "debuff") {
                            char.statsTemp[stat] += 3 * char.statusEffects[effect].lvl
                        }
                        delete char.statusEffects[effect]
                        Character.charSheet();
                    }
                }
            })
        })
    } 

    function refreshMobList() {
        fightMobList.innerHTML = "";
        mobs.sort((a, b) => a.nom.localeCompare(b.nom));
        for (let i = 0; i < mobs.length; i++) {
            let mobToList = document.createElement("li");
            mobToList.innerHTML = `${mobs[i].nom}`;
            fightMobList.appendChild(mobToList);
        }
    }

    function targetSelect(char, action, effect = null) {
        let ennemyList = ``;
        for ( let i = 0 ; i < mobs.length ; i++ ) {
            ennemyList += `<button id="target${i}">${mobs[i].nom}</button>`;
        }
        targets.innerHTML = ennemyList; targets.id = "TargetBtns";
        fightLog.insertBefore(targets, fightLog.firstChild);  
        for (let i = 0; i < mobs.length; i++) {
            let targetBtn = document.getElementById(`target${i}`);
            let newTargetBtn = targetBtn.cloneNode(true);
            targetBtn.parentNode.replaceChild(newTargetBtn, targetBtn);
            newTargetBtn.addEventListener("click", () => { 
                cibleIndex = i;
                if ( action === "attack" ) {
                    attackDmg(char);
                } else if ( action === "spell" ) {
                    spellResolve(char, effect);
                } else if ( action === "item" ) {
                    useItem(char, effect);
                }
            });
        }
    }

    function allySelect(char, action, effect = null) {
        let allyList = ``;
        for ( let i = 0 ; i < chars.length ; i++ ) {
            allyList += `<button id="target${i}">${chars[i].nom}</button>`;
        }
        targets.innerHTML = allyList; targets.id = "TargetBtns";
        fightLog.insertBefore(targets, fightLog.firstChild);  
        for (let i = 0; i < chars.length; i++) {
            let targetBtn = document.getElementById(`target${i}`);
            let newTargetBtn = targetBtn.cloneNode(true);
            targetBtn.parentNode.replaceChild(newTargetBtn, targetBtn);
            newTargetBtn.addEventListener("click", () => { 
                cibleIndex = i;
                if ( action === "spell" ) {
                    spellResolve(char, effect);
                } else if ( action === "item" ) {
                    useItem(char, effect);
                }
            });
        }
    }

    function attack(char) {
        if ( document.getElementById("item") ) document.getElementById("item").classList.remove("selected")
        if ( document.getElementById("spell") ) document.getElementById("spell").classList.remove("selected")
        document.getElementById("attack").classList.add("selected")
        if ( document.getElementById("TargetBtns") ) { document.getElementById("TargetBtns").remove(); }
        if ( document.getElementById("itemList") ) { document.getElementById("itemList").remove(); }
        if ( document.getElementById("spellList") ) { document.getElementById("spellList").remove(); }
        targetSelect(char, "attack");
    };

    function attackDmg(char) {     
        tempoMsg = 0;
        if ( Math.random() * 100 < Math.min(mobs[cibleIndex].statsTemp.agility - (char.statsTemp.agility + char.arme.valeur.agility), 50) ) {
            addMessageToLog(`${mobs[cibleIndex].nom} <strong>esquive</strong> l'attaque de ${char.nom} !`);
        } else {
            let dmg = Math.floor(( 2 * ( char.statsTemp.strength + char.arme.valeur.strength ) - mobs[cibleIndex].statsTemp.vitality ) * ( Math.random() * 0.3 + 0.85 )); if ( dmg < 0 ) { dmg = 0 };
            addMessageToLog(`${char.nom} attaque ${mobs[cibleIndex].nom} avec ${char.arme.nom} ! <span class="red">${mobs[cibleIndex].nom} perd ${dmg} HP</span>.`);
            mobs[cibleIndex].hp = mobs[cibleIndex].hp - dmg;
            if (isFightOver()) return;
        }
        proceed();
    };

    function skill(char) {
        tempoMsg = 0;
        if (char.skill === "Provocation") {
            if ( char.mp < char.niveau ) {
                addMessageToLog(`${char.nom} n'a pas assez de MP !`); return;
            } else {
                char.mp -= char.niveau;
                addMessageToLog(`<span class="purple">${char.nom} perd ${char.niveau} MP</span> et utilise ${char.skill}.`);
                addMessageToLog(`Les adversaires ciblent tous ${char.nom} !`);
                taunt = true;
            }
        } else if (char.skill === "Action divine") {
            if ( char.mp === 0 ) {
                addMessageToLog(`${char.nom} n'a pas assez de MP !`); return;
            } else {
                addMessageToLog(`<span class="purple">${char.nom} perd ${char.mp} MP</span> et utilise ${char.skill}.`);
                let ratio = char.mp / char.maxmp;
                for (let i = 0; i < chars.length; i++) {
                    if (chars[i].hp === 0) { addMessageToLog(`${chars[i].nom} revient à la vie !`) }
                    let heal = Math.floor(ratio * chars[i].maxhp);
                    chars[i].hp += heal;
                    if ( chars[i].hp > chars[i].maxhp ) { chars[i].hp = chars[i].maxhp };
                    addMessageToLog(`<span class="green">${chars[i].nom} gagne ${heal} HP</span>.`);
                }
                char.mp = 0;
            }
        } else if (char.skill === "Siphon vital") {
            if ( char.mp < char.niveau * 2 ) {
                addMessageToLog(`${char.nom} n'a pas assez de MP !`); return;
            } else {
                char.mp -= char.niveau * 2;
                addMessageToLog(`<span class="purple">${char.nom} perd ${char.niveau * 2} MP</span> et utilise ${char.skill}.`);
                cibleIndex = "all";
                let heal = 0;
                for (let i = 0; i < mobs.length; i++) {
                    coeff = mobs[i].resists.dark;
                    let dmg = Math.floor(( char.statsTemp.intelligence + char.arme.valeur.intelligence + char.niveau * 2 - mobs[i].statsTemp.willpower ) * ( Math.random() * 0.3 + 0.85 ) * coeff); if ( dmg < 0 ) { dmg = 0 };
                    if ( coeff === 0 ) {
                        addMessageToLog(`<strong>Immunité</strong> ! ${mobs[i].nom} perd ${dmg} HP.`);
                    } else if ( coeff === 0.5 ) {
                        addMessageToLog(`<strong>Résistance</strong> ! <span class="red">${mobs[i].nom} perd ${dmg} HP</span>.`);
                    } else if ( coeff === 2 ) {
                        addMessageToLog(`<strong>Faiblesse</strong> ! <span class="red">${mobs[i].nom} perd ${dmg} HP</span>.`);
                    } else {
                        addMessageToLog(`<span class="red">${mobs[i].nom} perd ${dmg} HP</span>.`);
                    }
                    heal += dmg;
                    mobs[i].hp = mobs[i].hp - dmg;
                }
                char.hp += heal; if (char.hp > char.maxhp) char.hp = char.maxhp;
                addMessageToLog(`<span class="green">${char.nom} gagne ${heal} HP</span>.`);
                if (isFightOver()) return;
            }
        } else if (char.skill === "Élémantra") {
            if ( char.mp === 0 ) {
                addMessageToLog(`${char.nom} n'a pas assez de MP !`); return;
            } else {
                addMessageToLog(`<span class="purple">${char.nom} perd ${char.mp} MP</span> et utilise ${char.skill}.`);
                cibleIndex = "all";
                for (let i = 0; i < mobs.length; i++) {
                    let dmg = Math.floor(( char.statsTemp.intelligence + char.arme.valeur.intelligence + char.mp * 2 - mobs[i].statsTemp.willpower ) * ( Math.random() * 0.3 + 0.85 )); if ( dmg < 0 ) { dmg = 0 };
                    mobs[i].hp -= dmg;
                    addMessageToLog(`<span class="red">${mobs[i].nom} perd ${dmg} HP</span>.`);
                }
                char.mp = 0;
                if (isFightOver()) return;
            }
        } else if (char.skill === "Discorde") {
            if ( char.mp < char.niveau * 2 ) {
                addMessageToLog(`${char.nom} n'a pas assez de MP !`); return;
            } else {
                addMessageToLog(`<span class="purple">${char.nom} perd ${char.niveau * 2} MP</span> et utilise ${char.skill}.`);
                cibleIndex = "all";
                char.mp -= char.niveau * 2;
                if (mobs.length === 1) {
                    addMessageToLog(`${char.skill} n'a aucun effet sur une cible unique.`);
                } else {
                    let aliveMobs = mobs;
                    aliveMobs.forEach(attaquant => {
                        if (attaquant.hp <= 0) return;
                        let ciblesPossibles = aliveMobs.filter(mob => mob !== attaquant);
                        if (ciblesPossibles.length === 0) return;
                        let cible = ciblesPossibles[Math.floor(Math.random() * ciblesPossibles.length)];
                        let spellsPossibles = attaquant.sorts.filter(sort => 
                            sort.type === "attack" && sort.cible === 1 && attaquant.mp >= sort.mp
                        );
                        if (spellsPossibles.length > 0 && Math.random() < 0.6) {
                            let sortChoisi = spellsPossibles[Math.floor(Math.random() * spellsPossibles.length)];
                            attaquant.mp -= sortChoisi.mp;
                            let coeff = 1;
                            if ( cible.resists[sortChoisi.element] !== undefined ) coeff = cible.resists[sortChoisi.element];
                            let dmg = Math.floor((attaquant.statsTemp.intelligence + sortChoisi.valeur - cible.statsTemp.willpower) * (Math.random() * 0.3 + 0.85) * coeff);
                            if (dmg < 0) dmg = 0;
                            cible.hp -= dmg;
                            addMessageToLog(`${attaquant.nom} utilise ${sortChoisi.nom} !`);
                            if ( coeff === 0 ) {
                                addMessageToLog(`<strong>Immunité</strong> ! ${cible.nom} perd ${dmg} HP.`);
                            } else if ( coeff === 0.5 ) {
                                addMessageToLog(`<strong>Résistance</strong> ! <span class="red">${cible.nom} perd ${dmg} HP</span>.`);
                            } else if ( coeff === 2 ) {
                                addMessageToLog(`<strong>Faiblesse</strong> ! <span class="red">${cible.nom} perd ${dmg} HP</span>.`);
                            } else {
                                addMessageToLog(`<span class="red">${cible.nom} perd ${dmg} HP</span>.`);
                            }
                        } else {
                            let dmg = Math.floor((2 * attaquant.statsTemp.strength - cible.statsTemp.vitality) * (Math.random() * 0.3 + 0.85));
                            if (dmg < 0) dmg = 0;
                            cible.hp -= dmg;
                            addMessageToLog(`${attaquant.nom} attaque ! <span class="red">${cible.nom} perd ${dmg} HP</span>.`);
                        }
                    })
                }
                if (isFightOver()) return;
            }
        } else if (char.skill === "Manamnesis") {
            if ( char.mp < char.niveau * 3 ) {
                addMessageToLog(`${char.nom} n'a pas assez de MP !`); return;
            } else {
                addMessageToLog(`<span class="purple">${char.nom} perd ${char.niveau * 3} MP</span> et utilise ${char.skill}.`);
                cibleIndex = "all";
                for (let i = 0; i < mobs.length; i++) {
                    let mpDmg = Math.floor(( char.statsTemp.intelligence + char.arme.valeur.intelligence + char.niveau * 3 - mobs[i].statsTemp.willpower ) * ( Math.random() * 0.3 + 0.85 )); let dmg = Math.floor(mpDmg / 2);
                    if ( mpDmg > mobs[i].mp ) mpDmg = mobs[i].mp;
                    mobs[i].mp -= mpDmg;
                    mobs[i].hp -= dmg;
                    addMessageToLog(`<span class="purple">${mobs[i].nom} perd ${mpDmg} MP</span>. <span class="red">${mobs[i].nom} perd ${dmg} HP</span>.`);
                }
                char.mp -= char.niveau * 3;
                if (isFightOver()) return;
            }
        } else if (char.skill === "Don de mana") {
            if ( char.mp < char.niveau * 3 ) {
                addMessageToLog(`${char.nom} n'a pas assez de MP !`); return;
            } else {
                char.mp -= char.niveau * 3;
                addMessageToLog(`<span class="purple">${char.nom} perd ${char.niveau * 3} MP</span> et utilise ${char.skill}.`);
                for (let i = 0; i < chars.length; i++) {
                    if (chars[i].nom !== char.nom) {
                        chars[i].mp += char.niveau * 3; if ( chars[i].mp > chars[i].maxmp ) chars[i].mp = chars[i].maxmp;
                        addMessageToLog(`<span class="blue">${chars[i].nom} récupère ${char.niveau * 3} MP</span> !`);
                    }
                }
            }
        } else if (char.skill === "Tourbillon") {
            if ( char.mp < char.niveau * 2 ) {
                addMessageToLog(`${char.nom} n'a pas assez de MP !`); return;
            } else {
                addMessageToLog(`<span class="purple">${char.nom} perd ${char.niveau * 2} MP</span> et utilise ${char.skill}.`);
                cibleIndex = "all";
                for (let i = 0; i < mobs.length; i++) {
                    let dmg = Math.floor(( 2 * ( char.statsTemp.strength + char.arme.valeur.strength ) - mobs[i].statsTemp.vitality ) * ( Math.random() * 0.3 + 0.85 )); if ( dmg < 0 ) { dmg = 0 };
                    addMessageToLog(`${char.nom} attaque ${mobs[i].nom} avec ${char.arme.nom} ! <span class="red">${mobs[i].nom} perd ${dmg} HP</span>.`);
                    mobs[i].hp = mobs[i].hp - dmg;
                }
                char.mp -= char.niveau * 2;
                if (isFightOver()) return;
            }
        } else if (char.skill === "Analyse") {
            if ( char.mp < char.niveau * 2 ) {
                addMessageToLog(`${char.nom} n'a pas assez de MP !`); return;
            } else {
                addMessageToLog(`<span class="purple">${char.nom} perd ${char.niveau * 2} MP</span> et utilise ${char.skill}.`);
                cibleIndex = "all";
                for (let i = 0; i < mobs.length; i++) {
                    const elements = {
                        fire: "Feu",
                        earth: "Terre",
                        ice: "Glace",
                        lightning: "Foudre",
                        dark: "Ténèbres",
                        holy: "Sacré"
                    };             
                    const immunes = [];
                    const resists = [];
                    const weaknesses = [];
                    for (const [element, value] of Object.entries(mobs[i].resists)) {
                        const elementFR = elements[element];
                        if (value === 0) {
                            immunes.push(elementFR);
                        } else if (value === 0.5) {
                            resists.push(elementFR);
                        } else if (value === 2) {
                            weaknesses.push(elementFR);
                        }
                    }
                    const immuneText = immunes.length > 0 ? `Immunisé à : ${immunes.join(', ')}. ` : "";
                    const resistText = resists.length > 0 ? `Résiste à : ${resists.join(', ')}. ` : "";
                    const weaknessText = weaknesses.length > 0 ? `Faible face à : ${weaknesses.join(', ')}.` : "";
                    addMessageToLog(`Analysé : ${mobs[i].nom}. Niveau ${mobs[i].niveau}. HP : ${mobs[i].hp}/${mobs[i].maxhp}, MP : ${mobs[i].mp}/${mobs[i].maxmp}. ${immuneText}${resistText}${weaknessText}`);
                }
                char.mp -= char.niveau * 2;
            }
        } else if (char.skill === "Larcin") {
            if ( char.mp < char.niveau ) {
                addMessageToLog(`${char.nom} n'a pas assez de MP !`); return;
            } else {
                addMessageToLog(`<span class="purple">${char.nom} perd ${char.niveau} MP</span> et utilise ${char.skill}.`);
                char.mp -= char.niveau;
                let cible = mobs[Math.floor(Math.random() * mobs.length)];
                if ( cible.lootTable.length === 0 ) {
                    addMessageToLog(`${char.nom} essaye de voler ${cible.nom}, mais ne trouve rien d'intéressant.`);
                    return;
                }
                let loot = cible.lootTable[Math.floor(Math.random() * cible.lootTable.length)];
                if (Math.random() < loot.chance * 3) {
                    const itemIndex = inventaire.findIndex(entry => entry.objet === loot.item);
                    if (itemIndex !== -1) {
                        inventaire[itemIndex].quantite += 1;
                    } else {
                        inventaire.push({objet: loot.item, quantite: 1});
                    }
                    const index = cible.lootTable.indexOf(loot);
                    if (index !== -1) cible.lootTable.splice(index, 1);
                    addMessageToLog(`${char.nom} vole ${loot.item.nom} à ${cible.nom} !`);
                } else {
                    addMessageToLog(`${char.nom} tente de voler ${cible.nom}, mais échoue...`);
                }
            }
        } else if (char.skill === "Fraternité") {
            // insérer ici fonctionnement capacité Rôdeur
        } else if (char.skill === "Portail") {
            // insérer ici fonctionnement capacité Invocateur
        }
        Character.charSheet();
        proceed();
    };

    function spell(char) {
        document.getElementById("attack").classList.remove("selected")
        if ( document.getElementById("item") ) document.getElementById("item").classList.remove("selected")
        document.getElementById("spell").classList.add("selected")
        if ( document.getElementById("TargetBtns") ) { document.getElementById("TargetBtns").remove(); }
        if ( document.getElementById("itemList") ) { document.getElementById("itemList").remove(); }
        if ( document.getElementById("spellList") ) { document.getElementById("spellList").remove(); }
        tempoMsg = 0;
        const spellList = document.createElement("div");
        spellList.id = "spellList";
        fightLog.insertBefore(spellList, fightLog.firstChild);
        char.sorts.forEach(sort => {
            let spellBtn = document.createElement("button");
            spellBtn.innerHTML = `${sort.nom} (${sort.mp} MP)`;
            spellBtn.id = `${sort.id}`;
            spellList.appendChild(spellBtn);
            if ( sort.type === "attack" && sort.cible === 1 ) {
                spellBtn.onclick = () => {
                    char.sorts.forEach(sort => {
                        document.getElementById(`${sort.id}`).classList.remove("selected")
                    })
                    spellBtn.classList.add("selected");
                    targetSelect(char, "spell", sort)
                };
            } else if ( sort.type === "heal" && sort.cible === 1 ) {
                spellBtn.onclick = () => {
                    char.sorts.forEach(sort => {
                        document.getElementById(`${sort.id}`).classList.remove("selected")
                    })
                    spellBtn.classList.add("selected");
                    allySelect(char, "spell", sort)
                };
            } else if ( sort.type === "attack" && sort.cible === "all" || sort.type === "heal" && sort.cible === "all" || sort.type === "buff" || sort.type === "debuff" ) {
                spellBtn.onclick = () => {
                    char.sorts.forEach(sort => {
                        document.getElementById(`${sort.id}`).classList.remove("selected")
                    })
                    spellBtn.classList.add("selected");
                    spellResolve(char, sort)
                };
            }
        });
    };

    function spellResolve(char, sort) {
        if ( char.mp < sort.mp ) {
            addMessageToLog(`${char.nom} n'a pas assez de MP !`);
            return;
        }
        char.mp -= sort.mp;
        addMessageToLog(`<span class="purple">${char.nom} perd ${sort.mp} MP</span> et utilise ${sort.nom}.`);
        Character.charSheet();
        if ( sort.type === "attack" && sort.cible === 1 ) {
            let coeff = 1;
            if ( mobs[cibleIndex].resists[sort.element] !== undefined ) coeff = mobs[cibleIndex].resists[sort.element];
            let dmg = Math.floor(( char.statsTemp.intelligence + char.arme.valeur.intelligence + sort.valeur - mobs[cibleIndex].statsTemp.willpower ) * ( Math.random() * 0.3 + 0.85 ) * coeff); if ( dmg < 0 ) { dmg = 0 };
            if ( coeff === 0 ) {
                addMessageToLog(`<strong>Immunité</strong> ! ${mobs[cibleIndex].nom} perd ${dmg} HP.`);
            } else if ( coeff === 0.5 ) {
                addMessageToLog(`<strong>Résistance</strong> ! <span class="red">${mobs[cibleIndex].nom} perd ${dmg} HP</span>.`);
            } else if ( coeff === 2 ) {
                addMessageToLog(`<strong>Faiblesse</strong> ! <span class="red">${mobs[cibleIndex].nom} perd ${dmg} HP</span>.`);
            } else {
                addMessageToLog(`<span class="red">${mobs[cibleIndex].nom} perd ${dmg} HP</span>.`);
            }
            mobs[cibleIndex].hp = mobs[cibleIndex].hp - dmg;
            if (isFightOver()) return;
        } else if ( sort.type === "attack" && sort.cible === "all" ) {
            cibleIndex = "all";
            for (let i = 0; i < mobs.length; i++) {
                let coeff = 1;
                if ( mobs[i].resists[sort.element] !== undefined ) coeff = mobs[i].resists[sort.element];
                let dmg = Math.floor(( char.statsTemp.intelligence + char.arme.valeur.intelligence + sort.valeur - mobs[i].statsTemp.willpower ) * ( Math.random() * 0.3 + 0.85 ) * coeff); if ( dmg < 0 ) { dmg = 0 };
                if ( coeff === 0 ) {
                    addMessageToLog(`<strong>Immunité</strong> ! ${mobs[i].nom} perd ${dmg} HP.`);
                } else if ( coeff === 0.5 ) {
                    addMessageToLog(`<strong>Résistance</strong> ! <span class="red">${mobs[i].nom} perd ${dmg} HP</span>.`);
                } else if ( coeff === 2 ) {
                    addMessageToLog(`<strong>Faiblesse</strong> ! <span class="red">${mobs[i].nom} perd ${dmg} HP</span>.`);
                } else {
                    addMessageToLog(`<span class="red">${mobs[i].nom} perd ${dmg} HP</span>.`);
                }
                mobs[i].hp = mobs[i].hp - dmg;
            }
            if (isFightOver()) return;
        } else if ( sort.type === "heal" && sort.cible === 1 ) {
            if ( chars[cibleIndex].hp > 0 ) {
                let heal = Math.floor(( char.statsTemp.intelligence + char.arme.valeur.intelligence + sort.valeur ) * ( Math.random() * 0.3 + 0.85 ));
                chars[cibleIndex].hp += heal;
                if ( chars[cibleIndex].hp > chars[cibleIndex].maxhp ) { chars[cibleIndex].hp = chars[cibleIndex].maxhp };
                addMessageToLog(`<span class="green">${chars[cibleIndex].nom} gagne ${heal} HP</span>.`);
            } else {
                addMessageToLog(`${sort.nom} est sans effet sur les personnages morts.`)
            }
            Character.charSheet();
        } else if ( sort.type === "heal" && sort.cible === "all" ) {
            cibleIndex = "all";
            for (let i = 0; i < chars.length; i++) {
                if (chars[i].hp > 0) {
                    let heal = Math.floor(( char.statsTemp.intelligence + char.arme.valeur.intelligence + sort.valeur ) * ( Math.random() * 0.3 + 0.85 ))
                    chars[i].hp += heal;
                    if ( chars[i].hp > chars[i].maxhp ) { chars[i].hp = chars[i].maxhp };
                    addMessageToLog(`<span class="green">${chars[i].nom} gagne ${heal} HP</span>.`);
                }
            }
            Character.charSheet();
        } else if (sort.type === "buff") {
            let match = sort.id.match(/(buff|debuff)([A-Za-z]+)(\d+)/);
            let [_, type, stat, niveau] = match;
            stat = stat.toLowerCase();
            const statNames = {
                strength: "Force",
                agility: "Agilité",
                intelligence: "Intelligence",
                vitality: "Vitalité",
                willpower: "Volonté"
            };
            let displayStat = statNames[stat]
            let buffType = `${type}${stat}`;
            chars.forEach(perso => {
                if (perso.statusEffects[buffType] && perso.statusEffects[buffType].lvl < niveau ) { // si le personnage reçoit un buff de niveau supérieur
                    perso.statsTemp[stat] -= 3 * perso.statusEffects[buffType].lvl // on remet la stat à sa valeur
                    perso.statsTemp[stat] += sort.valeur; perso.statusEffects[buffType] = {lvl: niveau, caster: char, turns: 3}; // on applique le buff pour trois tours
                    addMessageToLog(`${perso.nom} reçoit un bonus temporaire +${sort.valeur} ${displayStat}.`); // on informe
                } else if (perso.statusEffects[buffType] && perso.statusEffects[buffType].lvl > niveau) { // si le personnage reçoit un buff de niveau inférieur
                    addMessageToLog(`${sort.nom} est sans effet sur ${perso.nom}.`); // on signale et on ne fait rien
                }
                 else if (perso.statusEffects[buffType] && perso.statusEffects[buffType].lvl === niveau) { // si le personnage reçoit le même buff
                    perso.statusEffects[buffType] = {lvl: niveau, caster: char, turns: 3}; // on met seulement à jour la durée
                    addMessageToLog(`${perso.nom} a déjà un bonus de +${sort.valeur} ${displayStat}. La durée est réinitialisée.`); // on informe
                } else { // si le personnage n'a pas le buff
                    perso.statsTemp[stat] += sort.valeur; perso.statusEffects[buffType] = {lvl: niveau, caster: char, turns: 3}; // on applique pour trois tours
                    addMessageToLog(`${perso.nom} reçoit un bonus temporaire +${sort.valeur} ${displayStat}.`); // on informe
                }
            });
            Character.charSheet();
        } else if (sort.type === "debuff") {
            let match = sort.id.match(/(buff|debuff)([A-Za-z]+)(\d+)/);
            let [_, type, stat, niveau] = match;
            stat = stat.toLowerCase();
            const statNames = {
                strength: "Force",
                agility: "Agilité",
                intelligence: "Intelligence",
                vitality: "Vitalité",
                willpower: "Volonté"
            };
            let displayStat = statNames[stat]
            let debuffType = `${type}${stat}`;  
            mobs.forEach(mob => {
                if (mob.statusEffects[debuffType] && mob.statusEffects[debuffType].lvl < niveau ) {
                    mob.statsTemp[stat] += 3 * mob.statusEffects[debuffType].lvl;
                    mob.statsTemp[stat] -= sort.valeur; mob.statusEffects[debuffType] = {lvl: niveau, caster: char, turns: 3};
                    addMessageToLog(`${mob.nom} reçoit un malus temporaire +${sort.valeur} ${displayStat}.`);
                } else if (mob.statusEffects[debuffType] && mob.statusEffects[debuffType].lvl > niveau) {
                    addMessageToLog(`${sort.nom} est sans effet sur ${mob.nom}.`);
                }
                 else if (mob.statusEffects[debuffType] && mob.statusEffects[debuffType].lvl === niveau) {
                    mob.statusEffects[debuffType] = {lvl: niveau, caster: char, turns: 3};
                    addMessageToLog(`${mob.nom} a déjà un malus de -${sort.valeur} ${displayStat}. La durée est réinitialisée.`);
                } else {
                    mob.statsTemp[stat] -= sort.valeur; mob.statusEffects[debuffType] = {lvl: niveau, caster: char, turns: 3};
                    addMessageToLog(`${mob.nom} reçoit un malus temporaire -${sort.valeur} ${displayStat}.`);
                }
            });
        }
        proceed();
    }

    function items(char) {
        document.getElementById("attack").classList.remove("selected")
        if ( document.getElementById("spell") ) document.getElementById("spell").classList.remove("selected")
        document.getElementById("item").classList.add("selected")
        if ( document.getElementById("TargetBtns") ) { document.getElementById("TargetBtns").remove(); }
        if ( document.getElementById("itemList") ) { document.getElementById("itemList").remove(); }
        if ( document.getElementById("spellList") ) { document.getElementById("spellList").remove(); }
        tempoMsg = 0;
        const itemList = document.createElement("div");
        itemList.id = "itemList";
        fightLog.insertBefore(itemList, fightLog.firstChild);
        const objetsUtilisables = inventaire.filter(i => i.objet.type === "consommable");
        objetsUtilisables.forEach(i => {
            let itemBtn = document.createElement("button");
            itemBtn.innerHTML = `${i.objet.nom} x${i.quantite}`;
            itemBtn.id = i.objet.id;
            itemList.appendChild(itemBtn);
            if ( i.objet.effet === "dégâts" ) {
                itemBtn.onclick = () => {
                    objetsUtilisables.forEach(i => {
                        document.getElementById(i.objet.id).classList.remove("selected")
                    })
                    itemBtn.classList.add("selected");
                    targetSelect(char, "item", i.objet);
                };
            } else if ( i.objet.effet === "heal" || i.objet.effet === "regen" ) {
                itemBtn.onclick = () => {
                    objetsUtilisables.forEach(i => {
                        document.getElementById(i.objet.id).classList.remove("selected")
                    })
                    itemBtn.classList.add("selected");
                    useItem(char, i.objet)
                };
            } else if ( i.objet.effet === "resurrect" ) {
                itemBtn.onclick = () => {
                    objetsUtilisables.forEach(i => {
                        document.getElementById(i.objet.id).classList.remove("selected")
                    })
                    itemBtn.classList.add("selected");
                    allySelect(char, "item", i.objet)
                };
            }
        });
    }

    function useItem(char, item) {
        addMessageToLog(`${char.nom} utilise ${item.nom}.`)
        if (item.effet === "heal") {
            char.hp += item.valeur;
            if (char.hp > char.maxhp) char.hp = char.maxhp;
            addMessageToLog(`<span class="green">${char.nom} récupère ${item.valeur} HP</span> !`);
        } else if (item.effet === "regen") {
            char.mp += item.valeur;
            if (char.mp > char.maxmp) char.mp = char.maxmp;
            addMessageToLog(`<span class="blue">${char.nom} récupère ${item.valeur} MP</span> !`);
        } else if (item.effet === "resurrect") {
            if ( chars[cibleIndex].hp <= 0 ) {
                chars[cibleIndex].hp = chars[cibleIndex].maxhp * item.valeur;
                addMessageToLog(`<span class="green">${chars[cibleIndex].nom} récupère ${100 * item.valeur}% de ses HP</span> et revient à la vie !`)
            } else {
                addMessageToLog(`${item.nom} est sans effet sur les vivants.`)
            }
        }
        let index = inventaire.findIndex(i => i.objet.id === item.id);
        if (index !== -1) {
            inventaire[index].quantite--;
            if (inventaire[index].quantite <= 0) {
                inventaire.splice(index, 1);
            }
        }
        Character.charSheet();
        document.getElementById("itemList").remove(); 
        proceed();
    }

    function mobAttack(mob, cible) {
        if ( Math.random() < 0.3 && mob.sorts[1]?.mp !== undefined && mob.mp >= mob.sorts[1].mp ) {
            addMessageToLog(`${mob.nom} utilise ${mob.sorts[1].nom} !`)
            mobSpellResolve(mob, mob.sorts[1], cible)
        } else if ( Math.random() < 0.6 && mob.sorts[0]?.mp !== undefined && mob.mp >= mob.sorts[0].mp ) {
            addMessageToLog(`${mob.nom} utilise ${mob.sorts[0].nom} !`)
            mobSpellResolve(mob, mob.sorts[0], cible)
        } else if ( Math.random() * 100 < Math.min((cible.statsTemp.agility + cible.arme.valeur.agility - mob.statsTemp.agility), 50) ) {
            addMessageToLog(`${cible.nom} <strong>esquive</strong> l'attaque de ${mob.nom} !`);
        } else {
            let dmg = Math.floor((2 * mob.statsTemp.strength - (cible.statsTemp.vitality + cible.armure.valeur.vitality) ) * (Math.random() * 0.3 + 0.85));
            if (dmg < 0) dmg = 0;
            cible.hp -= dmg;
            addMessageToLog(`${mob.nom} attaque ! <span class="red">${cible.nom} perd ${dmg} HP</span>.`);
        }
        Character.charSheet();
        if (cible.hp <= 0) {
            addMessageToLog(`${cible.nom} <strong>s'effondre</strong>...`);
        }
    }

    function mobSpellResolve(mob, sort, cible) {
        mob.mp -= sort.mp;
        if ( sort.type === "attack" && sort.cible === 1 ) {
            let dmg = Math.floor(( mob.statsTemp.intelligence + sort.valeur - ( cible.statsTemp.willpower + cible.armure.valeur.willpower ) ) * ( Math.random() * 0.3 + 0.85 )); if ( dmg < 0 ) { dmg = 0 };
            cible.hp -= dmg;
            addMessageToLog(`<span class="red">${cible.nom} perd ${dmg} HP</span>.`);
        } else if ( sort.type === "attack" && sort.cible === "all" ) {
            cibleIndex = "all";
            for (let i = 0; i < chars.length; i++) {
                if ( chars[i].hp > 0 ) {
                    let dmg = Math.floor(( mob.statsTemp.intelligence + sort.valeur - ( chars[i].statsTemp.willpower + chars[i].armure.valeur.willpower ) ) * ( Math.random() * 0.3 + 0.85 )); if ( dmg < 0 ) { dmg = 0 };
                    chars[i].hp = chars[i].hp - dmg;
                    addMessageToLog(`<span class="red">${chars[i].nom} perd ${dmg} HP</span>.`);
                }
            }
        } else if ( sort.type === "heal" && mobs.every(mob => mob.hp === mob.maxhp)) {
            console.log(`${mob.nom} veut soigner mais ne trouve aucune cible.`)
            let target;
            do {
                target = chars[Math.floor(Math.random() * chars.length)];
            } while (target.hp <= 0);
            if ( taunt === true && chars.find(personnage => personnage.skill === "Provocation").hp > 0 ) { target = chars.find(personnage => personnage.skill === "Provocation"); }
            mobAttack(mob, target);
        } else if ( sort.type === "heal" && sort.cible === 1 ) {
            let mobsToHeal = mobs.sort((a, b) => (b.maxhp - b.hp) - (a.maxhp - a.hp));
            cible = mobsToHeal[0];
            let heal = Math.floor(( mob.statsTemp.intelligence + sort.valeur ) * ( Math.random() * 0.3 + 0.85 ));
            cible.hp += heal;
            if ( cible.hp > cible.maxhp ) { cible.hp = cible.maxhp };
            addMessageToLog(`<span class="green">${cible.nom} gagne ${heal} HP</span>.`);
        } else if ( sort.type === "heal" && sort.cible === "all" ) {
            cibleIndex = "all";
            for (let i = 0; i < mobs.length; i++) {
                let heal = Math.floor(( mob.statsTemp.intelligence + sort.valeur ) * ( Math.random() * 0.3 + 0.85 ));
                mobs[i].hp += heal;
                if ( mobs[i].hp > mobs[i].maxhp ) { mobs[i].hp = mobs[i].maxhp };
                addMessageToLog(`<span class="green">${mobs[i].nom} gagne ${heal} HP</span>.`);
            }
        } else if (sort.type === "buff") {
            let match = sort.id.match(/(buff|debuff)([A-Za-z]+)(\d+)/);
            let [_, type, stat, niveau] = match;
            stat = stat.toLowerCase();
            const statNames = {
                strength: "Force",
                agility: "Agilité",
                intelligence: "Intelligence",
                vitality: "Vitalité",
                willpower: "Volonté"
            };
            let displayStat = statNames[stat]
            let buffType = `${type}${stat}`;
            mobs.forEach(ennemi => {
                if (ennemi.statusEffects[buffType] && ennemi.statusEffects[buffType].lvl < niveau ) {
                    ennemi.statsTemp[stat] -= 3 * ennemi.statusEffects[buffType].lvl
                    ennemi.statsTemp[stat] += sort.valeur; ennemi.statusEffects[buffType] = {lvl: niveau, caster: char, turns: 3};
                    addMessageToLog(`${ennemi.nom} reçoit un bonus temporaire +${sort.valeur} ${displayStat}.`);
                } else if (ennemi.statusEffects[buffType] && ennemi.statusEffects[buffType].lvl > niveau) {
                    addMessageToLog(`${sort.nom} est sans effet sur ${ennemi.nom}.`);
                }
                 else if (ennemi.statusEffects[buffType] && ennemi.statusEffects[buffType].lvl === niveau) {
                    ennemi.statusEffects[buffType] = {lvl: niveau, caster: mob, turns: 3};
                    addMessageToLog(`${ennemi.nom} a déjà un bonus de +${sort.valeur} ${displayStat}. La durée est réinitialisée.`);
                } else {
                    ennemi.statsTemp[stat] += sort.valeur; ennemi.statusEffects[buffType] = {lvl: niveau, caster: mob, turns: 3};
                    addMessageToLog(`${ennemi.nom} reçoit un bonus temporaire +${sort.valeur} ${displayStat}.`);
                }
            });
            Character.charSheet();
        } else if (sort.type === "debuff") {
            let match = sort.id.match(/(buff|debuff)([A-Za-z]+)(\d+)/);
            let [_, type, stat, niveau] = match;
            stat = stat.toLowerCase();
            const statNames = {
                strength: "Force",
                agility: "Agilité",
                intelligence: "Intelligence",
                vitality: "Vitalité",
                willpower: "Volonté"
            };
            let displayStat = statNames[stat]
            let debuffType = `${type}${stat}`;  
            chars.forEach(perso => {
                if (perso.statusEffects[debuffType] && perso.statusEffects[debuffType].lvl < niveau ) {
                    perso.statsTemp[stat] += 3 * perso.statusEffects[debuffType].lvl;
                    perso.statsTemp[stat] -= sort.valeur; perso.statusEffects[debuffType] = {lvl: niveau, caster: mob, turns: 3};
                    addMessageToLog(`${perso.nom} reçoit un malus temporaire +${sort.valeur} ${displayStat}.`);
                } else if (perso.statusEffects[debuffType] && perso.statusEffects[debuffType].lvl > niveau) {
                    addMessageToLog(`${sort.nom} est sans effet sur ${perso.nom}.`);
                }
                 else if (perso.statusEffects[debuffType] && perso.statusEffects[debuffType].lvl === niveau) {
                    perso.statusEffects[debuffType] = {lvl: niveau, caster: char, turns: 3};
                    addMessageToLog(`${perso.nom} a déjà un malus de -${sort.valeur} ${displayStat}. La durée est réinitialisée.`);
                } else {
                    perso.statsTemp[stat] -= sort.valeur; perso.statusEffects[debuffType] = {lvl: niveau, caster: mob, turns: 3};
                    addMessageToLog(`${perso.nom} reçoit un malus temporaire -${sort.valeur} ${displayStat}.`);
                }
            })
        }
    }

    function isGameOver() {
        if ( chars.every(char => char.hp <= 0) ) {
            chars.forEach(char => {
                char.statsTemp = { ...char.stats };
                char.statusEffects = {};
            })
            score = 25 * chars.reduce((sum, char) => sum + char.niveau, 0) + gold;
            addMessageToLog(`Votre équipe est vaincue !`)
            addMessageToLog(`Votre score : ${score} (Meilleur score : ${localStorage.getItem("worldrootsHighScore") || 0}).`)
            setTimeout(() => {
                onFight = false;
                document.getElementById("exploreWindow").classList.remove("fight");
                Character.charSheet();
                if ( startBtn.innerHTML !== "Quitter le donjon..." ) startBtn.innerHTML = "Quitter le donjon..."
                msgLog.appendChild(startBtn);
            }, 4800);
            if ( document.getElementById("fightButtons") ) { document.getElementById("fightButtons").remove(); }
            if ( document.getElementById("TargetBtns") ) { document.getElementById("TargetBtns").remove(); }
            if ( document.getElementById("itemList") ) { document.getElementById("itemList").remove(); }
            if ( document.getElementById("spellList") ) { document.getElementById("spellList").remove(); }
            if ( targets ) targets.remove();
            save();
            return true;
        }
        return false;
    }

    function deadMob(cible) {
        addMessageToLog(`${mobs[cible].nom} est <strong>vaincu(e)</strong> !`);
        xpGained += mobs[cible].niveau * 10;
        if ( Math.random() < 0.8 ) {
            goldGained += Math.floor((Math.random() * 0.2 + 0.4 ) * mobs[cible].niveau * 3);
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
            chars.forEach(char => {
                char.statsTemp = { ...char.stats };
                char.statusEffects = {};
            })
            setTimeout(() => {
                onFight = false;
                document.getElementById("exploreWindow").classList.remove("fight");
                Character.charSheet();
                if ( startBtn.innerHTML !== "Aller dans la salle suivante !" ) startBtn.innerHTML = "Aller dans la salle suivante !"
                regenBtn.innerHTML = `Restaurer les HP/MP de l'équipe (${Math.floor(chars.reduce((sum, char) => sum + char.niveau, 0) / chars.length * 10)} fragments)`;
                rezBtn.innerHTML = `Réanimer les personnages morts (${Math.floor(chars.reduce((sum, char) => sum + char.niveau, 0) / chars.length * 20)} fragments)`;
                msgLog.appendChild(startBtn);
                msgLog.appendChild(regenBtn);
                msgLog.appendChild(rezBtn);
                msgLog.appendChild(shopBtn);
                msgLog.appendChild(leaveBtn);
            }, 5600);
            if ( document.getElementById("fightButtons") ) { document.getElementById("fightButtons").remove(); }
            if ( document.getElementById("TargetBtns") ) { document.getElementById("TargetBtns").remove(); }
            if ( document.getElementById("itemList") ) { document.getElementById("itemList").remove(); }
            if ( document.getElementById("spellList") ) { document.getElementById("spellList").remove(); }
            if ( targets ) targets.remove();
            fightMobDiv.remove();
            chars.forEach(char => char.gainXP(xpGained))
            gold += goldGained;
            if ( goldGained > 0 ) addMessageToLog(`Vous obtenez ${goldGained} fragments de magie.`);
            if ( lootsGained.length > 0 ) { 
                const itemCounts = lootsGained.reduce((acc, objet) => {
                    acc[objet.nom] = (acc[objet.nom] || 0) + 1;
                    return acc;
                }, {});
                const lootMessage = Object.entries(itemCounts)
                    .map(([nom, count]) => count > 1 ? `${nom} x${count}` : nom)
                    .join(", ");
                addMessageToLog(`Vous trouvez : ${lootMessage}.`);
                lootsGained.forEach(objet => {
                    Character.addItem(objet);
                });
            }
            score = 25 * chars.reduce((sum, char) => sum + char.niveau, 0) + gold;
            if ( (chars.reduce((sum, char) => sum + char.niveau, 0)/3) >= 37 ) {
                addMessageToLog(`Vous êtes arrivés au terme du donjon !`)
                addMessageToLog(`Votre score : ${score} (Meilleur score : ${localStorage.getItem("worldrootsHighScore") || 0}).`)
                setTimeout(() => {
                    onFight = false;
                    document.getElementById("exploreWindow").classList.remove("fight");
                    Character.charSheet();
                    if ( startBtn.innerHTML !== "Quitter le donjon..." ) startBtn.innerHTML = "Quitter le donjon..."
                    msgLog.appendChild(startBtn);
                }, 4800);
                if ( document.getElementById("fightButtons") ) { document.getElementById("fightButtons").remove(); }
                if ( document.getElementById("TargetBtns") ) { document.getElementById("TargetBtns").remove(); }
                if ( document.getElementById("itemList") ) { document.getElementById("itemList").remove(); }
                if ( document.getElementById("spellList") ) { document.getElementById("spellList").remove(); }
                if ( targets ) targets.remove();
            }
            save();
            return true;
        }
        return false;
    }
};