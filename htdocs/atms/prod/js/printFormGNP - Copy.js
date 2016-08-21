function printFormGNP(vehicle,nationalPermitCurrent){
var gap = "    ";
var today = new Date();
var dateTxt = today.getDate() + "/" + (today.getMonth()+1) + "/" + today.getFullYear();

var docDefinition = {
  content: [
  {text:'GRANT OF NATIONAL PERMIT',style: 'header', alignment: 'center'},
{text:'To,',style: 'question'},
{text:[{text:'The Secretary,S.T.A. , ',style: 'question'},{text:vehicle.state,style: 'answer'}]},
  {text:'\n'},
  
{text:[{text:'I/We the undersigned hereby apply for the grant of authorisation valid through the territory for India ',style: 'question'},{text:vehicle.state + ', ALL INDIA',style: 'answer'}]},
  
  {text:'\n\n',style: 'answer'},
  
  {columns: [{text:'1. Name of the Applicant(s) in full',style: 'question'},{text:': ' + vehicle.owner,style: 'answer'}]},
  {columns: [{text:'',margin: [ 0, 0, 0, 10 ]},'']},
  {columns: [{text:'2. Father\'s name or husbands name',style: 'question'},{text:': ' + vehicle.owner_son_of,style: 'answer'} ]},
  {columns: [{text:'',margin: [ 0, 0, 0, 10 ]},'']},
  
  {columns: [{text:'3. Complete address',style: 'question'},{text:': ' + vehicle.owner_temporary_address,style: 'answer'} ]},
  {columns: [{text:'',margin: [ 0, 0, 0, 10 ]},'']},
  
  {columns: [{text:'4. Registration mark of the motor vehicles',style: 'question'},{text:': ' + vehicle.registration_no,style: 'answer'} ]},
  {columns: [{text:'',margin: [ 0, 0, 0, 10 ]},'']},
  
  {columns: [{text:'5. Engine No. of the motor vehicles',style: 'question'},{text:': ' + vehicle.engine_no,style: 'answer'} ]},
  {columns: [{text:'',margin: [ 0, 0, 0, 10 ]},'']},
  
    
  {columns: [{text:'6. Chassis No. of the motor vehicles',style: 'question'},{text:': ' + vehicle.chassis_no,style: 'answer'} ]},
  {columns: [{text:'',margin: [ 0, 0, 0, 10 ]},'']},
  {columns: [{text:'7. Trailor Chasis No',style: 'question'},{text:': ' + vehicle.trailor_chassis_no,style: 'answer'} ]},
  {columns: [{text:'',margin: [ 0, 0, 0, 10 ]},'']},
 
 {columns: [{text:'8. Original permit No. of the motor vehicles',style: 'question'},{text:': ' + vehicle.permit_no,style: 'answer'} ]},
  {columns: [{text:'',margin: [ 0, 0, 0, 10 ]},'']},
  
 {columns: [{text:'9. Permit issuing authority',style: 'question'},{text:': Secy S.T.A. ' + vehicle.state,style: 'answer'} ]},
  {columns: [{text:'',margin: [ 0, 0, 0, 10 ]},'']},
  
 {columns: [{text:'10. Maker of the motor vehicles',style: 'question'},{text:': ' + vehicle.makers_name,style: 'answer'} ]},
  {columns: [{text:'',margin: [ 0, 0, 0, 10 ]},'']},  
  
  {columns: [{text:'11. Gross vehicles weight of the motor vehicles',style: 'question'},{text:':  ' + vehicle.gross_vehicle_wt_manf,style: 'answer'} ]},
  {columns: [{text:'',margin: [ 0, 0, 0, 10 ]},'']},
  
  {columns: [{text:'12. Unladen weight of the motor vehicles',style: 'question'},{text:':  ' + vehicle.unladen_weight,style: 'answer'} ]},
  {columns: [{text:'',margin: [ 0, 0, 0, 10 ]},'']},
  
    {columns: [{text:'13. Pay load of the motor vehicles',style: 'question'},{text:':  ' + vehicle.payload,style: 'answer'} ]},
  {columns: [{text:'',margin: [ 0, 0, 0, 10 ]},'']},
  
    {columns: [{text:'14. Year of manufacturer',style: 'question'},{text:':  ' + vehicle.model,style: 'answer'} ]},
  {columns: [{text:'',margin: [ 0, 0, 0, 10 ]},'']},
   {columns: [{text:'15. Period for which the authorisation is sought',style: 'question'},{text:':  ' + nationalPermitCurrent.from_date_txt + ' to ' + nationalPermitCurrent.to_date_txt ,style: 'answer'} ]},
  {columns: [{text:'',margin: [ 0, 0, 0, 10 ]},'']},
   {text:'\n'},
{text:[{text:'Reg. Date  :- ',style: 'question'},{text:vehicle.registration_dt_txt,style: 'answer'}]},
  {text:'\n'},
 {text:[{text:'Make :- ',style: 'question'},{text:vehicle.makers_name,style: 'answer'},{text:vehicle.vehicle_description,style: 'answer'}]},
 {text:'\n'},
 {text:[{text:'Tax :- ',style: 'question'},{text:vehicle.tax_exp_dt_txt,style: 'answer'}]},
 {text:'\n'},
 {text:[{text:'C/Fitness :- ',style: 'question'},{text:vehicle.ft_exp_dt_txt,style: 'answer'}]},
 {text:'\n'},
 {text:[{text:'Insurance :- ',style: 'question'},{text:vehicle.insurance_upto_txt,style: 'answer'}]}, 
 {text:'\n'},
 
 {text:[{text:' I/ We enclose the Bank Draft of 1000 /- & CHALLAN OF RS 16500 /- as described hereunder towards payment of authorisation ',style: 'question'}]},
 {text:'\n\n'},
 
	 {
		style: 'question',
		table:{
		headerRows: 1,
		body:[
	   ['Sl No.','Name of the States','Amount Paid', 'DD No', 'Payment Date'],
	   ['1', vehicle.state, '1000',nationalPermitCurrent.particulars_state,nationalPermitCurrent.payment_date_state_txt],
	   ['2', 'ALL INDIA', '16500','',''],
	  ]},
	 	layout: 'lightHorizontalLines'
	 },
	 {text:'\n\n\n'},
	 {text:'For S.K Agarwal',style: 'header', alignment: 'right'},
 
 

   		
      ],
	  styles: {
     question: {
       fontSize: 8,
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
  