angular.module("miApp")
.controller ("MainController", ["$scope", function ($scope){
    $scope.sNombre = 'Pepe';
    $scope.sIdea = 'ciao';
    $scope.aIdeas = [];

    $scope.botonAdd = function () {
        $scope.aIdeas.push($scope.sIdea); 
        $scope.sIdea = '';
    }
}]);// fin mainController