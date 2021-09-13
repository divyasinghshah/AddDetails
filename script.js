var roll;
var name;
var marks;

$('form button').click(function(e){
	e.preventDefault();
	roll=$('#rollno').val();
	name=$('#name').val();
	marks=$('#marks').val();
	if(roll==="" || name ==="" || marks===""){
		window.alert('Enter All Details');
		
	}
	else{
		$('#side-table').append('<tr><td>Roll No- <span class="green"> '+roll+'</span>, <span class="green">'+name+'</span> has scored <span class="green">'+marks+'</span> marks</td></tr>');
		$('#rollno').val("");
		$('#name').val("");
		$('#marks').val("");
	}



	


});