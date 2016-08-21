myApp.factory('vehicleFactory', function($http,$log,hostService){

	return{
		
	registerVehicle: function(vehicleObj, callback){
$log.debug("vehicleFactory - createFactory request received");   
var http_url1 = hostService.getNodeServiceURL() + 'vehicle/';
var http_url2 = http_url1 + 'insert'; 
console.log("Inserting Vehicle at Backend" + JSON.stringify(vehicleObj));


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
	$log.debug("vehicleFactory - fetched  vehicle from backend vehicle_rec_id  -" + vehicle_rec_id + "--" + JSON.stringify(data) );
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
	$log.debug("vehicleFactory - fetched  vehicle from backend company ID  -" + company_id + "--" + JSON.stringify(data) );
callback(null, data.data);	

  }).error(function(err) {
	  callback(err, null);
		  }) ;
}, //getvehiclebyCompanyID END		
	searchVehicle: function(criteria,txt, callback){
 var http_url1 = hostService.getNodeServiceURL() + 'vehicle/search/';
 var http_url = http_url1 +  criteria + "," + txt ; 	
  $http.get(http_url)
.success(function(data) {
	$log.debug("vehicleFactory - searched  vehicle from backend " + JSON.stringify(data) );
callback(null, data.data);	

  }).error(function(err) {
	  callback(err, null);
		  }) ;
}


		
		}//return end
});