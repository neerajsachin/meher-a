var myApp = angular.module('atmsApp',['ngRoute','ui.bootstrap']);

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


myApp.service('searchVehicleSrv', function($log)
{
	this.transitVehicleList = [];
	this.setTransitVehicleList = function(vehicleList){
		$log.log("transitVehicleList" + this.transitVehicleList)
		this.transitVehicleList = vehicleList;
	};
	this.getTransitVehicleList = function(){
		return this.transitVehicleList;
	};
	this.flush = function(){
		this.transitVehicleList = [];
	};
	
	

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
  }).otherwise({
       templateUrl: 'newCompany.html',
    controller: '_companyCtrl_'
      })
    
  ;
}]);

myApp.controller('_mainCtrl_', function(hostService,$location) {
 hostService.setNodeHost($location.host());

//$log.debug("Main controller called");  
});
