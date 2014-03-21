chrome.browserAction.onClicked.addListener(function(tab){
	// inserts code to run in active tab
	chrome.tabs.insertCSS({file: "style.css"});
	chrome.tabs.executeScript({file: "test.js"});
});
chrome.browserAction.setPopup("");