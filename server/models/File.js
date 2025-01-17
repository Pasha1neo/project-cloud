const {Schema, model, ObjectId} = require('mongoose')
const File = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        accessLink: {
            type: String,
        },
        size: {
            type: Number,
            default: 0,
        },
        path: {
            type: String,
            default: '',
        },
        date: {
            type: String,
            default: new Date().toLocaleString('ru'),
        },
        user: {
            type: ObjectId,
            ref: 'User',
        },
        parent: {
            type: ObjectId,
            ref: 'File',
        },
        childs: [
            {
                type: ObjectId,
                ref: 'File',
            },
        ],
    },
    {versionKey: false}
)

module.exports = model('File', File)
