function valid (form) {
    var name = form.name.value;
    var surname = form.surname.value;
    var email = form.email.value;
    var number = form.number.value;
	var adr_pattern = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}/i;     
    var fail = false;
    var bday = form.bday.value;
    
    if(adr_pattern.test(email) == false)
    	fail = "Incorrect Email";
    else if(name == "" || name == " " || surname == "" || surname == " " || email == "" || email == " " || number == "" || number == " "|| bday == "" || bday == " ") 
    	fail = "You did not fill all the fields";

	var s = document.getElementsByName('parameters')[0];
	var text = s.options[s.selectedIndex].text;

     

    if(fail){
    	alert(fail);

    }else{
    	var gender = document.getElementById('male').value;
    	var message = {"Name": name, "Surname": surname, "Email": email, "Number": number, "BDay": bday, "Gender": gender, "Option": text}
    	console.log(message);
    }
} 
