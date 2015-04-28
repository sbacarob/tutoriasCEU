angular.module('tutoriasCEU', ['ui.router', 'ui.bootstrap', 'templates', 'Devise', 'ui.calendar'])
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
                .state('tutorials', {
                    url: '/tutorials',
                    templateUrl: 'tutorials/_tutorials.html',
                    controller: 'TutorialsCtrl',
                    resolve: {
                        tutorialsPromise: ['tutorials', function(tutorials) {
                            return tutorials.getAll();
                        }]
                    }
                })
                .state('search_tutorials', {
                    url: '/search_tutorials/{course}',
                    templateUrl: 'tutorials/_tutorials.html',
                    controller: 'TutorialsCtrl',
                    resolve: {
                        tutorialsPromise: [ '$stateParams', 'tutorials', function($stateParams, tutorials) {
                            return tutorials.searchByCourse($stateParams.course);
                        }]
                    }
                })
                .state('assigned_tutorials', {
                    url: '/assigned_tutorials',
                    templateUrl: 'tutorials/_tutorials.html',
                    controller: 'TutorialsCtrl',
                    resolve: {
                        tutorialsPromise: ['assignedTutorials', function(assignedTutorials) {
                            return assignedTutorials.getAll();
                        }]
                    }
                })


            $urlRouterProvider.otherwise('home');


        }])