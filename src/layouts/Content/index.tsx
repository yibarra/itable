import React, { FC, useContext, useEffect } from 'react';
import { useSpring, config } from 'react-spring';

import Header from '../Header';
import Element from '../../components/Element';
import Footer from '../Footer';
import Grid from '../../components/Grid';
import Loader from '../../components/Loader';

import { FiltersProvider } from '../../providers/FiltersProvider';
import { TableContext } from '../../providers/TableProvider';
import { ThemeContext } from '../../providers/ThemeProvider';

import { IThemeContext } from '../../providers/ThemeProvider/interfaces';
import { IContent } from './interfaces';

import { ContentContainerDiv } from './styles';

// content
const Content: FC<IContent> = ({ isLoading, value }) => {  
  // context
  const { table, element, setElement, setTable, getColorGroup } = useContext<any>(TableContext);
  const { onToggle }: IThemeContext = useContext<any>(ThemeContext);

  const color = getColorGroup(element?.groupBlock);

  // y position scroll top
  const [, setY ] = useSpring(() => ({
    immediate: false,
    delay: 1000,
    config: config.slow,
    y: 0,
    onFrame: (props: any) => {
      window.scroll(0, props.y);
    }
  }));

  // use effect
  useEffect(() => {
    if (!table && isLoading === false) {
      setTable(value);
    }

    if (element instanceof Object) {
      setY({ y: 0 });
    }
  }, [ isLoading, setTable, table, value, setY, element ]);

  // render
  return (
    <>
      <Loader isLoading={isLoading} />

      <FiltersProvider>
        <Header
          element={element}
          color={color}
          setElement={setElement}
          onToggle={onToggle} />

        <ContentContainerDiv
          data-switch={element instanceof Object}>
          {isLoading === false &&
            <Grid
              {...table}
              element={element instanceof Object}
              setElement={setElement} />}

          <Element
            element={element}
            color={color} />
        </ContentContainerDiv>
      </FiltersProvider>

      <Footer />
    </>
  );
};

export default Content;