const express = require('express')
const mongoose = require('mongoose')
const fileUpload = require('express-fileupload')
const app = express()
const PORT = process.env.PORT || 5000
const authRouter = require('./routes/auth.routes')
const fileRouter = require('./routes/file.routes')
const corsMiddleware = require('./middleware/cors.middleware')
const filePathMiddleware = require('./middleware/filepath.middleware')
const path = require('path')

app.use(fileUpload({}))
app.use(corsMiddleware)
app.use(filePathMiddleware(path.resolve(__dirname, 'files')))
app.use(express.json())
app.use(express.static('static'))
app.use('/api/auth', authRouter)
app.use('/api/files', fileRouter)

const start = async () => {
    try {
        mongoose.connect('mongodb://localhost:27017/project-cloud', {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
        app.listen(PORT, () => {
            console.log(`Сервер запущен на  http://localhost:${PORT}/`)
        })
    } catch (error) {
        console.log(error)
    }
}
start()
