/* jQuery code for Business Logic*/
/* Ensure the document is fully Loaded*/
$(document).ready(() => {
  /* Get the Content of the submitted form*/
  $("#myform").submit((event) => {
    /* prevent the form following the URL on submit*/
    event.preventDefault();
    console.log(" form submitted!");
    console.log(event);
    let name = $("#name").val();
    let email = $("#email").val();
    let message = $("textarea").val();
    console.log(name);
    console.log(email);
    console.log(message);
    alert(`${name}, we have received your message. Thank you for reaching out to us.`);
     /* Reset the Form to clear Input fields */
    document.getElementById("myform").reset();
  });
});
