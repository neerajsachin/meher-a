myApp.factory('nationalPermitFactory', function($http,$log,hostService){

	return{
		
	saveNationalPermit: function(nationalPermitObj, callback){
$log.debug("nationalPermitFactory - createNational Permit request received");   
var http_url1 = hostService.getNodeServiceURL() + 'nationalPermit/';
var http_url2 = http_url1 + 'insert'; 

$http({
  method: 'POST',
  url: http_url2, 
  headers: {'Content-Type': 'application/json'},
  data:  nationalPermitObj
}).success(function (data)
  {
	callback(null,data) ;	
  }).error(function(data)
  {
	callback(data,null);
  }) ;    
  }, //createnationalPermit END
	
getNationalPermitsByVehicleID: function(vehicle_rec_id, callback){
 var http_url1 = hostService.getNodeServiceURL() + 'nationalPermit/';
 var http_url = http_url1 + 'byVehicleID/' + vehicle_rec_id; 	

  $http.get(http_url)
.success(function(data) {
	callback(null, data.dataList);	

  }).error(function(data) {
	  callback("Error", null);
		  }) ;
} //getnationalPermit END	
		
		
		}//return end
});