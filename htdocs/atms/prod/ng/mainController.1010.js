var myApp = angular.module('atmsApp',['ngRoute','ui.bootstrap']);


myApp.filter('startFrom', function() {
    return function(input, start) {
        if(input) {
            start = +start; //parse to int
            return input.slice(start);
        }
        return [];
    }
});

myApp.directive('stringToNumber', function() {
  return {
    require: 'ngModel',
    link: function(scope, element, attrs, ngModel) {
      ngModel.$parsers.push(function(value) {
        return '' + value;
      });
      ngModel.$formatters.push(function(value) {
        return parseFloat(value, 10);
      });
    }
  };
});

myApp.directive('stringToDate', ['$timeout', '$filter', function ($timeout, $filter)
    {
        return {
            require: 'ngModel',

            link: function ($scope, $element, $attrs, $ctrl)
            {
                
                $ctrl.$parsers.push(function (viewValue)
                {
                    //convert string input into moment data model
                    var pDate = Date.parse(viewValue);
                    if (isNaN(pDate) === false) {
                        return new Date(pDate);
                    }
                    return undefined;

                });
                $ctrl.$formatters.push(function (modelValue)
                {
                    var pDate = Date.parse(modelValue);
                    if (isNaN(pDate) === false) {
                        return new Date(pDate);
                    }
                    return undefined;
                });
               
                
            }
        };
    }])



myApp.directive('taxList', function() {
  return { restrict: 'E',
   templateUrl: 'divTaxList.html'};
  });
  myApp.directive('fitnessList', function() {
  return { restrict: 'E',
   templateUrl: 'divFitnessList.html'};
  });
  myApp.directive('tempPermitList', function() {
  return { restrict: 'E',
   templateUrl: 'divTempPermitList.html'};
  });
  myApp.directive('taxModal', function() {
  return { restrict: 'E',
   templateUrl: 'modalTaxPayment.html'};
  });
myApp.directive('fitnessModal', function() {
  return { restrict: 'E',
   templateUrl: 'modalFitnessCert.html'};
  });
  myApp.directive('tempPermitModal', function() {
  return { restrict: 'E',
   templateUrl: 'modalTempPermit.html'};
  });
myApp.directive('nationalPermitModal', function() {
  return { restrict: 'E',
   templateUrl: 'modalNationalPermit.html'};
  });
  myApp.directive('dvpModal', function() {
  return { restrict: 'E',
   templateUrl: 'modalDVP.html'};
  });
   myApp.directive('nationalPermitList', function() {
  return { restrict: 'E',
   templateUrl: 'divNationalPermitList.html'};
  });
  
myApp.service('companyService', function($log)
{
	this.transitCompany = {};
	this.setTransitCompany = function(comp){
		$log.log("setTransitCompany" + comp)
		this.transitCompany = comp;
	};
	this.getTransitCompany = function(){
		return this.transitCompany;
	};
	this.flush = function(){
		this.transitCompany = {};
	}

});





myApp.config(['$routeProvider',function($routeProvider) {
  $routeProvider
   .when('/searchVehicle', {
   templateUrl: 'searchVehicle.html',
    controller: '_searchVehicleCtrl_'
  }).when('/searchCompany', {
   templateUrl: 'searchCompany.html',
    controller: '_searchCompanyCtrl_'
  }).when('/showCompany/:company_id', {
   templateUrl: 'showCompany.html',
    controller: '_companyCtrl_'
  }).when('/vehicle/:ID', {
   templateUrl: 'registerVehicle.html',
    controller: '_vehicleCtrl_'
  }).when('/woListTax', {
   templateUrl: 'woListTaxPayment.html',
    controller: '_woListTaxPayment_'
  }).when('/woListCF', {
   templateUrl: 'woListFitnessCert.html',
    controller: '_woListCF_'
  }).when('/woListNP', {
   templateUrl: 'woListNP.html',
    controller: '_woListNP_'
  }).otherwise({
       templateUrl: 'searchCompany.html',
    controller: '_searchCompanyCtrl_'
      })
    
  ;
}]);

myApp.controller('_mainCtrl_', function(hostService,$location) {
 hostService.setNodeHost($location.host());

//$log.debug("Main controller called");  
});
