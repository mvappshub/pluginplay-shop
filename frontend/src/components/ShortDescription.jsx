import React, { useState } from 'react';

const ShortDescription = ({ text, maxLength }) => {
  const [showAll, setShowAll] = useState(false);

  if (text.length <= maxLength) {
    return <p>{text}</p>;
  }

  return (
    <div>
      <p>
        {showAll ? text : `${text.substring(0, maxLength)}... `}
        <a href="#!" onClick={() => setShowAll(!showAll)}>
          {showAll ? 'Zobrazit méně' : 'Zobrazit více'}
        </a>
      </p>
    </div>
  );
};

export default ShortDescription;
