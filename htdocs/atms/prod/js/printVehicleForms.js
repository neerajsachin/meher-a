function printVehicleForms(vehicle1,formNumber,optionalObj){

vehicle1.registration_dt_txt = (vehicle1.registration_dt)?vehicle1.registration_dt.toDateString().substring(4,vehicle1.registration_dt.toDateString().length):"";
vehicle1.vehicle_description = (vehicle1.vehicle_description)?vehicle1.vehicle_description:"";

vehicle1.hire_purchase_details = (vehicle1.hire_purchase_details)?vehicle1.hire_purchase_details:"";
vehicle1.state = (vehicle1.state)?vehicle1.state:"";
vehicle1.registration_no = (vehicle1.registration_no)?vehicle1.registration_no:"";
vehicle1.owner_son_of = (vehicle1.owner_son_of)?vehicle1.owner_son_of:"";
vehicle1.owner_permanent_address = (vehicle1.owner_permanent_address)?vehicle1.owner_permanent_address:"";
vehicle1.owner_temporary_address = (vehicle1.owner_temporary_address)?vehicle1.owner_temporary_address:"";
vehicle1.seller = (vehicle1.seller)?vehicle1.seller:"";
vehicle1.seller_address1 = (vehicle1.seller_address1)?vehicle1.seller_address1:"";
vehicle1.class_of_vehicle = (vehicle1.class_of_vehicle)?vehicle1.class_of_vehicle:"";
vehicle1.type_of_body = (vehicle1.type_of_body)?vehicle1.type_of_body:"";
vehicle1.color = (vehicle1.color)?vehicle1.color:"";
vehicle1.makers_name = (vehicle1.makers_name)?vehicle1.makers_name:"";
vehicle1.model = (vehicle1.model)?vehicle1.model:"";
vehicle1.no_of_cylinders = (vehicle1.no_of_cylinders)?vehicle1.no_of_cylinders.toString():"";
vehicle1.hp = (vehicle1.hp)?vehicle1.hp.toString():"";
vehicle1.cubic_capacity = (vehicle1.cubic_capacity)?vehicle1.cubic_capacity:"";
vehicle1.wheel_base = (vehicle1.wheel_base)?vehicle1.wheel_base:"";
vehicle1.unladen_weight = (vehicle1.unladen_weight)?vehicle1.unladen_weight.toString():"";
vehicle1.gross_vehicle_wt_reg = (vehicle1.gross_vehicle_wt_reg)?vehicle1.gross_vehicle_wt_reg.toString():"";
vehicle1.gross_vehicle_wt_manf = (vehicle1.gross_vehicle_wt_manf)?vehicle1.gross_vehicle_wt_manf.toString():"";
vehicle1.payload = (vehicle1.payload)?vehicle1.payload.toString():"";
vehicle1.chassis_no = (vehicle1.chassis_no)?vehicle1.chassis_no:"";
vehicle1.engine_no = (vehicle1.engine_no)?vehicle1.engine_no:"";
vehicle1.seating_capacity = (vehicle1.seating_capacity)?vehicle1.seating_capacity:"";
vehicle1.trailor_chassis_no = (vehicle1.trailor_chassis_no)?vehicle1.trailor_chassis_no:"";
vehicle1.fuel = (vehicle1.fuel)?vehicle1.fuel:"";

vehicle1.old_vehicle_no = (vehicle1.old_vehicle_no)?vehicle1.old_vehicle_no:"";
vehicle1.permit_no = (vehicle1.permit_no)?vehicle1.permit_no:"";
vehicle1.ft_exp_dt_txt = (vehicle1.ft_exp_dt_txt)?vehicle1.ft_exp_dt_txt:"";
vehicle1.tax_exp_dt_txt = (vehicle1.tax_exp_dt_txt)?vehicle1.tax_exp_dt_txt:"";
vehicle1.insurance_upto = (vehicle1.insurance_upto)?vehicle1.insurance_upto:"";
vehicle1.insurance_upto_txt = (vehicle1.insurance_upto)?vehicle1.insurance_upto.toDateString().substring(4,vehicle1.insurance_upto.toDateString().length):"";



var nationalPermitCurrent = {};
if(formNumber == 'GNP'){
	 nationalPermitCurrent = optionalObj;
	//nationalPermitCurrent.authority = (nationalPermitCurrent.authority)?nationalPermitCurrent.authority:"";
	nationalPermitCurrent.to_date_txt = (nationalPermitCurrent.to_date_txt)?nationalPermitCurrent.to_date_txt:"";
	nationalPermitCurrent.from_date_txt = (nationalPermitCurrent.from_date_txt)?nationalPermitCurrent.from_date_txt:"";
	nationalPermitCurrent.from_date_txt = (nationalPermitCurrent.from_date_txt)?nationalPermitCurrent.from_date_txt:"";
	nationalPermitCurrent.particulars_state = (nationalPermitCurrent.particulars_state)?nationalPermitCurrent.particulars_state:"";
	nationalPermitCurrent.payment_date_state_txt = (nationalPermitCurrent.payment_date_state)?nationalPermitCurrent.payment_date_state.toDateString().substring(4,nationalPermitCurrent.payment_date_state.toDateString().length):"";
}

if(formNumber == "20"){
	printForm20(vehicle1);
};
if(formNumber == "24"){
	printForm24(vehicle1);
};	
if(formNumber == "27"){
	printForm27(vehicle1);
};	

if(formNumber == "28"){
	printForm28(vehicle1);
};	

if(formNumber == "33"){
	printForm33(vehicle1);
};	
if(formNumber == "GNP"){
	printFormGNP(vehicle1,nationalPermitCurrent);
};

}
