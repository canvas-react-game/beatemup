export type Route = {
    path: string
};

export type Routes = {
    [key: string]: Route;
};

export const routes: Routes = {
    main: {
        path: "/main",
    },
    signIn: {
        path: "/signin",
    },
    signUp: {
        path: "/signup",
    },
    profile: {
        path: "/profile",
    },
    forum: {
        path: "/forum",
    },
    topic: {
        path: "/topics/:id",
    },
    topicEdit: {
        path: "/topic/edit",
    },
    leaderboard: {
        path: "/leaderboard",
    },
    about: {
        path: "/about",
    },
    game: {
        path: "/game",
    },
};

export const findRoute = (path: Route["path"]): Route | null => {
    const route = Object.values(routes).find((route) => route.path === path);
    return route ?? null;
};
