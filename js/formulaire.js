window.addEventListener("load", function () {
    
    
        


    // Accédez à l'élément form …
    var form = document.getElementById("myForm");

    // … et prenez en charge l'événement submit.
    form.addEventListener("submit", function (event) {
    event.preventDefault();

    sendData();

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