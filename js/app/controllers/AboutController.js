function AboutController($scope, $window) {
  $scope.bodyImage = {background: "url(" + '../img/lines.jpg' + ") no-repeat fixed center center / cover "};

  $scope.showCircles = true;
  $scope.skillsToggle = false;
  $scope.bioToggle = false;
  $scope.miscToggle = false;

  $scope.skillsContent = function(e) {
    $scope.showCircles = false;
    $scope.skillsToggle = true;
    e.stopPropagation();
  };

  $scope.test = function() {
    if ($scope.skillsToggle === true || $scope.bioToggle === true || $scope.miscToggle === true) {
      $scope.skillsToggle = false;
      $scope.bioToggle = false;
      $scope.miscToggle = false;
      $scope.showCircles = true;
    }
  };


  $scope.exitSkills = function() {
    $scope.showCircles = true;
    $scope.skillsToggle = false;
  }

  $scope.bioContent = function (e) {
    $scope.showCircles = false;
    $scope.bioToggle = true;
    e.stopPropagation();
  }

  $scope.exitBio = function() {
    $scope.showCircles = true;
    $scope.bioToggle = false;
  }

  $scope.miscContent= function(e) {
    $scope.miscToggle = true;
    $scope.showCircles = false;
    e.stopPropagation();
  }

  $scope.miscExit = function() {
    $scope.showCircles = true;
    $scope.miscToggle = false;
  }


}

angular
  .module('app')
  .controller('AboutController', AboutController)
