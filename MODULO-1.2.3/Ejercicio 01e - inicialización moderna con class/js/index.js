

class MainController {
    $onInit () {
        this.sNombre = 'Pepe';
        this.sIdea = 'ciao';
        this.aIdeas = [];
    }

    botonAdd = function () {
        this.aIdeas.push(this.sIdea); 
        this.sIdea = '';
    }
}

angular.module ("miApp", [])
.controller("MainController", MainController);