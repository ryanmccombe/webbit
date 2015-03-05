'use strict';

/**
 * @ngdoc function
 * @name moocApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the moocApp
 */
angular.module('moocApp')
  .controller('MainCtrl', function ($scope, $modal, $state) {
    $scope.data = {
      user: {
        name: '16_Char_Username',
        id: '52',
        admin: true
      },
      // user: false,
      links: [
        {
          id: 1,
          rating: 34,
          upvoted: true,
          title: 'Eloquent Javascript, Second Edition is now fully available online',
          url: 'http://www.google.com',
          category: 'JavaScript',
          categorySlug: 'javascript',
          time: 1425114174,
          user: 'SomeGuy',
          userId: 63,
          comments: 52
        },{
          id: 2,
          rating: 26,
          upvoted: false,
          title: 'For those who are looking for an intermediate Javascript Book, Addy Osmani has his book - Learning Javascript Design Patterns - hosted for free on his website',
          url: 'http://www.google.com',
          category: 'Ruby',
          categorySlug: 'ruby',
          time: 1425114347,
          user: 'SomeGirl',
          userId: 68,
          comments: 23
        },{
          id: 3,
          rating: 12,
          upvoted: false,
          title: 'YouTuber Jesse Warden teaches JavaScript from the basics - great resource for beginners',
          url: 'http://www.google.com',
          category: 'Python',
          categorySlug: 'python',
          time: 1425110347,
          user: 'SomeOtherGuy',
          userId: 69,
          comments: 231
        },{
          id: 4,
          rating: 48,
          upvoted: false,
          title: 'Create a fantasy football web app using Angular JS in a MEAN stack.  Great tutorial.',
          url: 'http://www.google.com',
          category: 'PHP',
          categorySlug: 'php',
          time: 1425111347,
          user: 'SomeOtherGirl',
          userId: 61,
          comments: 136
        }
      ]
    };
    $scope.state = $state;
    $scope.register = function(){
      var modalInstance = $modal.open({
        templateUrl: 'views/register_modal.html',
        controller: 'ModalInstanceCtrl',
        resolve: {
          items: function(){

          }

        }
      });

      modalInstance.result.then(function(){

      })
    };
    $scope.addLink = function(){
      var modalInstance = $modal.open({
        templateUrl: 'views/addlink_modal.html',
        controller: 'ModalInstanceCtrl',
        resolve: {
          items: function(){

          }

        }
      });

      modalInstance.result.then(function(){

      })
    }

  });
