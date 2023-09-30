// Ottieni riferimenti agli elementi HTML che ci servono
const conteggioElement = document.getElementById('conteggio');
const cliccaButton = document.getElementById('clicca');
const azzeraButton = document.getElementById('azzera');
const ultimoClicElement = document.getElementById('ultimoClic');
const clicTotaliElement = document.getElementById('clicTotali');
const clicAlSecondoElement = document.getElementById('clicAlSecondo');

// Variabili per il conteggio
let conteggio = 0;
let ultimoClic = null;
let clicTotali = 0;
let clicAlSecondo = 0;

// Funzione per aggiornare il conteggio nella pagina
function aggiornaConteggio() {
    conteggioElement.textContent = conteggio;
}

// Funzione per aggiornare le statistiche
function aggiornaStatistiche() {
    ultimoClicElement.textContent = ultimoClic ? ultimoClic.toLocaleTimeString() : 'N/A';
    clicTotaliElement.textContent = clicTotali;
    clicAlSecondoElement.textContent = clicAlSecondo;
}

// Aggiungi un gestore di eventi al pulsante "Clicca"
cliccaButton.addEventListener('click', () => {
    // Incrementa il conteggio
    conteggio++;
    clicTotali++;

    // Registra l'orario dell'ultimo clic
    ultimoClic = new Date();

    // Aggiorna il conteggio nella pagina
    aggiornaConteggio();

    // Aggiorna le statistiche
    aggiornaStatistiche();
});

// Aggiungi un gestore di eventi al pulsante "Azzera"
azzeraButton.addEventListener('click', () => {
    // Reimposta il conteggio a zero
    conteggio = 0;

    // Reimposta le statistiche
    ultimoClic = null;
    clicTotali = 0;
    clicAlSecondo = 0;

    // Aggiorna il conteggio e le statistiche nella pagina
    aggiornaConteggio();
    aggiornaStatistiche();
});

// Aggiorna il conteggio al secondo
setInterval(() => {
    clicAlSecondo = clicTotali;
    aggiornaStatistiche();
}, 1000);

