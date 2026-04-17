import { getZengiaAtual, setZengiaAtual } from "../../../../script.js";

// Variaveis do Item
let zengiaQtdAdd_amuletoAntigo = 5;

export function addZengia_amuletoAntigo() {
    // Valor Ganho
    let valueAuxiliar = getZengiaAtual() + getZengiaQtd_amuletoAntigo();
    // -----
    // Deixar valor arredondado
    valueAuxiliar = Math.round(valueAuxiliar * 100) / 100
    // ----
    setZengiaAtual(valueAuxiliar)
}

export function getZengiaQtd_amuletoAntigo() {
    return zengiaQtdAdd_amuletoAntigo;
}

export function setZengiaQtd_amuletoAntigo(newZengiaQtdAdd_amuletoAntigo) {
    zengiaQtdAdd_amuletoAntigo = newZengiaQtdAdd_amuletoAntigo;
}