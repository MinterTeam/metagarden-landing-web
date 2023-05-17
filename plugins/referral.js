import Cookies from 'js-cookie';
import {REF_ID_QUERY} from '~/assets/variables.js';

// same as https://github.com/MinterTeam/honee-app-web/blob/master/store/referral.js#L4
const FOREIGN_REF_COOKIE_KEY = 'foreignRefId';

export default ({ app, store }) => {
    // Every time the route changes (fired on initialization too)
    app.router.beforeEach(async (to, from, next) => {
        const route = to;
        if (route.query[REF_ID_QUERY]) {
            // save to cookies
            const getExpiry = () => {
                const date = new Date();
                date.setDate(date.getDate() + 30);
                return date;
            };
            Cookies.set(FOREIGN_REF_COOKIE_KEY, route.query[REF_ID_QUERY], {
                expires: getExpiry(),
                // keep last 2 domain parts (top level domain) and remove port
                domain: window.location.host.split('.').slice(-2).join('.').replace(/:\d+$/, ''),
                sameSite: 'Lax',
            });

            // remove ref id from query
            const {[REF_ID_QUERY]: refId, ...newQuery} = route.query;
            return next({
                path: route.path,
                query: newQuery,
            });
        }

        next();
    });
};
