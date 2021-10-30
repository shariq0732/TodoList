$(".dropdown").click(function(){
    $(".dropdown-content").toggleClass("show");
  });

  $(".dropdown-content li").click(function (evt) { 
    let data = $(evt.target).text();
    $(".dropdown>div>input").val(data.trim());
   });