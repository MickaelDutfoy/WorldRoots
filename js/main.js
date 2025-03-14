function initGame() {
    charSheet.innerHTML = `
    <tr>
        <td id="inventory" class="collapsabletd" rowspan="16"></td>
    </tr>
    <tr>
        <td id="nameClass0"></td>
        <td id="lvlXP0"></td>
    </tr>
    <tr class="collapsabletr">
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
    <tr class="collapsabletr">
        <td colspan="2" style="text-align:center;" id="weapon0"></td>
    </tr>
    <tr class="collapsabletr">
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
    <tr class="collapsabletr">
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
    <tr class="collapsabletr">
        <td colspan="2" style="text-align:center;" id="weapon1"></td>
    </tr>
    <tr class="collapsabletr">
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
    <tr class="collapsabletr">
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
    <tr class="collapsabletr">
        <td colspan="2" style="text-align:center;" id="weapon2"></td>
    </tr>
    <tr class="collapsabletr">
        <td colspan="2" style="text-align:center;" id="armor2"></td>
    </tr>  
    <tr>
        <td id="HP2"></td>
        <td id="MP2"></td>
    </tr>`;
    const collapseBtn = document.createElement("button");
    document.getElementById("teamWindow").appendChild(collapseBtn);
    collapseBtn.id = "collapseBtn";
    collapseBtn.innerHTML = "Réduire la fiche";
    collapseBtn.addEventListener("click", Character.collapseExpand);
    document.getElementById("teamSelector").style.display = "none";
    document.getElementById("titleExploreWindow").textContent = "Fenêtre d'évènements"
    document.getElementById("msgLog").style.borderBottom = "3px solid #121212";
    setTimeout(() => classDescription.remove(), tempoMsg)
    document.getElementById("teamWindow").appendChild(charSheet);
}

function save() {
    if (chars.every(char => char.hp === 0)) {
        localStorage.removeItem("worldrootsSave");
    } else {
        const saveData = {
            chars: chars,
            inventaire: inventaire,
            gold: gold,
            charSheetState: charSheetState,
        };
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
    chars.forEach(char => {
        if ( char.pointsLvlUp > 0 ) char.levelUp()
    })
    inventaire = saveData.inventaire;
    gold = saveData.gold;
    charSheetState = saveData.charSheetState;
    startBtn.innerHTML = "Aller dans la salle suivante !"
    startBtn.addEventListener("click", Mob.popMob);
    regenBtn.innerHTML = `Restaurer les HP/MP de l'équipe (${chars.reduce((sum, char) => sum + char.niveau, 0) / chars.length * 15} fragments de magie)`;
    rezBtn.innerHTML = `Réanimer les personnages K.O. (${chars.reduce((sum, char) => sum + char.niveau, 0) / chars.length * 30} fragments de magie)`;
    msgLog.appendChild(startBtn);
    msgLog.appendChild(regenBtn);
    msgLog.appendChild(rezBtn);
    msgLog.appendChild(shopBtn);
    tempoMsg = 0; addMessageToLog("Partie chargée avec succès !");
    Character.charSheet();
    if ( charSheetState = "collapsed" ) {
        let collapsabletd = document.querySelectorAll(".collapsabletd");
        let collapsabletr = document.querySelectorAll(".collapsabletr");
        collapseBtn.innerHTML = "Agrandir la fiche";
        collapsabletd.forEach(el => el.style.display = "none");
        collapsabletr.forEach(el => el.style.display = "none");
    }
}

function addMessageToLog(message) {
    setTimeout(() => {
        let newMsg = document.createElement("p");
        newMsg.innerHTML = message;
        fightLog.insertBefore(newMsg, fightLog.firstChild);
    }, tempoMsg);
    tempoMsg += 600;
}

function addSlowMsgToLog(message) {
    setTimeout(() => {
        let newMsg = document.createElement("p");
        newMsg.innerHTML = message;
        newMsg.classList.add("generatedMessage")
        newMsg.style.fontSize = "1.2em";
        msgLog.appendChild(newMsg);
        setTimeout(() => { newMsg.classList.add("show");}, 10);
    }, tempoMsg);
    tempoMsg += 0;
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

let chars = []; let mobs = []; let tempoMsg = 0; let onFight = false; inventaire = []; gold = 50;
const charSheet = document.createElement('table'); charSheet.id = "charSheet"; charSheet.innerHTML = ""; let charSheetState = "expanded";
const exploreWindow = document.getElementById("exploreWindow"); 
const msgLog = document.createElement("div"); msgLog.id = "msgLog"; msgLog.innerHTML = ""; exploreWindow.appendChild(msgLog);
const fightLog = document.createElement("div"); fightLog.id = "fightLog"; fightLog.innerHTML = ""; exploreWindow.appendChild(fightLog);
const startBtn = document.createElement("button"); startBtn.id = "startBtn"; startBtn.innerHTML = "Entrer dans la première salle !";
const regenBtn = document.createElement("button"); regenBtn.id = "regenBtn";
const rezBtn = document.createElement("button"); rezBtn.id = "shopBtn"; 
const shopBtn = document.createElement("button"); shopBtn.id = "shopBtn"; shopBtn.innerHTML = "Échanger des fragments de magie contre des sorts";
regenBtn.addEventListener("click", Character.regenChars);
rezBtn.addEventListener("click", Character.rezChars);
shopBtn.addEventListener("click", Character.magicShop);
document.getElementById("creerPerso").addEventListener("click", Character.createCharacters);