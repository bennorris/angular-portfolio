angular
    .module('app', ['ui.router'])
    .config(function ($stateProvider) {
        $stateProvider
            .state('home', {
                url: '',
                templateUrl: 'js/app/templates/home.html',
                controller: 'HomeController'
            })
            .state('projects', {
                url: '/projects',
                templateUrl: 'js/app/templates/projects.html',
                controller: 'ProjectsController',
                css: 'css/projects.css'
            })
            .state('about', {
              url: '/about',
              templateUrl: 'js/app/templates/about.html',
              controller: 'AboutController'
            })
          
    });
