import { createContext, useState } from 'react';
import LoginModal from '../LoginModal';

export const ModalContext = createContext();

function ModalContextComp({ children }) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const ModalAction = {
        open: handleOpen,
        close: handleClose,
    };

    return (
        <ModalContext.Provider value={ModalAction}>
            <LoginModal open={open} onClose={handleClose}></LoginModal>
            {children}
        </ModalContext.Provider>
    );
}

export default ModalContextComp;
