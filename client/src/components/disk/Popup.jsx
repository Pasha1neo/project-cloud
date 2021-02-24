import {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {createDir} from '../../action/file'
import {setPopupDisplay} from '../../reducers/fileReducer'
import Input from '../../utils/input/input'

const Popup = () => {
    const [dirName, setDirName] = useState('')
    const popupDisplay = useSelector((state) => state.files.popupDisplay)
    const currentDir = useSelector((state) => state.files.currentDir)
    const dispatch = useDispatch()
    const createHandler = () => {
        dispatch(createDir(currentDir, dirName))
        //сделать очистку инпута и закрытие окна
    }

    return (
        <div>
            <div
                className='popup'
                onClick={() => {
                    dispatch(setPopupDisplay('none'))
                }}
                style={{display: popupDisplay}}>
                <div
                    className='popup__content'
                    onClick={(event) => {
                        event.stopPropagation()
                    }}>
                    <div className='popup__header'>
                        <div className='popup__title'></div>
                        <button
                            onClick={() => {
                                dispatch(setPopupDisplay('none'))
                            }}
                            className='popup__close'>
                            Закрыть
                        </button>
                    </div>
                    <Input
                        type='text'
                        placeholder='Название папки'
                        value={dirName}
                        setValue={setDirName}
                    />
                    <button
                        className='popup__create'
                        onClick={() => {
                            createHandler()
                        }}>
                        Создать
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Popup
