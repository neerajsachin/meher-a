function printForm24(vehicle){
var gap = "    ";
var today = new Date();
var dateTxt = today.getDate() + "/" + (today.getMonth()+1) + "/" + today.getFullYear();

var docDefinition = {
  content: [
  {text:'Extract of Form 24,',style: 'header', alignment: 'center'},
  {text:'Detailed Particulars of the vehicle Regsitered at office of :,',style: 'question'},
  {text:'The Registering Authority,',style: 'question'},
  {text:'\n'},
  {text:'....................................',style: 'answer'},
  {text:'\n'},
  {columns: [{text:'1. Registration mark of the motor vehicles',style: 'question'},{text:':   ' + vehicle.registration_no,style: 'answer'} ]},
  {text:'\n'},
  {columns: [{text:'Reg. Date  	:- ',style: 'question'},{text:vehicle.registration_dt_txt,style: 'answer'}]},
  {text:'\n'},
  {columns: [{text:'2. Regsitered Owners Name:',style: 'question'},{text:vehicle.owner,style: 'answer'}]},
  
  {columns: [{text:'3. Son /wife /daughter of:',style: 'question'},{text:vehicle.owner_son_of,style: 'answer'} ]},
  
  {columns: [{text:'4. Permanent address :',style: 'question'},{text:vehicle.owner_permanent_address,style: 'answer'} ]},
  
  {columns: [{text:'5. Temporary address :',style: 'question'},{text:vehicle.owner_temporary_address,style: 'answer'}]},
  
  {columns: [{text:'6. Dealers Name and address :',style: 'question'},{text:vehicle.seller + "," + gap + vehicle.seller_address1,style: 'answer'}]},
  
  {columns: [{text:'7. If new,ex-army vehicle , or imported vehicle:',style: 'question'}]},
  
  {columns: [{text:'8. Class of vehicle :',style: 'question'},{text:vehicle.class_of_vehicle,style: 'answer'},'']},
  
  {columns: [{text:'9. The Motor Vehicle is (New / Ex-Army/ Imported):',style: 'question'},'']},
  
  {columns: [{text:'10. Makers Name:',style: 'question'}, {text:vehicle.makers_name,style: 'answer'},'']},
  
  {columns: [{text:'11. Type of vehicle:',style: 'question'},{text:vehicle.type_of_body,style: 'answer'},'' ]},
  
  {columns: [{text:'12. Type of body:',style: 'question'},{text:vehicle.type_of_body,style: 'answer'},{text:'',style: 'question'},{text:'',style: 'answer'} ]},
  
  {columns: [{text:'13. Year of manufacture:',style: 'question'}, {text:vehicle.model,style: 'answer'},'']},
  
  {columns: [{text:'14. Number of Cylinders:',style: 'question'}, {text:vehicle.no_of_cylinders,style: 'answer'},'']},
  
  {columns: [{text:'15. Chassis Number (affix pencil print) :',style: 'question'},{text:vehicle.chassis_no,style: 'answer'},{text:'',style: 'question'},{text:'',style: 'answer'} ]},
  
  {columns: [{text:'15. Engine Number (affix pencil print) :',style: 'question'},{text:vehicle.engine_no,style: 'answer'},{text:'',style: 'question'},{text:'',style: 'answer'} ]},
  
  {columns: [{text:'16. Fuel used in the Engine: ',style: 'question'},{text:vehicle.fuel,style: 'answer'},{text:'',style: 'question'},{text:'',style: 'answer'} ]},
  
  {columns: [{text:'17. Horse Power:',style: 'question'}, {text:vehicle.hp,style: 'answer'},'' ]},
  
  {columns: [{text:'18. Cubic Capacity:',style: 'question'}, {text:vehicle.cubic_capacity,style: 'answer'},{text:'',style: 'question'},{text:'',style: 'answer'} ]},
  
  {columns: [{text:'19. Makers classification /wheel base:',style: 'question'},{text:vehicle.wheel_base,style: 'answer'},{text:'',style: 'question'},{text:'',style: 'answer'} ]},
  
  {columns: [{text:'20. Seating Capacity (including Driver):',style: 'question'},{text:vehicle.seating_capacity,style: 'answer'},{text:'',style: 'question'},{text:'',style: 'answer'} ]},
  
  {columns: [{text:'21. Unladen weight:',style: 'question'},{text:vehicle.unladen_weight + '  Kgs',style: 'answer'},{text:'',style: 'question'},{text:'',style: 'answer'} ]},
  
  {columns: [{text:'22. Gross vehicle weight (Kgs)',style: 'question'},{text:vehicle.gross_vehicle_wt_reg , style: 'answer'},{text:'',style: 'question'},{text:'' ,style: 'answer'} ]},
  
  {columns: [{text:'23. Pay Load: - ',style: 'question'},{text:vehicle.payload + '  MT',style: 'answer'},{text:'',style: 'question'},{text:'',style: 'answer'} ]},
  
  {columns: [{text:'24. Colour or Colours of Body',style: 'question'},{text:vehicle.color,style: 'answer'}]},
  
  {columns: [{text:'24. Number, Description and size of  \n [a] Front Axle:-  '+ vehicle.front_axle + ' \n [b] Rear Axle:- '+ vehicle.rear_axle + '\n [c] Any Other Axle:- ' + vehicle.any_other_axle + '\n [d] Tandem Axle:- ' + vehicle.tandem_axle ,style: 'question'}]},
  
  {columns: [{text:'28. Trailer body / No: - ',style: 'question'},{text:vehicle.trailor_chassis_no,style: 'answer'} ,{text:'',style: 'question'},{text:'',style: 'answer'}]},
  
  {columns: [{text:'29.Hire purchase/ Hypo with ' , style:'question' } , {text:vehicle.hire_purchase_details , style:'answer' },'']}
  
    
    ],
	  styles: {
     question: {
       fontSize: 8,
       bold: false
	   
	  },
	  answer: {
       fontSize: 10,
       bold: true
	   
	  },
	  header: {
       fontSize: 10,
       bold: true
	   
	  }
	  }
};
  pdfMake.createPdf(docDefinition).open();
}
//{columns: [{text:'11. Makers Name:',style: 'question'},{text:vehicle.makers_name,style: 'answer'},{text:'24. Number, Description and size of  \n [a] Front Axel \n [b] Rear Axel \n [c] Any Other Axel \n [d] Tandem Axel',style: 'question'},{text:'the tyres',style: 'answer'} ]},
  