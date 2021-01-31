// 抽獎名單.
var nameList = ['POPO-Dog', 'POPO-Cat', 'POPO-Fuck', 'POPO阿狗阿貓'];

// 狀態.
var stateName = ['請設定時間', '倒數中...', '抽獎中...', '結果為:'];

//
var gtimes = 0;

// 狀態列舉.
// enum eprocess {
//   eIdle,
//   esetTime,
//   ecountDown,
//   erand,
//   eresult,
//   eEnd,
// }

function getRandom(x) {
  return Math.floor(Math.random() * x);
}

function getWinner() {
  return nameList[getRandom(nameList.length)];
}

export { nameList, stateName, gtimes, getWinner };
