import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {login} from '../../action/user'
import Input from '../../utils/input/input'
import './authorization.css'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    return (
        <div className='authorization'>
            <div className='authorization__header'>Авторизация</div>
            <Input value={email} setValue={setEmail} type='text' placeholder='Email' />
            <Input value={password} setValue={setPassword} type='password' placeholder='Password' />
            <button
                className='authorization__btn'
                onClick={() => {
                    dispatch(login(email, password))
                }}>
                Войти
            </button>
        </div>
    )
}
export default Login
