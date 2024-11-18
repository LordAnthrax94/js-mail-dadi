js-mail-dadi
===

- Chiedere con un prompt l'email dell'utente
- una volta inserita l'email cominciare il gioco
- Il gioco dei dadi darà impostato con due generatori di numeri random che sono compresi tra 1 e 6
- una volta impostati i generatori impostiamo un messaggio che indichi di base che il giocatore abbia perso
- Inseriamo una condizionale dove indichiamo che se il giocatore dovesse avere un numero maggiore del computer allora il messaggio è "Hai vinto"
- sempre nella condizionale impostiamo un messaggio anche in caso di pareggio
- come passaggio finale quindi inseriamo il messaggio che apparirà con la scritta appropriata in caso di vittoria, sconfitta, pareggio

- Per la convalida dell'e-mail ho inserito un array con delle e-mail già "convalidate"
- Ho inserito una variabile già settata su false, che servirà per il ciclo "while"
- Apertura del ciclo while con inserimento del prompt e di una condizionale che controlla se l'email inserita sia tra quelle convalidate
- Se l'email è tra quelle convalidate allora il gioco dei dadi sarà eseguito
- Se l'email non è tra quelle convalidate sarà richiesto a ciclo un email valida o il gioco non sarà eseguito e apparirà un messaggio appriopriato

