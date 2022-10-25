import { keys } from '@mui/system';
import classNames from 'classnames/bind';
import { Link, Navigate } from 'react-router-dom';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    outline = false,
    text = false,
    rounded = false,
    disabled = false,
    size = 'medium',
    onClick,
    children,
    className,
    leftIcon,
    iconmr8,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    if (disabled) {
        delete props.onClick;

        //Better
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        console.log(children);
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', size, className, { primary, outline, text, disabled, rounded });
    return (
        <Comp
            className={classes}
            {...props}
            // onClick={(e) => {
            //     e.preventDefault();
            //     navigate(`/upload`);
            // }}
        >
            {leftIcon && <span className={cx('left-icon-btn')}>{leftIcon}</span>}
            <span className={cx('btn-title')}>{children}</span>
        </Comp>
    );
}

export default Button;
