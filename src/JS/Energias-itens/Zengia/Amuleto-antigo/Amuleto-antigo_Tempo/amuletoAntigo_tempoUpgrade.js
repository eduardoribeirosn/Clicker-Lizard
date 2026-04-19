import { getZengiaAtual, setZengiaAtual } from "../../../../../script.js";
import { attPriceAmuletoAntigo_TempoUpgrade, attQtdAddAmuletoAntigo_TempoUpgrade, getAmuletoAntigo_TempoCustoUpgrade, getAmuletoAntigo_TempoLevel, setAmuletoAntigo_TempoLevel } from "./amuletoAntigo_TempoBalanceamento.js";

// Upar Amuleto Antigo Tempo - Automático
export function uparAmuletoAntigo_Tempo() {
    if (playerTemZengiaSuf_AmuletoAntigo_Tempo()) {
        console.log('Amuleto Tempo funciona')
        attLevelAmuletoAntigo_TempoUpgrade()
        attPriceAmuletoAntigo_TempoUpgrade()
        attQtdAddAmuletoAntigo_TempoUpgrade()
    } else {
        console.log('Sem Zengia suficiente - Amuleto Tempo')
    }
}

// Verifica se o Player tem Zengia o suficiente
function playerTemZengiaSuf_AmuletoAntigo_Tempo() {
    let atualZengia = getZengiaAtual()
    let atualCustoZengia = getAmuletoAntigo_TempoCustoUpgrade()
    if (atualZengia >= atualCustoZengia) {
        return true;
    } else {
        return false;
    }
}

// Atualiza o level do Upgrade
function attLevelAmuletoAntigo_TempoUpgrade() {
    setZengiaAtual(getZengiaAtual() - getAmuletoAntigo_TempoCustoUpgrade())
    setAmuletoAntigo_TempoLevel(getAmuletoAntigo_TempoLevel() + 1)
}