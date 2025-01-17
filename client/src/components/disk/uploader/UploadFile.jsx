import {useDispatch} from 'react-redux'
import {removeUploadfile} from '../../../reducers/uploadReducer'
import './uploader.css'

const UploadFile = ({file}) => {
    const dispatch = useDispatch()
    return (
        <div className='upload-file'>
            <div className='upload-file__header'>
                <div className='upload-file__name'>{file.name}</div>
                <button
                    className='upload-file__remove'
                    onClick={() => dispatch(removeUploadfile(file.id))}>
                    X
                </button>
            </div>
            <div className='upload-file__progress-bar'>
                <div className='upload-file__upload-bar' style={{width: `${file.progress}%`}}></div>
                <div className='upload-file__percent'>{file.progress}%</div>
            </div>
        </div>
    )
}
export default UploadFile
