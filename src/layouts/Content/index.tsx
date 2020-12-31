import React, { FC, useContext, useEffect } from 'react';

import Header from '../Header';
import Grid from '../../components/Grid';
import Loader from '../../components/Loader';

import { ThemeContext } from '../../providers/ThemeProvider';
import { TableContext } from '../../providers/TableProvider';

import { IThemeContext } from '../../providers/ThemeProvider/interfaces';
import { IContent } from './interfaces';

import { ContentContainer } from './styles';

// content
const Content: FC<IContent> = ({ isLoading, value }) => {  
  // context
  const tableContext: any = useContext<any>(TableContext);
  const themeContext: any = useContext<any>(ThemeContext);

  const { table, setTable } = tableContext;
  const { onToggle }: IThemeContext = themeContext;

  // use effect
  useEffect(() => {
    if (!table && isLoading === false) setTable(value);
  }, [ isLoading, setTable, table, value ]);

  // render
  return (
    <>
      <Header onToggle={onToggle} />

      <ContentContainer>
        {isLoading === false && <Grid {...table} />}
      </ContentContainer>

      <Loader isLoading={isLoading} />
    </>
  );
};

export default Content;