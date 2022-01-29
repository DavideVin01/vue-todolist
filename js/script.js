// console.log('Vue Ready', Vue);
Descrizione:
// Rifare l'esercizio della to do list.
// Ogni todo sarà un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del todo
// - done, un booleano (true/false) che indica se il todo è stato fatto oppure no
// MILESTONE 1
// Stampare all'interno di una lista, un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.


Vue.config.devtools = true;

const root = new Vue({
    el: '#root',
    data: {
        tasks:[
            {text: 'Lavare i piatti', done: true},
            {text: 'Portare fuori il cane', done: false},
            {text: 'Studiare', done: false},
            {text: 'Stendere i panni', done: true},
            {text: 'Fare la spesa', done: false},
        ],
    },
    methods: {
        clearTask(index){
            this.tasks = this.tasks.filter((task, i) => {
                if (i === index) return false;
                else return true;
            });
        }
    },
});