import React from "react"
import ReactDOM from "react-dom"
import {store,addMessage} from "./index.js"
import {connect,Provider} from "react-redux"

class MessageList extends React.Component {
    render(){
        let message = this.props.data.map((item)=>{
            return <li>{item.name}：{item.message}</li>
        })
        return(
            <ul>
                {message}
            </ul>
        )
    }
}



//上方的data會被傳入這個function中的state
const mapStateToProps = state => {
    /*透過回傳的物件來指定要取的資料，
    這裡把message取走，然後key值用data回傳*/
    return { data: state.message }
}

const mapDispatchToProps = dispatch => {
    return {
        addMessage: article => dispatch(addMessage(article))
      }    
}

class ConnectMessageForm extends React.Component {
    render(){
        return(
            <div>
                {/*把兩個組件放進來，一個需要資料一個需要事件
                這裡用props來傳，因為ConnectMessageForm等等會被connect
                資料也是傳到他的props中*/}
                <InputMessage addMessage={this.props.addMessage} />
                <MessageList data={this.props.data} />
            </div>
        )
    }
}



class InputMessage extends React.Component {
    constructor(props){
        super(props)
        this.state = ({name:'',message:''})
        this.clearMessage = this.clearMessage.bind(this)
        this.changeState = this.changeState.bind(this)
        this.submitMessage = this.submitMessage.bind(this)
    }

    changeState(event){
        this.setState({[event.target.name]:event.target.value})
    }

    clearMessage(){
        this.setState({name:'',message:''})
    }

    submitMessage(){
        /*key值在這邊先給空的，新值會由reducer中處理給他*/
        let messageData = {
            key:'',
            name:this.state.name,
            message:this.state.message,
        }
        this.props.addMessage(messageData)
        this.clearMessage()
    }

    render(){
        return(
            <div>
                暱稱：<input type="text" name="name" 
                            value={this.state.name}
                            onChange={this.changeState} />
                <br/>
                訊息：
                <br/><textarea name="message" 
                                value={this.state.message}
                                onChange={this.changeState}></textarea>
                <input type="button" value="送出留言"
                        onClick={this.submitMessage} />
            </div>
        )
    }
}

const List = connect(mapStateToProps)(MessageList)
//connect第一個參數是資料，第二個是事件之後把結果放到MessageForm中
const MessageForm = connect(mapStateToProps,mapDispatchToProps)(ConnectMessageForm)

ReactDOM.render(<Provider store={store}>
    <MessageForm />
</Provider>,
document.getElementById('root1'))