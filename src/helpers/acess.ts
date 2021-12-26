export const checkAccess = () => localStorage.getItem('isSignedIn') === 'true';

export const setAccess = (isSignedIn: boolean) =>
    localStorage.setItem('isSignedIn', isSignedIn.toString());