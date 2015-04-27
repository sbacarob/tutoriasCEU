angular.module('tutoriasCEU')
    .controller('AssignedTutorialsCtrl', [
        '$scope',
        'assignedTutorials',
        function($scope, assignedTutorials){
            $scope.assignedTutorials = assignedTutorials;



        }])