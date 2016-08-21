
myApp.controller('_searchVehicleCtrl_', function($scope,$timeout, $log,vehicleFactory,$location,searchVehicleSrv) {
 //$scope.criteria = '';
 $scope.txt = '';
 $scope.vehiclesList = [];
 //$scope.currentPage = 1; //current page
 $scope.maxSize = 10; //pagination max size
$scope.entryLimit = 100; //max rows for data table
 $scope.bigCurrentPage = 1;
 //$scope.bigTotalItems = 60;

$scope.searchVehicle = function(){
if(!$scope.searchVehicleForm.$valid){
	return;
}
$scope.NO_RECORD_FOUND  = false;
vehicleFactory.searchVehicle ($scope.txt, function(err,data){
$scope.vehiclesList = data;
searchVehicleSrv.setTransitVehicleList(data);
$scope.NO_RECORD_FOUND = (data.length>0)?false:true;

})	
};

getVehicleListAtLoading = function(){
	$log.debug("getVehicleListAtLoading called");
$scope.vehiclesList = 	searchVehicleSrv.getTransitVehicleList();

}
 getVehicleListAtLoading(); //INIT

 
 });

