
myApp.controller('_companyCtrl_', function($scope,$log,companyFactory,companyService,vehicleFactory,$location) {
 
 $scope.company = {};
$scope.vehiclesList = [];
var forCreate = false;
var path = $location.path();
var company_id = path.substring(path.lastIndexOf("/")+1,path.length);
if(company_id == '00'){
forCreate = true;
$scope.editModeCompany = true;
}
//create company start 
$scope.upsertCompany = function(){
	
companyFactory.createCompany ($scope.company, function(err,data){
$scope.company.company_id = data.company_id;
$scope.editModeCompany = false;	
if(forCreate){
$log.log("Company create scenario");
$location.path("/showCompany/" + $scope.company.company_id);	
}
})	
};
//create company end
$scope.showCompany = function(){

companyFactory.getCompany (company_id, function(err,data){
$scope.company = data;	
})	
};	
	
 if(forCreate == false) {
 $scope.showCompany();
 }

 $scope.RegNewVehicle = function(){
	 $log.debug("sending data to companyService ");
	 companyService.setTransitCompany($scope.company);
	 //window.location =("index.html");
 }
 
 $scope.showVehicles = function(){
	vehicleFactory.getVehiclesByCompanyID ($scope.company.company_id, function(err,data){
	$scope.vehiclesList = data;	
	}) 
	 
 } //END showVehicles
 
 $scope.showDVP = function(){
 vehicleFactory.getVehiclesByCompanyID ($scope.company.company_id, function(err,data){
	$scope.vehiclesList = data;	
 $('#DVPModal').modal(
{backdrop: false,show: true}
);
	})
	
};


});

