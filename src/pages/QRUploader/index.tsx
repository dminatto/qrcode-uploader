import React, {Component} from 'react';
import './index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import QrcodeUploader from "../../components/qrcode-uploader";

export default class QRUploader extends Component {
    render() {
        return (
            <div className="lala">
                <QrcodeUploader/>
            </div>
        );
    }
}