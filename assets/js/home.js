
// dropdown interaction added

$(".dropdown").click(function(){
    $(".dropdown-content").toggleClass("show");
});

$(".dropdown-content li").click(function (evt) { 
  let data = $(evt.target).text();
  $(".dropdown>div>input").val(data.trim());
});


//  different color for catagory for displaying the data 

  var color = ["rgb(43, 42, 42)" , "rgb(238, 53, 30)"];
  var colorB = ["rgb(104, 102, 102)" , "rgb(249, 126, 111)"];
  var index = 0;
  var buttons = $(".row>div>button");
  for(let i = 0; i < buttons.length; i++){
    $(buttons[i]).css("background-color" , color[index]);
    var anchor = $(".row>div>a")
    $(anchor[i]).css("background-color" , color[index]);
    index++;
    if(index == 2){
      index = 0;
    }
  }

//  jquery for displaying the data like catagory tag and strike through etc

  $(".row>div>input").change(function(){
    var label = $("label[for='" + $(this).attr('class') + "']");
    var classAtt = "."+$(this).attr('class');
    var bc = $($(classAtt)[1]).css("backgroundColor");

    if(this.checked){
      $(label).toggleClass("strike-through");
      $($(classAtt)[1]).toggleClass("anchor-tag-enable");
      $($(classAtt)[1]).css("opacity" , "1");
    }else{
      $(label).toggleClass("strike-through");
      $($(classAtt)[1]).toggleClass("anchor-tag-enable");
      $($(classAtt)[1]).css("opacity" , "0.6");
    }
  });


//  function to clear the checkbox checked on loading

  $('input[type="checkbox"]').each(function(){
  $(this).prop('checked', false);
});

   