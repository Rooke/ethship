import React from 'react';
import { Link } from 'react-router';

export default () =>
  <div>
    <ul>
      <li><Link to='/buy'>Buy</Link></li>
      <li><Link to='/ship'>Ship</Link></li>
    </ul>
  </div>;