import React, { FC, useContext, useEffect } from 'react';
import RangeSlider from '../../components/Form/RangeSlider';

import { TableContext } from '../../providers/TableProvider';

// content
const Content: FC<any> = ({ isLoading, value }) => {  
  // context
  const tableContext = useContext<any>(TableContext);
  const { table, setTable } = tableContext;

  // use effect
  useEffect(() => {
    if (!table && isLoading === false) {
      setTable(value);
    }
  }, [ isLoading, setTable, table, value ]);

  // render
  return (
    <div className="">
      <RangeSlider min={1500} max={2007} label="years" />
      <RangeSlider min={0} max={100} label="grams/mole" />
      <RangeSlider min={10} max={40} label="grams/mole" />
    </div>
  );
};

export default Content;