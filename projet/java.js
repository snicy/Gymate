function ajouterSeance() {
    let activity = document.getElementById('activity').value.toLowerCase();
    activity = activity.charAt(0).toUpperCase() + activity.slice(1);
    let date = document.getElementById('date').value;
    let time = document.getElementById('time').value;
    let location = document.getElementById('location').value.toLowerCase();
    location = location.charAt(0).toUpperCase() + location.slice(1);
    let Nombre = document.getElementById('Nombre').value.toLowerCase();
    Nombre = Nombre.charAt(0).toUpperCase() + Nombre.slice(1);


    let seancesDiv = document.getElementById('seances');
    let seanceDiv = document.createElement('div');
    seanceDiv.innerHTML = "<p>" + activity + " - " + date + " - " + time + " - " + location + " - " + Nombre + "</p>";
    seancesDiv.appendChild(seanceDiv);

 // Ajouter le bouton Accepter
    Button = document.createElement('button');
    Button.innerHTML = "Accepter";
    Button.addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('activity').value = '';
        document.getElementById('date').value = '';
        document.getElementById('time').value = '';
        document.getElementById('location').value = '';
        document.getElementById('Nombre').value = '';
        window.alert("Parfait");
    });
    seanceDiv.appendChild(Button);
}



let form = document.getElementById('Planifier');
form.addEventListener('click', function(event) {
    event.preventDefault();
    ajouterSeance();
})
