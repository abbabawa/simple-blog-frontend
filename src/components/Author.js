import {Link} from 'react-router-dom'

function Author(){
    return (
        <div className="row">
            <div className="offset-md-4 mt-3 mb-5">
                <h1 className="">Author</h1>
            </div>
            <div className="col-md-10">
                <div class="card px-0 ms-5">
                    <h5 class="card-header">Abba Bawa</h5>
                    <div class="card-body">
                        <ul>
                            <li>No of articles: 20</li>
                            <li>Hobbies: Listening to music, Writing</li>
                        </ul>
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <Link href="#" class="btn btn-primary">View Articles</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Author