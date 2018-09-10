import './scss/style.scss';
import React from 'react';
import { render } from 'react-dom';

const renderApplication = () => {
  render(
    <div className="test">Salut test</div>,
    document.querySelector('#root')
  );
}

renderApplication();