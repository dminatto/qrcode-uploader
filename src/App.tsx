import React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import QRUploader from "./pages/QRUploader";
import Upload from "./pages/Upload";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<QRUploader />} />
                <Route path="upload/:videoId" element={<Upload />} />
            </Routes>
        </BrowserRouter>
    );
}
export default App;
