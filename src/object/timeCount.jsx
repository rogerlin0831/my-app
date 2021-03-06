import React, { useState } from 'react';

const TimeCount = () => {
  // 狀態.
  var stateWord = '';
  var tmpnum = '';

  // 更新text.
  const handleChangeName = event => {
    tmpnum = event.target.value;
  };

  function setStateWord(x) {
    stateWord = x;
  }

  // 按下按鈕.
  const pushButton = () => {
    // 狀態等待.
    setStateWord('Wait..');

    startTimeCount(() => {
      // var win = RandObject.getWinner();
      // RandObject.setWinnerName(win);
      setStateWord('Finish');
    }, tmpnum);
  };

  var callBack;
  var CountNum = 0;

  const startTimeCount = (call, _inputNum) => {
    console.log('CountNum is ' + CountNum);
    if (CountNum != 0) return;
    callBack = call;
    // 存時間.
    console.log('tmpname is ' + _inputNum);
    var time = Number(_inputNum);
    CountNum = time;

    console.log(time);
    if (time && time < 60 && time > 0) {
      setTimeout(TestCountDown, 1000);
    } else {
      alert('time error');
    }
  };
  //

  // 倒數.tick
  // 回傳倒數時間.
  const getTimeString = () => {
    var time = Number(CountNum);
    if (time) {
      var min = Math.floor(time / 60);
      var sec = time % 60;
      if (min < 10) min = '0' + min;
      if (sec < 10) sec = '0' + sec;
      return min + ':' + sec;
    }
    return '00:00';
  };

  const TestCountDown = () => {
    CountNum--;
    var oPtime = CountNum;
    if (oPtime === 0) {
      callBack();
      return;
    }
    setTimeout(TestCountDown, 1000);
  };
  return (
    <div>
      時間設定:
      <input type="text" onChange={handleChangeName} />秒
      <button type="button" onClick={pushButton}>
        射
      </button>
      {/*<button type="button" onClick={() => setName('PPPPPP')}>
        click me change my name
      </button>*/}
      <br />
      <div> 時間暫停器 </div>
      {getTimeString()}
    </div>
  );
};

export default TimeCount;
