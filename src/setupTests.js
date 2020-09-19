import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import fetch from './Tests/Component-tests/mock/fetch';

global.fetch = fetch;
configure({ adapter: new Adapter() });//configure tests

