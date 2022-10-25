import classNames from 'classnames/bind';
import styles from './HeaderMenu.module.scss';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/animations/scale.css';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import { Link } from 'react-router-dom';
import Button from '~/component/Button';
import HeaderLanguageMenu from './HeaderLanguageMenu/LanguageMenu';
import { useState } from 'react';
import { roundArrow } from 'tippy.js';

const cx = classNames.bind(styles);

const defaultFn = () => {};

function HeaderMenu({ children, item, onChange = defaultFn, loggedIn }) {
    const [history, setHistory] = useState([{ data: item }]);
    const current = history[history.length - 1];

    console.log(loggedIn);

    return (
        <Tippy
            arrow={roundArrow}
            zIndex="999"
            theme="dark"
            trigger="click"
            interactive
            delay={[0, 700]}
            placement="bottom-end"
            render={(attrs) => (
                <PopperWrapper className={cx('menu-popper')}>
                    <div className={cx('content')} tabIndex="-1" {...attrs}>
                        {history.length > 1 && (
                            <HeaderLanguageMenu
                                title={current.title}
                                onBack={() => {
                                    setHistory((prev) => prev.slice(0, prev.length - 1));
                                }}
                            ></HeaderLanguageMenu>
                        )}
                        <ul className={cx('menu-list')}>
                            {current.data.map((item, index) => {
                                return (
                                    <Button
                                        key={index}
                                        iconmr8={true}
                                        className={cx('menu-item', { separate: item.separate })}
                                        leftIcon={item.icon}
                                        to={item.to}
                                        onClick={() => {
                                            if (!!item.children) {
                                                setHistory((prev) => [...prev, item.children]);
                                            } else {
                                                onChange(item);
                                            }
                                        }}
                                    >
                                        <span className={cx('title-wrapper')}>{item.title}</span>
                                    </Button>
                                );
                            })}
                        </ul>
                    </div>
                </PopperWrapper>
            )}
            onHide={() => {
                setHistory((prev) => prev.slice(0, 1));
            }}
        >
            {children}
        </Tippy>
    );
}

export default HeaderMenu;
