import { getQtdAddZengia, setZengiaAtual, zengiaAtual } from "../../../script.js";


export function addZengiaManual() {
    // Valor Ganho
    let valueAuxiliar = zengiaAtual + getQtdAddZengia()
    // -----
    // Deixar Valor arrendonado
    valueAuxiliar = Math.round(valueAuxiliar * 100) / 100
    // -----
    setZengiaAtual(valueAuxiliar)
    attTelaZengia()
}

export function attTelaZengia() {
    document.getElementById('idZengiaAtualValor').textContent = zengiaAtual
}

