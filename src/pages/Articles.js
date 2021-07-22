import {NavLink} from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import {Card, Col} from 'react-bootstrap'
import { useParams } from 'react-router'

import ArticleCard from '../components/ArticleCard'

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
        <>
            {
                articles.map(article=>{
                    return (
                        <Col md="3" className="py-3" >
                            <ArticleCard title={article.title} text={article.details[0].substring(0, 100)+"..."} url={'/article/'+article._id} />
                        </Col>
                    )
                })
            }
        </>
    )
}

export default Articles