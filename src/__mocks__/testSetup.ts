import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

// React 17 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });
export { shallow, mount, render };
export default Enzyme;