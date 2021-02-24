const SETFILES = 'SETFILES'
const SETCURRENTDIR = 'SETCURRENTDIR'
const ADDFILE = 'ADDFILE'
const SETPOPUPDISPLAY = 'SETPOPUPDISPLAY'
const PUSHTOSTACK = 'PUSHTOSTACK'
const POPFROMSTACK = 'POPFROMSTACK'
const DELETEFILE = 'DELETEFILE'
const SETVIEW = 'SETVIEW'

const defaultState = {
    files: [],
    currentDir: null,
    popupDisplay: 'none',
    dirStack: [],
    view: 'list',
}
export default (state = defaultState, action) => {
    switch (action.type) {
        case SETFILES:
            return {...state, files: action.payload}
        case SETCURRENTDIR:
            return {...state, currentDir: action.payload}
        case ADDFILE:
            return {...state, files: [...state.files, action.payload]}
        case SETPOPUPDISPLAY:
            return {...state, popupDisplay: action.payload}

        case PUSHTOSTACK:
            return {...state, dirStack: [...state.dirStack, action.payload]}
        case POPFROMSTACK:
            return {...state, dirStack: action.payload}
        case DELETEFILE:
            return {...state, files: [...state.files.filter((file) => file._id !== action.payload)]}
        case SETVIEW:
            return {...state, view: action.payload}
        default:
            return state
    }
}

export const setFiles = (files) => ({type: SETFILES, payload: files})
export const setCurrentDir = (dir) => ({type: SETCURRENTDIR, payload: dir})
export const addFile = (file) => ({type: ADDFILE, payload: file})
export const setPopupDisplay = (display) => ({type: SETPOPUPDISPLAY, payload: display})
export const pushToStack = (dir) => ({type: PUSHTOSTACK, payload: dir})
export const deleteFileAction = (dirId) => ({type: DELETEFILE, payload: dirId})
export const setFileView = (payload) => ({type: SETVIEW, payload})
