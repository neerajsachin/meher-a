var margins = {
      top: 100,
      bottom: 30,
      left: 20,
      width: 50
    };
var date = new Date();
var dateTxt = date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear();
var opCo = "M/S SURINDER KUMAR AGARWAL";
var docNameDVP = "Documents Validity Position";
function printDVP(clientName) {
 var headerLongText = "THE VALIDITY OF THE DOCUMENTS OF YOUR VEHICLES AS PER OUR LIST. KINDLY ARRANGE FOR PRE-TIMELY RENEWAL.PLEASE INFORM FOR ANY CHANGES TO HELP US TO SERVE YOU BETTER";
    //var strsource = "#" + "PPPQ";
	var pdf = new jsPDF('p', 'pt', 'a3');
	pdf.text(250, 20,opCo);
	pdf.text(300, 40,docNameDVP);
	pdf.text(330, 60,"Date -" + dateTxt);
	//pdf.text(40, 60,clientName);
	pdf.setFontSize(9);
	var splitTitle = pdf.splitTextToSize(headerLongText, 600);
	pdf.text(80, 80,splitTitle);

	var source = $('#DVPTable')[0];
	var specialElementHandlers = {
			'#pdfbypassme' :function(element, renderer){
			return true
		}};
	
		pdf.fromHTML(source, margins.left , margins.top , {
    		'width': margins.width 
    		, 'elementHandlers': specialElementHandlers
    	} );
		
		//pdf.addPage('a3','l');
		
		pdf.output("dataurlnewwindow");
		//pdf.save("abc.pdf");
}