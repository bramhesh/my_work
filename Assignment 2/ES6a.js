//arrow funtion declaration
let checkLogin = (email,password,allUsers) =>{
	//let keyword used instead of var
	let isUserFound = false
	let passwordCorrect = false

	//for of loop 
	for (currentUser of allUsers){

		console.log(currentUser)

		//currentUser used directly due to for of loop
		if(currentUser.email == email){

			if(currentUser.password == password){
				isUserFound = true
				passwordCorrect = true
				break
			} else {
				isUserFound = true
				passwordCorrect = false
				break
			}
		} else {
			isUserFound = false
		}
	}
	
	if(isUserFound == true && passwordCorrect == true) {
		alert('You are logged in')
	} else if(isUserFound == true && passwordCorrect == false) {
		alert('You have provided incorrect password')		
	} else {
		alert('No user with this email found')
	}
}


		
	
