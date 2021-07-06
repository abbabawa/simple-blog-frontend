import './bootstrap-5.0.1/css/bootstrap.css'
import Header from './components/Header'
import SideBar from './components/SideBar'
import Articles from './components/Articles'
import Author from './components/Author'
import Article from './components/Article'

import { Route } from 'react-router';

function App(){
    return (
        <div className="container-fluid px-0">
            <div className="row">
                <div className="col-12">
                    <Header />
                </div>
            </div>    
            <div className="row">
                <div className="col-md-2 border-end d-flex vh-100">
                    <SideBar />
                </div>
                <div className="col-md-9">
                    <Route path="/article">
                        <Article />
                    </Route>
                    <Route path="/authors">
                        <Author />
                    </Route>
                    <Route path="/articles">
                        <Articles />
                    </Route>
                </div>
            </div>
        </div>
    )
}

export default App