$(document).ready(() => {
  console.log(" document is now ready!");
  $("#myform").submit((event) => {
    event.preventDefault();
    console.log(" form submitted!");
    console.log(event);
    let name = $("#name").val();
    let email = $("#email").val();
    let message = $("textarea").val();
    console.log(name);
    console.log(email);
    console.log(message);
    alert(
      `**  ${name} we have received your message. Thank you for reaching out to us. **`
    );
    $("#test").text(
      `**  ${name} we have received your message. Thank you for reaching out to us. **`
    );
    document.getElementById("myform").reset();
  });

  $(".designDiv").click(() => {
    $(".designDiv").toggle();
  });
  $(".developmentDiv").click(() => {
    $(".developmentDiv").toggle();
  });
  $(".productManagementDiv").click(() => {
    $(".productManagementDiv").toggle();
  });

  // - Testing display in portfolio
  $(".projectOneDiv").hover(() => {
    $(".projectOneName").css("display", "block");
    $(".projectOneDiv").css("opacity", 0.6);
    }, ()=> {
    $(".projectOneName").css("display", "none");
    $(".projectOneDiv").css("opacity", 1);
  });
  
  $(".projectTwoDiv").hover(() => {
    $(".projectTwoName").css("display", "block");
    $(".projectTwoDiv").css("opacity", 0.6);
    }, ()=> {
    $(".projectTwoName").css("display", "none");
    $(".projectTwoDiv").css("opacity", 1);
  });

  $(".projectThreeDiv").hover(() => {
    $(".projectThreeName").css("display", "block");
    $(".projectThreeDiv").css("opacity", 0.6);
    }, ()=> {
    $(".projectThreeName").css("display", "none");
    $(".projectThreeDiv").css("opacity", 1);
  });

  $(".projectFourDiv").hover(() => {
    $(".projectFourName").css("display", "block");
    $(".projectFourDiv").css("opacity", 0.6);
    }, ()=> {
    $(".projectFourName").css("display", "none");
    $(".projectFourDiv").css("opacity", 1);
  });

  // - To remove below:
  $("#div1-2").click(() => {
    $("#h1-1").text(`Design`);
    $("#p1-1")
      .text(`Our design practice offers a full range of services including brand strategy, interaction and visual design and user experience testing.
      Throughout your project, our designers create and implement visual design and workflows, solicit user feedback and work with you to make sure what gets built is what is needed.`);
    $("#div1-1").show();
    $("#div1-2").hide();
  });

  $("#div1-1").click(() => {
    $("#div1-1").hide();
    $("#div1-2").show();
  });

  $("#div2-2").click(() => {
    $("#h1-2").text(`Development`);
    $("#p1-2")
      .text(`All engineers are fluent in the latest enterprise, mobile and web development technologies.
      They collaborate with your team to write, and improve code on a daily basis, using proven practices such as test-driven development and pair programming.`);
    $("#div2-1").show();
    $("#div2-2").hide();
  });

  $("#div2-1").click(() => {
    $("#div2-1").hide();
    $("#div2-2").show();
  });

  $("#div3-2").click(() => {
    $("#h1-3").text(`Product Management`);
    $("#p1-3")
      .text(`Planning and development is iterative. Because we are constantly coding and testing, the products we build are always ready to go live. 
      This iterative process allows for changes as business requirements evolve.`);
    $("#div3-1").show();
    $("#div3-2").hide();
  });

  $("#div3-1").click(() => {
    $("#div3-1").hide();
    $("#div3-2").show();
  });
});
