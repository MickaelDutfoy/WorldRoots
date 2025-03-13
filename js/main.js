function initGame() {
    const collapseBtn = document.createElement("button");
    document.getElementById("teamWindow").appendChild(collapseBtn);
    collapseBtn.id = "collapseBtn";
    collapseBtn.innerHTML = "Réduire la fiche";
    collapseBtn.addEventListener("click", collapseExpand);
    document.getElementById("teamSelector").style.display = "none";
    document.getElementById("titleExploreWindow").textContent = "Fenêtre d'évènements"
    setTimeout(() => {
        let classDescription = document.getElementById("classDescription");
        classDescription.style.transition = "opacity 0.5s";
        classDescription.style.opacity = 0;
    }, tempoMsg);
    tempoMsg += 1800;
    setTimeout(() => classDescription.remove(), tempoMsg)
    addSlowMsgToLog(`Bienvenue dans le Mode Arcade de WorldRoots !`)
    addSlowMsgToLog(`L'objectif est simple : avancer le plus loin possible.`)
    addSlowMsgToLog(`La partie se termine si vos trois personnages tombent à 0 HP...`)
    addSlowMsgToLog(`... ou s'ils atteignent tous le niveau 99 !`)
    addSlowMsgToLog(`Saurez-vous aller jusqu'au bout du donjon ?`)
    setTimeout(() => {
        msgLog.appendChild(startBtn); document.getElementById("startBtn").addEventListener("click", Mob.popMob);
        document.getElementById("msgLog").style.borderBottom = "3px solid #121212";
    }, tempoMsg);
}

function collapseExpand() {
    collapseBtn.innerHTML = (collapseBtn.innerHTML === "Réduire la fiche") ? "Agrandir la fiche" : "Réduire la fiche";
    let collapsabletd = document.querySelectorAll(".collapsabletd");
    let collapsabletr = document.querySelectorAll(".collapsabletr");
    collapsabletd.forEach(el => {
        // Utilise getComputedStyle pour obtenir le style réel
        const currentDisplay = window.getComputedStyle(el).display;
        el.style.display = (currentDisplay === "none" || currentDisplay === "") ? "table-cell" : "none";
    });

    collapsabletr.forEach(el => {
        const currentDisplay = window.getComputedStyle(el).display;
        el.style.display = (currentDisplay === "none" || currentDisplay === "") ? "table-row" : "none";
    });
}

function addMessageToLog(message) {
    setTimeout(() => {
        let newMsg = document.createElement("p");
        newMsg.innerHTML = message;
        newMsg.classList.add("generatedMessage")
        fightLog.insertBefore(newMsg, fightLog.firstChild);
        setTimeout(() => { newMsg.classList.add("show");}, 10);
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
    tempoMsg += 1800;
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

let chars = []; let mobs = []; let tempoMsg = 0; let onFight = false; inventaire = []; gold = 50;
const charSheet = document.createElement('table'); charSheet.id = "charSheet"; charSheet.innerHTML = "";
const exploreWindow = document.getElementById("exploreWindow"); 
const msgLog = document.createElement("div"); msgLog.id = "msgLog"; msgLog.innerHTML = ""; exploreWindow.appendChild(msgLog);
const fightLog = document.createElement("div"); fightLog.id = "fightLog"; fightLog.innerHTML = ""; exploreWindow.appendChild(fightLog);
const startBtn = document.createElement("button"); startBtn.id = "startBtn"; startBtn.innerHTML = "Entrer dans la première salle !";
document.getElementById("creerPerso").addEventListener("click", Character.createCharacters);