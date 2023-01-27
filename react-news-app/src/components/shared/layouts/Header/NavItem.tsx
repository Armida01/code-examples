import { NavLink } from 'react-router-dom';

// Types
import { INavItemProps } from'../types'

const NavItems = ({ title, path }:INavItemProps) => {
    return (
        <NavLink to={path} className={({ isActive }) => `mr-5 hover:text-gray-900 transition-all ${isActive ? 'text-gray-900' : 'text-white'}`}>
            {title}
        </NavLink>
    )
}

export default NavItems;
