import React from 'react';
import './PageHeader.scss';

const PageHeader = (header) => {
  const style = {
    "backgroundImage": `url(${header.backgroundImage})`
  }
  return (
    <div style={style} className="PageHeader">
      <h1>{header.title}</h1>
      <h5>{header.subtext}</h5>
    </div>
  );
};

export default PageHeader;
