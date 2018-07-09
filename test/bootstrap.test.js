// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chai from 'chai';
import sinonChai from 'sinon-chai';

configure({ adapter: new Adapter() });

before(() => {
  chai.should();
  chai.use(sinonChai);
});
