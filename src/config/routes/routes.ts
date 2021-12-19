type Route = {
    path: string,
    checkAccess: boolean
}

type Routes = {
    [key: string]: Route;
}

export const routes: Routes = {
    main: {
        path: '/',
        checkAccess: true
    },
    signIn: {
        path: '/signin',
        checkAccess: true
    },
    signUp: {
        path: '/signup',
        checkAccess: true
    }
}

export const findRoute = (path: Route['path']): Route | null => {
    return Object.values(routes).find(route => route.path === path) ?? null;
}