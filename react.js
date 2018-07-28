	class PutData extends React.Component {
			  constructor() {
			    super()
			    this.state = { isClickable: true }
		  }
		  handleButtonClickTest = (e) => {
		    this.setState({ isClickable: false })
		    const promise = new Promise((resolve, reject) => {
		      setTimeout(resolve, 3000)
		    })
		    promise.then(() => {
		      this.setState({ isClickable: true })
		    })
		  }   
		  handleButtonClick = (e) => {
		    // 按钮为不可点按状态
		    this.setState({ isClickable: false })
					
		    fetch('https://www.baidu.com/', {
		      method: 'GET'
		    })
		    .then((response) => {
		      // ok 代表状态码在 200-299
		      if (!response.ok) throw new Error(response.statusText)
		      return response.json()
		    })
		    .then((items) => {
		      // 载入数据
		      // this.setState({items})
		      // 回复按钮可被点按状态
		      this.setState({ isClickable: true })
		    })
		    .catch((error) => {
		      // 回复按钮可被点按状态
		      this.setState({ isClickable: true })
		      // 异常处理
		      console.error(error)
		    })
		  }
		    render() {
		    return (
		     <button onClick={this.handleButtonClickTest} 
		     disabled={!this.state.isClickable}>
             {this.state.isClickable ? '向服务端发送数据' : '正在响应中...'}
      		</button>
		    )
		  }
		  }
		  ReactDOM.render(
		  <PutData />,
		  document.getElementById('example')
		);