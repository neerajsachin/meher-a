function needAttention (InDate, threshold){
	//var threshold = 35;
	return t1 = moment().startOf('day').add(threshold,'days').isAfter(InDate);
	 
}

function needAttentionWrapper (InDate,InDateTxt,threshold){
	
	if(InDate && InDateTxt){
		
		return (needAttention(InDate,threshold))?{text:InDateTxt + "*",style:'attention',attention:true}:{text:InDateTxt};
	
	}
	
	/*if(!InDate && InDateTxt){
		
		var temp = Date.parse(InDateTxt);
		return (needAttention(temp))?{text:InDateTxt + "*",style:'attention',attention:true}:{text:InDateTxt};
	
	}*/
	
	if(!InDateTxt){
		
	return {text:"",attention:false};	
	}
}


function printDVP2(company_name,vehicleList,onlyAttention,threshold){
//var alertDuration = 35;
var gap = "    ";
var totalCount = vehicleList.length;
var tableBody = [];
var header = ['SN','Reg No.','Type of Body','P/L','Tax','NP(A)','NP(B)','CF','TP'];

tableBody.push(header);
var temp = [];
for (i = 0; i < vehicleList.length; i++) { 
    var alert1 = false;
	var alert2 = false;
	var alert3 = false;
	var alert4 = false;
	var alert5 = false;
	var finalAlert = false;
   	registration_no = (vehicleList[i].registration_no)?vehicleList[i].registration_no:"";
	type_of_body = (vehicleList[i].type_of_body)?vehicleList[i].type_of_body:"";
	payload = (vehicleList[i].payload)?vehicleList[i].payload:"";
	console.log(vehicleList[i].registration_no , "--" , vehicleList[i].npa_exp_dt_txt, vehicleList[i].npa_exp_dt);
	npa_exp_dt_txt = needAttentionWrapper(vehicleList[i].npa_exp_dt,vehicleList[i].npa_exp_dt_txt,threshold);
	alert2 = (npa_exp_dt_txt.attention)?true:false;
	tax_exp_dt_txt = needAttentionWrapper(vehicleList[i].tax_exp_dt,vehicleList[i].tax_exp_dt_txt,threshold);
	alert1 = (tax_exp_dt_txt.attention)?true:false;
	
	npb_exp_dt_txt = needAttentionWrapper(vehicleList[i].npb_exp_dt,vehicleList[i].npb_exp_dt_txt,threshold);
	alert3 = (npb_exp_dt_txt.attention)?true:false;
	ft_exp_dt_txt = needAttentionWrapper(vehicleList[i].ft_exp_dt,vehicleList[i].ft_exp_dt_txt,threshold);
	alert4 = (ft_exp_dt_txt.attention)?true:false;
	tp_exp_dt_txt = needAttentionWrapper(vehicleList[i].tp_exp_dt,vehicleList[i].tp_exp_dt_txt,threshold);
	alert5 = (tp_exp_dt_txt.attention)?true:false;
	finalAlert = (alert1 || alert2 || alert3 || alert4 || alert5)?true:false;
 
	if (onlyAttention ==  false || (onlyAttention == true && finalAlert == true) ) {
		temp.push((i+1).toString());
	temp.push(registration_no);
	temp.push(type_of_body);
	temp.push(payload);
	temp.push(tax_exp_dt_txt);
	temp.push(npa_exp_dt_txt);
	temp.push(npb_exp_dt_txt);
	temp.push(ft_exp_dt_txt);
	temp.push(tp_exp_dt_txt);
  tableBody.push(temp);
	}
	
	temp = [];
	}
var attentionText = (onlyAttention) ? 'FOLLOWING DOCUMENTS ARE EXPIRING SOON, PLEASE GET THEM RENEWED AT EARLIEST TO AVOID PENALTY \n':'THE VALIDITY OF THE DOCUMENTS OF YOUR VEHICLES AS PER OUR LIST. KINDLY ARRANGE FOR PRE-TIMELY RENEWAL.PLEASE INFORM FOR ANY CHANGES TO HELP US TO SERVE YOU BETTER \n'

var docDefinition = {
	header: function(currentPage, pageCount) { return currentPage.toString() + ' / ' + pageCount; },
  content: [
  {text:'M/S SURINDER KUMAR AGARWAL \n Documents Validity Position \n ------------',style: 'header', alignment: 'center'},
  {text:company_name,style: 'header', alignment: 'center'},
  {text:'Date:-' + moment().format('D/M/YYYY'),style: 'question'},
   {text:attentionText ,style: 'question'},
  

	{style: 'question',
						
						table: {
								body: tableBody
						},
							layout: 'lightHorizontalLines'
				},
	{text:'\n PLEASE CALL... FOR JOB-ORDER...0361-2515697, 2518915, 2516634..94351-03190, 99540-80000' ,style: 'answer'},
		
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
	   
	  },
	  attention: {
       fontSize: 8,
       bold: true,
	   italic: true,
	   color:'red'
	  }
	  }
};
  pdfMake.createPdf(docDefinition).open();
}
//{columns: [{text:'11. Makers Name:',style: 'question'},{text:vehicle.makers_name,style: 'answer'},{text:'24. Number, Description and size of  \n [a] Front Axel \n [b] Rear Axel \n [c] Any Other Axel \n [d] Tandem Axel',style: 'question'},{text:'the tyres',style: 'answer'} ]},
  