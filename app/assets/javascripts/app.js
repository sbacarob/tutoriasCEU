angular.module('tutoriasCEU', ['ui.router', 'ui.bootstrap', 'templates', 'Devise'])
    .config([
        '$stateProvider',
        '$urlRouterProvider',
        'AuthProvider',
        function($stateProvider, $urlRouterProvider, AuthProvider) {

            AuthProvider.loginPath('/students/sign_in.json');

            AuthProvider.logoutPath('/students/sign_out.json');

            AuthProvider.registerPath('/students.json');

            AuthProvider.resourceName('student');

            $stateProvider
                .state('home', {
                    url: '/home',
                    templateUrl: 'home/_home.html',
                    controller: 'MainCtrl'
                })
                .state('createTutorial', {
                    url: '/create_tutorial',
                    templateUrl: 'assigned_tutorials/_create_tutorial.html',
                    controller: 'AssignedTutorialsCtrl'
                })


            $urlRouterProvider.otherwise('home');


        }])