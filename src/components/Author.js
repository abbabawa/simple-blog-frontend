import { useState, useEffect } from 'react'
import {NavLink, useParams} from 'react-router-dom'
import {Button} from 'react-bootstrap'

import user from '../User'

function Author(props){
    let id = useParams().id
    const [details, setDetails] = useState({
        firstName: '',
        lastName: '',
        email: ''
    })

    const [articles, setArticles] = useState([]) 

    useEffect(()=>{
        let res = props.getAuthor(id).then(val=>{setDetails(val)})
        props.getArticles(id).then(val=>setArticles(val))
        // setArticle(res)
        //console.log(res)
    }, [])
    return (
        <div className="row">
            <div className="offset-md-4 mt-3 mb-5">
                <h1 className="">Author</h1>
            </div>
            <div className="col-md-10">
                <div class="card px-0 ms-5">
                    <h5 class="card-header">{details.firstName+" "+details.lastName}</h5>
                    <div class="card-body">
                        <ul>
                            <li>Name: {details.firstName+" "+details.lastName}</li>
                            <li>email: {details.email}</li>
                            <li>No of articles: 20</li>
                            <li>Hobbies: Listening to music, Writing</li>
                        </ul>
                        {/* <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <Link href="#" class="btn btn-primary">View Articles</Link> */}
                    </div>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Upload date</th>
                            <th className={user.getId() === id ? '': 'd-none'}></th>
                            <th className={user.getId() === id ? '': 'd-none'}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <tr>
                            <td>1</td>
                            <td>This is a new article</td>
                            <td>24th July 2021</td>
                            <td className={user.getId() ? '': 'd-none'}><Button className="btn btn-warning">Edit</Button></td>
                            <td className={user.getId() ? '': 'd-none'}><Button className="btn btn-danger">Delete</Button></td>
                        </tr> */}
                        {
                            articles.map(article=>{
                                return (<tr>
                                    <td>{article.title}</td>
                                    <td>24th July 2021</td>
                                    <td className={user.getId() === id ? '': 'd-none'}><NavLink to={"/edit_article/"+article._id} className="btn btn-warning">Edit</NavLink></td>
                                    <td className={user.getId() === id ? '': 'd-none'}><NavLink to="/" className="btn btn-danger">Delete</NavLink></td>
                                </tr>)
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Author