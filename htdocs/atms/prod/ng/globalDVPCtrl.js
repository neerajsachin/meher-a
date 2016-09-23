
myApp.controller('_globalDVP_', function($scope,$log,vehicleFactory,$location,$filter,NgTableParams,commonFactory,$window) {
 
 
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
	
 
$scope.sendSMS = function(groupData){
	$log.log(JSON.stringify(groupData));

	if(!groupData[0].sms_alert_no && !groupData[0].sms_alert_no2){
		$window.alert('No SMS alert no. found, please add one');
		return;
	}

	var data1 = {};
	var maxVehicleListInSMS = 2;
	data1.vehicleList = groupData.slice(0,maxVehicleListInSMS).map(function(obj){
			return obj.registration_no;
		});
	data1.company_id = groupData[0].company_id;
	data1.duration = $scope.duration;
	data1.remaining = (groupData.length > maxVehicleListInSMS) ? groupData.length - maxVehicleListInSMS :0;
	
	commonFactory.sendSMSDVP(data1, function(err, data){
	
if (err) {
		$('#smsResult-' + groupData[0].company_id).text('ERROR - SMS SENT').show();
		return;
}

	if(data.status==='S') {
		$('#smsResult-' + groupData[0].company_id).text('SMS SENT').show();
		$('#lastSMS-' + groupData[0].company_id).text($filter('date')(new Date(),'dd/MM/yyyy'));
		}
	else{
		$('#smsResult-' + groupData[0].company_id).text('ERROR - SMS NOT SENT').show();

	}


});

} 


$scope.toDate = function(date){
	$log.log('date from back end - ' + date);


if(date) return $filter('date')(date,'dd/MM/yyyy'); 
else return 'N/A'
}

 }); //END Controller



