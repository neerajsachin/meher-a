myApp.factory('companyFactory', function($http,$log,hostService){

	return{
		
	createCompany: function(companyObj, callback){
		
$log.debug("companyFactory - createFactory request received");   
var http_url1 = hostService.getNodeServiceURL() + 'company/';
var http_url2 = http_url1 + 'upsert'; 

$http({
  method: 'POST',
  url: http_url2, 
  headers: {'Content-Type': 'application/json'},
  data:  companyObj
}).success(function (data)
  {
	callback(null,data) ;	
  }).error(function(data)
  {
	callback("Error",null);
  }) ;    
  }, //createCompany END
	
getCompany: function(company_id, callback){
	
 var http_url1 = hostService.getNodeServiceURL() + 'company/byCompanyID/';
 var http_url = http_url1 + company_id; 	

  $http.get(http_url)
.success(function(data) {
	$log.debug("companyFactory - fetched  company from backend company id  -" + company_id + "--" + JSON.stringify(data) );
callback(null, data.data);	

  }).error(function(data) {
	  callback("Error", null);
		  }) ;
}, //getCompany END	
	getAllCompanies: function(callback){
 var http_url1 = hostService.getNodeServiceURL() + 'company/allCompanies';
 var http_url = http_url1 ; 	

  $http.get(http_url)
.success(function(data) {
	$log.debug("companyFactory - fetched all companies from  back end --" + JSON.stringify(data) );
callback(null, data.dataList);	

  }).error(function(data) {
	  callback("Error", null);
		  }) ;
} //getCompany END		
		
		}//return end
});