import { isServer } from "./environment";

export const getCookie = (name: string) => {
    if (!isServer) {
        const matches = document.cookie.match(
            new RegExp(
                "(?:^|; )" +
                    name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
                    "=([^;]*)"
            )
        );

        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    return false;
};

export const checkAccess = (): boolean =>
    getCookie("isSignedIn") === "true" || false;

export const checkOAuthSigned = (): boolean =>
    getCookie("setSignedInOAuth") === "true" || false;

export const setSigned = (value: boolean) => {
    document.cookie = `isSignedIn=${value.toString()}`;
};

export const setSignedOAuth = (value: boolean) => {
    document.cookie = `setSignedInOAuth=${value.toString()}`;
};
