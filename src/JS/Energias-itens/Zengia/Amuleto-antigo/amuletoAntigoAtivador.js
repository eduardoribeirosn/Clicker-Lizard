import { addAmuletoAntigoQtdAdd } from "./aumuletoAntigo.js";
import { getAmuletoAntigoLevel } from "./aumuletoAntigoBalanceamento.js";

let amuletoAntigoFuncionando;

export function ativarAmuletoAntigo() {
    if (getAmuletoAntigoLevel() == 1) {
        desativarAmuletoAntigo()
        amuletoAntigoFuncionando = setInterval(() => {
            addAmuletoAntigoQtdAdd()
        }, 1000)
    }
}

export function desativarAmuletoAntigo() {
    clearInterval(amuletoAntigoFuncionando)
}