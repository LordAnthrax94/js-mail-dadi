//Inserimento dell'email dall'utente
//Comparare l'email inserita dall'utente con quelle già nell'array
//Se l-email è valida allora si potrà accedere al gioco
//Se l-email non è valida allora il promp continuerà a chiedere la convalida dell'e-mail



const mailconvalidate = [
  'andrea@gmail.com',
  'franco@gmail.com',
  'lucio@gmail.com',
  'marco@gmail.com'
]

let permesso = false;

while(!permesso){
let inseriremail = prompt('Inserire e-mail').toLowerCase()
let messaggio = 'Mail non valida'

  for(let i = 0; i < mailconvalidate.length; i++ ){
    if(mailconvalidate[i] === inseriremail){
      permesso = true;
      messaggio = 'Mail Valida'
    }    

  }
    console.log(messaggio);
}










  