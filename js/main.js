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
    tempoMsg += 0; // 1800
}

let chars = []; let mobs = []; let tempoMsg = 0; let onFight = false; inventaire = []; gold = 50;
const charSheet = document.createElement('table'); charSheet.id = "charSheet"; charSheet.innerHTML = "";
const exploreWindow = document.getElementById("exploreWindow"); 
const msgLog = document.createElement("div"); msgLog.id = "msgLog"; msgLog.innerHTML = ""; exploreWindow.appendChild(msgLog);
const fightLog = document.createElement("div"); fightLog.id = "fightLog"; fightLog.innerHTML = ""; exploreWindow.appendChild(fightLog);
const startBtn = document.createElement("button"); startBtn.id = "startBtn"; startBtn.innerHTML = "Entrer dans la première salle !";
document.getElementById("creerPerso").addEventListener("click", Character.createCharacters);