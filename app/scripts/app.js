'use strict';

angular.module('aTApp', ['pascalprecht.translate'])
    .service('customLoader', function($q, $timeout) {
        return function(options) {
            var deferred = $q.defer();
            var locale = options.key;

            console.log('requesting', locale);

            if (locale === 'en_US') {
                $timeout(function() {
                    console.log('en_US done');
                    deferred.resolve({
                        'greeting': 'Hello World'
                    });
                }, 3000);
            }

            if (locale === 'ab_CD') {

                $timeout(function() {
                    console.log('ab_CD done');
                    deferred.resolve({
                        'greeting': 'foo bar bork bork bork'
                    });
                }, 5000);
            }

            return deferred.promise;
        }
    })
    .config(function($translateProvider) {
        $translateProvider.useLoader('customLoader');

        $translateProvider.preferredLanguage('ab_CD');
        $translateProvider.fallbackLanguage('en_US');
    })
    .run(function($timeout, $translate) {
        $timeout(function() {
            $translate.use('en_US');
        }, 500);
    });
