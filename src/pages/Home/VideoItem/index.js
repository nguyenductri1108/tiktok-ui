import { Avatar, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import classNames from 'classnames/bind';
import Button from '~/component/Button';
import styles from './VideoItem.scss';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';

const cx = classNames.bind(styles);

function VideoItem() {
    return (
        <Box sx={{ padding: '32px 32px 0 0', position: 'relative' }}>
            <Box sx={{ position: 'absolute', top: '48px', right: '0', display: 'inline-block' }}>
                <Button outline size="small">
                    Follow
                </Button>
            </Box>
            <Box sx={{ padding: '16px 0', display: 'flex' }}>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }} className={cx('big-avatar')}>
                    <Avatar sx={{ height: '56px', width: '56px' }}></Avatar>
                </Box>
                <Box sx={{ marginLeft: '12px', flexGrow: '1' }}>
                    <Box sx={{ display: 'flex' }}>
                        <Avatar
                            sx={{
                                display: { xs: 'block', sm: 'none' },
                                height: '40px',
                                width: '40px',
                                marginRight: '12px',
                            }}
                        ></Avatar>
                        <Box sx={{ display: 'flex', flexGrow: '1', flexDirection: { xs: 'column', md: 'row' } }}>
                            <Typography
                                sx={{
                                    fontSize: '1.8rem',
                                    fontweight: '600',
                                    lineHeight: '2rem',
                                    marginRight: '8px',
                                    textOverflow: 'ellipsis',
                                    overflow: 'hidden',
                                    maxWidth: { xs: '80%', md: '40%' },
                                    whiteSpace: 'nowrap',
                                }}
                            >
                                Abcdefu
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: '1.4rem',
                                    fontweight: '400',
                                    textOverflow: 'ellipsis',
                                    overflow: 'hidden',
                                    maxWidth: { xs: '80%', md: '40%' },
                                    whiteSpace: 'nowrap',
                                }}
                            >
                                abc
                            </Typography>
                        </Box>
                    </Box>

                    {/* Description */}
                    <Box>
                        <Typography
                            sx={{
                                fontSize: '1.6rem',
                                textOverflow: 'ellipsis',
                                overflow: 'hidden',
                                maxWidth: '60%',
                                whiteSpace: 'nowrap',
                            }}
                        >
                            This will be a description
                        </Typography>
                    </Box>

                    {/* Music */}
                    <Box sx={{ display: 'flex', alignItems: 'center', maxWidth: '250px' }}>
                        <span style={{ marginRight: '1.6rem' }}>
                            <AudiotrackIcon />
                        </span>
                        <Typography
                            variant="h6"
                            sx={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}
                        >
                            Anh chưa thương em đến vậy đâu - Myra Trần
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default VideoItem;
