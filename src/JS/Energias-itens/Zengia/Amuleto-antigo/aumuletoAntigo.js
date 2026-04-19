import { getZengiaAtual, setZengiaAtual } from "../../../../script.js";

// Variaveis do Item
let amuletoAntigoQtdAdd = 0;

export function addAmuletoAntigoQtdAdd() {
    // Valor Ganho
    let valueAuxiliar = getZengiaAtual() + getAmuletoAntigoQtdAdd();
    // -----
    // Deixar valor arredondado
    valueAuxiliar = Math.round(valueAuxiliar * 100) / 100
    // ----
    setZengiaAtual(valueAuxiliar)
}

export function getAmuletoAntigoQtdAdd() {
    return amuletoAntigoQtdAdd;
}

export function setAmuletoAntigoQtdAdd(newAmuletoAntigoQtdAdd) {
    amuletoAntigoQtdAdd = newAmuletoAntigoQtdAdd;
}