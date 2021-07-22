import { useEffect, useState } from 'react'
import {Col} from 'react-bootstrap'

import ArticleCard from '../components/ArticleCard'

const Authors = (props)=>{
    const [authors, setAuthors] = useState([])
    useEffect(()=>{
        props.getAuthors().then(val=>setAuthors(val))
    }, [])
    return (
            
                authors.map(author=>{
                    return (
                        <Col md="3" className="py-3" >
                            <ArticleCard title={author.firstName+" "+author.lastName} text={author.email} url={"/author/"+author._id} />
                        </Col>
                    )
                })
            
    )
}

export default Authors