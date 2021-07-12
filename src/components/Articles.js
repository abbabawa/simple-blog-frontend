import {NavLink} from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import {Card, Button} from 'react-bootstrap'
import { useParams } from 'react-router'

function Articles(props){console.log(useParams())
    //useRef used to get previous value of category in order to refresh article component if category changes
    let prevCat = useRef()
    
    const [articles, setArticles] = useState([])
    const [category, setCategory] = useState(useParams().category)
    
    prevCat.current = useParams().category
    if(prevCat.current !== category){
        setCategory(prevCat.current)
    }
    useEffect(()=>{console.log("useEffect")
        props.articles(category).then(res=>{setArticles(res)})
        //prevCat.current = category
        //setArticles(res)
    }, [category])

    return (
        <div className="row">
            <div className="offset-md-4 mt-3 mb-5">
                <h1 className="">Latest articles</h1>
            </div>
            {
                articles.map(article=>{
                    return (
                        <div className="col-md-4">
                            <NavLink to={'/article/'+article._id}>
                                <Card>
                                    <Card.Header>
                                        <Card.Title>{article.title}</Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        
                                        <Card.Text>
                                            {article.details[0]}
                                        </Card.Text>
                                        {/* <Button variant="primary">Go somewhere</Button> */}
                                    </Card.Body>
                                </Card>
                            </NavLink>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Articles