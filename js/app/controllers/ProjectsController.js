function ProjectsController($scope) {
  $scope.slides = [
           {image: 'img/gubinal-lee.png', description: 'Gubbinal', github: 'https://github.com/bennorris/gubbinal-angular-project',
           video: 'https://www.youtube.com/watch?v=VgBabWor6VE', overview: 'Discover musicians\' top three records and directors\'s top three films, then add them to a list to keep track of the ones you want to check out later.',
            front: 'AngularJS, CSS & HTML', back: 'Ruby on Rails', apis: 'Last.fm API, The Movie Database API, Facebook (Login)'},
           {image: 'img/arthouse-films.png', description: 'NYC Films', github: 'https://github.com/bennorris/new_york_films',
           rubygem: 'https://rubygems.org/gems/new_york_films', overview: 'A CLI app to quickly check the day\'s independent and art-house film screenings across NYC.',
           back: 'Ruby, Nokogiri'
         },
           {image: 'img/random-quote-api.png', description: 'Random Quote Generator', codepen: 'http://codepen.io/bennorris07/pen/RRNJVz', overview: 'Random quotes, delivered with a click.',
         front: 'jQuery, Bootstrap, CSS & HTML', apis: 'Twitter, Forismatic'},
           {image: 'img/storyline-cover.png', description: 'Storyline', github: 'https://github.com/bennorris/storyline', video: 'https://www.youtube.com/watch?v=grmxSq4VLlw&t=1s',
         overview: 'A communal storytelling app. A user starts a story with a sentence, then other users add sentences until it snowballs into an Infinite Jest-length novel (ideally).',
         front: 'jQuery, HTML / ERB, CSS', back: 'Rails, Devise, OAuth, ActiveModel::Serializer', apis: 'Facebook (Login)'
       },
           {image: 'img/tool-tracker.png', description: 'Tool Tracker', github: 'https://github.com/bennorris/tool-tracker', video: 'https://www.youtube.com/watch?v=A2Bva7B1cQo',
         overview: 'A tool for companies to track the equipment they\'ve loaned, and for employees to keep track of the equipment they\'ve borrowed.',
         front: 'HTML / ERB, CSS', back: 'Ruby, Sinatra, bcrypt'
       },
           {image: 'img/world-clock.png', description: 'World Clock', github: 'https://github.com/bennorris/world-clock', website: 'http://www.bennorris.co/world-clock/'},
           {image: 'img/grocery-time.png', description: 'Grocery Time', codepen: 'http://codepen.io/bennorris07/pen/BzNRyg', website: 'http://www.bennorris.co/grocery-time/'}
       ];
  $scope.toggleInfo = false;
  $scope.currentIndex = 0;

  $scope.toggleMoreInfo = function() {
    if ($scope.toggleInfo === false) {
      $scope.toggleInfo = true;
    } else {
      $scope.toggleInfo = false;
    }
  }

  $scope.setCurrentSlideIndex = function(index) {
    $scope.currentIndex = index;
  };

  $scope.isCurrentSlideIndex = function(index) {
    return $scope.currentIndex === index;
  }

  $scope.previousSlide = function() {
    $scope.toggleInfo = false;
    if ($scope.currentIndex > 0) {
      $scope.currentIndex -=1;
    } else {
      $scope.currentIndex = $scope.slides.length - 1;
    }
  }

  $scope.nextSlide = function() {
    $scope.toggleInfo = false;
    if ($scope.currentIndex < $scope.slides.length - 1) {
      $scope.currentIndex += 1;
    } else {
      $scope.currentIndex = 0;
    }
  }


}

angular
  .module('app')
  .controller('ProjectsController', ProjectsController)
