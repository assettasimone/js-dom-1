// recupero l'interruttore e lo inserisco in un const
const button = document.getElementById("interruttore")

//controllo se è recuperato
console.log(button)

//osservo l'ogetto recuperato. appena viene cliccato faccio partire la funzione interruttore
button.addEventListener("click", interruttore)


function interruttore() {
    //recupero l'ogetto lampadina
    const lampadina = document.getElementById("lamp")

    //recupero l'immagine attuale della lampadina
    const statoLampadina = lampadina.src;

    if (statoLampadina.includes("white_lamp.png")) {
        console.log('white lamp');

    } else {
        console.log('yellow lamp');
    }


}