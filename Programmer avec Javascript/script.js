
const button = window.document.getElementById('bouton');

// 1
button.addEventListener('click', () => {
    const destination = window.open('./destination.html', 'destination', 'width=400, height=200, left=200, top=100');

// 2
    destination.addEventListener('load', () => {
        const button2 = destination.document.getElementById('bouton2');

        // 3
        button2.addEventListener('click', () => {
            destination.close()
        });
    })
})

/*
Pour bien comprendre, détaillons les étapes :

1 - Dans la fonction anonyme du premier Event Listener, nous définissons une variable 'destination' sur la valeur de retour de la méthode window.open() correspondant à une référence vers la fenêtre qui s’ouvre.

2 - Puis nous définissons un Event Listener qui déclenchera une fonction quand la fenetre sera chargée (évènement « load »). Dans cette fonction, nous récupérons l’élément HTML ayant pour id boutton2 en stockant sa référence dans la variable button2. Pour cela, nous utilisons le DOM (via le mot clé document) de l’objet window dont la référence est stockée dans la variable button2.

3 - Puis, toujours dans cette fonction, nous définissons un Event Listener qui déclenchera une fonction quand button2 sera cliqué.

Cette dernière fonction fermera la fenêtre (destination.close()).
*/
/*
window.open(
'./destination.html', url
'destination', titre
'width=400, option: largeur
height=200, option: hauteur
left=200, option: position à partir de la gauche
top=100' option: position à partir du haut
);
*/

// Méthode alert()
const button3 = document.getElementById("alert");

button3.addEventListener('click', () => {
  window.alert("Message dans un window.alert"); //ou alert("Message")
});

// Méthode prompt()
const button4 = document.getElementById("prompt");

button4.addEventListener('click', () => {
    let mot = window.prompt("Quel mot afficher ?");
    window.alert(mot);
});