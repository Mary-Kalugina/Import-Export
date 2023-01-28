export default class Game {
    start() {
      console.log('game started');
    }
  }
  
  class GameSavingData {
  }
  
  function readGameSaving() {
  }
  
  function writeGameSaving() {
  }
  module.exports = {
    GameSavingData,
    readGameSaving,
    writeGameSaving
  }
  import {Character} from './domain.js';