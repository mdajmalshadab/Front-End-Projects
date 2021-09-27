document.location.hash = "#default";

$(".accordian-item").on("click", function(){
  var thisString = String(this.id);
  var ind = thisString.substr(-1,1);

  $("#faq-"+ind).find("div").slideToggle("collapse");
  $("#faq-"+ind).find("img").toggleClass("rotate180");
  $("#faq-"+ind).find("a").toggleClass("accordian-item-bold");
  $("#faq-"+ind).find("div").addClass("answer");

  for(var i=1; i<=5; i++){
    if(i!==parseInt(ind)){
      $("#faq-"+i).find("div").slideUp("collapse");
      $("#faq-"+i).find("img").removeClass("rotate180");
      $("#faq-"+i).find("a").removeClass("accordian-item-bold");

    }
  }

})
