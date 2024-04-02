function checkDetail(){
     var dest = document.getElementById('goto').value;
     var date = document.getElementById('when').value;
     var option = document.getElementById('type').value;
     
    if(dest==null && date==null && option==null)
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


function feedback(){
   name = document.getElementById('name').value;
   email =document.getElementById('email').value;
 text=document.getElementById('subject').value;
 
  if(name==null && email==null && text==null){
    alert("please enter the details below")
  }
  else
  alert("your Feedback has been submitted..!")

}
