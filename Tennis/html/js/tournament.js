var res;
var extraString="";
$(document).ready(function() {
 	if(getUrlVars()["circleSize"]!=undefined){
 		extraString="&circleSize="+getUrlVars()["circleSize"];
	}
	$.post('/Tennis/TennisReaderServlet','type=1', function(responseText) {
		res = responseText;
		console.log(res);
		dispByTour();
		//dispByYear();
	});
	$('input:radio[name="lists"]').change(
    	function(){
        	if ($(this).val() == 'tournaments') {
               $( "#container" ).empty();
               dispByTour();
        	}
        	else if ($(this).val() == 'years'){
           		$( "#container" ).empty();
           		dispByYear();
        	}
        	else if($(this).val() == 'athletes'){
    			$( "#container" ).empty();
           		dispByAthletes();
        	}
    	});
	});

function dispByTour(){
	var i = 0, j = 0, k=0, count = 0;
	for(i = 0; i<res.output.length;i++){
		$( "#container" ).append( "<h2>"+res.output[i].name+"</h2>" );
		for(j=0; j<res.output[i].bs.length;j++){
			$( "#container" ).append("<h3 style=\"margin-left: 35px;font-style: italic;\">"+res.output[i].bs[j].year+"</h3>" );
			count = 0;
			for(k=0; k<res.output[i].bs[j].cs.length;k++){
				count ++;
				$( "#container" ).append( "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+"<a href= \"http://"+window.location.hostname+":8080/Tennis/html/tennismatch.html?id="+res.output[i].bs[j].cs[k].matchId+extraString+"\"> "+ res.output[i].bs[j].cs[k].player1+"&nbsp;&nbsp;VS&nbsp;&nbsp;"+ res.output[i].bs[j].cs[k].player2+"</a>");				
				if(res.output[i].bs[j].cs[k].video == 1){
					$( "#container" ).append('<img style="width:20px; height:20px" src="images/camera.png"/>');
				}
				//$( "#container" ).append( "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+"<a href= \"http://textvis.gsu.edu:8080/Tennis/html/tennismatch.html?id="+tournament[i].bs[j].cs[k].matchId+"\"> "+ tournament[i].bs[j].cs[k].player1+"&nbsp;&nbsp;VS&nbsp;&nbsp;"+ tournament[i].bs[j].cs[k].player2+"</a>");				
				if(count % 3 == 0){
					$( "#container" ).append("</br>");
				}
			}
		}
	}	
}

function dispByYear(){
	var i = 0, j = 0, k=0, count = 0;
	for(i = 0; i<res.output1.length;i++){
		$( "#container" ).append( "<h2>"+res.output1[i].year+"</h2>" );
		for(j=0; j<res.output1[i].bs.length;j++){
			$( "#container" ).append( "<h3 style=\"margin-left: 35px;font-style: italic;\">"+res.output1[i].bs[j].name+"</h3>" );
			count = 0;
			for(k=0; k<res.output1[i].bs[j].cs.length;k++){
				count ++;
				$( "#container" ).append( "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+"<a href= \"http://"+window.location.hostname+":8080/Tennis/html/tennismatch.html?id="+res.output1[i].bs[j].cs[k].matchId+extraString+"\"> "+ res.output1[i].bs[j].cs[k].player1+"&nbsp;&nbsp;VS&nbsp;&nbsp;"+ res.output1[i].bs[j].cs[k].player2+"</a>");				
				//if(res.output1[i].bs[j].cs[k].matchId == 922){
				//	console.log("922="+ res.output1[i].bs[j].cs[k].video);
				//}
				if(res.output1[i].bs[j].cs[k].video == 1){
					$( "#container" ).append('<img style="width:20px; height:20px" src="images/camera.png"/>');
				}
				//$( "#container" ).append( "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+"<a href= \"http://textvis.gsu.edu:8080/Tennis/html/tennismatch.html?id="+res.output[i].bs[j].cs[k].matchId+"\"> "+ res.output[i].bs[j].cs[k].player1+"&nbsp;&nbsp;VS&nbsp;&nbsp;"+ res.output[i].bs[j].cs[k].player2+"</a>");				
				if(count % 3 == 0){
					$( "#container" ).append("</br>");
				}
			}
		}
	}	
}

function dispByAthletes(){
	var i = 0, j = 0, k=0, count = 0;
	for(i = 0; i<res.output2.length;i++){
		//$("#foo").append("<div id= \""+res.output2[i].sortName+"\"> </div>")
		$( "#container" ).append( "<h2>"+res.output2[i].sortName+"</h2>" );
		for(j=0; j<res.output2[i].bs.length;j++){
			$( "#container" ).append( "<h3 style=\"margin-left: 35px;font-style: italic;\">"+res.output2[i].bs[j].tournament+" "+res.output2[i].bs[j].year+"</h3>" );
			count = 0;
			for(k=0; k<res.output2[i].bs[j].cs.length;k++){
				count ++;
				$( "#container" ).append( "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+"<a href= \"http://"+window.location.hostname+":8080/Tennis/html/tennismatch.html?id="+res.output2[i].bs[j].cs[k].matchId+extraString+"\"> "+ res.output2[i].bs[j].cs[k].player1+"&nbsp;&nbsp;VS&nbsp;&nbsp;"+ res.output2[i].bs[j].cs[k].player2+"</a>");				
				//if(res.output2[i].bs[j].cs[k].matchId == 922){
				//	console.log("922="+ res.output2[i].bs[j].cs[k].video);
				//}
				if(res.output2[i].bs[j].cs[k].video == 1){
					$( "#container" ).append('<img style="width:20px; height:20px" src="images/camera.png"/>');
				}
				//$( "#container" ).append( "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+"<a href= \"http://textvis.gsu.edu:8080/Tennis/html/tennismatch.html?id="+res.output2[i].bs[j].cs[k].matchId+"\"> "+ res.output2[i].bs[j].cs[k].player1+"&nbsp;&nbsp;VS&nbsp;&nbsp;"+ res.output2[i].bs[j].cs[k].player2+"</a>");				
				if(count % 3 == 0){
					$( "#container" ).append("</br>");
				}
			}
		}
	}	
}

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,    
    function(m,key,value) {
      vars[key] = value;
    });
    return vars;
}