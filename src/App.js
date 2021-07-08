import './bootstrap-5.0.1/css/bootstrap.css'
import Header from './components/Header'
import SideBar from './components/SideBar'
import Articles from './components/Articles'
import Author from './components/Author'
import Article from './components/Article'

import { Route, Switch } from 'react-router';
import Login from './components/Login'
import Register from './components/Register'

const makePostRequest = (data, url)=>{
    return new Promise((resolve, reject)=>{
		fetch(url, {
				method: 'POST',
                port: 3000,
                path: '/',
                mode: 'cors',
				body: JSON.stringify(data),
                headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*',
                            'Access-Control-Allow-Methods': 'POST',}
		}).then((response) =>(
				response.json().then((res)=>{console.log(res)
					resolve(res)
				}))
		).catch(err=>{console.log(err.message)
				resolve({status:0, message: "An Error occurred while making request, please try again.."})
				//reject(err)
		})
	})
}

function App(){
    const login = (data)=>{
        makePostRequest(data, 'http://localhost:3000')
    }
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
                    <Switch>                    
                        <Route path="/article">
                            <Article />
                        </Route>
                        <Route path="/authors">
                            <Author />
                        </Route>
                        <Route exact path="/">
                            <Articles />
                        </Route>
                        <Route path="/login">
                            <Login login={login} />
                        </Route>
                        <Route path="/register">
                            <Register />
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default App