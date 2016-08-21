myApp.factory('taxPaymentFactory', function($http,$log,hostService){

	return{
		
	saveTaxPayment: function(taxPaymentObj, callback){
$log.debug("taxPaymentFactory - createFactory request received");   
var http_url1 = hostService.getNodeServiceURL() + 'taxPayment/';
var http_url2 = http_url1 + 'insert'; 

$http({
  method: 'POST',
  url: http_url2, 
  headers: {'Content-Type': 'application/json'},
  data:  taxPaymentObj
}).success(function (data)
  {
	callback(null,data) ;	
  }).error(function(data)
  {
	  $log.log("RESPONSE saveTaxPayment");
	  $log.log(data);
	callback("Error",null);
  }) ;    
  }, //createtaxPayment END
	
getTaxPaymentsByVehicleID: function(vehicle_rec_id, callback){
 var http_url1 = hostService.getNodeServiceURL() + 'taxPayment/';
 var http_url = http_url1 + 'byVehicleID/' + vehicle_rec_id; 	

  $http.get(http_url)
.success(function(data) {
	callback(null, data.dataList);	

  }).error(function(data) {
	  callback("Error", null);
		  }) ;
}, //gettaxPayment END	
 getwoTaxList: function(criteria, fromDate, toDate,callback){
 var http_url1 = hostService.getNodeServiceURL() + 'taxPayment/';
 var http_url = http_url1 + 'byDate/' + criteria + "," +fromDate + "," + toDate; 	

  $http.get(http_url)
.success(function(data,status) {
	$log.log("taxPaymentFactory-getwoTaxList in success");
	  $log.log(status);
	 
	callback(null, data);	

  }).error(function(data,status) {
	  	  
	  callback("Network Error with Status : " + status, null);
		  }) ;
}, //END getwoTaxList
saveWOTax: function(taxPaymentObj,  index , callback){
var http_url1 = hostService.getNodeServiceURL() + 'taxPayment/';
var http_url2 = http_url1 + 'updateReceiptNo'; 

$http({
  method: 'POST',
  url: http_url2, 
  headers: {'Content-Type': 'application/json'},
  data:  taxPaymentObj
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