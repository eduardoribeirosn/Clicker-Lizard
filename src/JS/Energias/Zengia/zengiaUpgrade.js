import { getZengiaAtual, setZengiaAtual } from "../../../script.js"
import { attPriceZengiaUpgrade, attQtdAddZengiaUpgrade, getZengiaCustoUpgrade, getZengiaLevel, setZengiaLevel } from "./zengiaBaseBalanceamento.js"



// Upar Zengia - Clique
export function uparZengiaBase() {
    if (playerTemZengiaSuf()) {
        console.log('funciona')
        attLevelZengiaUpgrade()
        attPriceZengiaUpgrade()
        attQtdAddZengiaUpgrade()
    } else {
        console.log("Sem Zengia suficiente")
    }
}

// Verifica se o Player tem Zengia o suficiente
function playerTemZengiaSuf() {
    let atualZengia = getZengiaAtual()
    let atualCustoZengia = getZengiaCustoUpgrade()
    if (atualZengia >= atualCustoZengia) {
        return true;
    } else {
        return false;
    }
}

// Atualiza o Level do Upgrade
function attLevelZengiaUpgrade() {
    setZengiaAtual(getZengiaAtual() - getZengiaCustoUpgrade())
    setZengiaLevel(getZengiaLevel() + 1)
}