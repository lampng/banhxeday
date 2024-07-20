import home from '../pages/home/index.jsx';
import caster from '../pages/caster/index.jsx';
import company from '../pages/company/index.jsx';
import customer from '../pages/customer/index.jsx';
import product from '../pages/product';
// import singleProduct from '../pages/singleProduct';
const publicRoutes = [
    { path: '/', component: home },
    { path: '/company-introduction/:introductionId', component: company },
    { path: '/caster-data/:casterId', component: caster },
    { path: '/products/:productId', component: product },
    { path: '/customer-center/:customerId', component: customer },
];
const PrivateRoutes = [];
export { publicRoutes, PrivateRoutes };
