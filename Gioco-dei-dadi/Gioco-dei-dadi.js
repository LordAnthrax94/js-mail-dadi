 // gioco dei dadi
 let numerogioc = Math.ceil(Math.random()* 6)
 let numerocomputer = Math.ceil(Math.random()*6)
 let messaggio = 'HAI PERSO';
 console.log('Giocatore tira' + ' ' + numerogioc);
 console.log('Computer tira' + ' ' + numerocomputer);
   
   
 if(numerogioc === numerocomputer){
   messaggio = 'PAREGGIO';
     
 }else if(numerogioc > numerocomputer){
   messaggio = 'HAI VINTO';
 }

 console.log(messaggio);