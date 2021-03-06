'use strict';

/**
 * @ngdoc function
 * @name moocApp.controller:ModalinstanceCtrl
 * @description
 * # ModalinstanceCtrl
 * Controller of the moocApp
 */
angular.module('moocApp')
  .controller('ModalInstanceCtrl', function ($state, $scope, $modalInstance, $timeout, $http, alert, authToken, SharedData, API_URL) {
    $scope.data = SharedData;

    $scope.submit = function () {
      // TODO: Submit to server
      var user = {user: {name: $scope.username, password: $scope.password}};
      if ($scope.registering){

        console.log('registering ' + $scope.username + $scope.password + $scope.password_confirmation);


        $http.post(API_URL + 'register', user)
          .success(function(res){
            console.log('registered success');
            authToken.setToken(res.token);
            $modalInstance.close();
          })
          .error(function(err){
            alert('warning', 'Oops', 'Could not register');
          });

      } else {
        $http.post(API_URL + 'login', user)
          .success(function(res){
            authToken.setToken(res.token);
            alert('success', 'Login Success!');
            setTimeout(function(){
              location.reload();
            }, 1500);
          })
          .error(function(err){
            alert('warning', 'Oops', 'Could not log in');
          });
      }

    };

    $scope.addLink = function(){
      // TODO: Submit to server
      var link = {link: {title: $scope.title, body: $scope.body, url: $scope.url, category: $scope.categorySelection}};
      $http.post(API_URL + 'links', link)
        .success(function(res){
          $timeout(function(){
            $scope.$apply(function(){
              $scope.data.links.unshift(res);
            });
          });
          $modalInstance.close();
        })
        .error(function(err){
          alert('warning', 'Oops', 'Could not post');
        });
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };

  });
