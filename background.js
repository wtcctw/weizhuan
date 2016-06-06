// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Called when the user clicks on the browser action.

function checkUrl(url) {
  if (url == "http://www.baidu.com") {
    chrome.tabs.executeScript(tab.id, {file: 'wezhuan.js'});
  }
}


chrome.browserAction.onClicked.addListener(function(tab) {
  
  chrome.browserAction.getTitle({}, function(title){

    if (title.indexOf('offline') != -1) {
      chrome.browserAction.setTitle({title: '微赚联盟online'});
      chrome.browserAction.setIcon({path:'images/online.png'});
      chrome.runtime.sendMessage('online', function(response){
          document.write(response);
      });
    } else {
      chrome.browserAction.setTitle({title: '微赚联盟offline'});
      chrome.browserAction.setIcon({path:'images/offline.png'});
      
    }

  });
  
});

/*
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	if( changeInfo.url == undefined)return;
    var url = tab.url;
    console.log("tab.url: "+tab.url);
    console.log("changeInfo.url: "+tab.url);
    if(url != undefined && url == "http://www.233p.com/plugin.php?id=levbank:miss") {
        chrome.tabs.executeScript(tab.id, {file: 'wezhuan.js'});
    }
	
}); 
*/