'use strict';

angular.module('aTApp')
  .controller('MainCtrl', function ($scope, $translate) {
    $scope.changeLocale = function() {
        $translate.use('ab_CD');
    }
  });
