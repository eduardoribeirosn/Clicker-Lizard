import { getAmuletoAntigo_TempoDemorado } from "./Amuleto-antigo_Tempo/amuletoAntigo_TempoBalanceamento.js";
import { addAmuletoAntigoQtdAdd } from "./aumuletoAntigo.js";
import { getAmuletoAntigoLevel } from "./aumuletoAntigoBalanceamento.js";

let amuletoAntigoFuncionando;

export function ativarAmuletoAntigo() {
    if (getAmuletoAntigoLevel() >= 1) {
        desativarAmuletoAntigo()
        amuletoAntigoFuncionando = setInterval(() => {
            addAmuletoAntigoQtdAdd()
            console.log(getAmuletoAntigo_TempoDemorado())
        }, getAmuletoAntigo_TempoDemorado())
    }
}

export function desativarAmuletoAntigo() {
    clearInterval(amuletoAntigoFuncionando)
}