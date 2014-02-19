document.getElementsByName('username')[0].value = chrome.storage.local.get('rollnumber',function(){});
document.getElementsByName('password')[0].value = chrome.storage.local.get('password',function(){});
//document.getElementsByName('username')[0].value = localStorage['rollnumber']
//document.getElementsByName('password')[0].value = localStorage['password']
document.getElementById('logincaption').click();