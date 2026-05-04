import { getTotemMedidorQtdAdd, setTotemMedidorQtdAdd } from "./totemMedidor.js";

let totemMedidorLevel = 0;
let totemMedidorCustoUpgrade = 5000;

export function attPriceTotemMedidorUpgrade() {
    let atualTotemMedidorLevel = getTotemMedidorLevel()
    if (atualTotemMedidorLevel == 0) {
        setTotemMedidorCustoUpgrade(5000)
    } else if (atualTotemMedidorLevel < 10) {
        setTotemMedidorCustoUpgrade((getTotemMedidorLevel() + 1) * 5000)
    } else {
        setTotemMedidorCustoUpgrade(getTotemMedidorLevel() * 100)
    }
    document.getElementById('idCostTotemMedidor').textContent = getTotemMedidorCustoUpgrade()
}

export function attQtdAddTotemMedidorUpgrade() {
    if (getTotemMedidorLevel() < 10) {
        setTotemMedidorQtdAdd(getTotemMedidorQtdAdd() + 30);
    }
}

export function getTotemMedidorLevel() {
    return totemMedidorLevel;
}

export function setTotemMedidorLevel(newTotemMedidor) {
    totemMedidorLevel = newTotemMedidor;
    document.getElementById('idLvlUpTotemMedidor').textContent = getTotemMedidorLevel()
}

export function getTotemMedidorCustoUpgrade() {
    return totemMedidorCustoUpgrade;
}

export function setTotemMedidorCustoUpgrade(newTotemMedidorCustoUpgrade) {
    totemMedidorCustoUpgrade = newTotemMedidorCustoUpgrade;
}