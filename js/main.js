
$(document).ready(() =>{
    
  console.log(" document is now ready!");
$("#myform").submit(event => {   
  event.preventDefault();
         console.log(" form submitted!");
         console.log(event);
         let name =$("#name").val();
         let email =$("#email").val();
         let message =$("textarea").val();
         console.log(name );
         console.log(email);
         console.log(message);
        alert(`Hello ${name} for sending as message ${message}. We truly appreciate!`);
        $("#test").text(`Hello ${name} for sending as message ${message}. We truly appreciate!`);
    });
});