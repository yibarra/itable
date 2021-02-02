import React, { FC } from 'react';

import ElementInfo from './ElementInfo';
import ElementGraph from './ElementGraph';

import { ElementContainer } from './styles';

// element
const Element: FC<any> = ({ element, color }) => {
  // render
  return (
    <ElementContainer style={{
      backgroundColor: color
    }}>
      <div className="element--container">
        {element && 
          <>
            <ElementInfo element={element} />
            <ElementGraph element={element} />
          </>}
      </div>
    </ElementContainer>
  );
};

export default Element;