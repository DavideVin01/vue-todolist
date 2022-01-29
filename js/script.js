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
// Bonus:
// 1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
// 2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)

Vue.config.devtools = true;

const root = new Vue({
    el: '#root',
    data: {
        isDone: true,
        newTask: '',
        tasks:[
            {text: 'Lavare i piatti', done: false},
            {text: 'Portare fuori il cane', done: false},
            {text: 'Studiare', done: false},
            {text: 'Stendere i panni', done: false},
            {text: 'Fare la spesa', done: false},
        ],
    },
    methods: {
        clearTask(index){
            this.tasks = this.tasks.filter((task, i) => {
                if (i === index) return false;
                else return true;
            });
        },
        toggleTask(index){
            if (this.tasks[index].done = !this.tasks[index].done){
                return true;
            }
        },
        addTask(){
            const newTask = this.newTask.trim();
            if (newTask){
                this.tasks.push({ text: newTask, done: false });
            }
            this.newTask = '';
        },
        removeAllTasks(){
            this.tasks = [];
        },
        modifiesAll(isDone){
            this.tasks = this.tasks.map((task) => {
                task.done = isDone;
                return task;
            });
        },
    },
});