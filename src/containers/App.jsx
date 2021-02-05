import React from 'react';
import { randObject } from '../object/data';
import { timeCount } from '../object/timeCount';
const App = () => {
  // 測試程式.
  // if (stateWord == 'Idle') {
  // }
  return (
    <div>
      <div> 抽 </div>
      <timeCount />
      <randObject />
    </div>
  );
};

export default App;
