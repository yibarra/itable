import React, { FC } from 'react';
import Link from '../../Link';
import { IElementLink } from './interfaces';
import { ElementLinkContainer } from './styles';

// element link
const ElementLink: FC<IElementLink> = ({ link, text }) => {
  // render
  return (
    <ElementLinkContainer>
      <p className="title">{text}</p>

      <div className="link">
        <Link href={link} text={link} />
      </div>
    </ElementLinkContainer>
  );
};

export default ElementLink;