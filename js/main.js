function addMessageToLog(message) { // fonctionnement de la fenêtre d'évènements
    setTimeout(() => {
        let newMsg = document.createElement("p");
        newMsg.innerHTML = message;
        msgLog.appendChild(newMsg);
    }, tempoMsg);
    tempoMsg += 400;
}

let char = null; let mobs = []; let tempoMsg = 0; let onFight = false;
const msgLog = document.createElement("div"); msgLog.id = "msgLog"; msgLog.innerHTML = "";
const charSheet = document.createElement('table'); charSheet.id = "charSheet"; charSheet.innerHTML = "";
const lvlUpWindow = document.createElement("table"); lvlUpWindow.id = "lvlUpWindow";
const exploreWindow = document.getElementById("exploreWindow"); exploreWindow.appendChild(msgLog);
const createBtn = document.getElementById("creerPerso");
createBtn.addEventListener("click", Character.createCharacter);
document.getElementById("genererMob").addEventListener("click", Mob.popMob);