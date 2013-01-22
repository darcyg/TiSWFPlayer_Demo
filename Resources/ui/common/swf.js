function swf() {
	var swfplayer = require('ui/common/swfplayer');

	var tempDir = Ti.Filesystem.getFile(Ti.Filesystem.getExternalStorageDirectory(),            
	    'Data');
	if (! tempDir.exists()) {
	    tempDir.createDirectory();
	}
	
	// .resolve() provides the resolved native path for the directory.
	var dataFile  = Ti.Filesystem.getFile(tempDir.resolve(), "load.data");
	Ti.API.info("dataFile path is: " + dataFile.resolve());
	if (dataFile.exists()) {
		Ti.API.info("file exist!");
	    // handle write error
	    fd = dataFile.read();
	    obj = JSON.parse(fd.toString());
	    fd = null;
	    obj.count++;
	    dataFile.write(JSON.stringify(obj));
	}else{
		Ti.API.info("file not exist!");
		//dataFile.createFile();
		//obj = {loadurl:"/web/FlashPlayer1.html",count:1};
		obj = {swfurl:"LOCALPATH/0000D5DB.SWF",hasSaveHtml:false,loadurl:"",count:1};
		if (!dataFile.write(JSON.stringify(obj)))
		{
			//alert("write err" + dataFile.resolve());
		}
	}
	
	//obj.swfurl = "LOCALPATH/0000D5DB.SWF";
	
	if (obj.swfurl)
	{
		hasHtml = obj.hasSaveHtml;
		var globals = require("Globals").Globals;
		tpl = globals.getSwfHtml(obj.swfurl.replace("LOCALPATH",tempDir.resolve()),hasHtml);
		/*
		if (obj.isLocal)
		{
			tpl = globals.getSwfHtml(tempDir.resolve()+"/"+obj.swfurl,hasHtml);	
		}else{
			tpl = globals.getSwfHtml(obj.swfurl,hasHtml);
		}
		*/
		
		//tpl = globals.getSwfHtml("app://Resource/web/0000D5F1.SWF",hasHtml);
		//alert(tpl);
		//Ti.API.info(tpl);
		//tpl.replace("0000D5F1.SWF","0000D5DB.SWF");//obj.swfurl);
		//Ti.API.info(tpl);
		if (!hasHtml)
		{
			obj.innerHTML= tpl;
		}else{
			var locFile  = Ti.Filesystem.getFile(tempDir.resolve(), "tpl.html");
			locFile.write(tpl);
			obj.url = locFile.resolve();
			locFile = null;	
		}
	}else{
		obj.url = obj.loadurl;
	}
	if (obj.notExitOnClose == true)
	{
		obj.exitOnClose = false;
	}else{
		obj.exitOnClose = true;
	}
	//Ti.API.info(obj.loadurl + " " +obj.count);
	// dispose of file handles
	dataFile = null;
	tempDir = null;
	
	
	plySwf = swfplayer(obj);
	
	return plySwf;
};

module.exports = swf;
