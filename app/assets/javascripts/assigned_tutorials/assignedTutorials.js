angular.module('tutoriasCEU')
    .factory('assignedTutorials', [
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

            o.create = function() {
                return $http.post('/assigned_tutorials.json').success(function(data) {

                })
            }

            o.update = function(id) {
                return $http.get('/assigned_tutorials/' + id + '.json').then(function(res){
                    o.getAll()
                    return res.data;
                });
            }

            o.destroy = function(id) {
                return $http.delete('/assigned_tutorials/' + id + '.json').then(function(res){
                    o.getAll()
                    return res.data;
                });
            }

            return o;
        }])