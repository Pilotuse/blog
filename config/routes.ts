export default [
    { path: '/', redirect: '/home', exact: true },
    { path: '/home', component: 'Home', exact: true },
    { path: '/403', component: '403', exact: true },
    { path: '/404', component: '404', exact: true },
    { path: '/500', component: '500', exact: true },
    { path: '*', redirect: '404' },
];