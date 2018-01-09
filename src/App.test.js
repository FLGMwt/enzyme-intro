import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { SpyList, SpyListItem} from './App';

it('renders a spy list', () => {
  const wrapper = shallow(<SpyList spies={['foo', 'bar']} />);
  const spies = wrapper.find('SpyListItem');
  console.log(wrapper.debug());
// Actual:
//  <ul>
//    <Component spy="foo" />
//    <Component spy="bar" />
//    <SpyListItemCopy spy="foo" />
//    <SpyListItemCopy spy="bar" />
//  </ul>

// Expected:
//  <ul>
//    <SpyListItem spy="foo" />
//    <SpyListItem spy="bar" />
//    <SpyListItemCopy spy="foo" />
//    <SpyListItemCopy spy="bar" />
//  </ul>
  expect(spies.length).toBe(2);
});
