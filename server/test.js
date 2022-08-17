var AWS = require('aws-sdk');
require('dotenv').config()
const fs = require("fs")

///awsconfig////////////////

//region
AWS.config.update({ region: 'ap-south-1' })

const BUCKET_NAME = 'hindavitestbucket';

const s3 = new AWS.S3({
	accessKeyId: process.env.AWSAccessKeyId,
	secretAccessKey: process.env.AWSSecretKey
})

//create s3 service object
const uploadFile = (fileName) => {
    // Read content from the file
    const fileContent = fs.readFileSync(fileName);

    // Setting up S3 upload parameters
    const params = {
        Bucket: BUCKET_NAME,
        Key: 'firstacebitch!', // File name you want to save as in S3
        Body: fileContent
    };

    // Uploading files to the bucket
    s3.upload(params, function(err, data) {
        if (err) {
            throw err;
        }
        console.log(`File uploaded successfully. ${data.Location}`);
    });
};

uploadFile("../client/public/images/first ace.png")