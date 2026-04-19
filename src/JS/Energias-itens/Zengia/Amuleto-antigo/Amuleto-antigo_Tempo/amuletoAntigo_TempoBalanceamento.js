let amuletoAntigo_TempoDemorado = 3000;

let amuletoAntigo_TempoLevel = 1;
let amuletoAntigo_TempoCustoUpgrade = 500;

export function attPriceAmuletoAntigo_TempoUpgrade() {
    let atualAmuletoAntigoLevel = getAmuletoAntigo_TempoLevel()
    if (atualAmuletoAntigoLevel < 10) {
        setAmuletoAntigo_TempoCustoUpgrade((getAmuletoAntigo_TempoLevel() + 1) * 500)
    } else {
        setAmuletoAntigo_TempoCustoUpgrade(getAmuletoAntigo_TempoLevel() * 1000)
    }
    document.getElementById('idCostAmuletoAntigoTempo').textContent = getAmuletoAntigo_TempoCustoUpgrade()
}

export function attQtdAddAmuletoAntigo_TempoUpgrade() {
    if (getAmuletoAntigo_TempoLevel() < 10) {
        if (getAmuletoAntigo_TempoLevel() < 10) {
            setAmuletoAntigo_tempoDemorado(getAmuletoAntigo_TempoDemorado() - 200)
        }
    }
}

export function getAmuletoAntigo_TempoDemorado() {
    return amuletoAntigo_TempoDemorado;
}

export function setAmuletoAntigo_tempoDemorado(newAmuletoAntigo_tempoDemorado) {
    amuletoAntigo_TempoDemorado = newAmuletoAntigo_tempoDemorado
}

export function getAmuletoAntigo_TempoLevel() {
    return amuletoAntigo_TempoLevel;
}

export function setAmuletoAntigo_TempoLevel(newAmuletoAntigo_TempoLevel) {
    amuletoAntigo_TempoLevel = newAmuletoAntigo_TempoLevel
    document.getElementById('idLvlUpAmuletoAntigoTempo').textContent = getAmuletoAntigo_TempoLevel()
}

export function getAmuletoAntigo_TempoCustoUpgrade() {
    return amuletoAntigo_TempoCustoUpgrade;
}

export function setAmuletoAntigo_TempoCustoUpgrade(newAmuletoAntigo_TempoCustoUpgrade) {
    amuletoAntigo_TempoCustoUpgrade = newAmuletoAntigo_TempoCustoUpgrade
}