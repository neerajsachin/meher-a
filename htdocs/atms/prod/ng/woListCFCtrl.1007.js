
myApp.controller('_woListCF_', function($scope,$timeout, $log,fitnessCertFactory,$location,$filter) {
 
 
 $scope.woCFList = [];
 $scope.goodToSaveList = [];
$scope.total = 0;
 $scope.woCFFromDate = new Date(moment().subtract(1,'days').startOf('day'));
 $scope.woCFToDate = new Date(moment().endOf('day'));
 
 //SEARCH START
$scope.searchWOCF = function(criteria){
$scope.total = 0;
$scope.errMsg = null;
$scope.woCFList = [];	
	
if(!$scope.woCFForm.$valid){
	return;
}

$scope.NO_RECORD_FOUND  = false;

fitnessCertFactory.getWoCFList (criteria,$scope.woCFFromDate, $scope.woCFToDate, function(err,data){
if(err){
	$scope.errMsg = err;
	return;
}

if(data.status !="S"){
	$scope.errMsg = data.details;
	return;
	
}


$scope.woCFList = data.data;
$scope.tableRendered = 1;

for (i = 0; i < $scope.woCFList.length; i++) { 
    if(!$scope.woCFList[i].issue_dt){
		$scope.woCFList[i].issue_dt = new Date(moment().startOf('day'));
	}
}


$scope.NO_RECORD_FOUND = ($scope.woCFList.length>0)?false:true;

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

$scope.saveWOCF = function(woCFObj,index){
	$scope.filteredList[index].emptyReceipt = null;
if(!woCFObj.receipt_no){
	$scope.filteredList[index].emptyReceipt = "BLANK";
	return ;
}
fitnessCertFactory.saveWOCF(woCFObj,0,function(err,data,indexout){
if(data.status =="S"){
$scope.filteredList[index].saved = true;
$scope.filteredList[index].editMode = false;

}	
if(err || data.status == "E"){
$scope.filteredList[index].error  = true;		
}

});	
	
} //END saveWOTax

$scope.saveAllWOCF = function(){
	var i;
	for (i = 0; i < $scope.filteredList.length; i++) { 
	
    if($scope.filteredList[i].receipt_no){
		
		
	$scope.filteredList[i].wip = true;
	fitnessCertFactory.saveWOCF($scope.filteredList[i],i,function(err,data,indexout){
	
	$scope.filteredList[indexout].wip = false;
		$scope.filteredList[indexout].saved = true;
		
	});	
}
	
	}
	
}

$scope.changeInLocalSearch = function(){
	
	$scope.tableRendered = 2;
	
}

$scope.downloadCSV =  function(){
	 var tempList = [];
	 
	 for (var i = 0; i < $scope.woCFList.length; i++) { 
    var temp = {};
	temp.fitness_cert_id = $scope.woCFList[i].fitness_cert_id;
	temp.registration_no = $scope.woCFList[i].registration_no;
	temp.apply_dt = $filter('date')($scope.convertStringToDate($scope.woCFList[i].apply_dt), $scope.dateStringFormat) ;
	temp.to_date =   $filter('date')($scope.convertStringToDate($scope.woCFList[i].to_date), $scope.dateStringFormat) ;
	temp.amount = $scope.woCFList[i].amount;
	temp.receipt_no = $scope.woCFList[i].receipt_no;
	temp.issue_dt =  $filter('date')($scope.convertStringToDate($scope.woCFList[i].issue_dt), $scope.dateStringFormat) ;
tempList.push(temp);
	}
 downloadCSVDocument(tempList, "report_FitnessCerts");
 } // END downloadCSV

 
 });



