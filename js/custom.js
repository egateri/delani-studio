/* jQuery for UI Logic*/
/* Ensure the document is fully Loaded*/
$(document).ready(() => {
  /* Toggle elements in WHAT WE DO Section*/
  $(".designDiv").click(() => {
    $(".designDiv").toggle();
  });
  $(".developmentDiv").click(() => {
    $(".developmentDiv").toggle();
  });
  $(".productManagementDiv").click(() => {
    $(".productManagementDiv").toggle();
  });

  /* Hover in PORTFOLIO Section*/
  $(".projectOneDiv").hover(
    () => {
      $(".projectOneName").css("display", "block");
      $(".projectOneDiv").css("opacity", 0.8);
    },
    () => {
      $(".projectOneName").css("display", "none");
      $(".projectOneDiv").css("opacity", 1);
    }
  );

  $(".projectTwoDiv").hover(
    () => {
      $(".projectTwoName").css("display", "block");
      $(".projectTwoDiv").css("opacity", 0.8);
    },
    () => {
      $(".projectTwoName").css("display", "none");
      $(".projectTwoDiv").css("opacity", 1);
    }
  );

  $(".projectThreeDiv").hover(
    () => {
      $(".projectThreeName").css("display", "block");
      $(".projectThreeDiv").css("opacity", 0.8);
    },
    () => {
      $(".projectThreeName").css("display", "none");
      $(".projectThreeDiv").css("opacity", 1);
    }
  );

  $(".projectFourDiv").hover(
    () => {
      $(".projectFourName").css("display", "block");
      $(".projectFourDiv").css("opacity", 0.8);
    },
    () => {
      $(".projectFourName").css("display", "none");
      $(".projectFourDiv").css("opacity", 1);
    }
  );

  $(".projectFiveDiv").hover(
    () => {
      $(".projectFiveName").css("display", "block");
      $(".projectFiveDiv").css("opacity", 0.8);
    },
    () => {
      $(".projectFiveName").css("display", "none");
      $(".projectFiveDiv").css("opacity", 1);
    }
  );

  $(".projectSixDiv").hover(
    () => {
      $(".projectSixName").css("display", "block");
      $(".projectSixDiv").css("opacity", 0.8);
    },
    () => {
      $(".projectSixName").css("display", "none");
      $(".projectSixDiv").css("opacity", 1);
    }
  );

  $(".projectSevenDiv").hover(
    () => {
      $(".projectSevenName").css("display", "block");
      $(".projectSevenDiv").css("opacity", 0.8);
    },
    () => {
      $(".projectSevenName").css("display", "none");
      $(".projectSevenDiv").css("opacity", 1);
    }
  );

  $(".projectEightDiv").hover(
    () => {
      $(".projectEightName").css("display", "block");
      $(".projectEightDiv").css("opacity", 0.8);
    },
    () => {
      $(".projectEightName").css("display", "none");
      $(".projectEightDiv").css("opacity", 1);
    }
  );
});
