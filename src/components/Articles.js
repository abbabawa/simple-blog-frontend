import {Link} from 'react-router-dom'

function Articles(){
    return (
        <div className="row">
            <div className="offset-md-4 mt-3 mb-5">
                <h1 className="">Latest articles</h1>
            </div>
            <div className="col-md-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link href="#" class="card-link">Card link</Link>
                        <Link href="#" class="card-link">Another link</Link>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link href="#" class="card-link">Card link</Link>
                        <Link href="#" class="card-link">Another link</Link>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link href="#" class="card-link">Card link</Link>
                        <Link href="#" class="card-link">Another link</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Articles