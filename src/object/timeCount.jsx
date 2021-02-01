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

export { getTimeString, startTimeCount };
