let ad = prompt(`Adivizi yazin:`);
let maas = +prompt(`Maasivizi yazin:`);
let vergi = +prompt(`Dovlet sizden nece faiz vergi aldigini yazin:`);
let netice;

function a(maas,vergi) {
    netice = maas - 0.01 * (maas * vergi);
    document.getElementById('emek').innerHTML = (`${ad} ${maas} AZN maas alir dovlet ${ad}-den ${vergi} % vergi goturur , ${ad} de ${netice} AZN pul qalir`);
}

a(maas,vergi)