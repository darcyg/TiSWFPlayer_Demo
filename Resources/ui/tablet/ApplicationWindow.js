//Application Window Component Constructor
function ApplicationWindow() {
	//load component dependencies
	var swfWnd = require('ui/common/swf');
		
	// //create component instance
	// var self = Ti.UI.createWindow({
		// backgroundColor:'#ffffff',
		// navBarHidden:true,
		// exitOnClose:true
	// });
// 		
	// //construct UI
	// var firstView = new FirstView();
	// self.add(firstView);
	
	self = new swfWnd();
	
	return self;
}

//make constructor function the public component interface
module.exports = ApplicationWindow;
