import { Col, Form, Row, Button } from "react-bootstrap"
import { useState } from "react"


const UploadArticle = (props)=>{
    const [inputs, setInputs] = useState({
                                    title: '',
                                    category: '',
                                    details: ['']
                                })

    const updateInput = e=>{
        setInputs(
            {
                ...inputs,
                [e.target.name]: e.target.value
            }
        )
    }

    const updateParagraph = (e)=>{
        inputs.details[Number(e.target.id.split("-")[1])] = e.target.value
        setInputs({
            ...inputs,
            details: inputs.details
        })
    }
    const addParagraph = (e)=>{
        inputs.details.push('')
        let modified = inputs.details
        //console.log(modified)
        setInputs({
            ...inputs,
            body: modified
        })
    }

    const removeParagraph = e=>{
        if(inputs.details.length > 1){
            for(let i=Number(e.id); i<inputs.details.length; i++){
                inputs.details[i] = inputs.body[i+1]
            }
            inputs.details.pop()
            setInputs({
                ...inputs,
                details: inputs.details
            })
        }
    }

    const [errors, setErrors] = useState({show: 'd-none', message: ''})
    const handleSubmit = e=>{
        e.preventDefault()
        props.submit(inputs).then(res=>{console.log(res)
            if(!res){
                setErrors({
                    show: 'd-block',
                    message: res.message
                })
            }else{
                setInputs({
                    title: '',
                    category: '',
                    details: ['']
                })
            }
        })
    }
    return (
        <Col md={6} className="offset-md-3">
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="my-2" as={Row} controlId="formHorizontalEmail">
                        <Form.Label column sm={2} className="d-none d-md-block">Title</Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" name='title' onChange={updateInput} placeholder="Title" value={inputs.title} />
                        </Col>
                    </Form.Group>
                    <Form.Group className="my-2" as={Row} controlId="exampleForm.SelectCustom">
                        <Form.Label column sm={2} className="d-none d-md-block">Categories</Form.Label>
                        <Col sm={10}>
                            <Form.Select name='category' onChange={updateInput} as="select" value={inputs.category} custom>
                                <option value=''>Select Category</option>
                                {
                                    props.categories.map(category=>{
                                        return <option value={category._id}>{category.name}</option>
                                    })
                                }
                            </Form.Select>
                        </Col>
                    </Form.Group>
                    <fieldset className=" border rounded p-3">
                        <legend>Paragraphs</legend>
                        {
                            inputs.details.map((par, i)=>{
                                return (<Form.Group className="my-2" as={Row} controlId="formHorizontalEmail">
                                    <Form.Label className="d-none d-md-block" column sm={2}></Form.Label>
                                    <Col sm={8}>
                                        <input type="hidden" />
                                        <Form.Control as="textarea" id={`text-${i}`} onChange={updateParagraph} value={par} placeholder="Paragraph text" />
                                    </Col>
                                    <Col sm={1}>
                                        <Button type="button" id={i} onClick={removeParagraph} className="btn btn-sm btn-danger">Delete</Button>
                                    </Col>
                                </Form.Group>)
                            })
                        }
                    </fieldset>
                    <Form.Group className="my-2" as={Row}>
                        <Col sm={{ span: 3, offset: 9 }}>
                            <Button type="button" onClick={addParagraph}>Add Paragraph</Button>
                        </Col>
                    </Form.Group>
                    <Form.Group className="my-2" as={Row}>
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Button type="submit">Sign in</Button>
                        </Col>
                    </Form.Group>
                </Form>
        </Col>

    )
}

export default UploadArticle