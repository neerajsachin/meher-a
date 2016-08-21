myApp.factory('fitnessCertFactory', function($http,$log,hostService){

	return{
		
	saveFitnessCert: function(fitnessCertObj, callback){
$log.debug("fitnessCertFactory - createFactory request received");   
var http_url1 = hostService.getNodeServiceURL() + 'fitnessCert/';
var http_url2 = http_url1 + 'insert'; 

$http({
  method: 'POST',
  url: http_url2, 
  headers: {'Content-Type': 'application/json'},
  data:  fitnessCertObj
}).success(function (data)
  {
	callback(null,data) ;	
  }).error(function(data)
  {
	callback("Error",null);
  }) ;    
  }, //createfitnessCert END
	
getFitnessCertsByVehicleID: function(vehicle_rec_id, callback){
 var http_url1 = hostService.getNodeServiceURL() + 'fitnessCert/';
 var http_url = http_url1 + 'byVehicleID/' + vehicle_rec_id; 	

  $http.get(http_url)
.success(function(data) {
	callback(null, data.dataList);	

  }).error(function(data) {
	  callback("Error", null);
		  }) ;
}, //getfitnessCert END	
	getWoCFList: function(criteria, fromDate, toDate,callback){
 var http_url1 = hostService.getNodeServiceURL() + 'fitnessCert/';
 var http_url = http_url1 + 'byDate/' + criteria + "," +fromDate + "," + toDate; 	

  $http.get(http_url)
.success(function(data,status) {
	
	  
	 
	callback(null, data);	

  }).error(function(data,status) {
	  	  
	  callback("Network Error with Status : " + status, null);
		  }) ;
}, //END getWoCFList
saveWOCF: function(fitnessCertObj,  index , callback){
var http_url1 = hostService.getNodeServiceURL() + 'fitnessCert/';
var http_url2 = http_url1 + 'updateReceiptNo'; 

$http({
  method: 'POST',
  url: http_url2, 
  headers: {'Content-Type': 'application/json'},
  data:  fitnessCertObj
}).success(function (data)
  {
	callback(null,data,index) ;	
  }).error(function(data)
  {
	  
	callback(data,null,index);
  }) ;    
  }	
		
		}//return end
});