const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');
const categoryRoute = require('./routes/categories');
const multer = require('multer');
const path = require('path');

dotenv.config();
app.use(express.json()); // for parsing application/json
app.use('/images', express.static(path.join(__dirname, '/images')));


mongoose.connect(process.env.MONGO_URL , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useFindAndModify: true,
    //serverApi: ServerApiVersion.v1 
}).then(
    console.log('Connected to MongoDB')
).catch((err) => {
    console.log(err);
});

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'images')
    }, filename: function (req, file, cb) {
        cb(null, req.body.name)
    }
    
});

const upload = multer({ storage: storage });
app.post('/api/upload', upload.single('file'), (req, res) => {
    res.status(200).json({ message: 'File uploaded successfully' });
    
}); 

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/posts', postRoute);
app.use('/api/categories', categoryRoute);
app.listen(1000, () => {
    console.log('Server is running on port 1000');
});