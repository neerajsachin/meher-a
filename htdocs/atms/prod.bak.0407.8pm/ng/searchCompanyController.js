
myApp.controller('_searchCompanyCtrl_', function($scope,$log,companyFactory) {
$scope.companiesList = [];
companyFactory.getAllCompanies(function(err,data){
	$scope.companiesList = data;
})
 
 
});

