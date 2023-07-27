import {useDropzone} from 'react-dropzone';
import React, {useCallback, useState} from "react";
import * as AWS from 'aws-sdk';

type UploaderProps = {
    videoId: string;
    trackProgress: any
}
const uploadFileToS3 = async (fileObject: File, title: string, setProgress: any) => {
    const config = {
        region: "us-east-2",
        credentials: {
            accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID || "",
            secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY || ""
        }
    };

    const filetype = fileObject.type.split('/')[1];
    const fileName = `${title}.${filetype}`;

    const s3 = new AWS.S3(config);

    const params = {
        Bucket: (process.env.REACT_APP_AWS_S3_BUCKET_NAME || ""),
        Key: fileName,
        Body: fileObject,
        ContentType: fileObject.type,
        ACL: 'public-read',
    };

    return s3
        .putObject(params)
        .on("httpUploadProgress", (evt) => {
            const percent = parseInt(String((evt.loaded * 100) / evt.total))
            setProgress(percent)
            console.log(
                "Uploading " + percent + "%"
            );
        })
        .promise();
}

function nameLengthValidator(file: File) {
    const maxLength = 20;
    if (file.name.length > maxLength) {
        return {
            code: "name-too-large",
            message: `Name is larger than ${maxLength} characters`
        };
    }
}

export default function Uploader(props: UploaderProps) {

    const [videoId] = useState<string>(props.videoId)

    const onDrop = useCallback((acceptedFiles: any) => {
        const file = acceptedFiles[0];
        uploadFileToS3(file, videoId, props.trackProgress).then((res) => {

            console.log("File uploaded successfully.");
        }).catch(err => console.log(err));
    }, [])

    const {
        getRootProps,
        getInputProps
    } = useDropzone({
        maxFiles: 1,
        accept: {
            'video/*': ['.mp4', '.mkv', '.avi', '.webm']
        },
        onDrop
        // validator: nameLengthValidator
    });

    return (
        <div {...getRootProps({className: 'dropzone'})}>
            <input {...getInputProps()} />
            <p>Upload File ...</p>
        </div>
    );

}