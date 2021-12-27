type Route = {
    path: string,
    checkAccess: boolean
};

type Routes = {
    [key: string]: Route;
};

export const routes: Routes = {
    main: {
        path: "/main",
        checkAccess: true,
    },
    signIn: {
        path: "/signin",
        checkAccess: true,
    },
    signUp: {
        path: "/signup",
        checkAccess: true,
    },
    profile: {
        path: "/profile",
        checkAccess: true,
    },
    forum: {
        path: "/forum",
        checkAccess: true,
    },
    leaderboard: {
        path: "/leaderboard",
        checkAccess: true,
    },
    about: {
        path: "/about",
        checkAccess: true,
    },
};

export const findRoute = (path: Route["path"]): Route | null => {
    const route = Object.values(routes).find((route) => route.path === path);
    return route ?? null;
};
