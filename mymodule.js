var AddApp = angular.module('AddApp',[])
AddApp.controller('AddController',function($scope){
    $scope.x=1;
    $scope.y=1;
    $scope.z=$scope.x+ $scope.y;

});

var SubApp = angular.module('SubApp',[])
SubApp.controller('SubController',function($scope){
    $scope.x= 7;
    $scope.y= 3;
    $scope.z = $scope.x - $scope.y;

});
