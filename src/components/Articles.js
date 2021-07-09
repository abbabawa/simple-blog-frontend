import {NavLink} from 'react-router-dom'
import { useState, useEffect } from 'react'
import {Card, Button} from 'react-bootstrap'

function Articles(props){
    let articles = props.articles

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