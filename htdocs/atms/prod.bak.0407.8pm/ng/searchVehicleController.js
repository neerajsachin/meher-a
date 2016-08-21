
myApp.controller('_searchVehicleCtrl_', function($scope,$log,vehicleFactory,$location,searchVehicleSrv) {
 $scope.criteria = '';
 $scope.txt = '';
 $scope.vehiclesList = [];

$scope.searchVehicle = function(){
	
$scope.NO_RECORD_FOUND  = false;
vehicleFactory.searchVehicle ($scope.criteria, $scope.txt, function(err,data){
$scope.vehiclesList = data;
searchVehicleSrv.setTransitVehicleList(data);
$scope.NO_RECORD_FOUND = (data.length>0)?false:true;
})	
};

getVehicleListAtLoading = function(){
	$log.log("getVehicleListAtLoading called");
$scope.vehiclesList = 	searchVehicleSrv.getTransitVehicleList();
	
}
 getVehicleListAtLoading();
});

