exports.Globals = {
	getSwfHtml: function(swffile,hasHtml) {
		Head = "";
		Foot = "";
		if (hasHtml)
		{
			Head="<html>\n";
			Foot="</html>\n";
		}
		return Head + 
			"<head> \n " + 
			"<meta http-equiv='Content-Type' content='text/html; charset=utf-8' /> \n " + 
			"    <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, target-densitydpi=device-dpi' /> \n " + 
			"\n " + 
			"	<style type='text/css'> \n " + 
			"	<!-- \n " + 
			"		body {\n " + 
			"			margin: 0;\n " + 
			"			width: 100%;\n " + 
			"			height: 100%;\n " + 
			"			background-color: #000000;\n " + 
			"			color: #FFFFFF;\n " + 
			"		}\n " + 
			"		#center {\n " + 
			"			width: 600px;\n " + 
			"			height: 300px;\n " + 
			"			position: absolute;\n " + 
			"			top: 50%;\n " + 
			"			left: 50%;\n " + 
			"			margin: -150px 0 0 -300px;\n " + 
			"			border: 1px inset #ddd;\n " + 
			"		} \n " + 
			"		a {color: #E5E0B5;text-decoration:none;}  \n " + 
			"	//-->\n " + 
			"	</style>\n " + 
			"<title>empty</title>\n " + 
			"</head>\n " + 
			"<body>\n " + 
			"<center>\n " + 
			"<table width='100%' height='100%' cellpadding='0' cellspacing='0' border='0'> \n " + 
			"	<tr>\n " + 
			"		<td align='center' valign='middle'>\n " + 
			"		<object type='application/x-shockwave-flash'\n " + 
			"			id='myFlashMovie' \n " + 
			"			align='middle'\n " + 
			"			data='"+swffile+"'\n " + 
			"			wmode=''\n " + 
			"			height='100%' \n " + 
			"			width='100%'>\n " + 
			"				<param name='movie' value='"+swffile+"'>\n " + 
			"				<param name='quality' value='low'>\n " + 
			"				<param name='wmode' value='window'>\n " + 
			"				\n " + 
			"				<param name='allowScriptAccess' value='always'>\n " + 
			"				<param name='menu' value='false'>\n " + 
			"				\n " + 
			"				<param name='allowFullScreen' value='true'>\n " + 
			"				<div style='height: 100%; margin: 0; padding: 0; '> \n " + 
			"				<div id='center'> \n " + 
			"				<center>\n " + 
			"				<br>\n " + 
			"				<h1><font color='#C23352'>Flash Player Not Found!</font></h1>\n " + 
			"				<h3>Please install Adobe Flash Player & Restart SWF Player!</h3>\n " + 
			"				<h1>\n " + 
			"				<a href='https://market.android.com/details?id=com.adobe.flashplayer'>Go to the 'Android Market' >></a><br><br>\n " + 
			"				<a href='javascript:restartSWFPlayer()'>Restart SWF Player >></a>\n " + 
			"				</center>\n " + 
			"				</div> \n " + 
			"				</div>\n " + 
			"		</object>\n " + 
			"		<script type='text/javascript'>\n " + 
			"		    function getFlashInfo(){\n " + 
			"		    	CallJava.SetFlashInfo(myFlashMovie.TotalFrames(),myFlashMovie.CurrentFrame());\n " + 
			"		    }\n " + 
			"		    function restartSWFPlayer(){\n " + 
			"		    	CallJava.restartSWFPlayer();		    	\n " + 
			"		    }\n " + 
			"		    function callPlay(){\n " + 
			"		    	myFlashMovie.Play();\n " + 
			"		    }\n " + 
			"		    function callStop(){\n " + 
			"		    	myFlashMovie.StopPlay(); \n " + 
			"		    }\n " + 
			"		    function callRewind(){\n " + 
			"		    	myFlashMovie.Rewind();\n " + 
			"		    }		    \n " + 
			"		    function callFastforward(){		    			    	\n " + 
			"		    	myFlashMovie.GotoFrame(myFlashMovie.TotalFrames()-1);\n " + 
			"		    }\n " + 
			"		    function zoomIn(){\n " + 
			"		    	myFlashMovie.Zoom(90);\n " + 
			"		    }\n " + 
			"		    function zoomOut(){\n " + 
			"		    	myFlashMovie.Zoom(110);\n " + 
			"		    }\n " + 
			"		    function gotoFrame(goframe){\n " + 
			"		    	myFlashMovie.GotoFrame(goframe);\n " + 
			"		    }\n " + 
			"		</script>\n " + 
			"		</td> \n " + 
			"	</tr> \n " + 
			"</table> \n " + 
			"</center>\n " + 
			"\n " + 
			"</body>\n " + 
			Foot;
	},
    swfHtml : "<html>\n " + 
			"<head> \n " + 
			"<meta http-equiv='Content-Type' content='text/html; charset=utf-8' /> \n " + 
			"    <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, target-densitydpi=device-dpi' /> \n " + 
			"\n " + 
			"	<style type='text/css'> \n " + 
			"	<!-- \n " + 
			"		body {\n " + 
			"			margin: 0;\n " + 
			"			width: 100%;\n " + 
			"			height: 100%;\n " + 
			"			background-color: #000000;\n " + 
			"			color: #FFFFFF;\n " + 
			"		}\n " + 
			"		#center {\n " + 
			"			width: 600px;\n " + 
			"			height: 300px;\n " + 
			"			position: absolute;\n " + 
			"			top: 50%;\n " + 
			"			left: 50%;\n " + 
			"			margin: -150px 0 0 -300px;\n " + 
			"			border: 1px inset #ddd;\n " + 
			"		} \n " + 
			"		a {color: #E5E0B5;text-decoration:none;}  \n " + 
			"	//-->\n " + 
			"	</style>\n " + 
			"<title>empty</title>\n " + 
			"</head>\n " + 
			"<body>\n " + 
			"<center>\n " + 
			"<table width='100%' height='100%' cellpadding='0' cellspacing='0' border='0'> \n " + 
			"	<tr>\n " + 
			"		<td align='center' valign='middle'>\n " + 
			"		<object type='application/x-shockwave-flash'\n " + 
			"			id='myFlashMovie' \n " + 
			"			align='middle'\n " + 
			"			data='0000D5DB.SWF'\n " + 
			"			wmode=''\n " + 
			"			height='100%' \n " + 
			"			width='100%'>\n " + 
			"				<param name='movie' value='0000D5DB.SWF'>\n " + 
			"				<param name='quality' value='low'>\n " + 
			"				<param name='wmode' value='window'>\n " + 
			"				\n " + 
			"				<param name='allowScriptAccess' value='always'>\n " + 
			"				<param name='menu' value='false'>\n " + 
			"				\n " + 
			"				<param name='allowFullScreen' value='true'>\n " + 
			"				<div style='height: 100%; margin: 0; padding: 0; '> \n " + 
			"				<div id='center'> \n " + 
			"				<center>\n " + 
			"				<br>\n " + 
			"				<h1><font color='#C23352'>Flash Player Not Found!</font></h1>\n " + 
			"				<h3>Please install Adobe Flash Player & Restart SWF Player!</h3>\n " + 
			"				<h1>\n " + 
			"				<a href='https://market.android.com/details?id=com.adobe.flashplayer'>Go to the 'Android Market' >></a><br><br>\n " + 
			"				<a href='javascript:restartSWFPlayer()'>Restart SWF Player >></a>\n " + 
			"				</center>\n " + 
			"				</div> \n " + 
			"				</div>\n " + 
			"		</object>\n " + 
			"		<script type='text/javascript'>\n " + 
			"		    function getFlashInfo(){\n " + 
			"		    	CallJava.SetFlashInfo(myFlashMovie.TotalFrames(),myFlashMovie.CurrentFrame());\n " + 
			"		    }\n " + 
			"		    function restartSWFPlayer(){\n " + 
			"		    	CallJava.restartSWFPlayer();		    	\n " + 
			"		    }\n " + 
			"		    function callPlay(){\n " + 
			"		    	myFlashMovie.Play();\n " + 
			"		    }\n " + 
			"		    function callStop(){\n " + 
			"		    	myFlashMovie.StopPlay(); \n " + 
			"		    }\n " + 
			"		    function callRewind(){\n " + 
			"		    	myFlashMovie.Rewind();\n " + 
			"		    }		    \n " + 
			"		    function callFastforward(){		    			    	\n " + 
			"		    	myFlashMovie.GotoFrame(myFlashMovie.TotalFrames()-1);\n " + 
			"		    }\n " + 
			"		    function zoomIn(){\n " + 
			"		    	myFlashMovie.Zoom(90);\n " + 
			"		    }\n " + 
			"		    function zoomOut(){\n " + 
			"		    	myFlashMovie.Zoom(110);\n " + 
			"		    }\n " + 
			"		    function gotoFrame(goframe){\n " + 
			"		    	myFlashMovie.GotoFrame(goframe);\n " + 
			"		    }\n " + 
			"		</script>\n " + 
			"		</td> \n " + 
			"	</tr> \n " + 
			"</table> \n " + 
			"</center>\n " + 
			"\n " + 
			"</body>\n " + 
			"</html>\n "
};