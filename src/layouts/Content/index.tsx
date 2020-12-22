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
    <div className="" style={{ width: 450 }}>
      <RangeSlider min={1500} max={2007} label="years" pointWidth={18} />
      <RangeSlider min={0} max={100} label="grams/mole" pointWidth={30} />
      <RangeSlider min={0} max={100} label="grams/guacamole" pointWidth={20} />
      <RangeSlider min={10} max={40} label="grams/mole" pointWidth={40} />
    </div>
  );
};

export default Content;