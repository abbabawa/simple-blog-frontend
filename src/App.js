import React, {useEffect, useState} from 'react'
import './bootstrap-5.0.1/css/bootstrap.css'
import Header from './components/Header'
import SideBar from './components/SideBar'
import Articles from './components/Articles'
import Author from './components/Author'
import Article from './components/Article'

import { Route, Switch } from 'react-router';
import Login from './components/Login'
import Register from './components/Register'

import {useHistory} from 'react-router-dom'

const headers = {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'POST',}
const makePostRequest = async (data, url)=>{
    
    return new Promise((resolve, reject)=>{
		fetch(url, {
				method: 'POST',
                port: 3000,
                path: '/',
                
				body: JSON.stringify(data),
                headers: headers
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

const makeGetRequest = async (url)=>{
    return new Promise((resolve, reject)=>{
		fetch(url).then((response) =>(
				response.json().then((res)=>{console.log(res)
					resolve(res)
				}))
		).catch(err=>{console.log(err.message)
				resolve({status:0, message: "An Error occurred while making request, please try again.."})
				//reject(err)
		})
	})
}

const testGet = async (url)=>{
    return new Promise((resolve, reject)=>{
		fetch(url).then((response) =>(
				response.json().then((res)=>{console.log(res);
					resolve(res)
				}))
		).catch(err=>{console.log(err)
				resolve({status:0, message: "An Error occurred while making request, please try again.."})
				//reject(err)
		})
	})
}

function App(){
    const [categories, setCategories] = useState([])
    let history = useHistory()

    useEffect(()=>{
        makeGetRequest('/categories').then(res=>{
            setCategories(res)
        })
    }, [])

    const login = async (data)=>{
       let res = await makePostRequest(data, '/auth')
       if(res.status){
           headers.Authorization = 'Bearer '+res.accessToken
           history.push('/')
       }
    }

    const [articles, setArticles] = useState([])
    useEffect(()=>{
        makeGetRequest('/articles').then(res=>{setArticles(res)})
        //setArticles(res)
    }, [])

    const getArticle = async (article)=>{//console.log(articles)
        let res = articles.find(val=>{return val._id === article})
        if(!res){
            return makeGetRequest('/article/'+article)
        }else{
            return res
        }
    }

    return (
        <div className="container-fluid px-0">
            <div className="row">
                <div className="col-12">
                    <Header />
                </div>
            </div>    
            <div className="row">
                <div className="col-md-2 border-end">
                    <SideBar categories={categories} />
                </div>
                <div className="col-md-9">
                    <Switch>                    
                        <Route path="/article/:articleId">
                            <Article getArticle={getArticle}  />
                        </Route>
                        <Route path="/authors">
                            <Author />
                        </Route>
                        <Route exact path="/">
                            <Articles articles={articles} />
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
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossOrigin="anonymous"></script>
        </div>
    )
}

export default App