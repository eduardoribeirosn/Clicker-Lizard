import { getZengiaQtdAdd, setZengiaQtdAdd } from "../../../script.js";

let zengiaLevel = 1;
let zengiaCustoUpgrade = 5;

export function attPriceZengiaUpgrade() {
    let atualZengiaLevel = getZengiaLevel();
    if (atualZengiaLevel < 10) {
        setZengiaCustoUpgrade(getZengiaLevel() * 5);
    } else if (atualZengiaLevel < 20) {
        setZengiaCustoUpgrade(getZengiaLevel() * 10);
    } else {
        setZengiaCustoUpgrade(getZengiaLevel() * 20);
    }
    document.getElementById('idCostGanhoPorClique').textContent = getZengiaCustoUpgrade();
}

export function attQtdAddZengiaUpgrade() {
    if (zengiaLevel < 10) {
        setZengiaQtdAdd(getZengiaQtdAdd() + 0.2);
    }
}

export function getZengiaLevel() {
    return zengiaLevel;
}

export function setZengiaLevel(newZengiaLevel) {
    zengiaLevel = newZengiaLevel
    document.getElementById('idLvlUpGanhoPorCliqueZengia').textContent = zengiaLevel
}

export function getZengiaCustoUpgrade() {
    return zengiaCustoUpgrade
}

export function setZengiaCustoUpgrade(newZengiaCustoUpgrade) {
    zengiaCustoUpgrade = newZengiaCustoUpgrade;
}
