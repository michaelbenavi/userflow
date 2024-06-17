$(document).ready(function () {

var checkContents = setInterval(function(){
  if ($("#ReadOnlyEmail_success").length > 0){ 
    if ($('#ReadOnlyEmail_success').css('display') == "inline"){
		$('#continue').show();
		stop()
	}
    //console.log($("div.message p").length());
  }
},1000);

	
});

function stop(){
        clearInterval(checkContents);
    }
		