//connexion BD
import { conn } from './connexion.js';

//User argument
import { nom } from './user.js';
import { prenom } from './user.js';
import { mail } from './user.js';
import { mdp } from './user.js';

//classe user
import { user } from './user.js';

window.addEventListener("load", function () {
    
    
    // Accédez à l'élément form …
    var form = document.getElementById("myForm");

    // … et prenez en charge l'événement submit.
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        sendData();

        var arg1 = document.getElementsByName("nom");
        var arg2 = document.getElementsByName("prenom");
        var arg3 = document.getElementsByName("Email");
        var arg4 = document.getElementsByName("mdp");
        

        let p = new user(arg1,arg2,arg3,arg4);

        // Insert Datas to Users.
        var post = "Insert into Users ("+nom+","+prenom+","+ mail+","+mdp+")";

        conn.query(post, function(err, results) {
            if (err) throw err;
            console.log("Insert a record!");
        });
    });

    function Verification() {
        // Récupérer lavaleur des champs nom et email
        var Nom = document.getElementById('idNom').value;
        var Email = document.getElementById('idEmail').value;
        
        // Contrôle sur le nom
        if(Nom==''){
        alert('Vous devez compléter votre nom !');
        document.getElementById('idNom').style.backgroundColor="red";
        document.getElementById('idNom').style.color="#FFF";
        
        // Permet de bloquer l'envoi du formulaire
        return false;
        }
        else{
        document.getElementById('idNom').style.backgroundColor="#9C6";
        }
        // Contrôle sur l'email
        if(Email=='') {
            alert('Vous devez compléter votre adresse email');
            document.getElementById('idEmail').style.backgroundColor="red";
            document.getElementById('idEmail').style.color="#FFF";
            return false;
        }
        else{
            document.getElementById('idEmail').style.backgroundColor="#9C6";
        }
    }


 
    

});