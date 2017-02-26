function NavbarController($scope, $window) {

  $scope.menuOpen = false;

  $scope.openMenu = function(e) {
      $scope.menuOpen = !$scope.menuOpen;
      e.stopPropagation();
    };

  window.onclick = function() {
		if ($scope.menuOpen) {
			$scope.menuOpen = false;
			$scope.$apply();
		}
	};

  }



angular
  .module('app')
  .controller('NavbarController', NavbarController)
