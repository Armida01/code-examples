import { Link } from 'react-router-dom';
import { useAppDispatch } from 'store';

// Components
import { NavItem } from 'components';

// Actions
import { changeNewsCategory } from 'store/news/news.actions';

// Types
import { INavItemProps } from '../types';

const Header = () => {
    const navs:INavItemProps[] = [
        { title: "Home", path: "/" },
        { title: "Business", path: "/business" },
        { title: "Sports", path: "/sports" },
        { title: "Science", path: "/science" },
        { title: "Health", path: "/health" },
        { title: "Entertainment", path: "/entertainment" },
        { title: "Technology", path: "/technology" }
    ]

    return (
        <header className="text-gray-600 body-font bg-indigo-500">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <span className="ml-3 text-xl text-white">News App</span>
                </Link>

                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    {
                        navs.map((nav, index) => {
                            return <NavItem key={index} title={nav.title} path={nav.path} />
                        })
                    }
                </nav>
            </div>
        </header>
    );
};

export default Header;
