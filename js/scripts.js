var factorialize = (x) => {
  if (x <0 )
  return -1;
  else if (x == 0)
  return 1;
  else {
    return (x * factorialize(x -1));
  }
}

$(document).ready(function(){
  $("form#factorial").submit(function(event) {

    event.preventDefault();

    var num = parseInt($("input#numberinput").val());

    var result = factorialize(num);

    $("#answer").text(result);

    $(".result").show();
  });
});
