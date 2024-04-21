// start function
function Accessories(){
    var email=document.getElementsByClassName("E-mail").value;
    var password=document.getElementsByClassName("Password").value;
    var yourlocation=document.getElementsByClassName("Yourlocation").value;
    var yourphone=document.getElementsByClassName("Yourphone").value;
    var message=document.getElementsByClassName("error");
}
// end function


// start style section
message.style.color="#fff";
message.style.textAlign="center";
message.style.backgroundColor="red";
message.style.padding="10px";
message.style.transition="all 1s ease";
// end style section


// start if section
if (email=="" &&password=="" &&yourlocation=="" &&yourphone==""){
    message.innerHTML="Please Enter Data"; 
    return false; 
}
else if(email.indexOf("@")=="-1"){
    message.innerHTML="Please Enter Valid E-Mail";
    return false;
}
else if(password.length<=8){
    message.innerHTML="Please Enter Atleast 8 character";
    return false;
}
else if(yourlocation=""){
    message.innerHTML="Please Matched Password";
    return false
}
else if(yourphone=""){
    message.innerHTML="Please Matched Password";
    return false
}
else{
    return true; 
}
// end if section