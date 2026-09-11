//your JS code here. If required.


function clc(){
	const age = document.getElementById('age').value
	const name = document.getElementById('name').value
	if(age.toString().length<=0 || name.length<=0){
		alert("Please enter valid details")
	}
	else{
		const myprom = new Promise((resolve,reject)=>{
			if(age>18){
				setTimeout(()=>{
					resolve(`Welcome, ${name}. You can vote.`)
				},4000)
			}
			else{
				setTimeout(()=>{
					reject(`Oh sorry ${name}. You aren't old enough.`)
				},4000)
			}
		})
			myprom.then((data)=>{
	alert(data)
}).catch((err)=>{
	alert(err)
})
	}

	
}

