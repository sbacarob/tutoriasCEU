angular.module('tutoriasCEU')
    .controller('AuthCtrl', [
        '$scope',
        '$state',
        'Auth',
        '$modalInstance',
        function($scope, $state, Auth, $modalInstance){

            $scope.login = function() {
                Auth.login($scope.student).then(function(){
                    $modalInstance.close();
                    $state.go('home');
                });
            };

            $scope.register = function() {
                Auth.register($scope.student).then(function(){
                    $modalInstance.close();
                    $state.go('home');
                });
            };


            $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
            };

        }])