import { getZengiaAtual, setZengiaAtual } from "../../../../script.js";
import { ativarAmuletoAntigo } from "./amuletoAntigoAtivador.js";
import { attPriceAmuletoAntigoUpgrade, attQtdAddAmuletoAntigoUpgrade, getAmuletoAntigoLevel, getAmuletoAntigoCustoUpgrade, setAmuletoAntigoLevel } from "./aumuletoAntigoBalanceamento.js";

// Upar Amuleto Antigo - Automático
export function uparAmuletoAntigo() {
    if (playerTemZengiaSuf_AmuletoAntigo()) {
        console.log('Amuleto funciona')
        attLevelAmuletoAntigoUpgrade()
        attPriceAmuletoAntigoUpgrade()
        attQtdAddAmuletoAntigoUpgrade()
        ativarAmuletoAntigo()
    } else {
        console.log('Sem Zengia suficiente - Amuleto')
    }
}

// Verifica se o Player tem Zengia o suficiente
function playerTemZengiaSuf_AmuletoAntigo() {
    let atualZengia = getZengiaAtual()
    let atualCustoZengia = getAmuletoAntigoCustoUpgrade()
    if (atualZengia >= atualCustoZengia) {
        return true;
    } else {
        return false;
    }
}

// Atualiza o Level do Upgrade
function attLevelAmuletoAntigoUpgrade() {
    setZengiaAtual(getZengiaAtual() - getAmuletoAntigoCustoUpgrade())
    setAmuletoAntigoLevel(getAmuletoAntigoLevel() + 1)
}