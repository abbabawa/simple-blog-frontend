import React, {useEffect, useState} from 'react'
import { Col, Container, Row, Nav, Dropdown, NavItem, NavLink } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import SideBar from './components/SideBar'
import Articles from './pages/Articles'
import Author from './pages/Author'
import Article from './pages/Article'

import { Route, Switch } from 'react-router';
import Login from './pages/Login'
import Register from './pages/Register'

import {useHistory, useParams} from 'react-router-dom'

import user from './User'
import UploadArticle from './pages/UploadArticle'
import EditArticle from './pages/EditArticle'
import Authors from './pages/Authors'
import EditProfile from './pages/EditProfile'
import Footer from './components/Footer';

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
        <Container fluid className="">
            <Row>
                <Header />
            </Row>
            <Row>
                <Col className="border p-1">
                    <SideBar categories={categories} />
                    <div className="d-none d-md-block">
                        <Nav variant="" className="justify-content-center" defaultActiveKey="/home">
                            <Nav.Item>
                                <Nav.Link href="/">Articles</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-1" href="/authors">Authors</Nav.Link>
                            </Nav.Item>
                            <Dropdown as={NavItem}>
                                <Dropdown.Toggle as={NavLink}>Categories</Dropdown.Toggle>
                                <Dropdown.Menu>
                                    { 
                                        categories.map(category=>{
                                            return <Dropdown.Item href={"/articles/"+category._id}>{category.name}</Dropdown.Item>
                                        })
                                    }
                                </Dropdown.Menu>
                            </Dropdown>
                            <Nav.Item>
                                <Nav.Link className={!user.getId() ? 'd-none': ''} href={`/author/${user.getId()}`}>My Articles</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className={!user.getId() ? 'd-none': ''} href="/upload_article">Upload Article</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>
                </Col>
            </Row>
            <Row>
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
                            <Route exact path="/articles">
                                <Articles articles={getArticles} />
                            </Route>
                        </Switch>
                   
            </Row>
            <Row className="bg-light mt-5 p-4">
                <Footer />
            </Row>
        </Container>
      );
}

export default App