import { getZengiaQtd_amuletoAntigo, setZengiaQtd_amuletoAntigo } from "./aumuletoAntigo.js";

let amuletoAntigoLevel = 0;
let amuletoAntigoCustoUpgrade = 50;

export function attPriceAmuletoAntigoUpgrade() {
    let atualAmuletoAntigoLevel = getAmuletoAntigoCustoUpgrade()
    if (atualAmuletoAntigoLevel == 0) {
        setAmuletoAntigoCustoUpgrade(50)
    } else if (atualAmuletoAntigoLevel < 10) {
        setAmuletoAntigoCustoUpgrade(getAmuletoAntigoLevel() * 50)
    } else {
        setAmuletoAntigoCustoUpgrade(getAmuletoAntigoLevel() * 100)
    }
    document.getElementById('idCostAmuletoAntigo').textContent = getAmuletoAntigoCustoUpgrade()
}

export function attQtdAddAmuletoAntigoUpgrade() {
    if (getAmuletoAntigoLevel() < 10) {
        setZengiaQtd_amuletoAntigo(getZengiaQtd_amuletoAntigo() + 5.0)
    }
}

export function getAmuletoAntigoLevel() {
    return amuletoAntigoLevel
}

export function setAmuletoAntigoLevel(newAmuletoAntigoLevel) {
    amuletoAntigoLevel = newAmuletoAntigoLevel;
    document.getElementById('idLvlUpAmuletoAntigo').textContent = getAmuletoAntigoLevel()
}

export function getAmuletoAntigoCustoUpgrade() {
    return amuletoAntigoCustoUpgrade
}

export function setAmuletoAntigoCustoUpgrade(newAmuletoAntigoCustoUpgrade) {
    amuletoAntigoCustoUpgrade = newAmuletoAntigoCustoUpgrade;
}