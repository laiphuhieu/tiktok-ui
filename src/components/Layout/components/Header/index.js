import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faEllipsisVertical, faSpinner, faPlus } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react/';
import 'tippy.js/dist/tippy.css';

import Button from '~/components/Button';
import { Wrapper as PopperWrapper } from '~/components/Layout/Popper';
import styles from './Header.module.scss';
import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';
import Menu from '~/components/Layout/Popper/Menu';
import {
    CoinIcon,
    FeedbackIcon,
    KeyboardIcon,
    LanguageIcon,
    MessageIcon,
    PlusIcon,
    ProfileIcon,
    SearchIcon,
    SettingIcon,
    SignOutIcon,
    UploadIcon,
} from '~/components/Icons';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <LanguageIcon />,
        title: 'English',
        subMenu: {
            title: 'Language',
            data: [
                { type: 'language', code: 'en', title: 'English' },
                { type: 'language', code: 'vi', title: 'Tiếng Việt' },
                { type: 'language', code: 'jp', title: 'Japanese' },
            ],
        },
    },
    {
        icon: <FeedbackIcon />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <KeyboardIcon />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    const currentUser = true;

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    // Handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <ProfileIcon />,
            title: 'View profile',
            to: '/@hoaa',
        },
        {
            icon: <CoinIcon />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <SettingIcon />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <SignOutIcon />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* logo */}
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>

                <HeadlessTippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex={-1} {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    {/* search box */}
                    <div className={cx('search')}>
                        <input placeholder="Search" spellCheck={false} />
                        {/* spliter */}
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        <div className={cx('spliter')}></div>
                        {/* Search-btn */}
                        <button className={cx('search-btn')}>
                            <SearchIcon />
                        </button>
                    </div>
                </HeadlessTippy>

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Button upload>
                                <PlusIcon className={cx('plus-icon')} />
                                <span>Upload</span>
                            </Button>
                            <Tippy delay={[0, 200]} content="Messages" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button upload>
                                <FontAwesomeIcon icon={faPlus} className={cx('plus-icon')} />
                                <span>Upload</span>
                            </Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                alt="nguyen van a"
                                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/305530dd6f988f6b3030e4c90918dbc7.jpeg?x-expires=1685026800&x-signature=CnV4GNPWmWupKkY%2FZr85vcirgiQ%3D"
                                fallback="https://scontent.fhan9-1.fna.fbcdn.net/v/t39.30808-6/315169524_4061970150693848_8766993325938245015_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=QjCRcMR0lk8AX89otk3&_nc_ht=scontent.fhan9-1.fna&oh=00_AfCW6iSvpYn8cfdaagUu5-Wu0_SOdz02wlIwQcGx-u0BCw&oe=64724C24"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
