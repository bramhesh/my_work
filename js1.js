var emp = [ {
      'name':'ishu',
      'sno': '1'
},
{
	'name':'vikas',
	'sno':'2'
},
{
	'name':'bram',
	'sno':'3'
}
]
function findEmp(name,sno,allemp){
	var userFound=false
	var snoFound=false
	for(var currentemp in allemp){
		if(name==allemp[currentemp]['name']){
			if (sno==allemp[currentemp]['sno']) {
				userFound=true
				snoFound=true
				break	
			}
			else{
				userFound=true
				snoFound=false
				break
			}
		}
			else {
				userFound=false
			}
		}
	if (userFound==true && snoFound==true) {
		alert('user is present')
	}else if(userFound==true && snoFound==false){
		alert('wrong sno')
	}else{
		alert('user not found')
	}

}

var empName=window.prompt('Enter user name')
var empSno=window.prompt('Enter sno')
findEmp(empName,empSno,emp)