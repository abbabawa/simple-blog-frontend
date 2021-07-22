import React, {useState} from 'react'

function Login(props){
    const [Input, setInput] = useState({
        email: '',
        password: ''
    })

    const onChange = (e)=>{
        setInput({
            ...Input,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        props.login(Input)
    }
    return (
        <div className="row">
            <div className="col-md-6 offset-md-3 mt-5">
                    <form onSubmit={handleSubmit}>
                        <div class="row mb-3">
                            <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                            <div class="col-sm-10">
                                <input type="email" name="email" class="form-control" onChange={onChange} value={Input.email} />
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                            <div class="col-sm-10">
                                <input type="password" name="password" class="form-control" onChange={onChange} value={Input.password} />
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary">Sign in</button>
                    </form>
            </div>
        </div>
    )
}

export default Login