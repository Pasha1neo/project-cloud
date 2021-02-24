import './file.css'
import dirLogo from '../../../../assets/img/dir.svg'
import fileLogo from '../../../../assets/img/file.svg'
import {useDispatch, useSelector} from 'react-redux'
import {pushToStack, setCurrentDir} from '../../../../reducers/fileReducer'
import {deleteFile, downloadFile} from '../../../../action/file'
import {sizeFormat} from '../../../../utils/sizeFormat'

const File = ({file}) => {
    const dispatch = useDispatch()
    const currentDir = useSelector((state) => state.files.currentDir)
    const fileView = useSelector((state) => state.files.view)
    const openDirHandler = (file) => {
        if (file.type === 'dir') {
            dispatch(pushToStack(currentDir))
            dispatch(setCurrentDir(file._id))
        }
    }
    const downloadClickHandler = (e) => {
        e.stopPropagation()
        downloadFile(file)
    }
    const deleteClickHandler = (e) => {
        e.stopPropagation()
        dispatch(deleteFile(file))
    }
    if (fileView === 'plate') {
        return (
            <div className='file-plate' onClick={() => openDirHandler(file)}>
                <img
                    src={file.type === 'dir' ? dirLogo : fileLogo}
                    alt={file.name}
                    className='file-plate__img'
                />
                <div className='file-plate__name'>{file.name}</div>
                <div className='file-plate__btns'>
                    {file.type !== 'dir' && (
                        <button
                            className='file-plate__btn file__download'
                            onClick={(e) => downloadClickHandler(e)}>
                            Загрузить
                        </button>
                    )}
                    <button
                        className='file-plate__btn file__delete'
                        onClick={(e) => deleteClickHandler(e)}>
                        Удалить
                    </button>
                </div>
            </div>
        )
    }
    if (fileView === 'list') {
        return (
            <div className='file' onClick={() => openDirHandler(file)}>
                <img
                    src={file.type === 'dir' ? dirLogo : fileLogo}
                    alt={file.name}
                    className='file__img'
                />
                <div className='file__name'>{file.name}</div>
                <div className='file__date'>{file.date}</div>
                <div className='file__size'>{sizeFormat(file.size)}</div>
                {file.type !== 'dir' && (
                    <button
                        className='file__btn file__download'
                        onClick={(e) => downloadClickHandler(e)}>
                        Загрузить
                    </button>
                )}
                <button className='file__btn file__delete' onClick={(e) => deleteClickHandler(e)}>
                    Удалить
                </button>
            </div>
        )
    }
}
export default File
