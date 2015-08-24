/**
 * Created by joe on 7/14/15.
 */
var app = angular.module("a", []);
app.controller("poll", function($scope) {
    $scope.question =null;
    $scope.message = "save";
    $scope.save  = function() {
    };
    $scope.makePoll = function(){

    };



});
app.config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('{[{');
    $interpolateProvider.endSymbol('}]}');
});