function printVehicleForms(vehicle,formNumber,optionalObj){

vehicle.registration_dt_txt = (vehicle.registration_dt)?vehicle.registration_dt.toDateString().substring(4,vehicle.registration_dt.toDateString().length):"";
vehicle.vehicle_description = (vehicle.vehicle_description)?vehicle.vehicle_description:"";

vehicle.hire_purchase_details = (vehicle.hire_purchase_details)?vehicle.hire_purchase_details:"";
vehicle.state = (vehicle.state)?vehicle.state:"";
vehicle.registration_no = (vehicle.registration_no)?vehicle.registration_no:"";
vehicle.owner_son_of = (vehicle.owner_son_of)?vehicle.owner_son_of:"";
vehicle.owner_permanent_address = (vehicle.owner_permanent_address)?vehicle.owner_permanent_address:"";
vehicle.owner_temporary_address = (vehicle.owner_temporary_address)?vehicle.owner_temporary_address:"";
vehicle.seller = (vehicle.seller)?vehicle.seller:"";
vehicle.seller_address1 = (vehicle.seller_address1)?vehicle.seller_address1:"";
vehicle.class_of_vehicle = (vehicle.class_of_vehicle)?vehicle.class_of_vehicle:"";
vehicle.type_of_body = (vehicle.type_of_body)?vehicle.type_of_body:"";
vehicle.color = (vehicle.color)?vehicle.color:"";
vehicle.makers_name = (vehicle.makers_name)?vehicle.makers_name:"";
vehicle.model = (vehicle.model)?vehicle.model:"";
vehicle.no_of_cylinders = (vehicle.no_of_cylinders)?vehicle.no_of_cylinders.toString():"";
vehicle.hp = (vehicle.hp)?vehicle.hp.toString():"";
vehicle.cubic_capacity = (vehicle.cubic_capacity)?vehicle.cubic_capacity:"";
vehicle.wheel_base = (vehicle.wheel_base)?vehicle.wheel_base:"";
vehicle.unladen_weight = (vehicle.unladen_weight)?vehicle.unladen_weight.toString():"";
vehicle.gross_vehicle_wt_reg = (vehicle.gross_vehicle_wt_reg)?vehicle.gross_vehicle_wt_reg.toString():"";
vehicle.gross_vehicle_wt_manf = (vehicle.gross_vehicle_wt_manf)?vehicle.gross_vehicle_wt_manf.toString():"";
vehicle.payload = (vehicle.payload)?vehicle.payload.toString():"";
vehicle.chassis_no = (vehicle.chassis_no)?vehicle.chassis_no:"";
vehicle.engine_no = (vehicle.engine_no)?vehicle.engine_no:"";
vehicle.seating_capacity = (vehicle.seating_capacity)?vehicle.seating_capacity:"";
vehicle.trailor_chassis_no = (vehicle.trailor_chassis_no)?vehicle.trailor_chassis_no:"";
vehicle.fuel = (vehicle.fuel)?vehicle.fuel:"";

vehicle.old_vehicle_no = (vehicle.old_vehicle_no)?vehicle.old_vehicle_no:"";
vehicle.permit_no = (vehicle.permit_no)?vehicle.permit_no:"";
vehicle.ft_exp_dt_txt = (vehicle.ft_exp_dt_txt)?vehicle.ft_exp_dt_txt:"";
vehicle.tax_exp_dt_txt = (vehicle.tax_exp_dt_txt)?vehicle.tax_exp_dt_txt:"";
vehicle.insurance_upto = (vehicle.insurance_upto)?vehicle.insurance_upto:"";


var nationalPermitCurrent = {};
if(formNumber == 'GNP'){
	 nationalPermitCurrent = optionalObj;
	nationalPermitCurrent.authority = (nationalPermitCurrent.authority)?nationalPermitCurrent.authority:"";
	nationalPermitCurrent.to_date_txt = (nationalPermitCurrent.to_date_txt)?nationalPermitCurrent.to_date_txt:"";
	nationalPermitCurrent.from_date_txt = (nationalPermitCurrent.from_date_txt)?nationalPermitCurrent.from_date_txt:"";
	nationalPermitCurrent.from_date_txt = (nationalPermitCurrent.from_date_txt)?nationalPermitCurrent.from_date_txt:"";
	nationalPermitCurrent.particulars_state = (nationalPermitCurrent.particulars_state)?nationalPermitCurrent.particulars_state:"";
	nationalPermitCurrent.payment_date_state_txt = (nationalPermitCurrent.payment_date_state)?nationalPermitCurrent.payment_date_state.toDateString().substring(4,nationalPermitCurrent.payment_date_state.toDateString().length):"";
}

if(formNumber == "20"){
	printForm20(vehicle);
};	
if(formNumber == "27"){
	printForm27(vehicle);
};	

if(formNumber == "33"){
	printForm33(vehicle);
};	
if(formNumber == "GNP"){
	printFormGNP(vehicle,nationalPermitCurrent);
};

}
