import classNames from 'classnames/bind';
import styles from './loginmodal.module.scss';

import { forwardRef, useContext, useState } from 'react';
import { Container, Dialog, DialogTitle, Grow } from '@mui/material';
import { ModalContext } from '../Context/ModalContext';
import { Box } from '@mui/system';
import styled from 'styled-components';
import LoginMainMenu from './Screen/main';
import LoginModalContainer from './container';

const cx = classNames.bind(styles);

const Transition = forwardRef(function Transition(props, ref) {
    return <Grow direction="up" ref={ref} {...props} />;
});

function LoginModal({ open, onClose }) {
    const ModalAction = useContext(ModalContext);

    const CssDialog = styled(Dialog)({
        '& .MuiContainer-root': {
            padding: 'unset',
        },
    });

    return (
        <CssDialog
            onClose={() => {
                ModalAction.close();
            }}
            open={open}
            sx={{}}
            TransitionComponent={Transition}
            PaperProps={{
                style: {
                    borderRadius: '8px',
                    maxHeight: '693px',
                    height: '80%',
                    overflow: 'hidden',
                    width: '483px',
                    paddingTop: '48px',
                },
            }}
        >
            <LoginModalContainer />
        </CssDialog>
    );
}

export default LoginModal;
