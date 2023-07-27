import {Box, LinearProgress, LinearProgressProps, Typography} from "@mui/material";
import React, {Component} from "react";

export class LinearProgressWithLabel extends Component <LinearProgressProps & { value: number }> {
    render() {
        return (
            <Box sx={{display: 'flex', alignItems: 'center'}}>
                <Box sx={{width: '100%', mr: 1}}>
                    <LinearProgress variant="determinate" {...this.props} />
                </Box>
                <Box sx={{minWidth: 35}}>
                    <Typography variant="body2" color="text.secondary">
                        {Math.round(this.props.value)}%
                    </Typography>
                </Box>
            </Box>
        );
    }
}