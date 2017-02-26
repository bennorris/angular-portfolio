function HomeController($scope, $location) {
  $scope.projectClick = function() {
    $location.url('/projects')
  }

  $scope.contactClick = function() {
    window.location = 'https://docs.google.com/forms/d/e/1FAIpQLSeRCZQwuyClDOvv9QOMn2_UfQUWKibC7dpG8F5BIC88od0qWw/viewform';
  }

  $scope.bodyImage = {background: "url(" + '../img/main.jpg' + ") no-repeat fixed center center / cover "};
}

angular
  .module('app')
  .controller('HomeController', HomeController)
