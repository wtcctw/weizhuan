// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Called when the user clicks on the browser action.



chrome.browserAction.onClicked.addListener(function(tab) {
    var url = tab.url;
    var tabId = tab.id;
    chrome.browserAction.getTitle({}, function(title){
      if (title.indexOf('offline') != -1 && url.indexOf("id=levbank:miss") != -1 ) {
        chrome.browserAction.setTitle({title: '微赚联盟online'});
        chrome.browserAction.setIcon({path:'images/online.png'});
        chrome.tabs.sendMessage(tabId, {action:"online"}, function(response){});
      } else {
        chrome.browserAction.setTitle({title: '微赚联盟offline'});
        chrome.browserAction.setIcon({path:'images/offline.png'});
        chrome.tabs.sendMessage(tabId, {action:"offline"}, function(response){});
      }
    });
  
});


chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  var url = tab.url;
  chrome.browserAction.getTitle({}, function(title){
  	if( title.indexOf('online')!=-1 && url.indexOf("id=levbank:miss") != -1) {
      chrome.tabs.sendMessage(tabId,{action:"updated"},function(response){});
    }	
  });
}); 


