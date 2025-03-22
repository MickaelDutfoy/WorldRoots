function initGame() {
    exploreWindow.style.opacity = "1";
    charSheet.innerHTML = `
    <tr>
        <td id="inventory" class="collapsabletd" rowspan="16"></td>
    </tr>
    <tr>
        <td id="nameClass0"></td><td id="HP0"></td>
    </tr>
    <tr>
        <td id="lvlXP0"></td><td id="MP0"></td>
    </tr>
    <tr class="collapsabletr">
        <td>
            <div class="charStats">
                <div class="statRow">
                    <span class="statName" id="agi0"></span>
                    <span class="statValue" id="agiVal0"></span>
                    <span class="statBtn lvlUp0" id="agiLvlUp0"><button id="AgiUp0">+</button><button id="AgiDwn0">-</button></span>
                </div>
                <div class="statRow">
                    <span class="statName" id="for0"></span>
                    <span class="statValue" id="forVal0"></span>
                    <span class="statBtn lvlUp0" id="forLvlUp0"><button id="ForUp0">+</button><button id="ForDwn0">-</button></span>
                </div>
                <div class="statRow">
                    <span class="statName" id="int0"></span>
                    <span class="statValue" id="intVal0"></span>
                    <span class="statBtn lvlUp0" id="intLvlUp0"><button id="IntUp0">+</button><button id="IntDwn0">-</button></span>
                </div>
                <div class="statRow">
                    <span class="statName" id="vit0"></span>
                    <span class="statValue" id="vitVal0"></span>
                    <span class="statBtn lvlUp0" id="vitLvlUp0"><button id="VitUp0">+</button><button id="VitDwn0">-</button></span>
                </div>
                <div class="statRow">
                    <span class="statName" id="vol0"></span>
                    <span class="statValue" id="volVal0"></span>
                    <span class="statBtn lvlUp0" id="volLvlUp0"><button id="VolUp0">+</button><button id="VolDwn0">-</button></span>
                </div>
                <div class="statRow" id="lvlUpRow0">
                    <span class="statName lvlUp0" id="lvlUpPoints0"></span>
                    <span class="statValue lvlUp0" id="lvlUpPointsTot0"></span>
                    <span class="statBtn lvlUp0" id="lvlUpBtnWrap0"><button id="LvlUpBtn0">Valider</button></span>
                </div>
            </div>
        </td>
        <td id="spells0"></td>
    </tr>
    <tr class="collapsabletr">
        <td colspan="2" style="text-align:center;" id="weapon0"></td>
    </tr>
    <tr class="collapsabletr">
        <td colspan="2" style="text-align:center;" id="armor0"></td>
    </tr>
    <tr>
        <td id="nameClass1"></td><td id="HP1"></td>
    </tr>
    <tr>
        <td id="lvlXP1"></td><td id="MP1"></td>
    </tr>
    <tr class="collapsabletr">
        <td>
            <div class="charStats">
                <div class="statRow">
                    <span class="statName" id="agi1"></span>
                    <span class="statValue" id="agiVal1"></span>
                    <span class="statBtn lvlUp1" id="agiLvlUp1"><button id="AgiUp1">+</button><button id="AgiDwn1">-</button></span>
                </div>
                <div class="statRow">
                    <span class="statName" id="for1"></span>
                    <span class="statValue" id="forVal1"></span>
                    <span class="statBtn lvlUp1" id="forLvlUp1"><button id="ForUp1">+</button><button id="ForDwn1">-</button></span>
                </div>
                <div class="statRow">
                    <span class="statName" id="int1"></span>
                    <span class="statValue" id="intVal1"></span>
                    <span class="statBtn lvlUp1" id="intLvlUp1"><button id="IntUp1">+</button><button id="IntDwn1">-</button></span>
                </div>
                <div class="statRow">
                    <span class="statName" id="vit1"></span>
                    <span class="statValue" id="vitVal1"></span>
                    <span class="statBtn lvlUp1" id="vitLvlUp1"><button id="VitUp1">+</button><button id="VitDwn1">-</button></span>
                </div>
                <div class="statRow">
                    <span class="statName" id="vol1"></span>
                    <span class="statValue" id="volVal1"></span>
                    <span class="statBtn lvlUp1" id="volLvlUp1"><button id="VolUp1">+</button><button id="VolDwn1">-</button></span>
                </div>
                <div class="statRow" id="lvlUpRow1">
                    <span class="statName lvlUp1" id="lvlUpPoints1"></span>
                    <span class="statValue lvlUp1" id="lvlUpPointsTot1"></span>
                    <span class="statBtn lvlUp1" id="lvlUpBtnWrap1"><button id="LvlUpBtn1">Valider</button></span>
                </div>
            </div>
        </td>
        <td id="spells1"></td>
    </tr>
    <tr class="collapsabletr">
        <td colspan="2" style="text-align:center;" id="weapon1"></td>
    </tr>
    <tr class="collapsabletr">
        <td colspan="2" style="text-align:center;" id="armor1"></td>
    </tr>  
    <tr>
        <td id="nameClass2"></td><td id="HP2"></td>
    </tr>
    <tr>
        <td id="lvlXP2"></td><td id="MP2"></td>
    </tr>
    <tr class="collapsabletr">
        <td>
            <div class="charStats">
                <div class="statRow">
                    <span class="statName" id="agi2"></span>
                    <span class="statValue" id="agiVal2"></span>
                    <span class="statBtn lvlUp2" id="agiLvlUp2"><button id="AgiUp2">+</button><button id="AgiDwn2">-</button></span>
                </div>
                <div class="statRow">
                    <span class="statName" id="for2"></span>
                    <span class="statValue" id="forVal2"></span>
                    <span class="statBtn lvlUp2" id="forLvlUp2"><button id="ForUp2">+</button><button id="ForDwn2">-</button></span>
                </div>
                <div class="statRow">
                    <span class="statName" id="int2"></span>
                    <span class="statValue" id="intVal2"></span>
                    <span class="statBtn lvlUp2" id="intLvlUp2"><button id="IntUp2">+</button><button id="IntDwn2">-</button></span>
                </div>
                <div class="statRow">
                    <span class="statName" id="vit2"></span>
                    <span class="statValue" id="vitVal2"></span>
                    <span class="statBtn lvlUp2" id="vitLvlUp2"><button id="VitUp2">+</button><button id="VitDwn2">-</button></span>
                </div>
                <div class="statRow">
                    <span class="statName" id="vol2"></span>
                    <span class="statValue" id="volVal2"></span>
                    <span class="statBtn lvlUp2" id="volLvlUp2"><button id="VolUp2">+</button><button id="VolDwn2">-</button></span>
                </div>
                <div class="statRow" id="lvlUpRow2">
                    <span class="statName lvlUp2" id="lvlUpPoints2"></span>
                    <span class="statValue lvlUp2" id="lvlUpPointsTot2"></span>
                    <span class="statBtn lvlUp2" id="lvlUpBtnWrap2"><button id="LvlUpBtn2">Valider</button></span>
                </div>
            </div>
        </td>
        <td id="spells2"></td>
    </tr>
    <tr class="collapsabletr">
        <td colspan="2" style="text-align:center;" id="weapon2"></td>
    </tr>
    <tr class="collapsabletr">
        <td colspan="2" style="text-align:center;" id="armor2"></td>
    </tr>`;
    exploreWindow.appendChild(msgLog); exploreWindow.appendChild(fightLog);
    const collapseBtn = document.createElement("button");
    document.getElementById("teamWindow").appendChild(collapseBtn);
    collapseBtn.id = "collapseBtn";
    collapseBtn.innerHTML = "Agrandir la fiche";
    collapseBtn.addEventListener("click", Character.collapseExpand);
    document.getElementById("teamSelector").style.opacity = "0";
    setTimeout(() => {
        document.getElementById("teamSelector").remove()
        Character.charSheet();
        charSheet.style.opacity = "1";
    }, 1500)
}

function save() {
    const highScore = localStorage.getItem("worldrootsHighScore") || 0;
    if (score > highScore) {
        localStorage.setItem("worldrootsHighScore", score);
    }
    if (chars.every(char => char.hp === 0)) {
        localStorage.removeItem("worldrootsSave");
    } else if (chars.every(char => char.niveau === 99)) {
        localStorage.removeItem("worldrootsSave");
    } else {
        const saveData = {
            chars: chars,
            inventaire: inventaire,
            gold: gold,
            score: score,
            charSheetState: charSheetState,
        };
        let renard = summons.find(summon => summon.nom === "Renard agile");
        saveData.renard = renard ? [renard.hp, renard.mp] : null;
        localStorage.setItem("worldrootsSave", JSON.stringify(saveData));
    }
}

function load() {
    const saveData = JSON.parse(localStorage.getItem("worldrootsSave"));
    if (!saveData) return;
    initGame();
    chars = saveData.chars.map(charData => {
        let char = new Character(charData.classe);
        char.nom = charData.nom;
        char.niveau = charData.niveau;
        char.xp = charData.xp;
        char.pointsLvlUp = charData.pointsLvlUp;
        char.sorts = charData.sorts;
        char.stats = charData.stats;
        char.statsTemp = { ...charData.stats };
        char.hp = charData.hp;
        char.mp = charData.mp;
        char.maxhp = charData.maxhp;
        char.maxmp = charData.maxmp;
        char.arme = Item.getItem(charData.arme.id);
        char.armure = Item.getItem(charData.armure.id);
        return char;
    });
    Summon.generateSummons();
    if (saveData.renard && summons.find(s => s.nom === "Renard agile")) {
        let renard = summons.find(s => s.nom === "Renard agile");
        [renard.hp, renard.mp] = saveData.renard;
    }
    chars.forEach(char => {
        if ( char.pointsLvlUp > 0 ) char.levelUp()
    })
    inventaire = saveData.inventaire;
    gold = saveData.gold;
    score = saveData.score;
    charSheetState = saveData.charSheetState;
    startBtn.innerHTML = "Aller dans la salle suivante !"
    startBtn.addEventListener("click", Mob.popMob);
    regenBtn.innerHTML = `Restaurer les HP/MP de l'équipe (${Math.floor(chars.reduce((sum, char) => sum + char.niveau, 0) / chars.length * 10)} fragments)`;
    rezBtn.innerHTML = `Réanimer les personnages morts (${Math.floor(chars.reduce((sum, char) => sum + char.niveau, 0) / chars.length * 20)} fragments)`;
    msgLog.appendChild(startBtn);
    msgLog.appendChild(regenBtn);
    msgLog.appendChild(rezBtn);
    msgLog.appendChild(shopBtn);
    msgLog.appendChild(sellBtn);
    msgLog.appendChild(leaveBtn);
    document.getElementById("msgLog").style.borderBottom = "3px solid #121212";
    tempoMsg = 0; addMessageToLog("Partie chargée avec succès !");
    if ( charSheetState === "collapsed" ) {
        let collapsabletd = document.querySelectorAll(".collapsabletd");
        let collapsabletr = document.querySelectorAll(".collapsabletr");
        collapseBtn.innerHTML = "Agrandir la fiche";
        collapsabletd.forEach(el => el.style.display = "none");
        collapsabletr.forEach(el => el.style.display = "none");
    }
    Character.charSheet();
}

function quit() {
    localStorage.removeItem("worldrootsSave");
    if ( startBtn.innerHTML !== "Quitter le donjon..." ) startBtn.innerHTML = "Quitter le donjon..."
    regenBtn.remove();
    rezBtn.remove();
    shopBtn.remove();
    sellBtn.remove();
    leaveBtn.remove();
    tempoMsg = 0;
    abandonned = true;
    score = 25 * chars.reduce((sum, char) => sum + char.niveau, 0) + gold;
    addMessageToLog(`Vous abandonnez votre progression.`)
    addMessageToLog(`Votre score : ${score} (Meilleur score : ${localStorage.getItem("worldrootsHighScore") || 0}).`)
    setTimeout(() => {
        onFight = false;
        document.getElementById("exploreWindow").classList.remove("fight");
        Character.charSheet();
        msgLog.appendChild(startBtn);
    }, 1200);
}

function updateClassDescriptions() {
    let selectedClasses = [
        document.getElementById("classe1").value,
        document.getElementById("classe2").value,
        document.getElementById("classe3").value
    ];

    for ( let i = 1; i <= 3; i++) {
        if (selectedClasses[i-1] === "Guerrier") {
            document.getElementById("descClasse" + i).innerHTML = "Combattant exclusivement physique, le <strong>Guerrier</strong> est capable de faire des dégâts comme d'en encaisser. En combat, il peut attaquer à l'arme mais surtout attirer à lui les attaques ennemies avec sa capacité <em>Provocation</em> moyennant un faible coût en MP."
        }
        if (selectedClasses[i-1] === "Paladin") {
            document.getElementById("descClasse" + i).innerHTML = "Combattant béni des dieux, le <strong>Paladin</strong> sait se battre à l'épée mais il dispose aussi de sorts de Soin et d'attaques Sacrées sur cible unique. Il peut renforcer la Volonté de toute l'équipe et sa capacité <em>Action divine</em> lui permet de consommer tous ses MP pour réanimer et soigner toute l'équipe."
        }
        if (selectedClasses[i-1] === "Chevalier noir") {
            document.getElementById("descClasse" + i).innerHTML = "Combattante liée aux Ténèbres, le <strong>Chevalier noir</strong> peut utiliser des sorts de cet élément sur cible unique et attaquer à l'épée, ainsi que réduire la Force des ennemis. Moyennant quelques MP, sa capacité <em>Siphon vital</em> déclenche un sort d'élément Ténèbres affectant tous les ennemis et la soignant d'un montant égal aux dégâts ainsi infligés."
        }
        if (selectedClasses[i-1] === "Aéromancienne") {
            document.getElementById("descClasse" + i).innerHTML = "Mage capable d'utiliser des sorts d'éléments Glace et Foudre sur cible et de zone, l'<strong>Aéromancienne</strong> peut également entraver ses ennemis en réduisant leur Agilité. Sa capacité <em>Manamnesis</em> lui permet de brûler les MP de tous ses adversaires au prix des siens, et de leur infliger des dégâts en conséquence."
        }
        if (selectedClasses[i-1] === "Géomancienne") {
            document.getElementById("descClasse" + i).innerHTML = "Mage capable d'utiliser des sorts d'éléments Feu et Terre sur cible et de zone, la <strong>Géomancienne</strong> a également la capacité de renforcer la Vitalité de sa propre équipe. Sa capacité <em>Élémantra</em> lui permet de vider sa réserve de MP et d'infliger à tous ses adversaires des dégâts proportionnels aux MP ainsi consommés."
        }
        if (selectedClasses[i-1] === "Chaomancien") {
            document.getElementById("descClasse" + i).innerHTML = "Mage capable d'utiliser des sorts d'éléments Ténèbres et Sacré sur cible et de zone, le <strong>Chaomancien</strong> peut affaiblir la Volonté de ses adversaires et manipuler leurs esprits avec sa capacité <em>Discorde</em>, les forçant à s'attaquer les uns les autres."
        }
        if (selectedClasses[i-1] === "Magelame") {
            document.getElementById("descClasse" + i).innerHTML = "Combattante équilibrée manipulant les forces éthérées, la <strong>Magelame</strong> peut combattre à l'épée et lancer des sorts sans élément sur cible et de zone, ainsi que réduire la Sagesse de ses ennemis. Sa capacité <em>Analyse</em> lui permet, pour un coût en MP fonction du nombre d'adversaires présents, de révéler leurs caractéristiques, forces et faiblesses."
        }
        if (selectedClasses[i-1] === "Prêtresse") {
            document.getElementById("descClasse" + i).innerHTML = "Personnage de soutien, la <strong>Prêtresse</strong> peut utiliser des attaques d'élément Sacré et des Soins sur cible et de zone. Elle est en outre capable de renforcer la Sagesse de son équipe, et sa capacité <em>Don de mana</em> lui permet de rendre des MP à ses alliés au prix des siens."
        }
        if (selectedClasses[i-1] === "Barbare") {
            document.getElementById("descClasse" + i).innerHTML = "Puissant et agile combattant, le <strong>Barbare</strong> peut infliger de gros dégâts, surtout après avoir renforcé la Force de son équipe. Sa capacité <em>Tourbillon</em> lui permet, au prix d'un coût en MP, de déclencher une attaque physique sur tous les adversaires à la fois."
        }
        if (selectedClasses[i-1] === "Voleur") {
            document.getElementById("descClasse" + i).innerHTML = "Combattant agile et rusé, le <strong>Voleur</strong> sait se battre à l'épée et peut renforcer l'Agilité de toute l'équipe. Il est également capable de dénicher des trésors supplémentaires en faisant les poches de ses ennemis (même de ceux qui n'en ont pas !) grâce à sa capacité <em>Larcin</em>, moyennant quelques MP."
        }
        if (selectedClasses[i-1] === "Rôdeuse") {
            document.getElementById("descClasse" + i).innerHTML = "Combattante de corps à corps rapide accompagnée en permanence de son fidèle compagnon Renard, la <strong>Rôdeuse</strong> sait en outre manipuler les poisons et peut affaiblir la Vitalité de tous ses adversaires en combat. Sa capacité <em>Lien animal</em> lui permet de réanimer et soigner son compagnon."
        }
        if (selectedClasses[i-1] === "Invocateur") {
            document.getElementById("descClasse" + i).innerHTML = "Mage manipulateur des Ténèbres, l'<strong>Invocateur</strong> sait utiliser des sorts de cet élément et des Soins sur cible unique comme sur zone. Sa capacité <em>Portail</em> lui permet d'appeler un Rejeton du néant qui se bat à ses côtés jusqu'à la fin du combat ou jusqu'à sa mort."
        }
    }
}

function addMessageToLog(message) {
    setTimeout(() => {
        let newMsg = document.createElement("p");
        newMsg.innerHTML = message;
        fightLog.insertBefore(newMsg, fightLog.firstChild);
    }, tempoMsg);
    tempoMsg += 700;
}

function addSlowMsgToLog(message) {
    setTimeout(() => {
        let newMsg = document.createElement("p");
        newMsg.innerHTML = message;
        newMsg.classList.add("generatedMessage")
        newMsg.style.fontSize = "1.2em";
        msgLog.appendChild(newMsg);
    }, tempoMsg);
    tempoMsg += 1500;
}

function showTooltip(element, text) {
    let tooltip = document.getElementById("tooltip");
    if (!tooltip) {
        tooltip = document.createElement("div");
        tooltip.id = "tooltip";
        tooltip.style.position = "absolute";
        tooltip.style.background = "#222";
        tooltip.style.color = "#fff";
        tooltip.style.padding = "5px 10px";
        tooltip.style.borderRadius = "5px";
        tooltip.style.fontSize = "14px";
        tooltip.style.zIndex = "1000";
        tooltip.style.pointerEvents = "none";
        document.body.appendChild(tooltip);
    }

    tooltip.textContent = text;
    const rect = element.getBoundingClientRect();
    tooltip.style.left = `${rect.left + window.scrollX}px`;
    tooltip.style.top = `${rect.bottom + window.scrollY + 5}px`;

    setTimeout(() => {
        tooltip.remove();
    }, 4000);
}

document.addEventListener("click", (event) => {
    const toolTip = event.target.closest(".tooltip");
    if (toolTip) {
        const tooltipText = toolTip.getAttribute("data-tooltip");
        if (tooltipText) {
            showTooltip(toolTip, tooltipText);
        }
    }
});

if (window.location.pathname.includes("arcade.html")) {
    window.addEventListener("DOMContentLoaded", () => {
        load();
    });
}

updateClassDescriptions();

let chars = []; let mobs = []; let summons = []; let tempoMsg = 0; let onFight = false; inventaire = []; gold = 50; let abandonned = false; let score = 0;
const charSheet = document.createElement('table'); charSheet.id = "charSheet"; charSheet.innerHTML = ""; let charSheetState = "expanded"; document.getElementById("teamWindow").appendChild(charSheet);
const exploreWindow = document.getElementById("exploreWindow"); 
const msgLog = document.createElement("div"); msgLog.id = "msgLog"; msgLog.innerHTML = "";
const fightLog = document.createElement("div"); fightLog.id = "fightLog"; fightLog.innerHTML = "";
const startBtn = document.createElement("button"); startBtn.id = "startBtn"; startBtn.innerHTML = "Entrer dans la première salle !";
const regenBtn = document.createElement("button"); regenBtn.id = "regenBtn";
const rezBtn = document.createElement("button"); rezBtn.id = "shopBtn"; 
const shopBtn = document.createElement("button"); shopBtn.id = "shopBtn"; shopBtn.innerHTML = "Échanger des fragments de magie contre des sorts";
const sellBtn = document.createElement("button"); sellBtn.id = "shopBtn"; sellBtn.innerHTML = "Vendre des objets pour des fragments de magie";
const leaveBtn = document.createElement("button"); leaveBtn.id = "leaveBtn"; leaveBtn.innerHTML = "Sortir du donjon (abandonner la progression en cours)";
regenBtn.addEventListener("click", Character.regenChars);
rezBtn.addEventListener("click", Character.rezChars);
shopBtn.addEventListener("click", Character.magicShop);
sellBtn.addEventListener("click", Character.sellShop);
leaveBtn.addEventListener("click", quit);
document.getElementById("creerPerso").addEventListener("click", Character.createCharacters);

document.addEventListener("DOMContentLoaded", function () {
    const selects = document.querySelectorAll("#classe1, #classe2, #classe3");
    document.querySelectorAll("#classe1, #classe2, #classe3").forEach(select => {
        select.addEventListener("change", updateClassDescriptions);
    });
    function updateOptions() {
        let selectedValues = new Set();

        // Récupère toutes les valeurs actuellement sélectionnées
        selects.forEach(select => {
            if (select.value) {
                selectedValues.add(select.value);
            }
        });

        selects.forEach(select => {
            Array.from(select.options).forEach(option => {
                if (option.value && !option.disabled) {
                    // Désactive si déjà choisi ailleurs
                    option.disabled = selectedValues.has(option.value) && option.value !== select.value;
                }
            });
        });

        // Réactive les options qui ne sont dans aucun sélecteur
        selects.forEach(select => {
            Array.from(select.options).forEach(option => {
                if (option.value && !selectedValues.has(option.value)) {
                    option.disabled = false;
                }
            });
        });
    }

    selects.forEach(select => {
        select.addEventListener("change", updateOptions);
    });

    updateOptions();
});