import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

import {Col, Card} from 'react-bootstrap'

function Article(props){
    const [article, setArticle] = useState({details: []})
    let id = useParams()
    useEffect(()=>{
        let res = props.getArticle(id.articleId).then(val=>{setArticle(val)})
        // setArticle(res)
        //console.log(res)
    }, [])
    return (
        <Col md={6} className="offset-md-3 my-4">
            <Card >
                <Card.Body>
                    <Card.Title>{article.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                        {//console.log(article.details)
                            article.details.map(detail=>{
                                return  <p class="card-text">{detail}</p>
                            })
                        }
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Article