var mf = angular.module('ajs', ['ngRoute', 'ngAnimate']);

     mf.config(['$routeProvider', function($routeProvider){

          $routeProvider
          .when('/home' , {
            templateUrl: 'app/views/home.html',
            controller: 'ourController'

          })
          .when('/contact' , {
            templateUrl: 'app/views/contact.html',
            controller: 'cController'

          })
          .when('/contact-success' , {
            templateUrl: 'app/views/contact-success.html',
            controller: 'cController'

          })
          .when('/directory', {
            templateUrl: 'app/views/directory.html',
            controller: 'ourController'

          }).otherwise({
            redirectTo: '/home'
          });
        }]);

mf.directive('randomFauji',[function(){

  return {
       restrict: 'E',
       scope: {
         fauji: '=',
         title: '='
       },
       templateUrl: 'app/views/random.html',
       transclude: true,
       replace: true,
       controller: function($scope){
         $scope.random = Math.floor(Math.random() * 8)
       }
  };

}]);

mf.controller('ourController' , ['$scope' , function($scope){

$scope.removeFauji = function(fauji){
 var toRemoveFauji = $scope.fauj.indexOf(fauji);
 $scope.fauj.splice(toRemoveFauji, 1);
};

$scope.addFauji = function(){
  $scope.fauj.push({
    name: $scope.newfauji.name,
    belt: $scope.newfauji.belt
  });
        $scope.newfauji.name = "";
        $scope.newfauji.belt = "";
};

    $scope.removeAll = function(){

      $scope.fauj = [];
    };
 $scope.fauj = [

            {
              name: "Ayush",
              belt: "The Playboy"
            },
            {
              name:"Ujjwal",
              belt: "The Hindu"
            },
            {
              name:"Ankit",
              belt:"The One Liner Prince"
            },
            {
              name:"Akanshu",
              belt:"The Dev"
            },

            {
              name:"Yukta",
              belt:"The Doctor"
            },

            {
              name:"Vaishali",
              belt:"The Confused"
            },

            {
              name:"Vishal",
              belt:"The Lit Boy"
            },

            {
              name:"Akshat",
              belt:"The Savage Boy"
            }

          ];

          console.log(angular.toJson($scope.fauj));
}]);


mf.controller('cController' , ['$scope' , '$location' , function($scope , $location){

  $scope.sendMessage = function(){
    $location.path('/contact-success');
  };
}]);
