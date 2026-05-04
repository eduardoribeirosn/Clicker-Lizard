import { getAmuletoAntigo_TempoDemorado } from "./Amuleto-antigo_Tempo/amuletoAntigo_TempoBalanceamento.js";
import { addAmuletoAntigoQtdAdd } from "./aumuletoAntigo.js";
import { getAmuletoAntigoLevel } from "./aumuletoAntigoBalanceamento.js";

let amuletoAntigoFuncionando;

export function ativarAmuletoAntigo() {
    if (getAmuletoAntigoLevel() >= 1) {
        desativarAmuletoAntigo()
        trocarImgAnimationAmuletoAntigo()
        amuletoAntigoFuncionando = setInterval(() => {
            addAmuletoAntigoQtdAdd()
            console.log(getAmuletoAntigo_TempoDemorado())
        }, getAmuletoAntigo_TempoDemorado())
    }
}

function trocarImgAnimationAmuletoAntigo() {
    document.getElementById('idItemAmuletoAntigo').style.backgroundImage = 'url(./assets/Maquinas-Itens/AmuletoAntigo.png)'
    document.getElementById('idItemAmuletoAntigo').classList.add('itemPulsar')
}

export function desativarAmuletoAntigo() {
    clearInterval(amuletoAntigoFuncionando)
}