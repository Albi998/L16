var saluti = new Date();

if (saluti.getHours() < 5) {
    saluti = 'Vai a dormire🤪';
} else if (saluti.getHours() < 12) {
    saluti = 'Buongiorno!😎';
} else if (saluti.getHours() < 19) {
    saluti = 'Buon Pomeriggio!😉';
} else {
    saluti = 'Buonasera!😁';
}

document.getElementById('saluti').innerHTML = saluti;