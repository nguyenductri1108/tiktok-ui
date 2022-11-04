import styles from './listAccountsSidebar.module.scss';
import classNames from 'classnames/bind';
import Account from './account/account';

const cx = classNames.bind(styles);

function ListAccountsSidebar({ heading, data }) {
    return (
        <div className={cx('wrapper')}>
            <h4 className={cx('heading')}>{heading}</h4>
            {data.map((item) => {
                const dataItem = {
                    nickname: item.nickname,
                    avatar: item.avatar,
                    tick: item.tick,
                    full_name: item.full_name,
                };

                return (
                    <Account
                        itemData={{
                            nickname: 'tri',
                            avatar: 'abc',
                            tick: true,
                            full_name: 'trind',
                        }}
                    ></Account>
                );
            })}
        </div>
    );
}

export default ListAccountsSidebar;
