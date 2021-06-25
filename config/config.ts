import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
    history: {
        type: 'browser'
    },
    routes: routes,
});
