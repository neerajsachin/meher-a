function printForm33(vehicle){
var gap = "    ";
var today = new Date();
var dateTxt = today.getDate() + "/" + (today.getMonth()+1) + "/" + today.getFullYear();



var docDefinition = {
  content: [
  {text:'Form 33,',style: 'header', alignment: 'center'},
  {text:'( See Rule 59)\n Intimation of change address recorded in the Certificate of Registration',style: 'answer', alignment: 'center'},
  {text:'( To be made in duplicate if the vehicle is held under agreement of hire – purchase /lease/hypothecation and the duplicate copy with the endorsement of the registering authority to be returned to the financier simultaneously on making the entry change of address in the Certificate of Registration) \n',style: 'question'},
  
  {text:'To,',style: 'question'},
  {text:'The Registering Authority,',style: 'question'},
  {text:'',margin: [ 0, 0, 0, 20 ]},
  {text:'................................................... \n\n ...................................................',style: 'question'},
  {text:'',margin: [ 0, 0, 0, 30 ]},
  
{text:[{text:'I/We ' , style:'question' } , {text:vehicle.owner , style:'answer' } , {text:' Son/wife/daughter of ',style:'question'} , {text:vehicle.owner_son_of,style:'answer'},{text:' Address - ' , style:'question'},{text:vehicle.owner_permanent_address,style:'answer'},{text:'  registered owner of Motor Vehicle No ',style:'question'}, {text:vehicle.registration_no,style:'answer'}]},
{text:'have ceased to reside /have the place of business , at the address recorded in the certificate of registration with effect from \n \n …………………………………………………………………………………………………..the present address is given below ( evidences to be enclosed).', style:'question'},
 {text:'',margin: [ 0, 0, 0, 20 ]},
  {text:'__________________________________________________________________________________________________________________________',style: 'question'},
 {text:'',margin: [ 0, 0, 0, 10 ]},
 
 
 
  {text:'* The vehicle is not held under any agreement of hire – purchase , lease or hypothecation.',style: 'question'},
 
 {text:[{text:'* The vehicle is held under an agreement of hire purchase / lease / hypothecation with..............  ' , style:'question' } , {text:vehicle.hire_purchase_details , style:'answer' }]},
 {text:'',margin: [ 0, 0, 0, 10 ]},
 {text:'The Certificate of Registration is enclosed.',style: 'question'},
 {text:'',margin: [ 0, 0, 0, 10 ]},
 {text:'I / We request that the change of address may be recorded in the certificate of registration.',style: 'question'},

 {text:'',margin: [ 0, 0, 0, 50 ]},

{columns: [{text:'Date:  ' + dateTxt,style: 'question'},{text:'',style: 'answer'} ,{text:'Signature or Thumb Impression of the Applicant',style: 'question',alignment: 'right'}]},
{text:'',margin: [ 0, 0, 0, 10 ]},
{text:'* Strike out whichever is not applicable',style: 'question'},
{text:'',margin: [ 0, 0, 0, 30 ]},
{text:'Office Endorsement',style: 'header', alignment: 'center'},
{text:'',margin: [ 0, 0, 0, 20 ]},
{text:'Number......................................dated...................................Office of the ......................................................................... The change of address as overleaf has been entered in the certificate of registration. ',style: 'question'},
{text:'',margin: [ 0, 0, 0, 30 ]},

{text:'Registering Authority',style: 'answer', alignment: 'right'},

{text:'',margin: [ 0, 0, 0, 30 ]},
{text:'To \n \n _____________________________________________ \n \n ________________________________________\n \n (The Name and Address of the Financier) \n By Registered Post or delivered under proper Acknowledgment.',style: 'answer'},


      ],
	  styles: {
     question: {
       fontSize: 8,
       bold: false
	   
	  },
	  answer: {
       fontSize: 9,
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
//
//{columns: [{text:'11. Makers Name:',style: 'question'},{text:vehicle.makers_name,style: 'answer'},{text:'24. Number, Description and size of  \n [a] Front Axel \n [b] Rear Axel \n [c] Any Other Axel \n [d] Tandem Axel',style: 'question'},{text:'the tyres',style: 'answer'} ]},
  