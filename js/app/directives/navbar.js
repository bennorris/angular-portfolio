function PortfolioNavbar () {
  return {
    restrict: 'E',
    templateUrl: 'js/app/templates/navbar.html',
    // controller: 'NavbarController'
  }

}

angular
  .module('app')
  .directive('navigate', PortfolioNavbar)
