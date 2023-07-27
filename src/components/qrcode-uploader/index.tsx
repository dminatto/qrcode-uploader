import * as React from 'react';
import {useEffect, useState, useRef} from "react";
import QRCode from "qrcode"
const {v4} = require('uuid');
export default function QrcodeUploader() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [text, setText] = useState(`${process.env.REACT_APP_URL}upload`);
    const [videoInfo] = useState(v4());

    useEffect(() => {
        setText(`${process.env.REACT_APP_URL}upload/${videoInfo}`)
    }, [videoInfo])


    useEffect(() => {
        QRCode.toCanvas(
            canvasRef.current,
            text || " ",
            (error: any) => error && console.error(error)
        );
    }, [text]);

    return (
        <div>
            <div>
                <canvas ref={canvasRef}/>
            </div>
        </div>
    );
}