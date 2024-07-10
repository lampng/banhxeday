import home from '../pages/home/index.jsx';
import caster from '../pages/caster/index.jsx';
import company from '../pages/company/index.jsx';
import customer from '../pages/customer/index.jsx';
import product from '../pages/product';
const publicRoutes = [
    { path: '/', component: home },
    { path: '/caster-data', component: caster },
    { path: '/company-introduction', component: company },
    { path: '/customer-center', component: customer },
    { path: '/products', component: product },
];
const PrivateRoutes = [];
export { publicRoutes, PrivateRoutes };
