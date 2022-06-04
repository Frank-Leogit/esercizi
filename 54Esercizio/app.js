// Esercizi Object
$(document).ready(init);
function init(){
    // richiedere all'utente base e altezza di un triangolo rettangolo
    // valorizzare un oggetto con le dimensioni del triangolo
    // loggare triangolo e relativa area;
    
    
    
    // triangolo();
    


    studente();
}

function triangolo(){
    var triangolo = {
        'base': 1,
        'altezza':1,
    }
    triangolo.base = parseInt(prompt('Dimmi la base'));
    triangolo.altezza = parseInt(prompt("Dimmi l'altezza"));
    var area = triangolo.base * triangolo.altezza / 2;
    console.log(triangolo, area);
}
function studente(){
    var student = { 'nome': 'Gianfranco', 'cognome': 'Leotta', 'età':'18'}
    for(var key in student){
        console.log(key,student[key]);
    }
    var nomi = ['Andrea', 'Riccardo', 'Marta', 'Roberto', 'Andrea'];
    var cognomi = ['Fazio', 'Testa', 'Ferlita', 'Palazzolo', 'Sciacca'];
    var età = [28, 27, 24, 29, 22];
    var studentSchool = [];
    for(var i=0; i<nomi.length; i++){
        studentSchool[i]=student;
        studentSchool[i].nome = nomi[i];
        studentSchool[i]['cognome'] = cognomi[i];
        studentSchool[i]['età'] = età[i];

    }
    console.log(studentSchool);
}