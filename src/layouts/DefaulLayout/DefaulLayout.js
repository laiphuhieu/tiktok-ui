import PropTypes from 'prop-types';
import Header from '~/layouts/components/Header/Header';
import styles from './DefaultLayout.module.scss';
import Sidebar from './Sidebar/Sidebar';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={'content'}>{children}</div>
            </div>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
