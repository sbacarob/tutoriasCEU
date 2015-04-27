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
                .state('create_tutorials', {
                    url: '/create_tutorial',
                    templateUrl: 'tutorials/_create_tutorial.html',
                    controller: 'TutorialCtrl',
                    resolve: {
                        postPromise: ['posts', function(posts){
                            return posts.getAll();
                        }]
                    }
                })
                .state('posts', {
                    url: '/posts/{id}',
                    templateUrl: 'posts/_posts.html',
                    controller: 'PostsCtrl',
                    resolve: {
                        post: ['$stateParams', 'posts', function($stateParams, posts) {
                            return posts.get($stateParams.id);
                        }]
                    }
                })
                .state('login', {
                    url: '/login',
                    templateUrl: 'auth/_login.html',
                    controller: 'AuthCtrl',
                    onEnter: ['$state', 'Auth', function($state, Auth) {
                        Auth.currentUser().then(function (){
                            $state.go('home');
                        })
                    }]
                })
                .state('register', {
                    url: '/register',
                    templateUrl: 'auth/_register.html',
                    controller: 'AuthCtrl',
                    onEnter: ['$state', 'Auth', function($state, Auth) {
                        Auth.currentUser().then(function (){
                            $state.go('home');
                        })
                    }]
                });

            $urlRouterProvider.otherwise('home');


        }])