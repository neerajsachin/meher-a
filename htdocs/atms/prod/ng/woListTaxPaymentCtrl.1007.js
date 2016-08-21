
myApp.controller('_woListTaxPayment_', function($scope,$timeout, $log,taxPaymentFactory,$location,$filter) {
 
 
 $scope.woTaxList = [];
 $scope.goodToSaveList = [];
$scope.total = 0;
 $scope.woTaxFromDate = new Date(moment().subtract(1,'days').startOf('day'));
 $scope.woTaxToDate = new Date(moment().endOf('day'));
 
 //SEARCH START
$scope.searchWOTax = function(criteria){
$scope.total = 0;
$scope.errMsg = null;
$scope.woTaxList = [];	
$scope.dateStringFormat = 'dd/MM/yyyy'	
if(!$scope.woTaxForm.$valid){
	return;
}

$scope.NO_RECORD_FOUND  = false;

taxPaymentFactory.getwoTaxList (criteria,$scope.woTaxFromDate, $scope.woTaxToDate, function(err,data){
if(err){
	$scope.errMsg = err;
	return;
}

if(data.status !="S"){
	$scope.errMsg = data.details;
	return;
	
}


$scope.woTaxList = data.data;
$scope.tableRendered = 1;

for (i = 0; i < $scope.woTaxList.length; i++) { 
    if(!$scope.woTaxList[i].issue_dt){
		$scope.woTaxList[i].issue_dt = new Date(moment().startOf('day'));
	}
}


$scope.NO_RECORD_FOUND = ($scope.woTaxList.length>0)?false:true;

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

$scope.saveWOTax = function(woTaxObj,index){
	$scope.filteredList[index].emptyReceipt = null;
if(!woTaxObj.receipt_no){
	$scope.filteredList[index].emptyReceipt = "BLANK";
	return ;
}
taxPaymentFactory.saveWOTax(woTaxObj,0,function(err,data,indexout){
if(data.status =="S"){
$scope.filteredList[index].saved = true;
$scope.filteredList[index].editMode = false;

}	
if(err || data.status == "E"){
$scope.filteredList[index].error  = true;		
}

});	
	
} //END saveWOTax

$scope.saveAllWOTax = function(){
	var i;
	for (i = 0; i < $scope.filteredList.length; i++) { 
	
    if($scope.filteredList[i].receipt_no){
		
		
	$scope.filteredList[i].wip = true;
	taxPaymentFactory.saveWOTax($scope.filteredList[i],i,function(err,data,indexout){
	
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
	 
	 for (var i = 0; i < $scope.woTaxList.length; i++) { 
    var temp = {};
	temp.tax_payment_id = $scope.woTaxList[i].tax_payment_id;
	temp.registration_no = $scope.woTaxList[i].registration_no;
	temp.apply_dt = $filter('date')($scope.convertStringToDate($scope.woTaxList[i].apply_dt), $scope.dateStringFormat) ;
	temp.to_date =   $filter('date')($scope.convertStringToDate($scope.woTaxList[i].to_date), $scope.dateStringFormat) ;
	temp.amount = $scope.woTaxList[i].amount;
	temp.receipt_no = $scope.woTaxList[i].receipt_no;
	temp.issue_dt =  $filter('date')($scope.convertStringToDate($scope.woTaxList[i].issue_dt), $scope.dateStringFormat) ;
tempList.push(temp);
	}
 downloadCSVDocument(tempList, "report_TaxPayment");
 } // END downloadCSV
 
 });



