angular.module('tutoriasCEU')
    .controller('AssignedTutorialsCtrl', [
        '$scope',
        'assignedTutorials',
        function($scope, assignedTutorials){
            $scope.assignedTutorials = assignedTutorials;



            $scope.create = function() {
                assignedTutorials.create($scope.newTutorial);
                //$scope.newTutorial.title = {};
            }

        }])