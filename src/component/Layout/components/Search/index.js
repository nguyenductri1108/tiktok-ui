import classNames from 'classnames/bind';
import styles from './HeaderSearch.module.scss';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import AccountItem from '~/component/AccountItem';
import HeadlessTippy from '@tippyjs/react/headless';
import { useState, useEffect, useRef } from 'react';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDebounce } from '~/hooks';

const cx = classNames.bind(styles);

function HeaderSearch() {
    const [searchinput, setSearchInput] = useState('');
    const [result, setResult] = useState([]);
    const [focusInput, setFocusInput] = useState(true);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();

    const debounce = useDebounce(searchinput, 500);

    useEffect(() => {
        if (!!searchinput) {
            setLoading(true);
            fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchinput)}&type=less`)
                .then((res) => res.json())
                .then((res) => {
                    setResult(res.data);
                    console.log(res.data);
                    setLoading(false);
                })
                .catch(() => {
                    setLoading(false);
                });
        }
    }, [debounce]);

    function clearSearchInput() {
        setSearchInput((prev) => '');
        setResult([]);
        inputRef.current.focus();
    }

    function hideSearchResult() {
        setFocusInput(false);
    }

    return (
        <HeadlessTippy
            placement="bottom-start"
            trigger="focus"
            interactive={true}
            visible={!!searchinput && focusInput && result.length > 0}
            render={(attrs) => (
                <PopperWrapper>
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <h4 className={cx('search-header')}>Accounts</h4>
                        <ul className={cx('search-list-account')}>
                            {result.map((item) => {
                                return <AccountItem key={item.id} itemData={item} />;
                            })}
                        </ul>
                        <p className={cx('search-note')}>View all results for "{searchinput}" </p>
                    </div>
                </PopperWrapper>
            )}
            onClickOutside={hideSearchResult}
        >
            <div className={cx('header-search')} spellCheck={false}>
                <input
                    ref={inputRef}
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    value={searchinput}
                    onChange={(e) => {
                        setSearchInput(e.target.value);
                    }}
                    onFocus={() => {
                        setFocusInput(true);
                    }}
                />
                {!!searchinput && !loading && (
                    <button onClick={clearSearchInput} className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}

                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default HeaderSearch;
