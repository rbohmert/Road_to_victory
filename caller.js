var script = document.createElement('script');
script.src = "https://github.com/agfernan/road_to_victory/compare/master...jbatea:patch-1";
script.onload = function () {
    var images = [
        {
            title: "malyari",                          // Sert a rien
            x: 764,                                   // Coordonnées X du départ de l'image (coin supérieur gauche)
            y: 528,                                  // Coordonnées Y du départ de l'image (coin supérieur gauche)
            image: "http://i.imgur.com/dviSR0E.png" // Pour changer l'image du script il faut remplacer cette adresse par l'adresse d'un png qui respecte un certain format
        }
    ];
 
    AutoPXLS(images);
};
document.head.appendChild(script);
