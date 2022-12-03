import { createContext, useState } from 'react';
import LoginModal from '../LoginModal';

export const ModalContext = createContext();

function ModalContextComp({ children }) {
    const [open, setOpen] = useState(false);
    const [signingUp, setSigningUp] = useState(false);

    const OnSignUp = () => {
        setSigningUp(true);
    };

    const OffSignUp = () => {
        setSigningUp(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const ModalAction = {
        data: {
            open: open,
            signingUp: signingUp,
        },
        open: handleOpen,
        close: handleClose,
        onsignup: OnSignUp,
        offsignup: OffSignUp,
    };

    return (
        <ModalContext.Provider value={ModalAction}>
            <LoginModal open={open} onClose={handleClose}></LoginModal>
            {children}
        </ModalContext.Provider>
    );
}

export default ModalContextComp;
