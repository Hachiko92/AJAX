angular.module ("miApp", [])

.controller ("MainController", MainController);

function MainController (){
    this.nNumero = 10;
    this.nTotal = 0;

    this.botonAdd = function () {
        this.nTotal += +this.nNumero;
    }

    this.botonRemove = function () {
        this.nTotal -= this.nNumero;
    }
};