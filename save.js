function save(){
	var rollnumber = document.getElementById('rollnumber').value;
	var password = document.getElementById('password').value;
	chrome.storage.local.set({'rollnumber': rollnumber}, function(){});
	chrome.storage.local.set({'password': password}, function(){});
} 
document.getElementsByName("submit")[0].addEventListener('click',function(){
	 save();
});