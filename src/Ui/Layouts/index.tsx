import React from 'react';
import { Link} from 'react-router-dom'
const navs = [
    { path:'/home', name:'Home'},
    { path:'/about', name:'About'}
]
export const Layout = (props) => (
    <div>
        <ul>
            <li>
                {navs.map(NavItem => (
                    <li>
                        <Link to={NavItem.path}>{NavItem.name}</Link>
                    </li>
                ))}
            </li>
        </ul>
        {props.children}
        </div>
)