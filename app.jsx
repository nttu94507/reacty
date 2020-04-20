import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from "redux"

// class AddButton extends React.Component{
//   constructor(props){
//       super(props)
//       this.state = ({clickCount : 0})
//       //在constructor指定呼叫addCount，並在呼叫時指定this為class本身
//       this.addCount = this.addCount.bind(this)
//   }
  
//   addCount(count) {
//     console.log(`每次添加值:${count}`)
//     this.setState({clickCount:this.state.clickCount + count})
//   }
  
//   componentDidUpdate(){
//     //把原本在addCount中的console.log移到componentDidUpdate()中
//     console.log(`點了${this.state.clickCount}下`)
// }
  
//   render(){
//       return <input type="button" 
//                     onClick={this.addCount.bind(this,2)} value="點我" />
//   }
// }

//另外建立一個組件HelloTitle
// class HelloTitle extends React.Component{
//     render(){
//         //將props.title的值帶入標題
//         return <h1>{this.props.title}！您好！</h1>
//     }
// }

// class InputGender extends React.Component{
//   constructor(props){
//       super(props)
//       this.state = ({gender : 'M'})
//       this.changeGender = this.changeGender.bind(this)
//   }

//   changeGender(event){
//       this.setState({gender:event.target.value})
//   }
//   componentDidUpdate(){
//       console.log(`已將state.gender變動為：${this.state.gender}`)
//   }
//   render(){
//     let title
//     // if(this.state.gender == "M")
//     //         //如果是男生就將title設為先生，並將HelloTitle組件給title變數
//     //         title = <HelloTitle title="先生" />
//     //     else
//     //         //女生則相反
//     //         title = <HelloTitle title="小姐" />

    
//       return (<div>
//             {/*用花括號括住剛剛設定成HelloTitle組件的變數title*/}
//             {title}
//             {(this.state.gender == "M")?
//             <HelloTitle title="先生"/>:<HelloTitle title="小姐"/>
//             }

//             <select onChange={this.changeGender.bind(this)}>
//                 <option value="M">男</option>
//                 <option value="W">女</option>
//             </select>
//         </div>)
//   }
// }

//判斷溫度是否達沸點
// class Title extends React.Component {
//     render(){
//         //溫度100度以上就到達沸點
//         return <h1>{(this.props.temperature>=100 ? '達到沸點!!!':'未到沸點...')}</h1>
//     }
// }

// class Celsius extends React.Component {
//     constructor(props) {
//         super(props)
//         //用state來記錄溫度數值
//         this.state = ({ temperature : 0 })
//         //設定changeState是在此class下執行
//         this.changeState = this.changeState.bind(this)
//     }

//     changeState(event){
//         //取得目前輸入的值
//         let temperature = event.target.value
//         //把值寫到state裡面
//         this.setState({ [event.target.name] : temperature })
//     }

//     render() {
//         return(
//             /*用Title組件顯示目前輸入的溫度*/
//             <div>
//                 <Title temperature={this.state.temperature} />
//                 {/*這裡顯示輸入的溫度*/}
//                 <span>目前攝氏溫度是：{this.state.temperature}</span><br/>
//                 {/*輸入溫度的地方*/}
//                 <input name="temperature" 
//                         value={this.state.temperature} 
//                         onChange={this.changeState}/>
//             </div>
//         )
//     }
// }

let data = [{id:'1',name:'神Q',message:'嗨！大家好啊！'},
            {id:'2',name:'小馬',message:'早安啊！昨天有沒有好好發文？'},
            {id:'3',name:'王子',message:'ㄛ！別說了，那真的超級累！'},
            {id:'4',name:'神Q',message:'哈哈哈！加油啦！再一下就結束了！'},
            {id:'5',name:'王子',message:'結束後我一定要爆睡一頓！'},]


class Message extends React.Component{
    render(){
        //這邊做一些簡單的樣式，不然留言會全部擠在一起
        let divStyle={marginBottom:20}
        let messageStyle={marginLeft:20}
        return(
            <div style={divStyle}>
                {/*把每筆傳進來的留言資料都放好後回傳*/}
                <div>{this.props.name}對大家說：</div>
                <div style={messageStyle}>{this.props.message}</div>
            </div>
        )
    }
}



class MessageBlock extends React.Component{
    render(){
        let message = this.props.messageData.map((item)=>{
            //在這裡用if判斷留言者item.name中是否含有this.props.searchName的值，如果有就執行，沒有就不動作
            if(item.name.indexOf(this.props.searchName)!=-1 || item.message.indexOf(this.props.searchName)!=-1 )
                return <Message key={item.id} name={item.name} message={item.message} />
        })
        return (
            <div>
                {message}
            </div>
        )
    }
}

class SearchBlock extends React.Component{
    render(){
        return(
            <div>
                <span>搜尋留言人：</span>
                {/*這裡將MessageForm的state.name給輸入框的value，
                並設定onChange再值改變的時候可以執行changeState事件*/}
                <input type="text" 
                        value={this.props.searchName}
                        onChange={this.props.changeState} />
            </div>
        )
    }
}

class MessageForm extends React.Component{

    constructor(props){
        super(props)
        //增加了state.name用來放篩選留言者的值
        this.state = ({name:''})
        //照慣例也新增個changeState用來在使用者輸入值的時候觸發事件，改變state
        this.changeState = this.changeState.bind(this)
    }
    
    //更新使用者目前輸入的值到state中
    changeState(event){
        this.setState({name:event.target.value})
    }

    render(){
        return(
            <div>
                {/*把state中的name和執行的事件都用props給SearchBlock*/}
                <SearchBlock searchName={this.state.name}
                                changeState={this.changeState} />
                <hr />
                {/*這裡也要傳入state的name用來篩選留言*/}
                <MessageBlock messageData={this.props.messageData} 
                                searchName={this.state.name} />
            </div>
        )
    }
}


ReactDOM.render(<MessageForm messageData={data} />, document.getElementById('root'))

// ReactDOM.render(<MessageForm  />, document.getElementById('root'))



//一開始拿到的資料
// const data = {num : 1}
//動作指令設定
const addNum = article => ({ type: "addNum", payload: article })


const rootReducer = (state = data, action) => {
    //用switch.type來判斷指令為何
    switch (action.type) {
        case "addMessage":
            break;
            // return {num: state.num + action.payload }
        default:
            //沒有符合執行動作的條件就不做處理直接回傳
            return state
    }
}

//託付剛剛的一番辛苦完成的Reducer
const store = createStore(rootReducer)
//這邊多加了一個data是想讓大家確認原本的資料是不會變的！
window.data = data;
window.store = store;
window.addNum = addNum;



