import React from "react"
import {HashRouter,Route,Link} from "react-router-dom"
import {About} from "../About"
import {Title} from "../Title"
import {Home} from "../Home"

class Main extends React.Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Title title="功能選單" />
                    <ul>
                        <li><Link to="/">回到首頁</Link></li>
                        <li><Link to="/about">關於我們</Link></li>
                    </ul>
                    {/*這邊塞一個分隔線*/}
                    <hr />
                    {/*路徑指定/代表根目錄，所以預設就會渲染Home組件，
                    而後方有/about的話會渲染About*/}
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                </div>
            </HashRouter>
        )
    }
}

export {Main}