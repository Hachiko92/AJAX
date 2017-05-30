angular.module ("miApp", [])

.controller ("MainController", MainController);

function MainController (){
    this.sNombre = 'Pepe';
    this.sIdea = 'ciao';
    this.aIdeas = [];

    this.botonAdd = function () {
        this.aIdeas.push(this.sIdea); 
        this.sIdea = '';
    }
};// fin mainController
