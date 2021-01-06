import React, { FC } from 'react';
import { transparentize } from 'polished';

import ElementInfo from './ElementInfo';

import { ElementContainer } from './styles';

// element
const Element: FC<any> = ({ element }) => {
  // render
  return (
    <ElementContainer style={{
      backgroundColor: transparentize(0.3, element.cpkHexColor)
    }}>
      <div className="element--container">
        {element && <ElementInfo element={element} />}
      </div>
    </ElementContainer>
  );
};

export default Element;