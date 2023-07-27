import React, {useEffect, useState} from "react";
import Uploader from "../../components/uploader";
import {Box, Button, Modal, Typography} from '@mui/material';
import {useParams} from "react-router-dom";
import {LinearProgressWithLabel} from "../../components/progress"

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '35%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
export default function Upload() {
    const params = useParams();
    const [progress, setProgress] = useState<number>(0)
    const [modalShouldAppear, setModal] = useState(false)
    const handleClose = () => setModal(false);

    useEffect(() => {
        if (progress === 100) {
            setModal(true);
        }
    }, [progress])

    return (
        <Box sx={{width: '100%'}}>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <Button>
                    <Uploader videoId={(params.videoId || "")} trackProgress={setProgress}/>
                </Button>
            </Box>
            <Box>
                <LinearProgressWithLabel value={progress}/>
            </Box>
            <Modal
                open={modalShouldAppear}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        File uploaded successfully
                    </Typography>
                    <Typography id="modal-modal-description" sx={{mt: 2}}>
                        You can close this window now!
                    </Typography>
                </Box>
            </Modal>
        </Box>
    );
}