import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {createDir, getFiles, uploadFile} from '../../action/file'
import FileList from './fileList/FileList'
import './disk.css'
import {setCurrentDir, setFileView, setPopupDisplay} from '../../reducers/fileReducer'
import Popup from './Popup'
import Uploader from './uploader/Uploader'

const Disk = () => {
    const dispatch = useDispatch()
    const [dragEnter, setDragEnter] = useState(false)
    const [sort, setSort] = useState('name')
    const currentDir = useSelector((state) => state.files.currentDir)
    const dirStack = useSelector((state) => state.files.dirStack)
    const loader = useSelector((state) => state.app.loader)

    useEffect(() => {
        dispatch(getFiles(currentDir, sort))
    }, [currentDir, sort])

    const createDirHandler = () => {
        dispatch(setPopupDisplay('flex'))
    }
    const backClickHandler = () => {
        const backDirId = dirStack.pop()
        dispatch(setCurrentDir(backDirId))
    }
    const fileUploadHandler = (event) => {
        const files = [...event.target.files]
        files.forEach((file) => dispatch(uploadFile(file, currentDir)))
    }
    const dragEnterHandler = (event) => {
        event.preventDefault()
        setDragEnter(true)
    }
    const dragLeaveHandler = (event) => {
        event.preventDefault()
        setDragEnter(false)
    }
    const dropHandler = (event) => {
        event.preventDefault()
        event.stopPropagation()
        let files = [...event.dataTransfer.files]
        files.forEach((file) => dispatch(uploadFile(file, currentDir)))
        setDragEnter(false)
    }

    if (loader) {
        return (
            <div className='loader'>
                <div className='lds-ellipsis'>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        )
    }

    return !dragEnter ? (
        <div
            className='disk'
            onDragEnter={dragEnterHandler}
            onDragLeave={dragLeaveHandler}
            onDragOver={dragEnterHandler}>
            <div className='disk__btns'>
                <button
                    className='disk__back'
                    onClick={() => {
                        backClickHandler()
                    }}>
                    Назад
                </button>
                <button
                    className='disk__create'
                    onClick={() => {
                        createDirHandler()
                    }}>
                    Создать папку
                </button>
                <div className='disk__upload'>
                    <label htmlFor='disk__upload-input' className='disk__upload-label'>
                        Загрузить файл
                    </label>
                    <input
                        multiple={true}
                        onChange={(event) => {
                            fileUploadHandler(event)
                        }}
                        type='file'
                        className='disk__upload-input'
                        id='disk__upload-input'
                    />
                </div>
                <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className='disk__select'>
                    <option value='name'>По имени</option>
                    <option value='type'>По типу</option>
                    <option value='date'>По дате</option>
                </select>
                <button
                    className='disk__plate'
                    onClick={(e) => dispatch(setFileView('plate'))}></button>
                <button
                    className='disk__list'
                    onClick={(e) => dispatch(setFileView('list'))}></button>
            </div>
            <FileList />
            <Popup />
            <Uploader />
        </div>
    ) : (
        <div
            className='drop-area'
            onDrop={dropHandler}
            onDragEnter={dragEnterHandler}
            onDragLeave={dragLeaveHandler}
            onDragOver={dragEnterHandler}>
            Перетащите файлы сюда
        </div>
    )
}
export default Disk
