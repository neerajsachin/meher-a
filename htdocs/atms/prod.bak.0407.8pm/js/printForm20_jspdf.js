function printForm20JS(vehicle){
var pdf = new jsPDF('p', 'pt', 'a4');
var gap = "     ";
//var TopMarginIncrement = 20;
pdf.setFontSize(9);
pdf.text(100,20,"FORM 20\r See Rule 47 \r Form of Application For Registration of a Motor Vehicle");
var topMargin = 60;
pdf.text(20,topMargin,"To,");
pdf.text(40,topMargin +10,"The Registering Authority,");
pdf.text(40,topMargin + 30,"................................");

pdf.text(40,topMargin +50,"1. Full name of person to be registered as registered Owner:" + gap + vehicle.owner);
pdf.text(40,topMargin +70,"Son /wife /daughter of:" + gap + vehicle.owner_son_of);
pdf.text(40,topMargin +90,"Age of the person to be registered as registered Owner:" + gap );


pdf.output("dataurlnewwindow");

}