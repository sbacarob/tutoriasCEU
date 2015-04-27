angular.module('tutoriasCEU')
    .controller('TutorialsCtrl', [
        '$scope',
        'tutorials',
        function($scope, tutorials){
            $scope.tutorials = tutorials;

        }])