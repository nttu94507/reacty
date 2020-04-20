import React from "react"
import ReactDOM from "react-dom"

class MessageList extends React.Component {
    render(){
        let message = this.props.data.map((item)=>{
            return <li key={item.key}>{item.name}：{item.message}</li>
        })
        
        return(
            <ul>
                {message}
            </ul>
        )
    }
}

class MessageForm extends React.Component {
    render(){
        return <MessageList />
    }
}

ReactDOM.render(<MessageForm/>,document.getElementById('root'))