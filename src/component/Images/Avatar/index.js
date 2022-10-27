import { Avatar } from '@mui/material';
import { forwardRef } from 'react';

function CustomAvatar({ src, alt, sx, ...props }, ref) {
    return <Avatar src={src} alt={alt} sx={sx} ref={ref} />;
}

export default forwardRef(CustomAvatar);
