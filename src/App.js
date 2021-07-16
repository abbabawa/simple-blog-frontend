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

import {useHistory, useParams} from 'react-router-dom'

import user from './User'
import UploadArticle from './components/UploadArticle'
import EditArticle from './components/EditArticle'
import Authors from './components/Authors'
import EditProfile from './components/EditProfile'

let headers = {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'POST', 'Authorization': ''}
const makePostRequest = async (data, url, headerValues)=>{
    
    return new Promise((resolve, reject)=>{console.log(data)
        headers.Authorization = user.getToken()
		fetch(url, {
				method: 'POST',
                port: 3000,
                path: '/',
                
				body: JSON.stringify(data),
                headers: headerValues
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

const makePatchRequest = async (data, url, headerValues)=>{
    
    return new Promise((resolve, reject)=>{console.log(data)
        headers.Authorization = user.getToken()
		fetch(url, {
				method: 'PATCH',
                port: 3000,
                path: '/',
                
				body: JSON.stringify(data),
                headers: headerValues
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

const makeDeleteRequest = async (data, url, headerValues)=>{
    
    return new Promise((resolve, reject)=>{console.log(data)
        headers.Authorization = user.getToken()
		fetch(url, {
				method: 'DELETE',
                port: 3000,
                path: '/',
                
				body: JSON.stringify(data),
                headers: headerValues
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
				response.text().then((res)=>{console.log(res);
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

    //const [userDetails, setUserDetails] = useState({id: 0, name: ''})

    const login = async (data)=>{
       let res = await makePostRequest(data, '/auth', headers)
       if(res.status){
           headers.Authorization = 'Bearer '+res.accessToken
           console.log(headers)
           //setUserDetails({id: res.id, name: res.name})
           user.setId(res.id)
           user.setName(res.name)
           user.setToken('Bearer '+res.accessToken)
           history.push('/')
       }
    }

    const register = async (data)=>{
        return new Promise((resolve, reject)=>{
            makePostRequest(data, '/user').then(res=>{
                if(res._id){
                    history.push('/author/'+res._id)
                    resolve({status: 1})
                }else{
                    resolve({status: 0, message: 'Registration was unsuccessfull'})
                }
            })
        })
        
    }

    const saveArticle = async (data)=>{
        data.user = user.getId() 
        return new Promise((resolve, reject)=>{
            makePostRequest(data, '/article', headers).then(res=>{
                resolve(res)
            })
        })
    }

    const updateArticle = async (data)=>{
        return new Promise((resolve, reject)=>{
            makePatchRequest(data, '/author/'+user.getId()+'/article/'+data._id, headers).then(res=>{
                resolve(res)
            })
        })
    }

    const deleteArticle = async (data)=>{
        return new Promise((resolve, reject)=>{
            makeDeleteRequest({id: data}, '/author/article/'+data, headers).then(res=>{
                resolve(res)
            })
        })
    }

    const getArticle = async (article)=>{
        return makeGetRequest('/article/'+article)
    }

    const getArticles = async (category='')=>{//console.log(articles)
        if(category){
            return makeGetRequest('/articles/'+category)
        }else{
            return makeGetRequest('/articles')
        }
    }

    const getArticlesByAuthor = async (author)=>{//console.log(articles)
        if(author){
            return makeGetRequest('/author/articles/'+author)
        }else{
            return []
        }
    }

    const changeCategory = (e)=>{

    }

    const getAuthorDetails = async (id)=>{
        return new Promise((resolve, reject)=>{
            makeGetRequest('/user/'+id).then(res=>{
                resolve(res)
            })
        })
    }

    const getAuthors = async ()=>{
        return new Promise((resolve, reject)=>{
            makeGetRequest('/users').then(res=>{
                resolve(res)
            })
        })
    }

    const editProfile = (data)=>{
        return new Promise((resolve, reject)=>{
            makePatchRequest(data, '/user/'+user.getId(), headers).then(res=>{
                resolve(res)
            })
        })
    }

    const changePassword = (data)=>{console.log(data)
        return new Promise((resolve, reject)=>{
            makePatchRequest(data, '/auth/password', headers).then(res=>{
                resolve(res)
            })
        })
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
                        <Route path="/author/:id">
                            <Author getAuthor={getAuthorDetails} getArticles={getArticlesByAuthor} deleteArticle={deleteArticle} />
                        </Route>
                        <Route path="/authors">
                            <Authors getAuthors={getAuthors} />
                        </Route>
                        <Route exact path="/articles/:category">
                            <Articles articles={getArticles} />
                        </Route>
                        <Route exact path="/">
                            <Articles articles={getArticles} />
                        </Route>
                        <Route path="/login">
                            <Login login={login} />
                        </Route>
                        <Route path="/register">
                            <Register submit={register} />
                        </Route>
                        <Route path="/upload_article">
                            <UploadArticle submit={saveArticle} categories={categories} />
                        </Route>
                        <Route path="/edit_article/:id">
                            <EditArticle submit={updateArticle} categories={categories} getArticle={getArticle} />
                        </Route>
                        <Route path="/edit_profile">
                            <EditProfile submit={editProfile} changePassword={changePassword} getAuthor={getAuthorDetails} changePassword={changePassword} />
                        </Route>
                    </Switch>
                </div>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossOrigin="anonymous"></script>
        </div>
    )
}

export default App