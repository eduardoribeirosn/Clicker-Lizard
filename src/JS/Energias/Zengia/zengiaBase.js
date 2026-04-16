import { getZengiaQtdAdd, setZengiaAtual, zengiaAtual } from "../../../script.js";


export function addZengiaManual() {
    // Valor Ganho
    let valueAuxiliar = zengiaAtual + getZengiaQtdAdd()
    // -----
    // Deixar Valor arrendonado
    valueAuxiliar = Math.round(valueAuxiliar * 100) / 100
    // -----
    setZengiaAtual(valueAuxiliar)
}

export function attTelaZengia() {
    document.getElementById('idZengiaAtualValor').textContent = zengiaAtual
}

