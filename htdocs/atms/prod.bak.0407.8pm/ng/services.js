myApp.service('vehicleService', function($log)
{
	this.transitVehicle = {};
	this.setTransitVehicleForClone = function(vehicle){
		$log.log("transitVehicle - " + this.transitVehicle)
		this.transitVehicle = vehicle;
	};
	this.getTransitVehicleForClone = function(callback){
		callback(this.transitVehicle);
	};
	this.flush = function(){
		this.transitVehicle = {};
	};
	
	

});
