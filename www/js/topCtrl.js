angular.module('starter')

    .controller('topCtrl', function ($scope, $location, questionsService, $rootScope) {

        $scope.gameStart = function (level_id) {
            if (level_id == null) {
                alert("レベルを選択してください。");
                return false;
            }


            $rootScope.level_id = level_id.level_id;
            $rootScope.level_name = level_id.level_name;
            $rootScope.sub_str = level_id.sub_str;
            $location.path("/game");
        }

        var p = questionsService.get_category();
        p.then(function (categories) {
            $scope.categories = categories;

        });


    })

