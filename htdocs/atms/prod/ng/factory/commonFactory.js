myApp.factory('commonFactory', function($http,$log,hostService){

return{
	
	deleteItem: function(itemType,  itemID , callback){
		var http_url1 = hostService.getNodeServiceURL() + 'common/';
		var http_url2 = http_url1 + 'deleteItem'; 
		var data = {};
		data.itemType = itemType;
		data.itemID = itemID;
		$http({
		  method: 'POST',
		  url: http_url2, 
		  headers: {'Content-Type': 'application/json'},
		  data: data 
			}).success(function (data)
		  {
			callback(null,data) ;	
		  }).error(function(data)
		  {
			  
			callback('ERROR' + JSON.stringify(data),null);
		  }) ;    
	},

		  sendSMSDVP: function(data1 , callback){
				var http_url1 = hostService.getNodeServiceURL() + 'common/';
				var http_url2 = http_url1 + 'sendSMSDVP'; 
		$http({
		  method: 'POST',
		  url: http_url2, 
		  headers: {'Content-Type': 'application/json'},
		  data: data1 
		}).success(function (data)
		  {
			callback(null,data) ;	
		  }).error(function(data)
		  {
			callback('ERROR' + JSON.stringify(data),null);
		  }) ;    
		  }
	
			
		
}//return end
});