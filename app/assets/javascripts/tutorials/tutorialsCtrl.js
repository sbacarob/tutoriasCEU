angular.module('tutoriasCEU')
    .controller('TutorialsCtrl', [
        '$scope',
        'tutorials',
        'uiCalendarConfig',
        'tutorialsPromise',
        function($scope, tutorials, uiCalendarConfig, tutorialsPromise){

            $scope.tutorials = tutorialsPromise;
            $scope.eventSources = [[]];

            $scope.init = function() {
                $scope.eventSources[0] = getEventsFromTutorials();
            }

            $scope.init();

            function getEventsFromTutorials() {

                var resp = [];

                for (var tutorial in $scope.tutorials) {

                    resp.push({
                        id: tutorial,
                        title: $scope.tutorials[tutorial].course,
                        start: $scope.tutorials[tutorial].start_date,
                        end: $scope.tutorials[tutorial].end_date
                    });
                }

                return resp;

            }

            $scope.alertOnEventClick = function( event, jsEvent, view){
                $scope.selectedTutorial = $scope.tutorials[event.id];
                $scope.selectedTutorialStartDate = new Date($scope.selectedTutorial.start_date);
                $scope.selectedTutorialEndDate = new Date($scope.selectedTutorial.end_date);
            };

            $scope.uiConfig = {
                calendar:{
                    lang: 'es',
                    height: 450,
                    editable: true,
                    header:{
                        left: 'title',
                        center: '',
                        right: 'today prev,next'
                    },
                    eventClick: $scope.alertOnEventClick
                }
            };


        }])