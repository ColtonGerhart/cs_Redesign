var xmlhttp;
var aggText = null;
console.log('HELLLOOOOO');
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
console.log('ARE YOU WORKING?');
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
	console.log('IF YOU SEE THIS, NODE IS BROKEN');
    //document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
	aggText = xmlhttp.responseText;
	if(aggText != null)
	{
		var aggArray = JSON.parse(aggText); 
		var j = 0;
		for (var i = 0; i < 5; i++, j++) {
		   if (j >= aggArray.length){
			j = 0;
		   }
		   var aggObj = aggArray[j];
		if (aggObj.demoImg != './public/uploads/') {
		   console.log('<div class="tabmsg"><p>' + aggObj.demoText + '</p><img src="'+ aggObj.demoImg + '"></div>');
		   slmg[i] = '<div class="tabmsg"><p>' + aggObj.demoText + '</p><img src="'+ aggObj.demoImg + '"></div>';
		   document.getElementById("eventsContent").style.height = '500px';		
		}
		else {
		slmg[i] = '<div class="tabmsg"><p>' + aggObj.demoText + '</p></div>';
		   document.getElementById("eventsContent").style.height = '300px';		
		}
		   //document.getElementById("eventsContent").style.height = '500px';		
	}

	}else{
		slmg[0] = '<div class="tabmsg"> NO AGGREGATE FOUND YOU SHOULDNT SEE THIS</div>'
	}    
    }
  }
xmlhttp.open("GET","/getContent",true);
xmlhttp.send();
document.getElementById("eventsContent").style.height = '0px';
