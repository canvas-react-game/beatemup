import { isServer } from "@/helpers/environment";

export const checkAccess = () => !isServer ? localStorage.getItem("isSignedIn") === "true" : false;

export const setAccess = (isSignedIn: boolean) => {
    !isServer ? localStorage.setItem("isSignedIn", isSignedIn.toString()) : false;
};
