import { Link } from 'react-router-dom';

// Types
import {INavItemProps} from'../types'

const NavItems = ({ title, path }:INavItemProps) => {
    return (
        <Link to={path} className="mr-5 hover:text-gray-900">
            {title}
        </Link>
    )
}

export default NavItems;