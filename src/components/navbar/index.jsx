import React from 'react';

import { Outlet} from "react-router-dom";
import {useTranslation} from "react-i18next";

import NavMenu from "./NavMenu.jsx";

const Header = () => {

    const {t} = useTranslation()

    return (
        <div className=''>
            <header className='display-flex justify-between mb-16 position-fixed left-0 top-0 w-100 p-3 bg-main header z-3'>
                <NavMenu/>
            </header>
            <Outlet  />
        </div>

    );
};

export default Header;