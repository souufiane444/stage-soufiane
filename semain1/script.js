
console.log("Bonjour depuis JavaScript !");
const titre = document.getElementById("nom");
titre.textContent = "pizza modifiee par JavaScript";

let nombreDeClics = 0;
const bouton = document.getElementById("bouton");
const message = document.getElementById("message");

bouton.addEventListener("click", function() 
nombreDeClics = nombreDeClics + 1;
message.textContent = "Tu as clique " + nombreDeClics + "fois !";
);

