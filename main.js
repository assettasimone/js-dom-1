/*// recupero l'interruttore e lo inserisco in un const
const button = document.getElementById("interruttore")

//controllo se è recuperato
console.log(button)

//osservo l'ogetto recuperato. appena viene cliccato faccio partire la funzione interruttore
button.addEventListener("click", interruttore)



//questo metodo funziona, ma non mi fa impazzire perchè devo inserire l'url esatto e non è un metodo universale
 function interruttore() {
    //recupero l'ogetto lampadina
    const lampadina = document.getElementById("lamp")

    //recupero l'immagine attuale della lampadina
    const statoLampadina = lampadina.src;

    if (statoLampadina.includes("white_lamp.png")) {
        lampadina.src = './img/yellow_lamp.png'


    } else {
         lampadina.src = './img/white_lamp.png'


    }


} */


//cambio approccio agendo su la visibilità del css

//recupero l'interruttore
const button = document.getElementById("interruttore")

//osservo l'ogetto recuperato. appena viene cliccato faccio partire la funzione interruttore
button.addEventListener("click", () => {

    const testoInterruttore = button.innerText

    document.getElementById("lamp-on").classList.toggle("d-none");
    document.getElementById("lamp-off").classList.toggle("d-none");

    if (testoInterruttore.includes("Accendi")) {
        button.innerText = "Spegni"
    } else {
        button.innerText = "Accendi"
    }

})