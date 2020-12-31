import React, { FC, useContext, useEffect } from 'react';
import styled from 'styled-components';

import Header from '../Header';
import Grid from '../../components/Grid';

import { ThemeContext } from '../../providers/ThemeProvider';
import { TableContext } from '../../providers/TableProvider';

import { IThemeContext } from '../../providers/ThemeProvider/interfaces';
import RangeSlider from '../../components/Form/RangeSlider';
import Loader from '../../components/Loader';

// div content
const DivContent = styled.div`
  float: left;
  height: auto;
  padding: 20px 20px 60px;
  position: relative;
  width: 100vw;
`;

// content
const Content: FC<any> = ({ isLoading, value }) => {  
  // context
  const tableContext: any = useContext<any>(TableContext);
  const themeContext: any = useContext<any>(ThemeContext);

  const { table, setTable } = tableContext;
  const { onToggle }: IThemeContext = themeContext;

  // use effect
  useEffect(() => {
    if (!table && isLoading === false) {
      setTable(value);
    }
  }, [ isLoading, setTable, table, value ]);

  // render
  return (
    <>
      <DivContent>
        <Header onToggle={onToggle} />

        <RangeSlider min={1500} max={2007} label="years" size={18} />

        {isLoading === false && <Grid {...table} />}

      </DivContent>
      <Loader isLoading={isLoading} />
    </>
  );
};

export default Content;