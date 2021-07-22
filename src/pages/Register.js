import { useEffect, useState } from "react"

function Register(props){
    const [inputs, setInputs] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })

    const setValue = e=>{
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    const [errors, setErrors] = useState({show: 'd-none', message: ''})
    const handleSubmit = e=>{
        e.preventDefault()
        props.submit(inputs).then(res=>{console.log(res)
            if(!res.status){
                setErrors({
                    show: 'd-block',
                    message: res.message
                })
            }
        }).catch(e=>{//Error is thrown when registration was successfull. FIX!!
            console.log(e)
        })
    }
    
    return (
        <div className="row">
            <div className="col-md-6 offset-md-3 mt-5">
                <div className={`card my-3 bg-warning ${errors.show}`}>
                    <div className="card-body">
                        <p>{errors.message}</p>
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div class="row mb-3">
                        <label for="FName" class="col-sm-3 col-form-label">First Name</label>
                        <div class="col-sm-8">
                            <input type="text" class="form-control" id="fname" name="firstName" onChange={setValue} value={inputs.fname} />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="LName" class="col-sm-3 col-form-label">Last Name</label>
                        <div class="col-sm-8">
                            <input type="text" class="form-control" id="LName" name="lastName" onChange={setValue} value={inputs.lname} />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="inputEmail3" class="col-sm-3 col-form-label">Email</label>
                        <div class="col-sm-8">
                            <input type="email" class="form-control" id="inputEmail3" name="email" onChange={setValue} value={inputs.email} />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="inputPassword3" class="col-sm-3 col-form-label">Password</label>
                        <div class="col-sm-8">
                            <input type="password" class="form-control" id="inputPassword3" name="password" onChange={setValue} value={inputs.password} />
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Sign in</button>
                </form>
            </div>
        </div>
    )
}

export default Register