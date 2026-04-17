import { getZengiaAtual, setZengiaAtual } from "../../../../script.js";
import { attPriceAmuletoAntigoUpgrade, attQtdAddAmuletoAntigoUpgrade, getAmuletoAntigoLevel, getZengiaCustoUpgrade_amuletoAntigo, setZengiaLevel_amuletoAntigo } from "./aumuletoAntigoBalanceamento.js";

// Upar Amuleto Antigo - Automatico
export function uparAmuletoAntigo() {
    if (playerTemZengiaSuf_AmuletoAntigo()) {
        console.log('Amuleto funciona')
        attLevelAmuletoAntigoUpgrade()
        attPriceAmuletoAntigoUpgrade()
        attQtdAddAmuletoAntigoUpgrade()
    } else {
        console.log('Sem Zengia suficiente - Amuleto')
    }
}

// Verifica se o Player tem Zengia o suficiente
function playerTemZengiaSuf_AmuletoAntigo() {
    let atualZengia = getZengiaAtual()
    let atualCustoZengia = getZengiaCustoUpgrade_amuletoAntigo()
    if (atualZengia >= atualCustoZengia) {
        return true;
    } else {
        return false;
    }
}

// Atualiza o Level do Upgrade
function attLevelAmuletoAntigoUpgrade() {
    setZengiaAtual(getZengiaAtual() - getZengiaCustoUpgrade_amuletoAntigo())
    setZengiaLevel_amuletoAntigo(getAmuletoAntigoLevel() + 1)
}