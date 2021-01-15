import React from 'react';
import { Link} from 'react-router-dom'
const navs = [
    { path:'/home', name:'Home'},
    { path:'/about', name:'About'}
]
export const Layout = (props) => (
    <div>
        <ul>
            {navs.map((NavItem, index) => (
                <li key={index}>
                    <Link to={NavItem.path}>{NavItem.name}</Link>
                </li>
            ))}
        </ul>
        {props.children}
    </div>
)