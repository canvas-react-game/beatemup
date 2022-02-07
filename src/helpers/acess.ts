export const checkAccess = () => {
    if(typeof window !== "undefined") {
        return localStorage.getItem("isSignedIn") === "true"
    }
    return true
};

export const setAccess = (isSignedIn: boolean) => {
    if(typeof window !== "undefined") {
        localStorage.setItem("isSignedIn", isSignedIn.toString());
    }
};
