import React, { Component } from 'react';

export const SpyListItem = ({spy}) => (
  <li>
    {spy}
  </li>
);

const SpyListItemCopy = ({spy}) => (
  <li>
    {spy}
  </li>
);

export const SpyListItem2 = SpyListItemCopy;

console.log({
  process: process.title,
  name: SpyListItem.name,
  nameWithoutExport: SpyListItemCopy.name,
  nameWithoutExportReassigned: SpyListItem2.name,
});

// Actual:
// {
//   process: 'node',
//   name: '',
//   nameWithoutExport: 'SpyListItemCopy',
//   nameWithoutExportReassigned: 'SpyListItemCopy'
// }

// Expected:
// {
//   process: 'node',
//   name: 'SpyListItem',
//   nameWithoutExport: 'SpyListItemCopy',
//   nameWithoutExportReassigned: 'SpyListItemCopy'
// }

export const SpyList = ({spies}) => (
  <ul>
    {spies.map(spy => (
      <SpyListItem key={spy} spy={spy} />
    ))}
    {spies.map(spy => (
      <SpyListItem2 key={spy} spy={spy} />
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
