import React, { useState } from 'react';
import { timeCount } from '../object/timeCount';

const randObject = () => {
  // 狀態.
  var stateName = ['請設定時間', '倒數中...', '抽獎中...', '結果為:'];
  // 抽獎名單.
  var nameList = ['POPO-Dog', 'POPO-Cat', 'POPO-Fuck', 'POPO阿狗阿貓'];

  var winner = '';

  function setWinnerName(x) {
    winner = x;
  }

  function getRandom(x) {
    return Math.floor(Math.random() * x);
  }

  function getWinner() {
    return nameList[getRandom(nameList.length)];
  }

  return (
    <div>
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
      <div> {timeCount.stateWord} </div>
    </div>
  );
};

export { randObject };
