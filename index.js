var nombreDeBilles = 10;
var nombreJoueur = 0;
var couleurBille = "rouge";
var nombreDeBilleParPersonne = 1;
var nomDuJeu = "rond";
var nombreDeBilleAmiSer = 0;
var nombreDeBilleGagneParJoueur = 0;
var nombreDeBilleGagneParUnJoueur = 0;
//let formedesbilles:any=null;
var formeDesBilles = ["rond", "carré", "triangle"];
function ecrireMessage(message) {
    console.log(message);
}
function afficherNommbredebillequejai(nombre) {
    ecrireMessage("Nombre de billes que j'ai : " + nombre);
}
function afficherlenombredebillequejai2() {
    ecrireMessage("le nombre est:" + nombreDeBilles);
}
function afficherNommbredebillequejaiautrement() {
    ecrireMessage("Nombre de billes que j'ai : " + nombreDeBilles);
}
/**
 * Affiche la liste des formes des billes.
 *
 * @example
 * afficheFormedesbilles();
 */
function afficheFormedesbilles() {
    ecrireMessage("Forme des billes :");
    var premeierforme = formeDesBilles[0];
    var deuxiemeforme = formeDesBilles[1];
    var troisiemeforme = formeDesBilles[2];
    ecrireMessage("1. " + premeierforme);
    ecrireMessage("2. " + deuxiemeforme);
    ecrireMessage("3. " + troisiemeforme);
}
function nombreDeformesdebilles() {
    return formeDesBilles.length;
}
function afficheNombreDeformesdebilles() {
    var nombredeformesdebilles = nombreDeformesdebilles();
    ecrireMessage("Nombre de formes de billes : " + nombredeformesdebilles);
}
console.log("JEUX DE BILLES");
ecrireMessage("Bienvenue dans le jeux de billes");
ecrireMessage("Le but du jeux est de gagner le plus de billes possible");
ecrireMessage("Le joueur qui gagne le plus de billes gagne la partie");
ecrireMessage("Le joueur qui perd le plus de billes perd la partie");
ecrireMessage("Le joueur qui a le plus de billes à la fin de la partie gagne la partie");
afficheFormedesbilles();
afficherNommbredebillequejai(5);
afficherlenombredebillequejai2();
afficherNommbredebillequejaiautrement();
nombreDeformesdebilles();
afficheNombreDeformesdebilles();
