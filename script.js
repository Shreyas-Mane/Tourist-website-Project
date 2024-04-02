function checkDetail(){
     dest = document.getElementById('goto').value;
     date = document.getElementById('when').value;
     option = document.getElementById('type').value;
     
    if(dest=="")
    {
        alert("Please enter your Destination,Date and Tour Type")
    }
    else{
        alert("no action")
    }
}


function validate(){
    email = document.getElementById('mail').value;
    if(email==""){
        alert("Please enter Your Email..!")
    }
    else{
        alert("your Email has been submitted..!")
    }

}