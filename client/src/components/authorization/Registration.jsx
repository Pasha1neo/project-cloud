import {useState} from 'react'
import {registration} from '../../action/user'
import Input from '../../utils/input/input'
import './authorization.css'
const Registration = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div className='authorization'>
            <div className='authorization__header'>Регистрация</div>
            <Input value={email} setValue={setEmail} type='text' placeholder='Email' />
            <Input value={password} setValue={setPassword} type='password' placeholder='Password' />
            <button
                className='authorization__btn'
                onClick={() => {
                    registration(email, password)
                }}>
                Зарегистрироваться
            </button>
        </div>
    )
}
export default Registration
