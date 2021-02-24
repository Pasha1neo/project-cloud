import {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {getFiles, searchFiles} from '../../action/file'
import Logo from '../../assets/img/Logo.png'
import {logout} from '../../reducers/userReducer'
import './navbar.css'
import avatarLogo from '../../assets/img/avatar.svg'
const Navbar = () => {
    const isAuth = useSelector((state) => state.user.isAuth)
    const currentDir = useSelector((state) => state.files.currentDir)
    const currentUser = useSelector((state) => state.user.currentUser)
    const dispatch = useDispatch()
    const [searchName, setSearchName] = useState('')
    const [searchTimeout, setSearchTimeout] = useState(false)
    const searchChangeHandler = (e) => {
        setSearchName(e.target.value)
        if (setSearchTimeout !== false) {
            clearTimeout(setSearchTimeout)
        }

        if (e.target.value !== '') {
            setSearchTimeout(
                setTimeout(
                    (value) => {
                        dispatch(searchFiles(value))
                    },
                    500,
                    e.target.value
                )
            )
        } else {
            dispatch(getFiles(currentDir))
        }
    }
    const avatar = currentUser.avatar ? `http://localhost:5000/${currentUser.avatar}` : avatarLogo
    return (
        <div className='navbar'>
            <div className='container'>
                <img src={Logo} alt='логотип' className='navbar__logo' />
                <div className='navbar__header'>MERN CLOUD</div>
                {isAuth && (
                    <input
                        value={searchName}
                        onChange={(e) => searchChangeHandler(e)}
                        className='navbar__search'
                        type='text'
                        placeholder='Название файла'
                    />
                )}

                {!isAuth && (
                    <div className='navbar__login'>
                        <NavLink to='/login'>Войти</NavLink>
                    </div>
                )}
                {!isAuth && (
                    <div className='navbar__registration'>
                        <NavLink to='/registration'>Регистрация</NavLink>
                    </div>
                )}
                {isAuth && (
                    <button
                        className='navbar__login'
                        onClick={() => {
                            dispatch(logout())
                        }}>
                        Выход
                    </button>
                )}
                {isAuth && (
                    <NavLink to='/profile'>
                        <img className='navbar__avatar' src={avatar} alt='аватарка' />
                    </NavLink>
                )}
            </div>
        </div>
    )
}
export default Navbar
