const  nombreDeBilles:number =10;
let nombreJoueur:number = 0;
let couleurBille:string = "rouge";
let nombreDeBilleParPersonne:number = 1;
let nomDuJeu:string = "rond";
let nombreDeBilleAmiSer:number = 0;
let nombreDeBilleGagneParJoueur:number = 0;
let nombreDeBilleGagneParUnJoueur:number = 0;
//let formedesbilles:any=null;
let formeDesBilles:string[] = ["rond", "carré", "triangle"];
function ecrireMessage(message: string): void {
    console.log(message);
}


function afficherNommbredebillequejai(nombre: number): void {
ecrireMessage("Nombre de billes que j'ai : " + nombre);
}

function afficherlenombredebillequejai2():void{
ecrireMessage("le nombre est:" + nombreDeBilles);
}

function afficherNommbredebillequejaiautrement(): void {
ecrireMessage("Nombre de billes que j'ai : " + nombreDeBilles);
}
/**
 * Affiche la liste des formes des billes.
 * 
 * @example
 * afficheFormedesbilles();
 */
function afficheFormedesbilles(): void {
    ecrireMessage("Forme des billes :");
    const premeierforme = formeDesBilles[0];
const deuxiemeforme = formeDesBilles[1];
    const troisiemeforme = formeDesBilles[2];
    ecrireMessage("1. " + premeierforme);
    ecrireMessage("2. " + deuxiemeforme);
    ecrireMessage("3. " + troisiemeforme);
}

function nombreDeformesdebilles(): number {
    return formeDesBilles.length;
}

function afficheNombreDeformesdebilles(): void {
    const nombredeformesdebilles = nombreDeformesdebilles();
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