import React from "react"
import { Link, Route, Switch, Redirect } from "react-router-dom"

class About extends React.Component{
    render(){
        console.log(this.props.match)
        return (
        <div>
            <h2>關於我們選單</h2>
            <ul>
                <li><Link to={`${this.props.match.url}/introd`}>理念介紹</Link></li>
                <li><Link to={`${this.props.match.url}/his`}>歷史沿革</Link></li>
                <li><Link to={`${this.props.match.url}/story`}>品牌故事</Link></li>
            </ul>
            <Switch>
                <Route exact path={`${this.props.match.path}/introd`} component={Introd} />
                <Route  path={`${this.props.match.path}/his`} component={His} />
                <Redirect from={`${this.props.match.path}/story`} to={{pathname:`${this.props.match.path}/his`,search: "?hey=uccu",state:{name:'Referrer'}}}/>
            </Switch>
            
        </div>
        )
    }
}


class Aboutcontent extends React.Component{
    render(){
        console.log(this.props.match)
        let content
        if (this.props.match.path == "introd")
            content = "這裡是理念介紹"

        else if (this.props.match.path == "his")
            content = "這裡是歷史沿革" 
        else
            content = "頁面維護中..."   
        
        return(<p>{content}</p>)
    }
}

class Introd extends React.Component {
    render() {
        return <p>這裡是理念介紹</p>
    }
}

class His extends React.Component {
    render() {
        console.log(this.props.location.state)
        return <p>這裡是歷史沿革</p>
    }
}

class Nopage extends React.Component{
    render() {
        return <p>頁面維護中...</p>
    }
}


export {About}