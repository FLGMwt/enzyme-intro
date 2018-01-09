import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { SpyList, SpyListItem} from './App';

it('renders a spy list', () => {
  const wrapper = shallow(<SpyList spies={['foo', 'bar']} />);
  const spies = wrapper.find('SpyListItem');
  console.log(wrapper.debug());
//  <ul>
//   <Component spy="foo" />
//   <Component spy="bar" />
//  </ul>
  expect(spies.length).toBe(2);
});
