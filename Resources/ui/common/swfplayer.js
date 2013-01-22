//FirstView Component Constructor
function Swfplayer(rowdata) {
	var webview = null;
	var w = Ti.UI.createWindow({
		navBarHidden:true,
		exitOnClose:rowdata.exitOnClose
		//,
		// activity : {
			// onCreateOptionsMenu : function(e) {
				// var menuItem = e.menu.add({ title : 'Reload' });
				// menuItem.addEventListener('click', function(e) {
					// webview.reload();
				// });
			// }
		// }
	});
	w.orientationModes = [
		Titanium.UI.PORTRAIT,
		Titanium.UI.LANDSCAPE_LEFT,
		Titanium.UI.LANDSCAPE_RIGHT
	];

	if (rowdata.auto === true)
	{
		webview = Ti.UI.createWebView({height:Ti.UI.SIZE,width:Ti.UI.SIZE});
	}
	else
	{
		webview = Ti.UI.createWebView();
		webview.setPluginState(Titanium.UI.Android.WEBVIEW_PLUGINS_ON);
		Ti.API.info("webview setPluginState!");
		//webview.pluginState = Titanium.UI.Android.WEBVIEW_PLUGINS_ON;
	}
	
	{
		//
		// handle other cases
		//
		if (rowdata.url)
		{
			webview.url = rowdata.url;
		}
		else
		{
			webview.html = rowdata.innerHTML;
		}
		
		if (rowdata.scale)
		{
			// override the default pinch/zoom behavior of local (or remote) webpages
			// and either allow pinch/zoom (set to true) or not (set to false)
			webview.scalesPageToFit = true;
		}
		
		if (rowdata.username)
		{
			webview.setBasicAuthentication(rowdata.username, rowdata.password);
		}
		
		// test out applicationDataDir file usage in web view
		// var f1 = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory, 'images', 'apple_logo.jpg');
		// var f2 = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory,'apple_logo.jpg');
		// f2.write(f1);
// 			
		// webview.addEventListener('load',function(e)
		// {
			// Ti.API.debug("webview loaded: "+e.url);
			// if (rowdata.evaljs)
			// {
				// alert("JS result was: "+webview.evalJS("window.my_global_variable")+". should be 10");
			// }
			// if (rowdata.evalhtml)
			// {
				// alert("HTML is: "+webview.html);
			// }
			// Ti.App.fireEvent('image', {path:f2.nativePath});
		// });
		if (rowdata.bgcolor)
		{
			webview.backgroundColor = rowdata.bgcolor;
		}
		if (rowdata.border)
		{
			webview.borderRadius=15;
			webview.borderWidth=5;
			webview.borderColor = 'red';
		}
		
		var toolbar = null;

		
		if (rowdata.partial)
		{
			webview.top = 100;
			webview.bottom = 0;
		}
			
		
		Ti.API.info("webview init!");
		w.add(webview);
		
		// var btnPause = Titanium.UI.createButton({
			// title : 'Pause',
			// height : 50,
			// width : 130,
			// top : 800,
			// right : 50
		// });
// 		
		// var btnResume= Titanium.UI.createButton({
			// title : 'Resume',
			// height : 50,
			// width : 130,
			// top : 880,
			// right : 50
		// });
// 			
		// btnPause.addEventListener("click",function(){
			// Ti.API.info("webview btnPause!");
			// webview.pause();
		// });
// 			
		// btnResume.addEventListener("click",function(){
			// Ti.API.info("webview btnResume!");
			// webview.resume();
		// });
// 			
		// w.add(btnPause);
		// w.add(btnResume);
	

		function OnAppPause(e) {
			Ti.App.fireEvent("logw",{info:"App OnAppPause!!!"});
			//Ti.App.fireEvent("swf_pause",{});
			webview.pause();
		}
		
		function OnAppResume(e){
			Ti.App.fireEvent("logw",{info:"App OnAppResume!!!"});
			//Ti.App.fireEvent("swf_resume",{});
			webview.resume();
		}
		
		function OnAppDestroy(e){
			Ti.App.fireEvent("logw",{info:"App OnAppDestroy!!!"});
			//Ti.App.fireEvent("swf_pause",{});
			webview.pause();
		}
		
		w.addEventListener("open", function() {
		    var activity = w.activity;
		    activity.addEventListener('resume', OnAppResume);
		    activity.addEventListener('pause', OnAppPause);
		    activity.addEventListener('destroy', OnAppDestroy);
		});						
		
		w.addEventListener("android:back",function(){
			//Ti.App.fireEvent("mylog",{info:"windows close!!!"});
			//btnPause.fireEvent("click",{});
			//Ti.App.fireEvent("logw",{info:"windows android:back!!!"});
			//Ti.App.fireEvent("swf_pause",{});
			webview.pause();
			w.close();
		});
				
		w.open();							
	}	
	return w;
}

module.exports = Swfplayer;