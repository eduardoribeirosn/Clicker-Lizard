import { addTotemMedidorQtdAdd } from "./totemMedidor.js";
import { getTotemMedidorLevel } from "./totemMedidorBalanceamento.js";

let totemMedidorFuncionando;

export function ativarTotemMedidor() {
    if (getTotemMedidorLevel() >= 1) {
        desativarTotemMedidor()
        trocarImgAnimationTotemMedidor()
        totemMedidorFuncionando = setInterval(() => {
            addTotemMedidorQtdAdd()
            // console.log()
        }, 1000)
    }
}

function trocarImgAnimationTotemMedidor() {
    document.getElementById('idItemTotemMedidor').style.backgroundImage = 'url(./assets/Maquinas-Itens/TotemMedidor.png)';
    document.getElementById('idItemTotemMedidor').classList.add('itemPulsar');
}

export function desativarTotemMedidor() {
    clearInterval(totemMedidorFuncionando)
}