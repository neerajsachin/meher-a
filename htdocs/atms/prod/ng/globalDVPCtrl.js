
myApp.controller('_globalDVP_', function($scope,$log,vehicleFactory,$location,$filter,NgTableParams) {
 
 
 $scope.vehicleList = [];
 $scope.duration = "5";
 
 //SEARCH START
$scope.getVehicleList = function(duration){

$scope.errMsg = null;

$scope.NO_RECORD_FOUND  = false;

vehicleFactory.getVehiclesByExpDuration (duration, function(err,data){
if(err){
	$scope.errMsg = err;
	return;
}

if(data.status !="S"){
	$scope.errMsg = data.details;
	return;
	
}


//$scope.vehicleList = data.data;
 //var self = this;

 var data = data.data;
$scope.TotalCount = data.length;
 
$scope.tableParams = new NgTableParams({group: "company_name"}, { dataset: data});

$scope.NO_RECORD_FOUND = ($scope.vehicleList.length>0)?false:true;

})	
}; //SEARCH END

 
 //INIT
// $scope.getVehicleList(5);

$scope.convertStringToDate = function(dateTxt) {
	
return (dateTxt)?new Date(dateTxt):null;
	}

$scope.checkAlert = function(date){
	InDate = new moment(date).startOf('day');
    today = new moment().startOf('day');
	if (today.add((parseInt($scope.duration)+1),'days').isAfter(InDate))return 'red'
else return '';
	}	
	
 });



