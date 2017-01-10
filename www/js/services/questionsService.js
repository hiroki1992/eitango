angular.module('starter')

    .service('questionsService', function ($http, $q) {
        this.get_questions = function (level_id) {
             
            var d = $q.defer();
            // console.log(category_id);
            url = 'http://dev.krsg.tech/eitango/word/get?level_id=' + level_id;
            // console.log(param);
            $http.get(url).then(function (res) {
                d.resolve(res.data);
            })
            return d.promise;
        }


        this.get_category = function () {
            var d = $q.defer();
            url = 'http://dev.krsg.tech/eitango/word/get_category';
            $http.get(url).then(function (res) {
                d.resolve(res.data);
            })
            return d.promise;
        }
    })    