document.addEventListener('DOMContentLoaded', init)
function init() {
    initVue();
}
function initVue() {


    new Vue({
        el: '#app',
        data: {
            contacts: [{
                name: 'Michele',
                avatar: '_1',
                image:"data:image/jpeg;base64,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",
                visible: true,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    text: 'Hai portato a spasso il cane?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    text: 'Ricordati di dargli da mangiare',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:35:00',
                    text: 'Tutto fatto!',
                    status: 'received'
                }]

            },
            {
                name: 'Fabio',
                avatar: '_2',
                image:"data:image/jpeg;base64,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",
                visible: true,
                messages: [{
                    date: '20/03/2020 16:30:00',
                    text: 'Ciao come stai?',
                    status: 'sent'
                },
                {
                    date: '20/03/2020 16:30:55',
                    text: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                },
                {
                    date: '20/03/2020 16:35:00',
                    text: 'Mi piacerebbe ma devo andare a fare la spesa',
                    status: 'sent'
                }]

            },
            {
                name: 'Samuele',
                avatar: '_3',
                image:"data:image/jpeg;base64,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",
                visible: true,
                messages: [{
                    date: '28/03/2020 10:10:40',
                    text: 'La Marianna va in campagna?',
                    status: 'received'
                },
                {
                    date: '28/03/2020 10:20:10',
                    text: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                },
                {
                    date: '28/03/2020 16:15:22',
                    text: 'Ah scusa!',
                    status: 'received'
                }]
                
            },
            {
                name: 'Luisa',
                avatar: '_4',
                image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgUNaoFwOOa3sOnMoc8CVUJ65bhS822etxVQ&usqp=CAU",
                visible: true,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    text: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    text: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                }]

            }

            ],
            activeIndex: '0',
            messageStatus: '',
            message: '',
            newMessage: {
                date: '10/01/2020 15:50:00',
                text: '',
                status: ''
            },
            search: '',
            myDate: new Date(),
            filteredList: []
        },
        methods: {
            displayContact: function(index){
                this.activeIndex = index;

            },
            createMessage: function(){
                if(this.message.length > 0)
                this.newMessage.date = Date().toString().substring(6,21);
                this.newMessage.status = 'sent';
                this.newMessage.text = this.message;
                this.contacts[this.activeIndex].messages.push(this.newMessage);
                this.message = '';
                this.newMessage = {
                    date: '10/01/2020 15:50:00',
                    text: '',
                    status: ''
                }
                setTimeout(() => this.replyOk(),1000);
                

                },
                replyOk: function(){
                    this.newMessage.date = Date().toString().substring(6,21);
                    this.newMessage.status = 'received';
                    this.newMessage.text = 'ok';
                    this.contacts[this.activeIndex].messages.push(this.newMessage);
                    this.newMessage = {
                        date: '10/01/2020 15:50:00',
                        text: '',
                        status: ''
                        
                    }
            },
            searchContact: function(){
                return this.contacts.filter(person => {
                    return person.name.toLowerCase().includes(this.search.toLowerCase())
                })
                
                

        }
    }

            
    });
}
// milestone 1
// replica della grafica con la possibilità di avere messaggi scritti
// dall'utente (verdi) e dall'interlocutore (bianco) assegnando due classi css diverse
// visualizzazione dinamica della lista contatti: tramite v-for, visualizzazione nome e immagine contatto
// milestone 2
// visualizzazione dinamica messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al
//  contatto attivo all'interno del pannello della conversazione
// click sul contatto mostra la conversazione del contatto cliccato
// milestone 3
// aggiunta di un messaggio: l'utente scrive un testo nella parte bassa e digitando "enter" il testo viene aggiunto
// al thread di sopra, come messaggio verde;
// Risposta dell'interlocutore: ad ogni inserimento di un messaggio, l'utente riceverà un "ok" come risposta,
//  che apparirà dopo 1 secondo.
// milestone 4
// ricerca utenti: scrivendo qualcosa nell'input a sinistra, vengono visualizzati solo i contatti il cui nome contiene
// le lettere inserite(es. Marco,Matteo,Martina -> Scrivo "mar" rimangono solo Marco e Martina)
// Milestone 5 opzionale
// Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato;
// visualizzare ora e ultimo messaggio inviato/ricevuto nella lista dei contatti
// consigli utili:
// -si possono trascurare le scrollbar verticali, sia nei pannelli dei messaggi, che nella lista dei contatti
// -I pulsanti e le icone possono non funzionare(a parte l'invio del messaggio);
// -per gestire le date può essere utile la libreria day.js;
// -La stuttura dell'array dei contatti;
