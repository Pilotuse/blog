export default [
    { path: '/', redirect: '/login', exact: true },
    { path: '/login', component: 'Login', exact: true },
    { path: '/register', component: 'Register', exact: true },
    { path: '/home', component: 'Home', exact: true },
    { path: '/404', component: '404', exact: true },
    { path: '*', redirect: '404' },
];