(function()
{
'use strict';
     angular.module('CounterApp', [])
     .controller('CounterController',CounterController);

      CounterController.$inject = ['$scope'];

      function CounterController($scope)
      {
        $scope.onceCounter =0;
        $scope.counter=0;
        $scope.name="Rohan";
        $scope.showNumberOfWatchers=function()
        {
          console.log("#no of Watchers :", $scope.$$watchersCount);
        };
        $scope.countOnce=function()
        {
          $scope.onceCounter=1;
        };
        $scope.upCounter=function()
        {
          $scope.counter++;
        }
        $scope.$watch(function()
        {
        console.log("Digest Loop Fired!");
        })
        // $scope.$watch('onceCounter',function(newValue,oldValue){
        //   console.log("old value :",oldValue);
        //   console.log("new value :",newValue);
        // });
        // $scope.$watch('counter',function(newValue,oldValue){
        //   console.log("Counter old value :",oldValue);
        //   console.log("Counter new value :",newValue);
        // });
      }
})();
