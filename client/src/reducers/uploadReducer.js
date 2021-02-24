const SHOWUPLOADER = 'SHOWUPLOADER'
const HIDEUPLOADER = 'HIDEUPLOADER'
const ADDUPLOADFILE = 'ADDUPLOADFILE'
const REMOVEUPLOADFILE = 'REMOVEUPLOADFILE'
const CHANGEUPLOADFILE = 'CHANGEUPLOADFILE'

const defaultState = {
    isVisible: false,
    files: [],
}
export default (state = defaultState, action) => {
    switch (action.type) {
        case SHOWUPLOADER:
            return {...state, isVisible: true}
        case HIDEUPLOADER:
            return {...state, isVisible: false}
        case ADDUPLOADFILE:
            return {...state, files: [...state.files, action.payload]}
        case REMOVEUPLOADFILE:
            return {...state, files: [...state.files.filter((file) => file.id !== action.payload)]}
        case CHANGEUPLOADFILE:
            return {
                ...state,
                files: [
                    ...state.files.map((file) =>
                        file.id === action.payload.id
                            ? {...file, progress: action.payload.progress}
                            : {...file}
                    ),
                ],
            }

        default:
            return state
    }
}

export const showUploader = () => ({type: SHOWUPLOADER})
export const hideUploader = () => ({type: HIDEUPLOADER})
export const addUploadfile = (file) => ({type: ADDUPLOADFILE, payload: file})
export const removeUploadfile = (fileId) => ({type: REMOVEUPLOADFILE, payload: fileId})
export const changeUploadfile = (data) => ({type: CHANGEUPLOADFILE, payload: data})
