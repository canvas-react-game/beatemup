declare module "*.scss" {
    const content: Record<string, string>;
    export default content;
}
declare module "*.png";
declare module "*.jpg";
interface MyWindow extends Window {
    __REDUX_DEVTOOLS_EXTENSION__: any;
}

declare const window: MyWindow;
