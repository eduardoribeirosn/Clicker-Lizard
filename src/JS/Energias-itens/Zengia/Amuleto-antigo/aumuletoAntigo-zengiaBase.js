import { getZengiaAtual, setZengiaAtual } from "../../../../script.js";

// Variaveis do Item
let amuletoAntigo_zengiaQtdAdd = 5;

export function addZengia_amuletoAntigo() {
    // Valor Ganho
    let valueAuxiliar = getZengiaAtual() + getAmuletoAntigo_zengiaQtdAdd();
    // -----
    // Deixar valor arredondado
    valueAuxiliar = Math.round(valueAuxiliar * 100) / 100
    // ----
    setZengiaAtual(valueAuxiliar)
}

export function getAmuletoAntigo_zengiaQtdAdd() {
    return amuletoAntigo_zengiaQtdAdd;
}

export function setAmuletoAntigo_zengiaQtdAdd(newAmuletoAntigo_zengiaQtdAdd) {
    amuletoAntigo_zengiaQtdAdd = newAmuletoAntigo_zengiaQtdAdd;
}