 <div class="row">
   <div class="col-md-12 col-sm-12 col-xs-12">
    <form role="form" class="dealForm">
	
	<div class="panel panel-primary">
	<div class="panel-heading">
    <h3 class="panel-title">New Company <span class="pull-right">ID#: {{company.company_id}}</span></h3>
	
	
  </div>
	<div class="panel-body">
	
	<div class="form-group">
     
    
	 <input  class="form-control input-md" placeholder="Enter Company Name" type="text" ng-model="company.company_name" maxlength="100" >
	 
	  
 </div>
	
	</div>
	
	
	</div>
	
	<button  type="button" class="btn  btn-primary" ng-click="createCompany()">Save</button>
	</form>
	

		
   </div>
</div>
			