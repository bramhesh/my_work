let friendlist= [{
 
       "id":3,           
       "name":"bejo",
       "place":"kanyakumari",
       "email":"bejojeffrin12@gmail.com",
       "mobilenumber":564735645364,
       "fav":["cricket","football","kabadi"]
},
  {  
       "id":4,
       "name":"prashanth",
       "place":"pudhukkottai",
       "email":"aruashok23@gmail.com",
       "mobilenumber":87654567484,
       "fav":["hockey","kabadi","wrestling"]
   } ,
    {  "id":5,
       "name":"ashok",
       "place":"mjishdjd",
       "email":"piysgjsiiy@Gmail.com",
       "mobilenumber":78646483623,
       "fav":["bhsid","gshgsshgd","hdhga"]
       
  }    
 ]
// arrow function converting CSV to array(REST)
let multipleId = (...pid) =>{
  for(allUser of friendlist){
    for (let j = 0; j < pid.length; j++){    
    if (allUser.id == pid[j]) {
       console.log(allUser) 
    }
  }
  }
}
  let fid = window.prompt('Enter the ids seperated by comma')
  // converting array to CSV(SPREAD)
  multipleId(...fid)