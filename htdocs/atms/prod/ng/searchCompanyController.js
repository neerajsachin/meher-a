
myApp.controller('_searchCompanyCtrl_', function($scope,$timeout, $log,companyFactory,$location,searchCompanySrv) {
 
 $scope.txt = '';
 $scope.companysList = [];
 
 $scope.maxSize = 10; //pagination max size
$scope.entryLimit = 100; //max rows for data table
 $scope.bigCurrentPage = 1;
 
$scope.searchCompany = function(){
if(!$scope.searchCompanyForm.$valid){
	return;
}
$scope.NO_RECORD_FOUND  = false;
companyFactory.searchCompany ($scope.txt, function(err,data){
if(err){
	// TBC
}
$scope.companysList = data.data;
searchCompanySrv.setTransitCompanyList($scope.companysList);
$scope.NO_RECORD_FOUND = ($scope.companysList.length>0)?false:true;

})	
};

getCompanyListAtLoading = function(){
	$log.debug("getCompanyListAtLoading called");
$scope.companysList = 	searchCompanySrv.getTransitCompanyList();

}
 getCompanyListAtLoading(); //INIT

 
 });



