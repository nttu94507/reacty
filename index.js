import {createStore} from "redux" //importRedux套件


//取得資料
const data = {message:[{key:"1",name:'神Q',message:'嗨！大家好啊！'},
{key:"2",name:'小馬',message:'早安啊！昨天有沒有好好發文？'},
{key:"3",name:'王子',message:'ㄛ！別說了，那真的超級累！'},
{key:"4",name:'神Q',message:'哈哈哈！加油啦！再一下就結束了！'},
{key:"5",name:'王子',message:'結束後我一定要爆睡一頓！'},]}

//設定動作，雖然現在是空的
const addMessage = article => ({type:'addMessage',payload:article})
<<<<<<< HEAD


=======
>>>>>>> adbb14a5ab2ebe922ba5e831e50a8b4d20d9a880
//Reducer
const rootReducer = (state = data, action) => {
    //由action傳入的事件判斷指令為何
    switch (action.type) {
        //如果接收到addMessage的話
        case "addMessage":
            /*指定key值為現有長度+1，如果有刪除功能就不能這麼取了，
            但現在沒有，所以就簡單做*/
            action.payload.key = String(state.message.length+1)
            //這裡把接收到的資料payload增加到message的陣列中，並回傳整個state的內容
            return { ...state, message: [...state.message, action.payload] }
        default:
            return state
    }
}


//建立保管資料的store
const store = createStore(rootReducer)



//測試用加上去的，等等再把它拿掉：
window.store = store;
window.addMessage = addMessage;

export {store,addMessage}