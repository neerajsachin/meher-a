myApp.service('vehicleService', function()
{
	this.transitVehicle = {};
	this.setTransitVehicleForClone = function(vehicle){
		
		this.transitVehicle = vehicle;
	};
	this.getTransitVehicleForClone = function(callback){
		callback(this.transitVehicle);
	};
	this.flush = function(){
		this.transitVehicle = {};
	};
	
	

});

myApp.service('searchVehicleSrv', function()
{
	this.transitVehicleList = [];
	this.setTransitVehicleList = function(vehicleList){
		this.transitVehicleList = vehicleList;
	};
	this.getTransitVehicleList = function(){
		return this.transitVehicleList;
	};
	this.flush = function(){
		this.transitVehicleList = [];
	};
	
	

});

myApp.service('searchCompanySrv', function()
{
	this.transitCompanyList = [];
	this.setTransitCompanyList = function(companyList){
		this.transitCompanyList = companyList;
	};
	this.getTransitCompanyList = function(){
		return this.transitCompanyList;
	};
	this.flush = function(){
		this.transitCompanyList = [];
	};
	
	

});
