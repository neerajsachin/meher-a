myApp.controller('_vehicleCtrl_', function(vehicleService,$routeParams,$scope,$log,companyService,vehicleFactory,$location,taxPaymentFactory,fitnessCertFactory,tempPermitFactory,nationalPermitFactory,companyFactory) {
$scope.listForView =  '';
 $scope.vehicle = {};


 
 var forCreate = false; 
 $log.log("Route params" + JSON.stringify($routeParams));
 $scope.vehicle.owner_temporary_address = 'CHANDMARI KOHIMA NAGALAND'; 
 
 $scope.editMode = false;
 $scope.editModeFitnessCert = false;
 $scope.successMsg = "SUCCESS";
 $scope.dateFormat = 'dd/MM/yyyy';
//$scope.vehicle.registration_dt = new Date();
 $scope.nationalPermitCurrent = {};
 
 $scope.calc_toDateNPATxt = function(){
	 //$scope.nationalPermitCurrent.to_date_txt = $scope.nationalPermitCurrent.to_date.toDateString();
	 if($scope.nationalPermitCurrent.to_date){
		 $scope.nationalPermitCurrent.to_date_txt = getDateString($scope.nationalPermitCurrent.to_date);
		 return $scope.nationalPermitCurrent.to_date_txt ;}
	 else{
		 return null}
	 
 }
 $scope.calc_fromDateNPATxt = function(){
	 //$scope.nationalPermitCurrent.to_date_txt = $scope.nationalPermitCurrent.to_date.toDateString();
	 if($scope.nationalPermitCurrent.from_date){
		 $scope.nationalPermitCurrent.from_date_txt = getDateString($scope.nationalPermitCurrent.from_date);
		 return $scope.nationalPermitCurrent.from_date_txt ;}
	 else{
		 return null}
	 
 }
 
 $scope.calc_toDateNPBTxt = function(){
	  if($scope.nationalPermitCurrent.to_date_b){
		 $scope.nationalPermitCurrent.to_date_b_txt = getDateString($scope.nationalPermitCurrent.to_date_b);
		 return $scope.nationalPermitCurrent.to_date_b_txt ;}
	 else{
		 return null}
	 
 }
 $scope.calc_fromDateNPBTxt = function(){
	  if($scope.nationalPermitCurrent.from_date_b){
		 $scope.nationalPermitCurrent.from_date_b_txt = getDateString($scope.nationalPermitCurrent.from_date_b);
		 return $scope.nationalPermitCurrent.from_date_b_txt ;}
	 else{
		 return null}
	 
 }
 

 //$scope.taxPaymentCurrent = {};
 //var path = $location.path();
 $scope.errMsg = '';
//var recordID = path.substring(path.lastIndexOf("/")+1,path.length);
var recordID = $routeParams.ID;

if(recordID == '00'){
   forCreate = true; 
	 $scope.editMode = true;

 $scope.vehicle.color = 'BROWN';
 $scope.vehicle.front_axle = '1000 X 20 = 2';
 $scope.vehicle.rear_axle = '1000 X 20 = 4';
 $scope.vehicle.no_of_cylinders = 6;
 $scope.vehicle.class_of_vehicle = 'HGV';
 $scope.vehicle.public_private = 'PUBLIC';
 $scope.vehicle.fuel = 'DIESEL';
 $scope.vehicle.state = 'NAGALAND';
 $scope.vehicle.apply_dt = new Date();

var company = companyService.getTransitCompany();
 if(company.company_id){
	 $scope.vehicle.company_id = company.company_id;
	 $scope.vehicle.company_name = company.company_name;
   }	
}
 if(recordID == 'CLN'){
//$scope.vehicle =
 vehicleService.getTransitVehicleForClone(function(transitVehicle){
 forCreate = true; 
	 $scope.editMode = true;
 //angular.copy($scope.vehicle = transitVehicle;
 angular.copy(transitVehicle,$scope.vehicle) ;
 $scope.vehicle.record_id = null;
 $scope.vehicle.registration_no = null;
 $scope.vehicle.registration_dt = null;
 $scope.vehicle.dt_of_issue = null;
 $scope.vehicle.permit_no = null;
 $scope.vehicle.old_state = null;
 $scope.vehicle.old_vehicle_no = null;
 $scope.vehicle.old_registration_dt = null;
 $scope.vehicle.chassis_no = null;
 $scope.vehicle.engine_no = null;
 $scope.vehicle.permit_no = null;
 $scope.vehicle.trailor_chassis_no = null;
 $scope.vehicle.remarks = null;
 
 
 

 });
	

}

//create vehicle start 
$scope.registerVehicle = function(){
	if(!$scope.vehicleForm.$valid ) {
    $log.log("Vehicle register form is not valid");	
	return;
	}
	$scope.duplicateList = null;
	$log.log("vehicle Contoller - registerVehicle");
	vehicleFactory.registerVehicle($scope.vehicle, function(err,data){
		
	 if(err){
		$scope.errMsg = err;
		$scope.showErrMsg = true;
		$scope.editMode = true;
	 }
	 if(data.status != "S"){
	$scope.editMode = true;
		$scope.errMsg = data.details;
		$scope.showErrMsg = true;
		var temp = [];
	    if(data.code == 'DUPLICATE_CHS_ENG_REG'){
			for(i = 0; i < data.data.length; i++ ){
				if(data.data[i].record_id != $scope.vehicle.record_id){temp.push(data.data[i])}
			}
			$scope.duplicateList = temp;
			
		}
	 }else{
		 
		 $scope.showSuccessMsg = true;
		 $scope.showErrMsg = false;
		 $scope.editMode = false;
if(forCreate){
$log.log("create vehicle scenario");
$location.path("/vehicle/" + data.recordID);	
}
		}
	 
	 $scope.vehicle.record_id = ($scope.vehicle.record_id)?$scope.vehicle.record_id:data.recordID;
	 
	
	
	});
	
//companyFactory.createCompany ($scope.company, function(err,data){
	
};



$scope.getVehicleByRecordID = function(){
	vehicleFactory.getVehicleByRecordID(recordID, function(err,data){
	$scope.vehicle = data;	
	//$scope.vehicle.registration_dt = new Date('2016-06-08');
	$scope.vehicle.registration_dt = new Date($scope.vehicle.registration_dt);
	$scope.vehicle.dt_of_issue = new Date($scope.vehicle.dt_of_issue);
	$scope.vehicle.old_registration_dt  = new Date($scope.vehicle.old_registration_dt);
	$scope.vehicle.insurance_upto  = new Date($scope.vehicle.insurance_upto);
	$scope.vehicle.apply_dt  = new Date($scope.vehicle.apply_dt);
	});
};

//INIT
if(recordID!='00' && recordID!='CLN'){
	
	$scope.getVehicleByRecordID();
} 
//INIT END

$scope.showAllTaxPayments = function(){	$log.log("showAllTaxPayments called");
	$scope.listForView = "tax";
	taxPaymentFactory.getTaxPaymentsByVehicleID($scope.vehicle.record_id,function(err, data){
	$scope.taxPaymentList = data;	
	})
	
};

$scope.showAllFitnessCerts = function(){
	$log.log("showAllFitnessCerts called");
	$scope.listForView = "fitness";
	fitnessCertFactory.getFitnessCertsByVehicleID($scope.vehicle.record_id,function(err, data){
	$scope.fitnessCertList = data;	
	})
	
};

$scope.showAllTempPermits = function(){
	$log.log("showAllTempPermits called");
	$scope.listForView = "tempPermit";
	tempPermitFactory.getTempPermitsByVehicleID($scope.vehicle.record_id,function(err, data){
	$scope.tempPermitList = data;	
	})
	
};

$scope.showAllNationalPermits = function(){
	$log.log("showAllNationalPermits called");
	$scope.listForView = "nationalPermit";
	nationalPermitFactory.getNationalPermitsByVehicleID($scope.vehicle.record_id,function(err, data){
	$scope.nationalPermitList = data;	
	})
	
};

$scope.saveTaxPayment = function(){
	$scope.taxPaymentCurrent.registration_no = $scope.vehicle.registration_no;
	$scope.taxPaymentCurrent.vehicle_record_id = $scope.vehicle.record_id;
	$scope.taxPaymentCurrent.owner = $scope.vehicle.owner;
	$scope.taxPaymentCurrent.company_name = $scope.vehicle.company_name;
	$scope.taxPaymentCurrent.company_id = $scope.vehicle.company_id;
	$scope.modalTaxPaymentShowError = false;
	taxPaymentFactory.saveTaxPayment ($scope.taxPaymentCurrent,function(err,data){
		
        if(data.status != "S"){
        	$scope.modalTaxPaymentShowError = true;
        	$scope.modalTaxPaymentErrorMsg = data.details;
        	$scope.editModeTaxPayment  = true;
        }else{
        	$scope.modalTaxPaymentShowError = false;
        	$scope.editModeTaxPayment  = false;
           $scope.taxPaymentCurrent.tax_payment_id = ($scope.taxPaymentCurrent.tax_payment_id)?$scope.taxPaymentCurrent.tax_payment_id:data.tax_payment_id;
        }

		
		


		
	});
	
};

$scope.saveFitenssCert = function(){
	$scope.editModeFitnessCert = false;
	$log.log("saveFitnessCert called");
	$scope.fitnessCertCurrent.registration_no = $scope.vehicle.registration_no;
	$scope.fitnessCertCurrent.vehicle_record_id = $scope.vehicle.record_id;
	$scope.fitnessCertCurrent.owner = $scope.vehicle.owner;
	$scope.fitnessCertCurrent.company_name = $scope.vehicle.company_name;
	$scope.fitnessCertCurrent.company_id = $scope.vehicle.company_id;
	$scope.fitnessCertCurrent.prev_exp_dt = $scope.vehicle.ft_exp_dt;
	
	fitnessCertFactory.saveFitnessCert ($scope.fitnessCertCurrent,function(err,data){
		  if(data.status != "S"){
        	$scope.modalFitnessCertShowError = true;
        	$scope.modalFitnessCertErrorMsg = data.msg;
        	$scope.editModeFitnessCert  = true;
        }else{
        	$scope.modalFitnessCertShowError = false;
        	$scope.editModeFitnessCert  = false;
           $scope.fitnessCertCurrent.fitness_cert_id = ($scope.fitnessCertCurrent.fitness_cert_id)?$scope.fitnessCertCurrent.fitness_cert_id:data.fitness_cert_id;
        }





		//$scope.fitnessCertCurrent.fitness_cert_id = data.fitness_cert_id;
	});
	
};

$scope.saveTempPermit = function(){
	$log.log("saveFitnessCert called");
	$scope.editModeTempPermit = false;
	$scope.tempPermitCurrent.registration_no = $scope.vehicle.registration_no;
	$scope.tempPermitCurrent.vehicle_record_id = $scope.vehicle.record_id;
	$scope.tempPermitCurrent.owner = $scope.vehicle.owner;
	$scope.tempPermitCurrent.company_name = $scope.vehicle.company_name;
	$scope.tempPermitCurrent.company_id = $scope.vehicle.company_id;
	
	tempPermitFactory.saveTempPermit ($scope.tempPermitCurrent,function(err,data){
		$scope.tempPermitCurrent.temp_permit_id = data.temp_permit_id;
	});
	
};

function validateVehicleRegExpiryForWeight (weight, reg_dt, input_dt){
	var yearsToConsider = (weight<=16200)?12:15;
	
	if(moment(reg_dt).add(yearsToConsider,'years').isAfter(moment(input_dt))){
		return  true;
	}
	else
	{
		return false;
	}
}

$scope.saveNationalPermit = function(){
	if(!validateVehicleRegExpiryForWeight($scope.vehicle.gross_vehicle_wt_reg,$scope.vehicle.registration_dt,$scope.nationalPermitCurrent.to_date))
	{
		$scope.modalNationalPermitShowError = true;
		$scope.modalNationalPermitErrorMsg = "Vehicle Registraion will become invalid by NP(A) exp. date";
		if($scope.counterVehicleRegExp == null){
		$scope.counterVehicleRegExp = 1;
		return	;
		}
	}
	
	$scope.modalNationalPermitShowError = false;
	$scope.modalNationalPermitErrorMsg = null;
	$log.log("saveNationalPermit called");
	$scope.nationalPermitCurrent.registration_no = $scope.vehicle.registration_no;
	$scope.nationalPermitCurrent.vehicle_record_id = $scope.vehicle.record_id;
	$scope.nationalPermitCurrent.owner = $scope.vehicle.owner;
	$scope.nationalPermitCurrent.company_name = $scope.vehicle.company_name;
	$scope.nationalPermitCurrent.company_id = $scope.vehicle.company_id;
	if($scope.nationalPermitCurrent.to_date > $scope.nationalPermitCurrent.to_date_b){
		$scope.modalNationalPermitShowError = true;
		$scope.modalNationalPermitErrorMsg = "NP(A) exp. date is greater than NP(B) exp. date";
		if($scope.counterNPAisGreater == null){
		$scope.counterNPAisGreater = 1;
		return	;
		}
		}
	nationalPermitFactory.saveNationalPermit ($scope.nationalPermitCurrent,function(err,data){
		$scope.counterVehicleRegExp = null;
	$scope.counterNPAisGreater = null;
	if(err){
        	$scope.modalNationalPermitShowError = true;
        	$scope.modalNationalPermitErrorMsg = data;
        	$scope.editModeNationalPermit  = true;
        }else{
			
	if(data.status != "S" ){
        	$scope.modalNationalPermitShowError = true;
        	$scope.modalNationalPermitErrorMsg = data.msg;
        	$scope.editModeNationalPermit  = true;
        }else{
        	$scope.modalNationalPermitShowError = false;
        	$scope.editModeNationalPermit  = false;
           $scope.nationalPermitCurrent.national_permit_id = ($scope.nationalPermitCurrent.national_permit_id)?$scope.nationalPermitCurrent.national_permit_id:data.national_permit_id;
        }
		
		}
		
	 	
	
	
		
	});
	
};


$scope.showTaxPayment = function(taxPayment){
$scope.editModeTaxPayment = false;
$scope.modalTaxPaymentShowError = false;
taxPayment.from_date = new Date(taxPayment.from_date);
taxPayment.to_date = new Date(taxPayment.to_date);
taxPayment.issue_dt = new Date(taxPayment.issue_dt);
taxPayment.apply_dt = new Date(taxPayment.apply_dt);
$scope.taxPaymentCurrent = taxPayment;
$('#taxModal').modal(
{backdrop: false,show: true}
);	
};

$scope.showFitnessCert = function(fitnessCert){
fitnessCert.from_date = new Date(fitnessCert.from_date);
fitnessCert.to_date = new Date(fitnessCert.to_date);
fitnessCert.issue_dt = new Date(fitnessCert.issue_dt);
fitnessCert.apply_dt = new Date(fitnessCert.apply_dt);
$scope.fitnessCertCurrent = fitnessCert;
$scope.editModeFitnessCert = false;
$('#fitnessModal').modal(
{backdrop: false,show: true}
);	
};

$scope.showTempPermit = function(tempPermit){
	tempPermit.from_date = new Date(tempPermit.from_date);
tempPermit.to_date = new Date(tempPermit.to_date);
tempPermit.issue_dt = new Date(tempPermit.issue_dt);
$scope.editModeTempPermit = false;
$scope.tempPermitCurrent = tempPermit;
$('#tempPermitModal').modal(
{backdrop: false,show: true}
);	
};
$scope.showNationalPermit = function(nationalPermit){
	$scope.modalNationalPermitShowError = false;
	$scope.modalNationalPermitErrorMsg = null;
	$scope.editModeNationalPermit = false;
nationalPermit.from_date = new Date(nationalPermit.from_date);
nationalPermit.to_date = new Date(nationalPermit.to_date);
nationalPermit.issue_dt = new Date(nationalPermit.issue_dt);
nationalPermit.from_date_b = new Date(nationalPermit.from_date_b);
nationalPermit.to_date_b = new Date(nationalPermit.to_date_b);
nationalPermit.payment_date_state = new Date(nationalPermit.payment_date_state);
nationalPermit.payment_date_national = new Date(nationalPermit.payment_date_national);
nationalPermit.apply_dt = new Date(nationalPermit.apply_dt);
$scope.nationalPermitCurrent = nationalPermit;
$('#nationalPermitModal').modal(
{backdrop: false,show: true}
);	
};

$scope.newTaxPayment = function(){
$scope.editModeTaxPayment = true;
$scope.taxPaymentCurrent = {};
$scope.taxPaymentCurrent.authority = $scope.vehicle.state;
$scope.taxPaymentCurrent.apply_dt = new Date();

$('#taxModal').modal(
{backdrop: true,show: true}
);	
};

$scope.newFitnessCert = function(){
$log.log("newFitnessCert  called");
$scope.editModeFitnessCert = true;
$scope.fitnessCertCurrent = {};
$scope.fitnessCertCurrent.authority = $scope.vehicle.state;
$scope.fitnessCertCurrent.apply_dt = new Date();
$scope.fitnessCertCurrent.cf_issued = 'Y';
$('#fitnessModal').modal(
{backdrop: true,show: true}
);	
};
$scope.newTempPermit = function(){
	$scope.editModeTempPermit = true;
$log.log("newTempPermit  called");
$scope.tempPermitCurrent = {};
$('#tempPermitModal').modal(
{backdrop: true,show: true}
);	
};

$scope.newNationalPermit = function(){
$scope.modalNationalPermitShowError = false;
	$scope.modalNationalPermitErrorMsg = null;
	$scope.editModeNationalPermit = true;
$log.log("newNationalPermit  called");
$scope.nationalPermitCurrent = {};
$scope.nationalPermitCurrent.authority = $scope.vehicle.state;
$scope.nationalPermitCurrent.apply_dt = new Date();
$scope.nationalPermitCurrent.permit_no = $scope.vehicle.permit_no;
$scope.nationalPermitCurrent.state_amount = 1000;
$scope.nationalPermitCurrent.national_amount = 16500;
$scope.nationalPermitCurrent.from_date = new Date(moment($scope.vehicle.npa_exp_dt).add(1,'days'));
nationalPermitFactory.getMaxNPB($scope.vehicle.record_id,function(err,data){
if(err || data.status == "E"){
	$scope.modalNationalPermitShowError = true;
	$scope.modalNationalPermitErrorMsg = err + (data)?data.code:"";
}else{
	if(data.data.to_date_b ==  null){
		$scope.modalNationalPermitShowError = true;
	$scope.modalNationalPermitErrorMsg = "WARN - NPB_NULL_FOUND";
	}else{
$scope.nationalPermitCurrent.from_date_b = new Date(data.data.from_date_b);
$scope.nationalPermitCurrent.to_date_b = new Date(data.data.to_date_b);		
	}
} 


	
});


//$scope.nationalPermitCurrent.from_date_b = new Date();
$('#nationalPermitModal').modal(
{backdrop: true,show: true}
);	
};

$scope.getTotalNationalPermit = function()
{
	if($scope.nationalPermitCurrent.state_amount && $scope.nationalPermitCurrent.national_amount){
		
	return Number($scope.nationalPermitCurrent.state_amount) + Number($scope.nationalPermitCurrent.national_amount);	
	}
	
	if(!$scope.nationalPermitCurrent.state_amount && $scope.nationalPermitCurrent.national_amount){
		
	return Number($scope.nationalPermitCurrent.national_amount);	
	}
	
	if($scope.nationalPermitCurrent.state_amount && !$scope.nationalPermitCurrent.national_amount){
		
	return Number($scope.nationalPermitCurrent.state_amount);	
	}
}

 //$scope.regDtPop = {};
  
  $scope.dateOptions = {
   
    formatYear: 'yyyy',
    maxDate: new Date(2030, 5, 22),
     startingDay: 1
  };
  
  
  
$scope.openRegDtPop = function() {
    $scope.regDtPop = true;
  };
  
  $scope.openIssueDtPop = function() {
    $scope.issueDtPop = true;
  };
  
  $scope.ngModelOptions1 = {
	  	  timezone: '-0100'
  }
   $scope.ngModelOptions = {
	  	  timezone: '-0100'
  }
  
  $scope.getCompany = function(){
$scope.NO_COMPANY_FOUND = false;
companyFactory.getCompany ($scope.vehicle.company_id, function(err,data){
	
	if(data){
$scope.vehicle.company_name = data.company_name;			
	}else{
	$scope.NO_COMPANY_FOUND = true;
	}
})	
}; //END getCompany()

$scope.printForm = function(formNumber){
	if(formNumber == 'GNP'){
	$log.log("formNumber is GNP and nationalPermitCurrent is - " + JSON.stringify($scope.nationalPermitCurrent));
	printVehicleForms($scope.vehicle, formNumber,$scope.nationalPermitCurrent);
	}
	else{
	printVehicleForms($scope.vehicle, formNumber);	
	}
	
}

$scope.cloneVehicle = function(){

	vehicleService.setTransitVehicleForClone($scope.vehicle);
	$location.path('/vehicle/CLN');
}	
  


$scope.addNPA = function(duration){
var tempDate = new moment($scope.nationalPermitCurrent.from_date);
if(duration == '6M'){tempDate.add(6, 'months').subtract(1,'days');}
if(duration == '1Y'){tempDate.add(1, 'years').subtract(1,'days');}
$scope.nationalPermitCurrent.to_date = new Date(tempDate);
}

$scope.addNPB = function(duration){
var tempDate1 = new moment($scope.nationalPermitCurrent.from_date_b);
if(duration == '5Y'){tempDate1.add(5, 'years').subtract(1,'days');}
$scope.nationalPermitCurrent.to_date_b = new Date(tempDate1);
}

function getDateString (dateObj) {
	return  dateObj.getDate() + "/" +( dateObj.getMonth() + 1 )+ "/" + dateObj.getFullYear();
}

});

