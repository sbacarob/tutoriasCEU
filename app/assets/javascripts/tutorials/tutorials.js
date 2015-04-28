angular.module('tutoriasCEU')
    .factory('tutorials', [
        '$http',
        function($http){

            var o = {
                tutorials: []
            };

            o.getAll = function() {
                return $http.get('/tutorials.json').then(function(res){
                    return res.data
                })
            }

            o.get = function(id) {
                return $http.get('/tutorials/' + id + '.json').then(function(res){
                    return res.data;
                });
            }

            o.addStudent = function(id) {
                return $http.post('tutorials/'+id+'/add_student.json').then(function(res){
                    return res.data;
                });
            }

            o.searchByCourse = function(courseName) {
                return $http.get('tutorials/search_by_course/'+courseName+'.json').then(function(res){
                    return res.data
                })
            }

            return o;
        }])