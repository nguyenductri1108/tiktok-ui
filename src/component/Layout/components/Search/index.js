import classNames from 'classnames/bind';
import styles from './HeaderSearch.module.scss';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import AccountItem from '~/component/AccountItem';
import HeadlessTippy from '@tippyjs/react/headless';
import { useState, useEffect, useRef } from 'react';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDebounce } from '~/hooks';
import axios from 'axios';
import * as searchService from '~/apiService/searchService';

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
            const fetchApi = async () => {
                setLoading(true);

                const result = await searchService.search(debounce);
                setResult(result);

                setLoading(false);
            };

            fetchApi();
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

    function handleTypeInput(e) {
        const searchValue = e.target.value;
        if (searchinput.length === 0 && searchValue.startsWith(' ')) {
            return;
        }

        setSearchInput(e.target.value);
    }

    function handleSubmit() {
        if (searchinput.length === 0) {
            return;
        }
    }

    return (
        <HeadlessTippy
            placement="bottom-start"
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
                        handleTypeInput(e);
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

                <button
                    className={cx('search-btn')}
                    onMouseDown={(e) => {
                        e.preventDefault();
                    }}
                    onClick={handleSubmit}
                >
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default HeaderSearch;
