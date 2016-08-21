function printForm28(vehicle,nationalPermitCurrent){
var gap = "    ";
var today = new Date();
var dateTxt = today.getDate() + "/" + (today.getMonth()+1) + "/" + today.getFullYear();

var docDefinition = {
  content: [
  {text:'\n FORM 28',style: 'header', alignment: 'center'},

{text:[{text:'[See Rule 54, 58 (1), (3) and (4) ]  , ',style: 'question'},{text: 'Form of application for ‘No Objection Certificate
and grant of Certificate' ,style: 'question'}]},
  {text:'\n'},
  {text:'To,',style: 'answer'},
{text:[{text:' The Regional Transport Officer,',style: 'question'},{text:nationalPermitCurrent.authority,style: 'answer'}]},
  {text:'\n'},
  
{text:[{text:'I/we intend to transfer the vehicle to the jurisdiction of the Registering Authority…………………………
\n I/we intend to sell the vehicle to Shri/Smt./Kumari…………………………………………………………. \n who resides in the jurisdiotion of the Registering Authority …………………………………. \n of the state of
……………………………………….I/we therefore request for the issue of a no objection certificate for \n
my/our vehicie the particulars of which are fumished below :- ',style: 'question'}]},
  
  {text:'\n',style: 'answer'},
  
  {columns: [{text:'1. Name  & Address',style: 'question'},{text:':   ' + vehicle.owner,style: 'answer'}]},
  {columns: [{text:'',margin: [ 0, 0, 0, 10 ]},'']},
  {columns: [{text:'2. Son/Wife/Daughter of ',style: 'question'},{text:':   ' + vehicle.owner_son_of,style: 'answer'} ]},
  {columns: [{text:'',margin: [ 0, 0, 0, 10 ]},'']},
  
  {columns: [{text:'3. Class of Vehicle',style: 'question'},{text:':   ' + vehicle.class_of_vehicle,style: 'answer'} ]},
  {columns: [{text:'',margin: [ 0, 0, 0, 10 ]},'']},
  
  {columns: [{text:'4. Registration mark of the motor vehicle',style: 'question'},{text:':   ' + vehicle.registration_no,style: 'answer'} ]},
  {columns: [{text:'',margin: [ 0, 0, 0, 10 ]},'']},
  
  {columns: [{text:'5. Original Registering Authority  ',style: 'question'},{text:':   Registering Authority ' + nationalPermitCurrent.authority,style: 'answer'} ]},
  {columns: [{text:'',margin: [ 0, 0, 0, 10 ]},'']},
  
  {columns: [{text:'6. Engine No. of the motor vehicles',style: 'question'},{text:':   ' + vehicle.engine_no,style: 'answer'} ]},
  {columns: [{text:'',margin: [ 0, 0, 0, 10 ]},'']},
      
  {columns: [{text:'7. Chassis No. of the motor vehicles',style: 'question'},{text:':   ' + vehicle.chassis_no,style: 'answer'} ]},
  {columns: [{text:'',margin: [ 0, 0, 0, 10 ]},'']},
  
  {columns: [{text:'8. Period of stay in the state',style: 'question'},{text:':     since ' + vehicle.registration_dt_txt : 'answer'} ]},
  {columns: [{text:'',margin: [ 0, 0, 0, 10 ]},'']},
 
  {columns: [{text:'9. Period up to which motor vehicle tax has been paid',style: 'question'},{text:':   upto ' + vehicle.vehicle.tax_exp_dt_txt,style: 'answer'} ]},
  {columns: [{text:'',margin: [ 0, 0, 0, 10 ]},'']},
  
  {columns: [{text:'10. Whether any demand for tax is pending , if so , give details 
',style: 'question'},{text:':      NO' ,style: 'answer'} ]},
  {columns: [{text:'',margin: [ 0, 0, 0, 10 ]},'']},  
  
  {columns: [{text:'11. Whether any action u/s 53,54 or 55 of M.V.Act 1988 is pending before any RA Or other prescribed auth,if so give details',style: 'question'}, {text:':     NO'  ,style: 'answer'} ]},
  {columns: [{text:'',margin: [ 0, 0, 0, 10 ]},'']},
  
  {columns: [{text:'12. Whether the vehicle is involved in any case of transport of
Prohibited goods , if so give details   ',style: 'question'},{text: ':     NO ' ,style: 'answer'} ]},
  {columns: [{text:'',margin: [ 0, 0, 0, 10 ]},'']},
  
  {columns: [{text:'I / We solemnly declare that the above statements are true ',style: 'question'},{text:':    YES' ,style: 'answer'} ]},
  {columns: [{text:'',margin: [ 0, 0, 0, 10 ]},'']},
  
  {text:'Signature of the person to be registered as Regd. Owner:',style: 'question',alignment: 'right'} 
  {columns: [{text:'',margin: [ 0, 0, 0, 10 ]},'']},  
  
  {text:'OFFICE ENDORSEMENT',style: 'header', alignment: 'center'},
  {text:'PART II',style: 'question', alignment: 'center'},
  {text:'',margin: [ 0, 0, 0, 10 ]},
  
  {text:'(Grant / refusal of ‘No objection certificate’ under sub-section 3 of section 48 of M.V.Act 1988 )',style: 'question'},
{text:'',margin: [ 0, 0, 0, 40 ]}, 
  
  {text:'(i) No objection certificate in respect of the vehicle , the detailed particulars where of recorded overleaf is
hereby granted under section 48 (3) of M.V. Act 1988. ',style: 'question'},
{text:'',margin: [ 0, 0, 0, 40 ]}, 
  
   {text:'(ii) No objection certificate in respect of the motor vehicle , the detailed particulars where of recorded overleaf
is hereby refused under section 48 (3) of M.V. Act 1988 for the reasons recorded as under:-  ',style: 'question'},
{text:'',margin: [ 0, 0, 0, 40 ]}, 

{text:'..........................................................................................................................................................  ',style: 'question'},
{text:'',margin: [ 0, 0, 0, 40 ]},

  
{columns: [{text:'Date : ................',style: 'question'},{text:'',style: 'answer'}, {text:'Signature with Seal of the Registering Authority \n \n Address',style: 'question', alignment: 'right'}]},
  
{text:'',margin: [ 0, 0, 0, 30 ]},
{text:'To \n ......................... ( Registered Owner )  \n Copy to the registering authority (By registered post or delivered under proper acknowledgement )  \n --------------------------- \ n *Strike out whichever is inapplicable.',style: 'question'},  
  
 
{text:'OFFICE ENDORSEMENT',style: 'header', alignment: 'center'},
  {text:'PART III',style: 'question', alignment: 'center'},
  {text:'',margin: [ 0, 0, 0, 10 ]},

 {text:'No ……………………………date ……………………………………office of the RA ………………………………' \n Acknowledgement for the receipt of application for ‘No Objection Certificate’  \n\n\n The application dated …………………………….from ……………………………………………………...
……………………………………………………………………………………………………....(name and address)
for the grant of a ‘No Objection Certificate’ in respect of vehicle number ………………………………  has been received on ………………………………………………… and is under consideration., style: 'question'},
{text:'',margin: [ 0, 0, 0, 40 ]},
  {columns: [{text:'Date : ................',style: 'question'},{text:'',style: 'answer'}, {text:'Signature with Seal of the Registering Authority \n \n Address',style: 'question', alignment: 'right'}]},
 {text:'',margin: [ 0, 0, 0, 30 ]},
{text:'To \n ......................... ( Registered Owner ) ',style: 'question'},  
  
      ],
	  styles: {
     question: {
       fontSize: 8,
	   italics: true,
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
  