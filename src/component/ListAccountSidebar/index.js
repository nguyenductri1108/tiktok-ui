import styles from './listAccountsSidebar.module.scss';
import classNames from 'classnames/bind';
import Account from './account/account';
import { useEffect, useState } from 'react';
import { AxiosGet } from '~/service/nextGenSearchService';

const cx = classNames.bind(styles);

const SkeletonList = [
    <Account loading={true} />,
    <Account loading={true} />,
    <Account loading={true} />,
    <Account loading={true} />,
    <Account loading={true} />,
    <Account loading={true} />,
];

function  ListAccountsSidebar({ heading }) {
    const [loading, setLoading] = useState(false);
    const [shortList, setShortList] = useState(true);
    const [data, setData] = useState([]);
    const getData = async () => {
        setLoading(true);
        const response = await AxiosGet(
            {
                page: 0,
                per_page: 20,
            },
            'api/users/suggested',
        );
        console.log(response);
        setLoading(false);
        setData(response.data);
    };
    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {}, [shortList]);

    return (
        <div className={cx('wrapper')}>
            <h4 className={cx('heading')}>{heading}</h4>
            {loading && SkeletonList}

            {!loading &&
                data.slice(0, shortList ? 5 : data.length).map((item, index) => {
                    const dataItem = {
                        nickname: item.nickname,
                        avatar: item.avatar,
                        tick: item.tick,
                        full_name: `${item.first_name} ${item.last_name}`,
                    };

                    return <Account key={index} itemData={dataItem}></Account>;
                })}

            <span
                className={cx('list-handle-btn')}
                onClick={() => {
                    setShortList(!shortList);
                }}
            >
                {shortList ? 'See all' : 'See less'}
            </span>
        </div>
    );
}

export default ListAccountsSidebar;
