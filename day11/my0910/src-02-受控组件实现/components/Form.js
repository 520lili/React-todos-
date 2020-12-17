import React, { Component } from 'react';

export default class Form extends Component {
	state = {
		msg: 'msg',
		info: '文本域',
		eat: '1',
		ischeck: false
	};

	// handle = (e) => {
	// 	this.setState({
	// 		msg: e.target.value
	// 	});
	// };

	// texthandle = (e) => {
	// 	this.setState({
	// 		info: e.target.value
	// 	});
	// };

	// sHandle = (e) => {
	// 	this.setState({
	// 		eat: e.target.value
	// 	});
	// };

	// // 复选框的事件处理函数
	// chandle = (e) => {
	// 	this.setState({
	// 		ischeck: e.target.checked
	// 	});
  // };
  

  // 将上面的函数,封装成一个
  // 高阶函数--> 函数柯里化
  allHandle = name => e => {
    
     let value = name === 'ischeck' ? e.target.checked : e.target.value
      this.setState({
        //把name当成变量来解析。需要加个 []
        [name]: value
      })
    }

    render() {
      return (
        <div>
          文本框:
          <input type="text" value={this.state.msg} onChange={this.allHandle("msg")} /><br/>
          文本域:
          <textarea name="" id="" cols="30" rows="10" value={this.state.info} onChange={this.allHandle("info")} /><br/>
          下拉框:
          <select name="" id="" value={this.state.eat} onChange={this.allHandle("eat")}>
            <option value="1">泡面</option>
            <option value="2">猪脚饭</option>
            <option value="3">辣条</option>
          </select><br/>
          多选框:
          <input type="checkbox" checked={this.state.ischeck} onChange={this.allHandle("ischeck")} />
        </div>
      );
    }
  }

	


