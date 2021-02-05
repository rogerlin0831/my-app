const timeCount = () => {
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

export { timeCount };
