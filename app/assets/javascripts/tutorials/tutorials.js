angular.module('tutoriasCEU')
    .factory('tutorials', [
        '$http',
        function($http){

            var o = {
                tutorials: []
            };

            o.getAll = function() {
                return $http.get('/assigned_tutorials.json').success(function(data){
                    angular.copy(data, o.tutorials)
                })
            }

            o.get = function(id) {
                return $http.get('/tutorials/' + id + '.json').then(function(res){
                    return res.data;
                });
            }

            o.add_student = function(id) {
                return $http.post('tutorials/'+id+'/add_student.json').then(function(res){
                    return res.data;
                });
            }

            o.search_by_course = function(courseName) {
                return $http.get('tutorials/search_by_course/'+courseName).then(function(data){
                    angular.copy(data, o.tutorials)
                })
            }

            return o;
        }])