var ind=["del","agr","fff"]
console.log(ind.length)//3

ind[0]="hae" //replace
console.log(ind);//[ 'hae', 'agr', 'fff' ]

ind.pop()//remove  last element
console.log(ind);
// [ 'hae', 'agr', 'fff' ]
// [ 'hae', 'agr' ]

ind.unshift("ahah") //add at first
console.log(ind);
// [ 'hae', 'agr' ]
// [ 'ahah', 'hae', 'agr' ]

ind.shift()//remove at first
console.log(ind);
// [ 'ahah', 'hae', 'agr' ]
// [ 'hae', 'agr' ]

ind.push("hongkon")//add at last
console.log(ind)
//[ 'hae', 'agr' ]
// [ 'hae', 'agr', 'hongkon' ]

console.log(ind.indexOf("agr"))// position 1
console.log(ind.indexOf("agdffdr"))//-1

console.log(Array.from("rrgwer"+55))
// [
//     'r', 'r', 'g',
//     'w', 'e', 'r',
//     '5', '5'
//   ]
