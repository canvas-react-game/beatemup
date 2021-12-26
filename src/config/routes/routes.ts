import {checkAccess} from "@/helpers/acess";

type Route = {
    path: string,
    checkAccess: boolean
}

type Routes = {
    [key: string]: Route;
}

export const routes: Routes = {
    main: {
        path: '/main',
        checkAccess: checkAccess()
    },
    signIn: {
        path: '/signin',
        checkAccess: true
    },
    signUp: {
        path: '/signup',
        checkAccess: true
    },
    profile: {
        path: '/profile',
        checkAccess: checkAccess()
    },
    forum: {
        path: '/forum',
        checkAccess: checkAccess()
    },
    leaderboard: {
        path: '/leaderboard',
        checkAccess: checkAccess()
    },
    about: {
        path: '/about',
        checkAccess: checkAccess()
    },
}

export const findRoute = (path: Route['path']): Route | null => {
    return Object.values(routes).find(route => route.path === path) ?? null;
}