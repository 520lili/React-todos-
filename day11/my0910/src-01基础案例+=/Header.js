import React from 'react';
export default class extends React.Component {
	constructor() {
		super();
		this.state = {
			count: 1,
			msg: '萧淑慎'
		};
	}
	render() {
		return (
			<div>
				<h3>{this.state.count}</h3>

				<p>{this.state.msg}</p>
				<button
					onClick={() => {
						this.setState({
							count: this.state.count + 1
						});
					}}
				>
					按钮
				</button>
			</div>
		);
	}
}
