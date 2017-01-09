angular.module('starter')

    .controller('topCtrl', function ($scope, $location, questionsService, $rootScope) {

        $scope.gameStart = function (category_id) {
            if (category_id == null) {
                alert("カテゴリーを選択してください。");
                return false;
            }


            $rootScope.category_id = category_id.category_id;
             $rootScope.category_name = category_id.category_name;
            
            $location.path("/game");
        }

        var p = questionsService.get_category();
        p.then(function (categories) {
            $scope.categories = categories;

        });


    })

