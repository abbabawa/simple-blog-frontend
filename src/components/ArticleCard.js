import {Card} from 'react-bootstrap'
const ArticleCard = (props)=>{
    return (
        <Card >
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                <Card.Text>
                    {props.text}
                </Card.Text>
                <Card.Link className="btn btn-primary btn-sm" href={props.url}>View Details</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default ArticleCard