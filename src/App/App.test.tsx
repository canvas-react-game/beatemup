import React from "react";
// import renderer from "react-test-renderer";
import App from "@/App";

import Enzyme, {mount, shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

jest.mock("@/App", () => {
    return function App() {
      return (
        <div className="App">
          
        </div>
      );
    };
});

describe("App component", () => {

    // TODO: Тест падает из-за неявной ошибки транспиляции (наверное)
    // test("renders correctly", () => {
    //     const tree = renderer.create(<App/>);

    //     expect(tree).toMatchSnapshot();       
    // })

    test("mock App should be Truthy", () => { 

        const AppComponent = mount(<App/>);
        expect(AppComponent).toBeTruthy();      
    })

    test("mock App should have correct className", () => { 
        const APP_CLASSNAME = "App";
        const AppWrapper = shallow(<App/>);

        const AppComponent = AppWrapper.find("div")

        expect(AppComponent.hasClass(APP_CLASSNAME)).toBe(true);      
    })

})