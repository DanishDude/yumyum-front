import React from 'react';
import './PageHeader.scss';

const PageHeader = (header) => {
  return (
    <div className="PageHeader">
      <h1>{header.title}</h1>
      <h5>{header.subtext}</h5>
    </div>
  );
};

export default PageHeader;