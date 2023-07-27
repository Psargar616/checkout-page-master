
var btn_submit = document.getElementById("btn");

// Name and Email validation Function.
function validation(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    
    var emailReg = /^([w-.]+@([w-]+.)+[w-]{2,4})?$/;
    if( name ==='' || email ===''){
    alert("Please fill all fields...!!!!!!");
    return false;
    }else if(!(email).match(emailReg)){
    alert("Invalid Email...!!!!!!");
    return false;
    }else{
    return true;
    }
}


function submit_by_id() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    // var phn = document.getElementById('Phone').value;
    // var addr = document.getElementById('address').value;
    // var city = document.getElementById('city').value;
    // var country = document.getElementById('country').value;
    // var postal = document.getElementById('postal').value;
    if (validation()) // Calling validation function
    {
    document.getElementById("myform").submit(); //form submission
    alert(" Name : " + name + " n Email : " + email + " n Form Id : " + document.getElementById("myform").getAttribute("id") + "nn Form Submitted Successfully......");
    }
}

function submitFunction() {
    document.getElementById("myForm").submit();
  }

  function resetFunction() {
    document.getElementById("myForm").reset();
  }
btn_submit.addEventListener('click', submit_by_id);
 btn_submit.addEventListener('click', submitFunction);
btn_submit.addEventListener('click', resetFunction);
