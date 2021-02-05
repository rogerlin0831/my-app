import React from 'react';
import { randObject } from '../object/data';
import { timeCount } from '../object/timeCount';
const App = () => {
  // 測試程式.
  // if (stateWord == 'Idle') {
  // }
  return (
    <div>
      <div> 抽你媽逼 </div>
      <timeCount></timeCount>
      <br />
      <br />
      <randObject></randObject>
    </div>
  );
};

export default App;
