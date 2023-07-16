
const main = document.getElementById('main')

const campoformulario = document.getElementById('campoformulario')

const campobacknext = document.getElementById('containerBackNext')
const backButton = document.getElementById('back')
const nextButton = document.getElementById('next')

const indicador1 = document.getElementById('indicador1')
const indicador2 = document.getElementById('indicador2')
const indicador3 = document.getElementById('indicador3')
const indicador4 = document.getElementById('indicador4')

const etapa1 = document.getElementById('etapa1')
const etapa2 = document.getElementById('etapa2')
const etapa3 = document.getElementById('etapa3')
const etapa4 = document.getElementById('etapa4')

let etapaDestaque = 1 

const planoArcade = document.getElementById('Arcade')
const planoAvançado = document.getElementById('Avançado')
const planoPro = document.getElementById('Pro')

const valor1 = document.getElementsByClassName('valor')[0]
const valor2 = document.getElementsByClassName('valor')[1]
const valor3 = document.getElementsByClassName('valor')[2]
const mesesgratis1 = document.getElementsByClassName('mesesgratis')[0]
const mesesgratis2 = document.getElementsByClassName('mesesgratis')[1]
const mesesgratis3 = document.getElementsByClassName('mesesgratis')[2]

const planoerro = document.getElementById('planoerro')
const togglebox = document.getElementById('toggle')
const bolatoggle = document.getElementById('bolatoggle')

const complementoserviços = document.getElementById('complemento1')
const complementoarmazenamento = document.getElementById('complemento2')
const complementoperfil = document.getElementById('complemento3')

const serviçosinput = document.getElementById('serviços')
const armazenamentoinput = document.getElementById('armazenamento')
const perfilinput = document.getElementById('perfil')

const serviçovalor = document.getElementsByClassName('complementovalor')[0]
const armazenamentovalor = document.getElementsByClassName('complementovalor')[1]
const perfilvalor = document.getElementsByClassName('complementovalor')[2]

let planopagamento = 'mensal'
let plano = null
let complementos = []
let preçototal = 0

const planofinal = document.getElementById('planofinal') 
const planofinalpreço = document.getElementById('planofinalpreço')
const preçoserviço = document.getElementById('preçoserviço') 
const preçoarmazenamento = document.getElementById('preçoarmazenamento')
const preçoperfil = document.getElementById('preçoperfil')
const portempo = document.getElementById('totalportempo')
const preçototaldisplay = document.getElementById('preçototal')

const containercomplementos = document.getElementsByClassName('containercomplementos')[0]
const displayserviço = document.getElementById('containerserviço')
const displayarmazenamento = document.getElementById('containerarmazenamento')
const displayperfil = document.getElementById('containerperfil')

planoArcade.addEventListener('click', selecionarplano)
planoAvançado.addEventListener('click', selecionarplano)
planoPro.addEventListener('click', selecionarplano)

function selecionarplano() {
    if (planopagamento === 'mensal') {
        planoArcade.classList.remove('planoselecionado')
        planoAvançado.classList.remove('planoselecionado')
        planoPro.classList.remove('planoselecionado')
        this.classList.add('planoselecionado')
        plano = this.id + 'mensal'
    } else {
        planoArcade.classList.remove('planoselecionado')
        planoAvançado.classList.remove('planoselecionado')
        planoPro.classList.remove('planoselecionado')
        this.classList.add('planoselecionado')
        plano = this.id + 'anual'
    }
    verificarplano()
}

bolatoggle.addEventListener('click', MensalAnual)

function MensalAnual() {
    planoArcade.classList.remove('planoselecionado')
    planoAvançado.classList.remove('planoselecionado')
    planoPro.classList.remove('planoselecionado')
    plano = null
    togglebox.classList.toggle('justifycontentend')
    mesesgratis1.classList.toggle('displaynone')
    mesesgratis2.classList.toggle('displaynone')
    mesesgratis3.classList.toggle('displaynone')
    if (planopagamento === 'mensal') {
        planopagamento = 'anual'
        valor1.textContent = '$90/ano'
        valor2.textContent = '$120/ano'
        valor3.textContent = '$150/ano'
        serviçovalor.textContent = '$10/ano'
        armazenamentovalor.textContent = '$20/ano'
        perfilvalor.textContent = '$20/ano'
        preçoserviço.textContent = '$10/ano'
        preçoarmazenamento.textContent = '$20/ano'
        preçoperfil.textContent = '$20/ano'
    } else {
        planopagamento = 'mensal'
        valor1.textContent = '$9/mês'
        valor2.textContent = '$12/mês'
        valor3.textContent = '$15/mês'
        serviçovalor.textContent = '$1/mês'
        armazenamentovalor.textContent = '$2/mês'
        perfilvalor.textContent = '$2/mês'
        preçoserviço.textContent = '$1/mês'
        preçoarmazenamento.textContent = '$2/mês'
        preçoperfil.textContent = '$2/mês'
    }
}

serviçosinput.addEventListener('change', addcomplemento)
armazenamentoinput.addEventListener('change', addcomplemento)
perfilinput.addEventListener('change', addcomplemento)

function addcomplemento() {
    if (this.checked) {
        this.parentNode.classList.toggle('planoselecionado')
        complementos.push(this.id)
    } else {
        this.parentNode.classList.toggle('planoselecionado')
        complementos = complementos.filter(item => item !== this.id);
    }
}

function verificarcomplementos() { 
    if (complementos.includes('perfil')) {
        displayperfil.classList.remove('displaynone')
        preçototal += 2
    } else {
        displayperfil.classList.add('displaynone')
    }
    if (complementos.includes('armazenamento')) {
        displayarmazenamento.classList.remove('displaynone')
        preçototal += 2
    } else {
        displayarmazenamento.classList.add('displaynone')
    }
    if (complementos.includes('serviços')) {
        displayserviço.classList.remove('displaynone')
        preçototal += 1
    } else {
        displayserviço.classList.add('displaynone')
    }
    
    if (plano.includes('anual')) {
        preçototal *= 10
    }
    
    if (complementos.length === 0) {
        containercomplementos.classList.add('displaynone')
    } else {
        containercomplementos.classList.remove('displaynone')
    }
} 

function definirpreços() {
    if (plano === 'Arcademensal') {
        planofinal.textContent = 'Arcade (Mensal)'
        planofinalpreço.textContent = '$9/mês'
        preçototal += 9
    }
    if (plano === 'Avançadomensal') {
        planofinal.textContent = 'Avançado (Mensal)'
        planofinalpreço.textContent = '$12/mês'
        preçototal += 12
    }
    if (plano === 'Promensal') {
        planofinal.textContent = 'Pro (Mensal)'
        planofinalpreço.textContent = '$15/mês'
        preçototal += 15
    }
    if (plano === 'Arcadeanual') {
        planofinal.textContent = 'Arcade (Anual)'
        planofinalpreço.textContent = '$90/ano'
        preçototal += 90
    }
    if (plano === 'Avançadoanual') {
        planofinal.textContent = 'Arcade (Anual)'
        planofinalpreço.textContent = '$120/ano'
        preçototal += 120
    }
    if (plano === 'Proanual') {
        planofinal.textContent = 'Arcade (Anual)'
        planofinalpreço.textContent = '$150/ano'
        preçototal += 150
    }

    preçototaldisplay.textContent = `$${preçototal}`
}

function definirmargemcampo() {
    if (complementos.length === 1) {
        campoformulario.style.marginBottom = '107px'
    } else if (complementos.length === 2) {
        campoformulario.style.marginBottom = '68px'
    } else if (complementos.length === 3) {
        campoformulario.style.marginBottom = '29px'
    } else {
        campoformulario.style.marginBottom = '172px'
    }
}

backButton.addEventListener('click', voltar)
nextButton.addEventListener('click', proximo)

let troca1por2 = function() {
    backButton.classList.toggle('displaynone')
    indicador1.classList.toggle('etapaDestaque')
    indicador2.classList.toggle('etapaDestaque')
    etapa1.classList.toggle('displaynone')
    etapa2.classList.toggle('displaynone')
}

let troca2por3 = function() {
    indicador2.classList.toggle('etapaDestaque')
    indicador3.classList.toggle('etapaDestaque')
    etapa2.classList.toggle('displaynone')
    etapa3.classList.toggle('displaynone')
}

let troca3por4 = function() {
    indicador3.classList.toggle('etapaDestaque')
    indicador4.classList.toggle('etapaDestaque')
    etapa3.classList.toggle('displaynone')
    etapa4.classList.toggle('displaynone')
}

let verificarplano = function() {
    if (plano === null) {
        planoerro.textContent = 'Por favor selecione um plano'
        return false
    } else {
        planoerro.textContent = ''
        return true
    }
}

function voltar() {
    switch (etapaDestaque) {
        case 2:     
            troca1por2()
            campoformulario.style.height = '395px'
            campoformulario.style.marginBottom = '70px'
            planoerro.textContent = ''
            etapaDestaque--
            break
        case 3:
            troca2por3()
            campoformulario.style.height = '537px'
            etapaDestaque--
            break
        case 4:
            troca3por4()
            campoformulario.style.height = '458px'
            campoformulario.style.marginBottom = '23px'
            etapaDestaque--
            break
    }
}

function proximo() {
    switch (etapaDestaque) {
        case 1:
            troca1por2()
            campoformulario.style.height = '537px'
            campoformulario.style.marginBottom = '23px'
            etapaDestaque++
            break
        case 2:
            verificarplano()
            if (plano !== null) {
                troca2por3()
                campoformulario.style.height = '458px'
                etapaDestaque++ 
            }
            break
        case 3:
            troca3por4()
            definirmargemcampo()
            preçototal = 0
            verificarcomplementos() 
            definirpreços()
            campoformulario.style.height = 'min-content'
            etapaDestaque++
            break
        case 4: 
            campoformulario.style.height = '400px'
            campoformulario.style.marginBottom = '70px'
            etapa4.classList.toggle('displaynone')
            etapa5.classList.toggle('displaynone')
            campobacknext.classList.toggle('displaynone')
            break
    } 
}

