import React, { useState } from 'react';
import { nameList, getWinner } from '../object/data';
import { startTimeCount, getTimeString } from '../object/timeCount';
const App = () => {
  // 每次更新暫存.
  const [tmpnum, setTmpNum] = useState('');

  // 狀態.
  const [stateWord, setStateWord] = useState('Idle');

  // 贏家.
  const [winner, setWinner] = useState('');

  // 更新text.
  const handleChangeName = event => {
    setTmpNum(event.target.value);
  };

  // 按下按鈕.
  const pushButton = () => {
    // 贏家洗白.
    setWinner('');

    // 狀態等待.
    setStateWord('Wait..');

    startTimeCount(() => {
      var win = getWinner();
      setWinner(win);
      setStateWord('Finish');
    }, tmpnum);
  };

  // 測試程式.
  // if (stateWord == 'Idle') {
  // }
  return (
    <div>
      <div> 抽你媽逼 </div>
      <div>
        時間設定:
        <input type="text" onChange={handleChangeName} />秒
        <button type="button" onClick={pushButton}>
          射
        </button>
      </div>
      {/*<button type="button" onClick={() => setName('PPPPPP')}>
        click me change my name
      </button>*/}
      <br />
      <div> 時間暫停器 </div>
      {getTimeString()}
      <br />
      <br />
      <div>抽獎仔名單</div>
      <div>============</div>
      {nameList.map(name => {
        return (
          <div>
            <spam>{name}</spam>
            <br />
          </div>
        );
      })}
      <div>============</div>
      <br />
      <div> 中獎的那條狗 : </div>
      <div> {winner} </div>
      <br />
      <br />
      <div> 抽獎狀態 : </div>
      <div> {stateWord} </div>
    </div>
  );
};

export default App;
