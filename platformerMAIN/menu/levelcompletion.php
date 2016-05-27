<script>
$(document).ready(function()
{
    //using $.ajax() function
    $(document).on('submit', '#myForm', function()
    {
        if($.trim($('#s_name').val()) == ''){
            alert('Please enter name.');
            $('#s_name').focus()
            return false;
        }
			
        var data = $(this).serialize();
        $.ajax({
            type : 'POST',
            url  : 'menu/submit.php',
            data : data,
            success :  function(data)
            {						
	         $("#myForm").hide();
                 $("#output").show();
            }
        });
        return false;
    });
});
</script>

<div id="LevelComplete" class="div-container center">
	<div id="level-container">			
	        <p id="output">Successfull</p>
		<form method="post" id="myForm">
				Level: <input  type="text" readonly class="bg-danger" id="s_level" name="s_level" ><br>
				Time(s): <input type="text" readonly class="bg-danger" id="s_time" name="s_time"><br>
				Name: <input type="text" name="s_name" id="s_name"><br>
				<button class="btn-primary" type="submit">Submit</button>
		</form>
		<button id="Cancel" class="btn-danger">Cancel</button>
	</div>
</div>