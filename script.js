function pergunta(){
    const el = document.querySelector("#resposta");
    const limpa = ""
    el.innerHTML = ""; // limpa o conteúdo anterior do elemento
    const text = "A peste é uma doença infecciosa causada pela bactéria Yersinia pestis, que pode ser transmitida aos seres humanos por meio de pulgas infectadas ou pelo contato com tecidos de animais infectados. A doença tem três formas principais: bubônica, septicêmica e pneumônica, cada uma com seus próprios sintomas e formas de transmissão. A peste teve vários surtos devastadores ao longo da história, como a Peste Negra no século XIV, que matou milhões de pessoas na Europa. Hoje em dia, a peste pode ser tratada com antibióticos, mas ainda é uma ameaça em algumas partes do mundo.";
    const interval = 9;

    function showText(el,text,interval){
        const char = text.split("").reverse();

        const typer = setInterval(() => {

            if(!char.length){
                return clearInterval(typer);
            }
            const next = char.pop();

            el.innerHTML += next;
        }, interval);
    }

    showText(el,text,interval);
}


function pergunta1(){
    const el = document.querySelector("#resposta");
    const limpa = ""
    el.innerHTML = "";
const text = "A peste é uma doença causada pela bactéria Yersinia pestis e tem três formas principais:\n\n1.Peste bubônica: é a forma mais comum da doença e é transmitida pela picada de pulgas infectadas ou pelo contato com tecidos de animais infectados. Os sintomas incluem febre alta, dor de cabeça, calafrios, fraqueza e a formação de caroços inchados e dolorosos, chamados de bubões, nas áreas afetadas do corpo.\n\n2.Peste septicêmica: é uma forma mais grave da doença, que ocorre quando a bactéria se espalha pelo corpo através da corrente sanguínea. Os sintomas incluem febre alta, dor abdominal, diarreia, vômitos e manchas vermelhas na pele. A peste septicêmica pode levar à falência múltipla de órgãos e à morte rapidamente.\n\n3.Peste pneumônica: é a forma mais contagiosa e mortal da doença, que ocorre quando a bactéria infecta os pulmões. Os sintomas incluem febre alta, dor torácica, falta de ar, tosse com catarro e sangue e pneumonia. A peste pneumônica pode se espalhar facilmente de pessoa para pessoa através do ar e pode levar à morte em questão de horas se não for tratada rapidamente.";
const interval = 9;

function showText(el,text,interval){

    const char = text.split("").reverse();

    const typer = setInterval(() => {

        if(!char.length){
            return clearInterval(typer);
        }
        const next = char.pop();

        el.innerHTML += next;
    }, interval);
}

showText(el,text,interval);
}

function pergunta2(){
    const el = document.querySelector("#resposta");
    const limpa = ""
    el.innerHTML = ""; // limpa o conteúdo anterior do elemento
    const text = "A Peste Negra foi uma pandemia devastadora que ocorreu na Europa durante a Idade Média, entre os anos 1346 e 1353.\n\nA doença era causada pela bactéria Yersinia pestis e foi transmitida principalmente por meio de pulgas que infestavam ratos.\n\nAs pulgas eram os principais vetores da doença, pois se alimentavam do sangue dos ratos infectados e, em seguida, picavam os humanos, transmitindo a bactéria para eles. A doença também podia ser transmitida diretamente de pessoa para pessoa, por meio de secreções respiratórias.As condições sanitárias precárias da época contribuíram para a rápida disseminação da doença, que se espalhou rapidamente por toda a Europa, causando a morte de milhões de pessoas.";
    const interval = 9;

    function showText(el,text,interval){
        const char = text.split("").reverse();

        const typer = setInterval(() => {

            if(!char.length){
                return clearInterval(typer);
            }
            const next = char.pop();

            el.innerHTML += next;
        }, interval);
    }

    showText(el,text,interval);
}

function pergunta3(){
    const el = document.querySelector("#resposta");
    const limpa = ""
    el.innerHTML = ""; // limpa o conteúdo anterior do elemento
    const text = " É difícil determinar com precisão o número de mortes no início da pandemia da Peste Negra devido à falta de registros precisos e confiáveis da época. No entanto, algumas estimativas indicam que a doença pode ter matado várias dezenas de milhares de pessoas em seu estágio inicial na Ásia Central e no Oriente Médio, antes de se espalhar para a Europa. Mas é importante lembrar que esses números são baseados em conjecturas e que os registros históricos disponíveis são limitados e muitas vezes imprecisos.";
    const interval = 9;

    function showText(el,text,interval){
        const char = text.split("").reverse();

        const typer = setInterval(() => {

            if(!char.length){
                return clearInterval(typer);
            }
            const next = char.pop();

            el.innerHTML += next;
        }, interval);
    }

    showText(el,text,interval);
}

function pergunta4(){
    const el = document.querySelector("#resposta");
    const limpa = ""
    el.innerHTML = ""; // limpa o conteúdo anterior do elemento
    const text = "Estima-se que entre 75 e 200 milhões de pessoas tenham morrido durante a pandemia da Peste Negra, também conhecida como Peste Bubônica, que ocorreu durante o século XIV na Europa, África e Oriente Médio.\n\nNo entanto, é importante lembrar que as estimativas sobre o número de mortos variam, e que a falta de registros precisos e confiáveis da época torna difícil determinar com precisão o número exato de vítimas da doença.";
    const interval = 9;

    function showText(el,text,interval){
        const char = text.split("").reverse();

        const typer = setInterval(() => {

            if(!char.length){
                return clearInterval(typer);
            }
            const next = char.pop();

            el.innerHTML += next;
        }, interval);
    }

    showText(el,text,interval);
}