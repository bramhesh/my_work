//arrow function declaration
let bubble_Sort = (a) => {
  //let keyword used instead of var
  let swapp;
  let n = a.length - 1
  let x = a
  
  do {
    swapp = false
   
    for (let i = 0; i < n; i++) {
    
      if (x[i] < x[i + 1]) {
    	//swapping
        let temp = x[i]
        x[i] = x[i + 1]
        x[i + 1] = temp
        swapp = true
      }
    }
    n--
  
  } while (swapp)

return x
}


let s = [4, 9, 8, 2, 1]
console.log(bubble_Sort(s))

