import React, { useState } from 'react';
import { nameList, getWinner } from '../object/data';

var CountNum = 0;

const App = () => {
  // 每次更新暫存.
  const [tmpnum, setTmpNum] = useState('');
  // 主要計時器.
  const [mainNum, setNum] = useState('');
  // 狀態.
  const [stateWord, setStateWord] = useState('Idle');
  // 贏家.
  const [winner, setWinner] = useState('');

  // 更新text.
  const handleChangeName = event => {
    setTmpNum(event.target.value);
  };

  // const [nameArr, setNameArr] = useState([]);
  // const handlePushArray = () => {
  //   setNameArr(prevArr => [...prevArr, name]);
  //   console.log(nameArr);
  //   console.log(nameList);
  // };

  // 倒數.tick
  const TestCountDown = () => {
    CountNum--;
    var oPtime = CountNum;
    setNum(oPtime.toString());
    if (oPtime == 0) {
      setStateWord('Finish');
      var win = getWinner();
      console.log(win);
      setWinner(win);
      return;
    }
    setTimeout(TestCountDown, 1000);
  };

  // 按下按鈕.
  const pushButton = () => {
    // 贏家洗白.
    setWinner('');
    // 狀態等待.
    setStateWord('Wait..');
    // 存時間.
    console.log('tmpname is ' + tmpnum);
    var time = Number(tmpnum);
    CountNum = time;
    setNum(time);
    console.log(time);
    if (time && time < 60 && time > 0) {
      setTimeout(TestCountDown, 1000);
    } else {
      alert('time error');
    }
  };

  // 回傳倒數時間.
  const getTimeString = () => {
    var time = Number(mainNum);
    if (time) {
      var min = Math.floor(time / 60);
      var sec = time % 60;
      if (min < 10) min = '0' + min;
      if (sec < 10) sec = '0' + sec;
      return min + ':' + sec;
    }
    return '00:00';
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
