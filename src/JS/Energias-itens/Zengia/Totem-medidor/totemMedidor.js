import { getZengiaAtual, numerosAnimado, setZengiaAtual } from "../../../../script.js";

// Variaveis do Item
let totemMedidorQtdAdd = 0;

export function addTotemMedidorQtdAdd() {
    // Valor Ganho
    let valueAuxiliar = getZengiaAtual() + getTotemMedidorQtdAdd();
    numerosAnimado(document.getElementById('idItemTotemMedidor'), getTotemMedidorQtdAdd);
    // -----
    // Deixar valor arredondado
    valueAuxiliar = Math.round(valueAuxiliar * 100) / 100
    // ----
    setZengiaAtual(valueAuxiliar);
}

export function getTotemMedidorQtdAdd() {
    return totemMedidorQtdAdd;
}

export function setTotemMedidorQtdAdd(newTotemMedidorQtdAdd) {
    totemMedidorQtdAdd = newTotemMedidorQtdAdd;
}