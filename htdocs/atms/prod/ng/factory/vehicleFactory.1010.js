myApp.factory('vehicleFactory', function($http,hostService){

	return{
		
	registerVehicle: function(vehicleObj, callback){
  
var http_url1 = hostService.getNodeServiceURL() + 'vehicle/';
var http_url2 = http_url1 + 'insert'; 

$http({
  method: 'POST',
  url: http_url2, 
  headers: {'Content-Type': 'application/json'},
  data:  vehicleObj
}).success(function (data)
  {
	callback(null,data) ;	
  }).error(function(err)
  {
	callback(err,null)
  }) ;    
  }, //createvehicle END
	
getVehicleByRecordID: function(vehicle_rec_id, callback){
 var http_url1 = hostService.getNodeServiceURL() + 'vehicle/';
 var http_url = http_url1 + 'byRecordID/' + vehicle_rec_id; 	

  $http.get(http_url)
.success(function(data) {
	
callback(null, data.data);	

  }).error(function(err) {
	  callback(err, null);
		  }) ;
}, //getvehicle END	
	getVehiclesByCompanyID: function(company_id, callback){
 var http_url1 = hostService.getNodeServiceURL() + 'vehicle/all/';
 var http_url = http_url1 +  company_id; 	

  $http.get(http_url)
.success(function(data) {
	
callback(null, data.data);	

  }).error(function(err) {
	  callback(err, null);
		  }) ;
}, //getvehiclebyCompanyID END		
	searchVehicle: function(txt, callback){
		txt = txt.replace('/','%2F');
 var http_url1 = hostService.getNodeServiceURL() + 'vehicle/search/';
 var http_url = http_url1 + txt ; 	
  $http.get(http_url)
.success(function(data) {
	
callback(null, data.data);	

  }).error(function(err) {
	  callback(err, null);
		  }) ;
} //searchVehicle END


		
		}//return end
});