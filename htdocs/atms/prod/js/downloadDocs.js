function downloadCSVDocument (data,filename){
 var csv = Papa.unparse(data);
  var uri = 'data:text/csv;charset=utf-8,' + escape(csv);
  var link = document.createElement("a");
   link.href = uri;
    link.style = "visibility:hidden";
	 link.download = filename + ".csv";
	  document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}