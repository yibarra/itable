import React, { FC } from 'react';

import ElementInfo from './ElementInfo';
import ElementGraph from './ElementGraph';

import { IElementDiv } from './interfaces';

import { ElementContainer } from './styles';

// element
const Element: FC<IElementDiv> = ({ element, color }) => {
  // render
  return (
    <ElementContainer style={{
      backgroundColor: color
    }}>
      <div className="element--container">
        {element && 
          <>
            <ElementGraph element={element} color={color} />
            <ElementInfo element={element} color={color} />
          </>}
      </div>
    </ElementContainer>
  );
};

export default Element;