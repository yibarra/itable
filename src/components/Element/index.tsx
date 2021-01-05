import React, { FC } from 'react';

import { transparentize } from 'polished'

import { ElementContainer } from './styles';
import ElementInfo from './ElementInfo';

const Element: FC<any> = ({ element }) => {
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