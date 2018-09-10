import './scss/style.scss';
import React from 'react';
import { render } from 'react-dom';

import HiCustomerClient from './components/HiCustomerClient.jsx';

const renderApplication = () => {
  render(
   <HiCustomerClient />,
    document.querySelector('#root')
  );
}

renderApplication();

if (module.hot) {
  module.hot.accept("./", () => {
    renderApplication();
  });
}
