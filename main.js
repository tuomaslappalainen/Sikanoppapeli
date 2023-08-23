let pelaajaMaara = 0;
let noppaMaara = 0;
let noppa1 = 0;
let noppa2 = 0;
let kierrosPisteet = 0;
let vuorossa = 1;
let p1nimi = "";
let p2nimi = "";
let p3nimi = "";
let p4nimi = "";
let pisteet1 = 0;
let pisteet2 = 0;
let pisteet3 = 0;
let pisteet4 = 0;

function aloita() {
    pelaajaMaara = document.querySelector("#pelmaara").value;
    document.querySelector("#aloitus").style.display = "none";
    document.querySelector("#nimiValinta").style.display = "grid";
    if(pelaajaMaara >= 3) {
        document.querySelector("#pelaaja3").style.display = "block";
        document.querySelector("#pelaaja3txt").style.display = "block";
    }
    if(pelaajaMaara == 4) {
        document.querySelector("#pelaaja4").style.display = "block";
        document.querySelector("#pelaaja4txt").style.display = "block";
    }
    document.querySelector("#aloitaPeli").style.display = "block";
}

function noppia1() {
    noppaMaara = 1;
    aloita();
}
function noppia2() {
    noppaMaara = 2;
    aloita();
}

function pelaajatNimetty() {
    p1nimi = document.querySelector("#pelaaja1txt").value;
    p2nimi = document.querySelector("#pelaaja2txt").value;
    p3nimi = document.querySelector("#pelaaja3txt").value;
    p4nimi = document.querySelector("#pelaaja4txt").value;

    if(document.querySelector("#pelaaja1txt").value.length == 0) {
        p1nimi = "Pelaaja 1";
    } else if(document.querySelector("#pelaaja2txt").value.length == 0) {
        p2nimi = "Pelaaja 2";
    } else if(window.getComputedStyle(document.querySelector("#pelaaja3txt")).display == "block" && document.querySelector("#pelaaja3txt").value.length == 0) {
        p3nimi = "Pelaaja 3";
    } else if(window.getComputedStyle(document.querySelector("#pelaaja4txt")).display == "block" && document.querySelector("#pelaaja4txt").value.length == 0) {
        p4nimi = "Pelaaja 4";
    }

    pelaa();
}

function pelaa() {
    document.querySelector("#nimiValinta").style.display = "none";
    document.querySelector("#aloitaPeli").style.display = "none";
    if(noppaMaara==1) {
        document.querySelector("#peli").style.display = "block";
    } else if(noppaMaara==2) {
        document.querySelector("#peli2").style.display = "block";
    }
    document.querySelector("#vuoroDisplay").innerHTML = "Vuorossa " + p1nimi;
}

function heitaNoppaa() {
    noppa1 = Math.floor(Math.random() * (6) + 1);
    document.querySelector("#noppaNumero").innerHTML = noppa1;
    if(noppa1 == 1) {
        kierrosPisteet = 0;
        vaihdaVuoro();
        return;
    }
    kierrosPisteet += noppa1;
    document.querySelector("#naytaPisteet").innerHTML = "Pisteet tällä vuorolla: " + kierrosPisteet;
}

function heita2Noppaa() {
    noppa1 = Math.floor(Math.random() * (6) + 1);
    noppa2 = Math.floor(Math.random() * (6) + 1);
    document.querySelector("#noppa1Numero").innerHTML = noppa1;
    document.querySelector("#noppa2Numero").innerHTML = noppa2;
    if(noppa1 == 1 && noppa2 == 1) {
        kierrosPisteet += 25;
    } else if(noppa1 == noppa2) {
        kierrosPisteet += noppa1 * 4;
    } else if(noppa1 == 1 || noppa2 == 1) {
        kierrosPisteet = 0;
        vaihdaVuoro();
        return;
    } else {
        kierrosPisteet += noppa1 + noppa2;
    }
    document.querySelector("#naytaPisteet2").innerHTML = "Pisteet tällä vuorolla: " + kierrosPisteet;
}

function vaihdaVuoro() {
    if(vuorossa == 1) {
        pisteet1 += kierrosPisteet;
    }
    if(vuorossa == 2) {
        pisteet2 += kierrosPisteet;
    }
    if(vuorossa == 3) {
        pisteet3 += kierrosPisteet;
    }
    if(vuorossa == 4) {
        pisteet4 += kierrosPisteet;
    }

    document.querySelector("#p1piste").innerHTML = p1nimi + ": " + pisteet1;
    document.querySelector("#p2piste").innerHTML = p2nimi + ": " + pisteet2;
    if(pelaajaMaara >= 3) {
        document.querySelector("#p3piste").innerHTML = p3nimi + ": " + pisteet3;
    }
    if(pelaajaMaara == 4) {
        document.querySelector("#p4piste").innerHTML = p4nimi + ": " + pisteet4;
    }

    if(pisteet1 >=100) {
        alert(p1nimi + " voitti!");
        location.reload();
    }
    if(pisteet2 >=100) {
        alert(p2nimi + " voitti!");
        location.reload();
    }
    if(pisteet3 >=100) {
        alert(p3nimi + " voitti!");
        location.reload();
    }
    if(pisteet4 >=100) {
        alert(p4nimi + " voitti!");
        location.reload();
    }

    kierrosPisteet = 0;
    document.querySelector("#naytaPisteet").innerHTML = "Pisteet tällä vuorolla: " + kierrosPisteet;
    vuorossa++;
    if(vuorossa > pelaajaMaara) {
        vuorossa = 1;
    }

    if(vuorossa == 1) {
        document.querySelector("#vuoroDisplay").innerHTML = "Vuorossa " + p1nimi;
    } else if(vuorossa == 2) {
        document.querySelector("#vuoroDisplay").innerHTML = "Vuorossa " + p2nimi;
    } else if(vuorossa == 3) {
        document.querySelector("#vuoroDisplay").innerHTML = "Vuorossa " + p3nimi;
    } else if(vuorossa == 4) {
        document.querySelector("#vuoroDisplay").innerHTML = "Vuorossa " + p4nimi;
    }
}

document.querySelector("#nopat1Nappi").onclick = noppia1;
document.querySelector("#nopat2Nappi").onclick = noppia2;
document.querySelector("#aloitaPeli").onclick = pelaajatNimetty;
document.querySelector("#heitaNappi").onclick = heitaNoppaa;
document.querySelector("#heita2Nappi").onclick = heita2Noppaa;
document.querySelector("#lopetaNappi").onclick = vaihdaVuoro;
document.querySelector("#lopeta2Nappi").onclick = vaihdaVuoro;