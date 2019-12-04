import React, { useState } from 'react';

const Contact = () => {
  const [count, setCount] = useState(0);

  return ( 
    <div className="Conact">
      <h3>This is a Contact page</h3>
      <p>{count}</p>
    </div>
  );
}
 
export default Contact;