
myApp.controller('_woListNP_', function($scope,$timeout, $log,nationalPermitFactory,$location,$filter) {
 
 $scope.localSearch = {};
 $scope.woNPList = [];
 $scope.goodToSaveList = [];
$scope.total = 0;
 $scope.woNPFromDate = new Date(moment().subtract(1,'days').startOf('day'));
 $scope.woNPToDate = new Date(moment().endOf('day'));
 
 //SEARCH START
$scope.searchWONP = function(criteria){
	$scope.pendingOn = false;
$scope.localSearch = {};
$scope.total = 0;
$scope.errMsg = null;
$scope.woNPList = [];	
$scope.dateStringFormat = 'dd/MM/yyyy'	
if(!$scope.woNPForm.$valid){
	return;
}

$scope.NO_RECORD_FOUND  = false;

nationalPermitFactory.getWoNPList (criteria,$scope.woNPFromDate, $scope.woNPToDate, function(err,data){

if(err){
	$scope.errMsg = err;
	return;
}


if(data.status !="S"){
	$scope.errMsg = data.details;
	return;
	
}


$scope.woNPList = data.data;
$scope.tableRendered = 1;

for (i = 0; i < $scope.woNPList.length; i++) { 
    if(!$scope.woNPList[i].issue_dt){
		$scope.woNPList[i].issue_dt =new Date(moment().subtract(1,'days').startOf('day'));
		
	}
}


$scope.NO_RECORD_FOUND = ($scope.woNPList.length>0)?false:true;

})	
}; //SEARCH END

$scope.calculateTotal = function (tableRendered){
if(tableRendered == 1){
$scope.total1 = $scope.total ;
}
return $scope.total1;
}


	$scope.convertStringToDate = function(dateTxt) {
	//var dateObj = new Date(dateTxt);	
	//return  dateObj.getDate() + "/" +( dateObj.getMonth() + 1 )+ "/" + dateObj.getFullYear();
    
	return new Date(dateTxt);
	} 

$scope.saveWONP = function(woNPObj,index){
	woNPObj.error = null;
	
nationalPermitFactory.saveWONP(woNPObj,0,function(err,data,indexout){

	
if(err || data.status =="E" ){
	$log.log("IN ERROR");
$scope.filteredList[index].error  = true;		
return;
}

if(data.status =="S"){
woNPObj.verified = 1;
$scope.filteredList[index].saved = true;
$scope.filteredList[index].editMode = false;

}

});	
	
} //END saveWOTax

$scope.saveAllWONP = function(){
	var i;
	for (i = 0; i < $scope.filteredList.length; i++) { 
	
    if(!$scope.filteredList[i].verified){
		
		
	$scope.filteredList[i].wip = true;
	
	nationalPermitFactory.saveWONP($scope.filteredList[i],i,function(err,data,indexout){
		
	if(err || data.status =="E" ){
	$log.log("IN ERROR");
$scope.filteredList[indexout].error  = true;
$scope.filteredList[indexout].wip = false;		

}
else{
	
	$scope.filteredList[indexout].verified = 1;
	$scope.filteredList[indexout].wip = false;
		$scope.filteredList[indexout].saved = true;
}
		
	});	
}
	
	}
	
}

$scope.changeInLocalSearch = function(){
	
	$scope.tableRendered = 2;
	
}
 $scope.downloadCSV =  function(){
	 var tempList = [];
	 
	 for (var i = 0; i < $scope.woNPList.length; i++) { 
    var temp = {};
	temp.national_permit_id = $scope.woNPList[i].national_permit_id;
	temp.registration_no = $scope.woNPList[i].registration_no;
	temp.apply_dt = $filter('date')($scope.convertStringToDate($scope.woNPList[i].apply_dt), $scope.dateStringFormat) ;
	temp.from_date =   $filter('date')($scope.convertStringToDate($scope.woNPList[i].from_date), $scope.dateStringFormat) ;
	temp.to_date =   $filter('date')($scope.convertStringToDate($scope.woNPList[i].to_date), $scope.dateStringFormat) ;
	temp.from_date_b =   $filter('date')($scope.convertStringToDate($scope.woNPList[i].from_date_b), $scope.dateStringFormat) ;
	temp.to_date_b =   $filter('date')($scope.convertStringToDate($scope.woNPList[i].to_date_b), $scope.dateStringFormat) ;
	temp.issue_dt =  $filter('date')($scope.convertStringToDate($scope.woNPList[i].issue_dt), $scope.dateStringFormat) ;
tempList.push(temp);
	}
 downloadCSVDocument(tempList, "report_NationalPermit");
 } // END downloadCSV
 
 
 $scope.showPending = function(){
	
	 $scope.localSearch.verified = null;
	 $scope.pendingOn = true;
 }
 $scope.clear = function(){
	
	 $scope.localSearch= {};
	 $scope.pendingOn = false;
 }
 
 }); //END CONTROLLER



