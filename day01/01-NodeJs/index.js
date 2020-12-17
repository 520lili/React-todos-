const uniq = require('uniq');

/* const arr = [1,2,42,4,5,1,5,4];
console.log(uniq(arr)); */
/* let arr2 = [ 1, 2, 3 ];
let arr3 = [...arr2];
arr3.push(4);
console.log(arr2, arr3);

let arr4 = [...arr2, ...arr3];
console.log(uniq(arr4)) */

/* let arr = [ 1, 2, 3 ];
function Iterator() {
	//用一个计数器，保存现在处理到哪里了
	let index = 0;
	return {
		next: () => {
			if (index < arr.length) {
				return {
					value: arr[index++],
					done: false
				};
			} else {
				return {
					done: true
				};
			}
		},
	};
}

//只要调用这个Iterator接口，就可以依次处理成员了
let it = Iterator(arr);
console.log(it);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value); */



