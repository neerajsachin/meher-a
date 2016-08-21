function printForm20(vehicle){
var gap = "    ";
var today = new Date();
var dateTxt = today.getDate() + "/" + (today.getMonth()+1) + "/" + today.getFullYear();

var docDefinition = {
  content: [
  {text:'Form 20,',style: 'answer', alignment: 'center'},
  {text:'[ See Rule 47 ] \n Form of Application for Registration of a Motor Vehicle,',style: 'question', alignment: 'center'},
  {text:'To,',style: 'question'},
  {text:'The Registering Authority,',style: 'question'},
  {columns: [{text:'',margin: [ 0, 0, 0, 10 ]},'']},
  {text:vehicle.district ,style: 'answer'},{text:vehicle.state, style: 'answer'},
  {columns: [{text:'',margin: [ 0, 0, 0, 10 ]},'']},
  {columns: [{text:'1. Full name of person to be registered as registered Owner:',style: 'question'},{text:vehicle.owner,style: 'answer'}]},
  {columns: [{text:'',margin: [ 0, 0, 0, 10 ]},'']},
  {columns: [{text:'Son /wife /daughter of:',style: 'question'},{text:vehicle.owner_son_of,style: 'answer'} ]},
  {columns: [{text:'',margin: [ 0, 0, 0, 10 ]},'']},
  
  {columns: [{text:'2. Age of the person to be registered as registered Ownwer:',style: 'question'},"" ]},
  {columns: [{text:'',margin: [ 0, 0, 0, 10 ]},'']},
  {columns: [{text:'3. Permanent address of the person to be registered as Registered owner ( Evidence to be produced):',style: 'question'},{text:vehicle.owner_permanent_address,style: 'answer'} ]},
  {columns: [{text:'',margin: [ 0, 0, 0, 10 ]},'']},
  {columns: [{text:'4. Temporary address of the person to be registered as Registered owner.:',style: 'question'},{text:vehicle.owner_temporary_address,style: 'answer'}]},
  {columns: [{text:'',margin: [ 0, 0, 0, 10 ]},'']},
  {columns: [{text:'5. Name and address of the dealer or manufacture From whom the {vehicle was purchased. (Sale Certificate and certificate of road worthiness issued by the manufacture to be enclosed).:',style: 'question'},{text:vehicle.seller + "," + gap + vehicle.seller_address1,style: 'answer'}]},
  {columns: [{text:'',margin: [ 0, 0, 0, 10 ]},'']},
  {columns: [{text:'6. If ex-army vehicle , or imported vehicle:',style: 'question'}, gap]},
  {columns: [{text:'',margin: [ 0, 0, 0, 10 ]},'']},
  {columns: [{text:'7. Class of vehicle (M/Cycle/LMV/MMV/HMV):',style: 'question'},{text:vehicle.class_of_vehicle,style: 'answer'} ]},
  {columns: [{text:'',margin: [ 0, 0, 0, 10 ]},'']},
  {columns: [{text:'8. The Motor Vehicle is (New / Ex-Army/ Imported):',style: 'question'}, {text: '      NEW',style: 'answer'}]},
  {columns: [{text:'',margin: [ 0, 0, 0, 10 ]},'']},
  {columns: [{text:'9. Type of body:       ',style: 'question'},{text:vehicle.type_of_body,style: 'answer'},{text:'',style: 'question'},{text:'',style: 'answer'} ]},
  {columns: [{text:'',margin: [ 0, 0, 0, 10 ]},'']},
  {columns: [{text:'10. Type of vehicle:    ',style: 'question'},{text:vehicle.vehicle_description,style: 'answer'},{text:'23. Colour or Colours of Body',style: 'question'},{text:vehicle.color,style: 'answer'} ]},
  {columns: [{text:'',margin: [ 0, 0, 0, 10 ]},'']},
  
  
  {columns: [
  
  {table:{
	   body:[[ {text:'11. Makers Name		:',style: 'question'}, {text:vehicle.makers_name,style: 'answer'} ],
			[ {text:'12. Year of manufacture	:',style: 'question'}, {text:vehicle.model,style: 'answer'} ],
			[ {text:'13. Number of Cylinders	:',style: 'question'}, {text:vehicle.no_of_cylinders,style: 'answer'} ],
			]
  },layout: 'noBorders'}, {text:'24. Number, Description and size of  \n [a] Front Axle:-  '+ vehicle.front_axle + ' \n [b] Rear Axle:- '+ vehicle.rear_axle + '\n [c] Any Other Axle:- ' + vehicle.any_other_axle + '\n [d] Tandem Axle:- ' + vehicle.tandem_axle ,style: 'question'}]},
  {columns: [{text:'',margin: [ 0, 0, 0, 10 ]},'']},
  
   {columns: [
  
  {table:{
	   body:[[ {text:'14. Horse Power		:',style: 'question'}, {text:vehicle.hp,style: 'answer'} ],
			[ {text:'15. Cubic Capacity		:',style: 'question'}, {text:vehicle.cubic_capacity +'  CC',style: 'answer'} ],
			]
  },layout: 'noBorders'}, {text:'25. Gross vehicle weight (Kgs)  \n [a] as certified by the manufacturer:-  '+ vehicle.gross_vehicle_wt_manf +'  KGS' + ' \n [b] to be registered:- ',style: 'question'},{text:vehicle.gross_vehicle_wt_reg  +'  KGS',style: 'answer'}]},
  {columns: [{text:'',margin: [ 0, 0, 0, 10 ]},'']},
  {columns: [{text:'16. Makers classification /wheel base:',style: 'question'},{text:vehicle.wheel_base +'  mm',style: 'answer'},{text:'26. Pay Load: - ',style: 'question'},{text:vehicle.payload +'  MT',style: 'answer'} ]},
  {columns: [{text:'',margin: [ 0, 0, 0, 10 ]},'']},
  
    {columns: [{text:'17. Chassis Number (affix pencil print) :',style: 'question'},{text:vehicle.chassis_no,style: 'answer'} ]},
{columns: [{text:'',margin: [ 0, 0, 0, 10 ]},'']},
  
    {columns: [{text:'18. Engine Number :',style: 'question'},{text:vehicle.engine_no,style: 'answer'} ]},
{columns: [{text:'',margin: [ 0, 0, 0, 10 ]},'']},
	{columns: [{text:'19. Seating Capacity (including Driver):',style: 'question'},{text:vehicle.seating_capacity,style: 'answer'},{text:'28. Trailer body / No: - ',style: 'question'},{text:vehicle.trailor_chassis_no,style: 'answer'} ]},
  {columns: [{text:'',margin: [ 0, 0, 0, 10 ]},'']}	,
  {columns: [{text:'20. Fuel used in the Engine: ',style: 'question'},{text:vehicle.fuel,style: 'answer'} , {text:'' , style: 'answer'}]},
 {columns: [{text:'',margin: [ 0, 0, 0, 10 ]},'']}	,
 {columns: [{text:'21. Unladen weight:',style: 'question'},{text:vehicle.unladen_weight + '  Kgs',style: 'answer'},{text:'29. Previous regn no: - ',style: 'question'},{text:vehicle.old_vehicle_no,style: 'answer'} ]},
 
{text:' For H/A Reference:',style: 'question'},{text:vehicle.chassis_no,style: 'answer'},
{text:vehicle.type_of_body,style: 'answer'},
{text:vehicle.owner,style: 'answer'},
{text:'ULW  :' + vehicle.unladen_weight + '  Kgs',style: 'answer'},{text:'GVW  :' + vehicle.gross_vehicle_wt_reg  +'  KGS' ,style: 'answer'},{text:vehicle.makers_name,style: 'answer'},{text:vehicle.vehicle_description,style: 'answer'},

  
  
  
  
  
  {columns: [{text:'',pageBreak: 'after',margin: [ 0, 0, 0, 10 ]},'']}	,
  {text:'I hereby declare that the vehicle has not been registered in any State in India.',style: 'question'},
  {columns: [{text:'',margin: [ 0, 0, 0, 10 ]},'']}	,
  {text:'Additional Particulars to be completed only in the case of Transport Vehicle other than Motor Cab.',style: 'question'},
  {columns: [{text:'',margin: [ 0, 0, 0, 10 ]},'']}	,
  {columns: [{text:'26. Maximum axle weight \n\n [a] Front axle \n [b] Rear axle \n [c] Any other axle \n [d] Tendem axle	',style: 'question'},{text:'\n\n kgs \n kgs \n kgs \n kgs',style:'question'},{text:'27. [a] Overall length \n [b] Overall width \n [c] Overall height \n [d] Overall hang',style: 'question'} ]},
  {text:'',margin: [ 0, 0, 0, 10 ]},
	{text:'Details of additional trailer bed attached herewith to the chassis mentioned above',style: 'question'},
	{text:'',margin: [ 0, 0, 0, 10 ]},
	{text:'The vehicle is covered by a valid certificate of',style: 'question'},
	{text:'',margin: [ 0, 0, 0, 10 ]},
	{columns: [{text:'Date:  ' + dateTxt,style: 'question'},{text:'',style: 'answer'} ,{text:'Signature of the person to be registered as Regd. Owner:',style: 'question',alignment: 'right'}]},
	{text:'',margin: [ 0, 0, 0, 10 ]},
	{text:'Note :- The motor vehicle above described is \n (i) Subject to hire purchase agreement/lease agreement with \n (ii) Subject to hypothecation in favour of \n (iii) Not held under hire purchase agreement, or lease agreement or subject to hypothecation.',style: 'question'},{text:vehicle.hire_purchase_details,style:'answer'},	
	{text:'',margin: [ 0, 0, 0, 20 ]},
	
	{text:'Strike out whatever is inaplicable.',style: 'question'},
	{text:'',margin: [ 0, 0, 0, 50 ]},
	{columns: [{text:'Signature of the Financier',style: 'question'},{text:'Signature of Owner:',style: 'question'}]},
	{text:'',margin: [ 0, 0, 0, 30 ]},
	{text:'Speciman signature or thumb impression of the person to be registered owner. \n \n 1) \n \n 2) \n \n 3)',style: 'question'},
	
	{text:'',margin: [ 0, 0, 0, 30 ]},
	{text:'CERTIFICATE',style: 'header', alignment: 'center'},
  {text:'Inspected the Vehicle',style: 'answer', alignment: 'center'},
  {text:'',margin: [ 0, 0, 0, 10 ]},
  {text:'Certified that the particulars contained in the application are true and that the vehicle compiles with the requirements of the Motor Vehicle Act, 1988 and the Rules made thereunder.',style: 'question'},
{text:'',margin: [ 0, 0, 0, 40 ]},
{columns: [{text:'',style: 'question'},{text:'',style: 'answer'} , {text:'Signature of the Inspecting Authority \n \n Name \n \n Designation',style: 'question'}]},
		
      ],
	  styles: {
     question: {
       fontSize: 8,
	   italics: true,
       bold: false
	   
	  },
	  answer: {
       fontSize: 11,
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
  