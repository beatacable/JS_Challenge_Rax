var app = angular.module("searchTable",[]);


app.controller("MainTblCtrl", function($scope, $http) {
    $scope.sortType =       'id';
    $scope.sortReverse =    false;
    $scope.searchBody =     '';

    var obj = this;
    obj.testSuiteWorksVar = 'Works!';


    $http.get('http://jsonplaceholder.typicode.com/posts').
        then(function(data) {
            $scope.data_struct = data;
        console.log($scope.data_struct);
    }, function errCallBack(response) {

    });
});
