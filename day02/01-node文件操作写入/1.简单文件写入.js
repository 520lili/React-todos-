const fs = require('fs');

fs.writeFile(
	__dirname + '/text.txt',
	'详细',
	{
		flag: 'a'
	},
	err => {
		if (err) console.log(err);
		else console.log('写入成功');
	}
);

//会覆盖前面的任何内容
// fs.writeFile('./text.txt', "hello", err =>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("写入成功");
//     }
// } )

