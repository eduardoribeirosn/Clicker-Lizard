import { getZengiaAtual, setZengiaAtual } from "../../../../script.js"
import { getAmuletoAntigoLevel } from "../Amuleto-antigo/aumuletoAntigoBalanceamento.js"
import { ativarTotemMedidor } from "./totemMedidorAtivador.js"
import { attPriceTotemMedidorUpgrade, attQtdAddTotemMedidorUpgrade, getTotemMedidorCustoUpgrade, getTotemMedidorLevel, setTotemMedidorLevel } from "./totemMedidorBalanceamento.js"

// Upar Totem Medidor - Automático
export function uparTotemMedidor() {
    if (playerTemZengiaSuf_TotemMedidor()) {
        console.log('Totem funciona')
        attLevelTotemMedidorUpgrade()
        attPriceTotemMedidorUpgrade()
        attQtdAddTotemMedidorUpgrade()
        ativarTotemMedidor()
    } else {
        console.log('Sem Zengia suficiente - Totem')
    }

    if (getTotemMedidorLevel() > 0) {
        document.getElementById('idUpgradeTempo-TotemMedidor').style.display = "flex";
    }
}

// Verifica se o Player tem Zengia o suficiente
function playerTemZengiaSuf_TotemMedidor() {
    let atualZengia = getZengiaAtual()
    let atualCustoZengia = getTotemMedidorCustoUpgrade()
    if (atualZengia >= atualCustoZengia) {
        return true;
    } else {
        return false;
    }
}

// Atualiza o Level do Upgrade
function attLevelTotemMedidorUpgrade() {
    setZengiaAtual(getZengiaAtual() - getTotemMedidorCustoUpgrade())
    setTotemMedidorLevel(getAmuletoAntigoLevel() + 1)
}