import { useEffect, useState } from 'react'
import {Card, ListGroupItem, ListGroup} from 'react-bootstrap'

const Authors = (props)=>{
    const [authors, setAuthors] = useState([])
    useEffect(()=>{
        props.getAuthors().then(val=>setAuthors(val))
    }, [])
    return (
        <div className="row">
            <div className="offset-md-4 mt-3 mb-5">
                <h1 className="">Authors</h1>
            </div>
            {
                authors.map(author=>{
                    return (<div className="col-md-4">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <Card.Title>{author.firstName+" "+author.lastName}</Card.Title>
                                        <Card.Text>
                                            {author.email}
                                        </Card.Text>
                                    </Card.Body>
                                    {/* <ListGroup className="list-group-flush">
                                        <ListGroupItem>Cras justo odio</ListGroupItem>
                                        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                                        <ListGroupItem>Vestibulum at eros</ListGroupItem>
                                    </ListGroup> */}
                                    <Card.Body>
                                        <Card.Link href={"/author/"+author._id}>View Details</Card.Link>
                                    </Card.Body>
                                </Card>
                            </div>)
                })
            }
        </div>
    )
}

export default Authors