type Route = {
    path: string
}

type Routes = {
    [key: string]: Route;
};

export const routes: Routes = {
    main: {
        path: '/main'
    },
    signIn: {
        path: '/signin'
    },
    signUp: {
        path: '/signup'
    },
    profile: {
        path: '/profile'
    },
    forum: {
        path: '/forum'
    },
    leaderboard: {
        path: '/leaderboard'
    },
    about: {
        path: '/about'
    },
};

export const findRoute = (path: Route["path"]): Route | null => {
    const route = Object.values(routes).find((route) => route.path === path);
    return route ?? null;
};
