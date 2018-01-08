import React, { Component } from 'react';

export const SpyListItem = ({spy}) => (
  <li>
    {spy}
  </li>
);

export const SpyList = ({spies}) => (
  <ul>
    {spies.map(spy => (
      <SpyListItem spy={spy} />
    ))}
  </ul>
);

const spies = [
  'Alice',
  'Bob',
  'Charlie',
];

const App = () => (
  <SpyList spies={spies} />
);

export default App;
