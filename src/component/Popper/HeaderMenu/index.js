import classNames from 'classnames/bind';
import styles from './HeaderMenu.module.scss';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/animations/scale.css';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import { Link } from 'react-router-dom';
import Button from '~/component/Button';

const cx = classNames.bind(styles);

function HeaderMenu({ children, item }) {
    return (
        <Tippy
            interactive
            visible
            delay={[0, 700]}
            placement="bottom-end"
            render={(attrs) => (
                <PopperWrapper className={cx('menu-popper')}>
                    <div className={cx('content')} tabIndex="-1" {...attrs}>
                        <ul className={cx('menu-list')}>
                            {item.map((item, index) => {
                                // console.log(item.to);
                                return (
                                    <Button
                                        iconmr8={true}
                                        className={cx('menu-item')}
                                        leftIcon={item.icon}
                                        to={item.to}
                                    >
                                        <span className={cx('title-wrapper')}>{item.title}</span>
                                    </Button>
                                );
                            })}
                        </ul>
                    </div>
                </PopperWrapper>
            )}
        >
            {children}
        </Tippy>
    );
}

export default HeaderMenu;
