const run=()=>{
    const input1=document.getElementById('inputId').value;
    // two specila charecter use in input field
 
    var regex = /(?:[^`!@#$%^&*\-_=+'\/.,]*[`!@#$%^&*\-_=+'\/.,]){2}/;
   
    if(regex.test(input1)){
        alert('Yea u are success Bro')
    }
    else{
        alert('please enter two specila charecter')
    }
    
}
