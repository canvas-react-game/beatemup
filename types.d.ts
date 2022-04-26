declare module "*.scss" {
    const content: Record<string, string>;
    export default content;
}
declare module "*.png";
declare module "*.jpg";
interface Window extends globalThis {
    // В d.ts нам неважно, что это за тип,
    // так как он сразу попадает в redux store на клиенте
    __INITIAL_STATE__?: object;
    __REDUX_DEVTOOLS_EXTENSION__: any;
}