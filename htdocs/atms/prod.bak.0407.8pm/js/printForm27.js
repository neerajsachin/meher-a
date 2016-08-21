function printForm27(vehicle){
var gap = "    ";
var today = new Date();
var dateTxt = today.getDate() + "/" + (today.getMonth()+1) + "/" + today.getFullYear();



var docDefinition = {
  content: [
  {text:'Form 27,',style: 'header', alignment: 'center'},
  {text:'( Sec rule-54 )',style: 'question', alignment: 'center'},
  {text:'Application for assignment of new registration mark on removal of a motor vehicle to another State \n (To be made in duplicate if the vehicle is held under an agreement of hirepurchase/lease/hypothecation and the duplicate copy with the endorsement of the Registering Authority to be returned to the financier simultaneously, on the assignment of a new registration mark).',style: 'question', alignment: 'center'},
  
  {text:'\n\n To,',style: 'question'},
  {text:'The Registering Authority,',style: 'question'},
  {text:'',margin: [ 0, 0, 0, 10 ]},
  {text:'.............................................. \n ..............................................',style: 'question'},
  {text:'',margin: [ 0, 0, 0, 10 ]},
  
{text:[{text:'I/We    ' , style:'question' } , {text:vehicle.owner , style:'answer' } , {text:'   Son/wife/daughter of      ',style:'question'} , {text:vehicle.owner_son_of,style:'answer'}, {text:'     being the registered owner of Motor Vehicle No     ',style:'question'}, {text:vehicle.old_vehicle_no,style:'answer'},  {text:'     bearing Chassis No    ',style:'question'}, {text:vehicle.chassis_no,style:'answer'}, {text:'      and Engine No     ',style:'question'}, {text:vehicle.engine_no,style:'answer'}, {text:'    ,type of vehicle     ',style:'question'},  {text:vehicle.vehicle_description,style:'answer'}, {text:'    registered in the State of     ',style:'question'}, {text:vehicle.old_state,style:'answer'}, {text:'    do hereby declare that I/We, have since   ' + dateTxt + ' kept the said Motor Vehicle in this State and hereby apply for the assignment of a New Registration mark to the said motor vehicle. \n\n ** I/We, hereby declare that the registration is valid upto............ and it has not been suspended or cancelled under the provisions of this Act. \n\n ** I/We, enclose the certificate of Registration and the Certificate of Fitness of this Motor Vehicle. \n\n ** I/We, enclose a ‘No Objection Certificate’ from the Registering Authority. \n\n  ** If the ‘No Objection Certificate’ from the Registering Authority is not enclosed the applicant should file along with this application a declaration as required under the first provision to sub-section (1) of Section 47. \n\n  ** The vehicle is not subject to an agreement of hire-purchase/lease/hypothecation \n\n  ** The vehicle is subject to an agreement of hire-purchase/lease/hypothecation with     ',style:'question'}, {text:vehicle.hire_purchase_details,style:'answer'},{text:'     and I/We, enclose the NOC received from finanicer. ' , style:'question' }]},
 {text:'',margin: [ 0, 0, 0, 20 ]},
 
{text:'If ‘No Objection Certificate’ from the financier is not enclosed, the applicant should fill alongwith this application a declaration as required under sub-section (8) of Section 51.',style: 'question'},

{text:'',margin: [ 0, 0, 0, 20 ]},

{columns: [{text:'Date:  ' + dateTxt,style: 'question'},{text:'',style: 'answer'} ,{text:'Signature or Thumb Impression of the Applicant',style: 'question',alignment: 'right'}]},
{text:'',margin: [ 0, 0, 0, 10 ]},
{text:'* Strike out whichever is not applicable',style: 'question'},
{text:'',margin: [ 0, 0, 0, 30 ]},
{text:'Office Endorsement',style: 'header', alignment: 'center'},

{text:'Number.....................Date...................................Office of ......................................................................... The Vehicle No. ...................................... \n \n on removal to this State has been assigned a new registration mark .................. and ..................... (date). ',style: 'question'},
{text:'',margin: [ 0, 0, 0, 10 ]},

{text:'Signature of the Registering Authority',style: 'question', alignment: 'right'},

{text:'',margin: [ 0, 0, 0, 10 ]},
{text:'To \n \n ____________________________________ \n ____________________________________\n  The Name and Address of the Financier \n By Registered Post or delivered under proper Acknowledgment.',style: 'question'},
{text:'',margin: [ 0, 0, 0, 10 ]},	

{text:[{text:vehicle.owner,style: 'asnwer'}]},
	{text:[{text:vehicle.owner_son_of,style: 'answer'}]},
{text:[{text:'Make 		:- ',style: 'question'},{text:vehicle.makers_name,style: 'answer'},{text:'    ,Model No     :',style:'question'},{text:vehicle.vehicle_description,style:'answer'},{text:'       Body:- ' ,style: 'question'},{text:vehicle.type_of_body,style: 'answer'}]},
{text:[{text:'ULW  		:- ',style: 'question'},{text:vehicle.unladen_weight + ' kgs',style: 'answer'},{text:'        GVW :- ',style: 'question'},{text:vehicle.gross_vehicle_wt_reg + ' kgs',style: 'answer'}]},
{text:[{text:'Reg. Date  :- ',style: 'question'},{text:vehicle.registration_dt_txt,style: 'answer'}]},
{text:[{text:'HP		:- ',style: 'question'},{text:vehicle.hire_purchase_details,style: 'answer'}]}

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
  