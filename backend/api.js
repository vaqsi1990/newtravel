const express = require('express')
const authRoute = require("./routes/auth")
const travelRoute = require('./routes/travel')
const savedRoute = require('./routes/saved')
const commentRoute = require('./routes/comment')
const path = require("path")
const multer = require('multer')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const Travel = require('./module/travel')
const {S3Client, PutObjectCommand} = require('@aws-sdk/client-s3');
const app = express();
const bucket = 'foodreview'

async function uploadToS3(path, originalFilename, mimetype) {
  const client = new S3Client({
    region: 'us-east-1',
    credentials: {
      accessKeyId: process.env.S3_ACCESS_KEY,
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
    },
  });
  const parts = originalFilename.split('.');
  const ext = parts[parts.length - 1];
  const newFilename = Date.now() + '.' + ext;
  await client.send(new PutObjectCommand({
    Bucket: bucket,
    Body: fs.readFileSync(path),
    Key: newFilename,
    ContentType: mimetype,
    ACL: 'public-read',
  }));
  return `https://${bucket}.s3.amazonaws.com/${newFilename}`;
}






const DB = "mongodb+srv://vaqsi24:juventus1990@shop.31bo5lw.mongodb.net/travelblog?w=majority";

const allowedOrigins = ['http://localhost:5173'];




app.use(cors({
  origin: function (origin, callback) {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
}));

//midlewares
app.use(cookieParser())
app.use(express.json())

app.use("/api/auth", authRoute)
// app.use("/api/users", userRoute)
app.use('/travel', travelRoute)
app.use('/saved', savedRoute)
// app.use('/comment', commentRoute)

app.use((err,req,res, next) => {
  const errorStatus = err.status || 500
  const errorMessage = err.message || "wrong"
  return res.status(errorStatus).json(errorMessage)
} )



const storage = multer.diskStorage({
  destination: 'uploads',
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
  },
});


const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'image/jpeg'
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});



app.post('/add-products', upload.array('photos', 7), async (req, res) => {
  try {
   

    const { name,  dayTwo, dayOne, continent, cuisine, location,rating } = req.body;

    const photos = req.files.map(file => file.filename);

    const newTravel = await Travel.create({
      name,
      photos,
      dayOne,
      continent,
      rating,
      dayTwo,
      location,
      cuisine,
    });

    const savedTravel = await newTravel.save();
    console.log('Saved Game:', savedTravel);

    res.status(200).json(savedTravel);
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ error: 'Something went wrong' });
  }
});




app.use('/uploads', express.static('uploads'));


mongoose
  .connect(DB)
  .then(result => {
    app.listen(4500);
    console.log('working');
  })
  .catch(err => {
    console.log(err);
  });
