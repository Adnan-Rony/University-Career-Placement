import React from 'react';
import { Outlet } from 'react-router';

const PortfolioLayout = () => {
    return (
        <div>
           <Outlet />
        </div>
    );
};

export default PortfolioLayout;