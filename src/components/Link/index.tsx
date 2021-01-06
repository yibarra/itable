import React, { FC } from 'react';
import { ILink } from './interfaces';
import { LinkContainer } from './styles';

const Link: FC<ILink> = ({ href, text }) => {
  return (
    <LinkContainer
      href={href}
      target="_blank">
      <span className="material-icons">link</span>
      <span className="text">{text}</span>
    </LinkContainer>
  );
};

export default Link;