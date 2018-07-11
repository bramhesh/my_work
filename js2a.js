let a = [{
	'id' : 123,
	'name' : 'bram'
},
{
	'id' : 404,
	'name' : 'jack'	
},
{
	'id' : 846,
	'name' : 'ram'
}
]
for(x in a){
	console.log(a[x])
}
for(x of a){
	console.log(x)
}