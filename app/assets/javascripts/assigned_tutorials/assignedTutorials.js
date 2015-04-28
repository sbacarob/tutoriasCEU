angular.module('tutoriasCEU')
    .factory('assignedTutorials', [
        '$http',
        function($http){

            var o = {
                tutorials: []
            };

            o.getAll = function() {
                return $http.get('/assigned_tutorials.json').then(function(res){
                    return res.data
                })
            }

            o.create = function(tutorial) {
                return $http.post('/assigned_tutorials.json', tutorial).success(function(res) {
                    return res.data
                })
            }

            o.update = function(id) {
                return $http.get('/assigned_tutorials/' + id + '.json').then(function(res){
                    return res.data;
                });
            }

            o.destroy = function(id) {
                return $http.delete('/assigned_tutorials/' + id + '.json').then(function(res){
                    return res.data;
                });
            }

            return o;
        }])