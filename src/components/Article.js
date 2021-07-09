import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
function Article(props){
    const [article, setArticle] = useState({details: []})
    let id = useParams()
    useEffect(()=>{
        let res = props.getArticle(id.articleId).then(val=>{setArticle(val)})
        // setArticle(res)
        //console.log(res)
    }, [])
    return (
        <div className="row">
            {/* <div className="offset-md-4 mt-3 mb-5">
                <h1 className="">Author</h1>
            </div> */}
            <div className="col-md-12 mt-5">
                <div class="card px-0 ms-5">
                    <h3 class="card-header">{article.title}</h3>
                    <div class="card-body">
                        {//console.log(article.details)
                            article.details.map(detail=>{
                                return  <p class="card-text">{detail}</p>
                            })
                        }
                        {/* <p class="card-text">
                            With supporting text below as a natural lead-in to additional content.
                            lorem ipsumLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p class="card-text">
                            With supporting text below as a natural lead-in to additional content.
                            lorem ipsumLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p class="card-text">
                            With supporting text below as a natural lead-in to additional content.
                            lorem ipsumLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p class="card-text">
                            With supporting text below as a natural lead-in to additional content.
                            lorem ipsumLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p class="card-text">
                            With supporting text below as a natural lead-in to additional content.
                            lorem ipsumLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Article