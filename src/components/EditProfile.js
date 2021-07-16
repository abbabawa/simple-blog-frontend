import { useEffect, useState } from "react"
import user from '../User'

function EditProfile(props){
    const [inputs, setInputs] = useState({
        firstName: '',
        lastName: '',
        email: ''
    })

    useEffect(()=>{
        let res = props.getAuthor(user.getId()).then(val=>{setInputs(val)})
    }, [])

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
            }else{
                setInputs(res)
            }
        }).catch(e=>{//Error is thrown when registration was successfull. FIX!!
            console.log(e)
        })
    }

    const [passwords, setPassword] = useState({oldPassword: '', newPassword: ''})
    const passwordValue = e=>{
        setPassword({
            ...passwords,
            [e.target.name]: e.target.value
        })
    }
    const changePassword = e=>{
        e.preventDefault()
        props.changePassword(passwords).then(res=>{console.log(res)
            if(!res.status){
                setErrors({
                    show: 'd-block',
                    message: res.message
                })
            }else{
                setInputs({
                    oldPassword: '',
                    newPassword: ''
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
                            <input type="text" class="form-control" id="fname" name="firstName" onChange={setValue} value={inputs.firstName} />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="LName" class="col-sm-3 col-form-label">Last Name</label>
                        <div class="col-sm-8">
                            <input type="text" class="form-control" id="LName" name="lastName" onChange={setValue} value={inputs.lastName} />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="inputEmail3" class="col-sm-3 col-form-label">Email</label>
                        <div class="col-sm-8">
                            <input type="email" class="form-control" id="inputEmail3" name="email" onChange={setValue} value={inputs.email} />
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Update Profile</button>
                </form>
                <form onSubmit={changePassword}>
                    <div class="row mb-3">
                        <label for="inputPassword3" class="col-sm-3 col-form-label">Password</label>
                        <div class="col-sm-8">
                            <input type="password" class="form-control" id="inputPassword3" name="oldPassword" onChange={passwordValue} value={passwords.oldPassword} />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="inputPassword3" class="col-sm-3 col-form-label">Password</label>
                        <div class="col-sm-8">
                            <input type="password" class="form-control" id="inputPassword3" name="newPassword" onChange={passwordValue} value={passwords.newPassword} />
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Change Password</button>
                </form>
            </div>
        </div>
    )
}

export default EditProfile