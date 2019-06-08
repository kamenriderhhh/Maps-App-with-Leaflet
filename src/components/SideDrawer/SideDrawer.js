import React from 'react';

import './SideDrawer.css';

const sideDrawer = props => {
    
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }

    return (
        <nav className={drawerClasses}>
            <ul>
                <li><a href="/">Main</a></li>
                <li><a href="/">Camera</a></li>
                <li><a href="/">Data</a></li>
            </ul>
        </nav>
    );
};

export default sideDrawer;