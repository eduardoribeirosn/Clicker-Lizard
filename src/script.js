// Variáveis Globais
export let zengiaAtual = 0;
export let zengiaQtdAdd = 0.2;

// Imports -> Todos
import { addZengiaManual, attTelaZengia } from "./JS/Energias/Zengia/zengiaBase.js"
import { uparZengiaBase } from "./JS/Energias/Zengia/zengiaUpgrade.js";

// Funções Ativadas
botoesDaTelaGame()





// Funções Auxiliares
function botoesDaTelaGame() {
    // Botão para abrir o Menu de Upar Energias -> Lateral Esquerdo
    document.getElementById('idUpgradeEnergies').addEventListener('click', () => {
        let menuBarLeft = document.getElementById('idMenuBarLeft')
        if (menuBarLeft.style.display != 'none') {
            menuBarLeft.style.display = 'none'
            document.getElementById('idMenuLeftEnergias').style.display = 'block'
        } else {
            menuBarLeft.style.display = 'block'
            document.getElementById('idMenuLeftEnergias').style.display = 'none'
        }
    })

    // Botão para Fechar o Menu de Upar Energias -> Lateral Esquerdo
    document.getElementById('idCloseMenuLeft').addEventListener('click', () => {
        let menuLeft = document.getElementById('idMenuLeftEnergias')
        if (menuLeft.style.display != 'none') {
            menuLeft.style.display = 'none'
            document.getElementById('idMenuBarLeft').style.display = 'block'
        } else {
            menuLeft.style.display = 'block'
            document.getElementById('idMenuBarLeft').style.display = 'none'
        }
    })

    // Botão para Ganhar Energia Manual
    document.getElementById('idMainButton').addEventListener('click', addZengiaManual)

    // Faz a animação de surgir o número pós click
    document.getElementById('idMainButton').addEventListener('click', function(evento) {
        // 1. Criar o elemento HTML do zero
        const textoFlutuante = document.createElement('span');
        textoFlutuante.classList.add('numero-flutuante');
        let valueAuxiliar = Math.round(getZengiaQtdAdd() * 100) / 100
        textoFlutuante.innerText = `+${valueAuxiliar}`; // Ou o valor do seu poder de clique

        // 2. Pegar a posição do mouse no momento do clique
        // Subtraímos um pouco para centralizar o texto no ponteiro do mouse
        const eixoX = evento.clientX - 10; 
        const eixoY = evento.clientY - 15; 

        // 3. Posicionar o texto exatamente onde o mouse clicou
        textoFlutuante.style.left = `${eixoX}px`;
        textoFlutuante.style.top = `${eixoY}px`;

        // 4. Jogar o texto na tela
        document.body.appendChild(textoFlutuante);

        // 5. A Limpeza (Obrigatório!)
        // Remove o elemento do HTML após 1 segundo (tempo exato da animação do CSS)
        setTimeout(() => {
            textoFlutuante.remove();
        }, 1000); 
    });

    // Energias
    // Zengia
    // Botão para Upar Zengia
    document.getElementById('idUparGanhoPorCliqueZengia').addEventListener('click', uparZengiaBase)
}

// Getters e Setters das variáveis globais
// Zengia Atual
export function getZengiaAtual() {
    return zengiaAtual
}
export function setZengiaAtual(newValueZengia) {
    let valueAuxiliar = Math.round(newValueZengia * 100) / 100
    zengiaAtual = valueAuxiliar
    attTelaZengia()
}

// Quantidade Ganha por Click -> Zengia
export function getZengiaQtdAdd() {
    return zengiaQtdAdd
}
export function setZengiaQtdAdd(newZengiaQtdAdd) {
    zengiaQtdAdd = newZengiaQtdAdd
}