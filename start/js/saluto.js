var saluti = new Date();

if (saluti.getHours() < 5) {
    saluti = 'Vai a dormire๐คช';
} else if (saluti.getHours() < 12) {
    saluti = 'Buongiorno!๐';
} else if (saluti.getHours() < 19) {
    saluti = 'Buon Pomeriggio!๐';
} else {
    saluti = 'Buonasera!๐';
}

document.getElementById('saluti').innerHTML = saluti;