myApp.factory('tempPermitFactory', function($http,$log,hostService){

	return{
		
	saveTempPermit: function(tempPermitObj, callback){
$log.debug("tempPermitFactory - createFactory request received");   
var http_url1 = hostService.getNodeServiceURL() + 'tempPermit/';
var http_url2 = http_url1 + 'insert'; 

$http({
  method: 'POST',
  url: http_url2, 
  headers: {'Content-Type': 'application/json'},
  data:  tempPermitObj
}).success(function (data)
  {
	callback(null,data) ;	
  }).error(function(data)
  {
	callback("Error",null);
  }) ;    
  }, //createtempPermit END
	
getTempPermitsByVehicleID: function(vehicle_rec_id, callback){
 var http_url1 = hostService.getNodeServiceURL() + 'tempPermit/';
 var http_url = http_url1 + 'byVehicleID/' + vehicle_rec_id; 	

  $http.get(http_url)
.success(function(data) {
	callback(null, data.dataList);	

  }).error(function(data) {
	  callback("Error", null);
		  }) ;
} //gettempPermit END	
		
		
		}//return end
});