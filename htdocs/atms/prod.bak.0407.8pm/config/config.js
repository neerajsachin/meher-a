myApp.service('hostService', function($log)
{
	this.nodeHost = '';
	//this.nodeHost = 'localhost';
	//this.nodeHost = '192.168.0.54';
	
	this.getNodeServiceURL = function(){
	this.nodeServiceURL = 'http://' + this.nodeHost + ':3000/';
		$log.log("hostService value of nodeHost -" + this.nodeHost );
		return this.nodeServiceURL;
	};

	this.setNodeHost = function(host){
       this.nodeHost = host;

		};	});
