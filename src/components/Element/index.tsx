import React, { FC } from 'react';
import { transparentize } from 'polished';

import ElementInfo from './ElementInfo';
import ElementGraph from './ElementGraph';

import { ElementContainer } from './styles';

// element
const Element: FC<any> = ({ element }) => {
  // render
  return (
    <ElementContainer style={{
      backgroundColor: element.cpkHexColor
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