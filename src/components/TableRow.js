import { Button } from "react-bootstrap"
import { Pen, Trash, Book } from "react-bootstrap-icons"


const TableRow = (props)=>{
    const edit = <td>
                    <Button className='btn btn-sm btn-warning' href={"/edit_article/"+props.id}>
                        <Pen />
                    </Button>
                </td>
    const row = <tr>
        <td>{props.title}</td>
        <td>24th sept 2020</td>
        <td>
            <Button className="btn btn-sm btn-success" href={"/article/"+props.id}>
                <Book />
            </Button>
        </td>
        {props.author ? edit : ''}
        {props.author ? <td><Button className='btn btn-sm btn-danger'><Trash /></Button></td> : ''}
    </tr>
    return (
        row
    )
}

export default TableRow