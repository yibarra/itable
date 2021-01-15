import React, { FC, useContext, useEffect } from 'react';

import Header from '../Header';
import Element from '../../components/Element';
import Grid from '../../components/Grid';
import Loader from '../../components/Loader';

import { FiltersProvider } from '../../providers/FiltersProvider';
import { TableContext } from '../../providers/TableProvider';
import { ThemeContext } from '../../providers/ThemeProvider';

import { IThemeContext } from '../../providers/ThemeProvider/interfaces';
import { IContent } from './interfaces';

import { ContentContainer } from './styles';

// content
const Content: FC<IContent> = ({ isLoading, value }) => {  
  // context
  const tableContext: any = useContext<any>(TableContext);
  const themeContext: any = useContext<any>(ThemeContext);

  const { table, element, setElement, setTable } = tableContext;
  const { onToggle }: IThemeContext = themeContext;

  // use effect
  useEffect(() => {
    if (!table && isLoading === false) setTable(value);
  }, [ isLoading, setTable, table, value ]);

  // render
  return (
    <>
      <FiltersProvider>
        <Header
          element={element}
          setElement={setElement}
          onToggle={onToggle} />

        <ContentContainer>
          {isLoading === false && !element &&
            <Grid
              {...table}
              element={element instanceof Object}
              setElement={setElement} />}

          {element && <Element element={element} />}
        </ContentContainer>
      </FiltersProvider>

      <Loader isLoading={isLoading} />
    </>
  );
};

export default Content;