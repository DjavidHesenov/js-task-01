function valid (form) {
    var name = form.name.value;
    var surname = form.surname.value;
    var email = form.email.value;
    var number = form.number.value;

    var fail = false;
    if(name == "" || name == " " || surname == "" || surname == " " || email == "" || email == " " || phone == "" || phone == " ") 
    	fail = "You did not fill all the fields";
    	
    if(fail){
    	alert(fail);
   }  
}