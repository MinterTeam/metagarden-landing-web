if (typeof window !== 'undefined') {
    // clear previously saved auth
    window.localStorage.removeItem('vuex');
}

// import createPersistedState from 'vuex-persistedstate';
//
// export default ({store}) => {
//     createPersistedState({
//         paths: ['auth', 'balanceDisplayType'],
//     })(store);
// };
