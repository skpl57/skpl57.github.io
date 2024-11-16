const licznik = document.querySelector("#licznik");

function obliczanieCzasu(){
    const otwarcie = new Date('2023-05-10');
    const dzis = new Date();
    const roznicaMili = dzis - otwarcie;
    const roznicaDni = Math.floor(roznicaMili / (1000 * 60 * 60 * 24));
    licznik.innerHTML += `Dni od założenia kółka: ${roznicaDni} dni.`;
}

function wczytywanieFunkcji(){
    obliczanieCzasu();
}