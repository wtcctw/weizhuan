var outBtn;
var innerBtn;
function begin() {
	console.log("begin")
	outBtn = setInterval(function(){
		var btn = document.getElementById('payname_four');
		console.log(btn);
		if (btn) {
			btn.click();
			console.log('outer button clicked!');
		}
	}, Math.ceil(Math.random()*10+2)*1000);

	innerBtn = setInterval(function(){
		var as = document.querySelectorAll('#get_orders a');
		[].forEach.call(as, function(a){
			a.click();
			console.log('inner button clicked!');
		});
	}, 10);
	
	console.log(outBtn);
	console.log(innerBtn);
}

function end() {
	console.log("end");
	console.log(outBtn);
	console.log(innerBtn);
	clearInterval(outBtn);
	clearInterval(innerBtn);
}