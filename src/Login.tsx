import React, {useState} from 'react'
import axios from 'axios'
import {setUserSession} from './Utils/Common'

function Login(props: {history: string[]}) {
    const [loading, setLoading] = useState(false)
    const username = useFormInput('')
    const password = useFormInput('')
    const [error, setError] = useState(null)

    // handle button click of login form
    const handleLogin = () => {
        setError(null)
        setLoading(true)
        axios
            .post('http://localhost:3000/api/v1/users/login', {
                username: username.value,
                password: password.value,
            })
            .then((response) => {
                setLoading(false)
                setUserSession(response.data.token, response.data.user)
                props.history.push('/dashboard')
            })
            .catch((error) => {
                setLoading(false)
                console.log(error)
                // @ts-ignore
                setError(new Error('something wrong'))
                // if (error.response.status === 401) setError(error.response.data.message)
                // else {
                //     // @ts-ignore
                //     setError(new Error('something wrong'))
                // }
            })
    }

    return (
        <div>
            Login
            <br />
            <br />
            <div>
                Username
                <br />
                <input type="text" {...username} autoComplete="new-password" />
            </div>
            <div style={{marginTop: 10}}>
                Password
                <br />
                <input type="password" {...password} autoComplete="new-password" />
            </div>
            {error && (
                <>
                    <small style={{color: 'red'}}>{error}</small>
                    <br />
                </>
            )}
            <br />
            <input
                type="button"
                value={loading ? 'Loading...' : 'Login'}
                onClick={handleLogin}
                disabled={loading}
            />
            <br />
        </div>
    )
}

const useFormInput = (initialValue: string) => {
    const [value, setValue] = useState(initialValue)

    const handleChange = (e: {target: {value: React.SetStateAction<string>}}) => {
        setValue(e.target.value)
    }
    return {
        value,
        onChange: handleChange,
    }
}

export default Login