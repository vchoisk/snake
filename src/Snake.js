import React, { Component } from "react";
import axios from 'axios';

const INITIAL_BODY_LENGTH = 5;

export default class Snake extends Component {
  player = { x: 10, y: 10 }; // 유저의 위치(뱀의 머리)
  apple = { x: 15, y: 15 }; // 생성된 사과의 위치
  direction = { x: 0, y: 0 }; // 뱀이 움직이는 방향
  tile = { size: 20, count: 20 }; // 지도의 크기
  snake = []; // 뱀의 몸 좌표
  tail = INITIAL_BODY_LENGTH; // 뱀의 길이
  loopIds = [];

  componentDidMount() {
    this._initWorld();
    axios.post('https://65emhn5wa1.execute-api.us-east-1.amazonaws.com/Prod/favorite/sadf/word/risk1')
    .then(res => {console.log(res)})
    axios.get('https://s3-ap-northeast-1.amazonaws.com/santa.service.test/swagger.yml/rithentication/email'
    )
    .then(res => {console.log(res)})
  }

  componentWillUnmount() {
    this._initWorld();
  }

  _initWorld() {
    this.ctx = this.world.getContext("2d");
    document.addEventListener("keydown", this._keyAction.bind(this));
    const newLoopId = this._loop();
    this.loopIds.push(newLoopId)
  }
  
  _clearWorld() {
    document.removeEventListener("keydown", this._keyAction.bind(this));
    this.loopIds.forEach(loopId => clearTimeout(loopId))
  }

  _loop() {
    this._move();
    this._renderBackground();
    this._renderSnake();
    this._renderApple();
    this.forceUpdate();
    setTimeout(this._loop.bind(this), 1000 / 15);
  }

  _move() {
    /* 
      Snake의 움직임을 구현해주세요
      Snake가 World를 벗어날 경우를 구현해주세요
    */ 
  }

  _keyAction(e) {
    // Snake를 조종할 수 있게 키액션을 구현해주세요
  }

  _renderBackground() {
    const { ctx, world } = this;
    ctx.fillStyle = "#1c2022";
    ctx.fillRect(0, 0, world.width, world.height);
  }

  _renderSnake() {
    const { ctx, snake, player, tile } = this;
    ctx.fillStyle = "#2ecc71";
    for (let i = 0; i < snake.length; i++) {
      ctx.fillRect(
        snake[i].x * tile.size,
        snake[i].y * tile.size,
        tile.size,
        tile.size
      );
      // 뱀의 스스로의 몸을 물면 처음 길이로 돌아간다
      if (snake[i].x === player.x && snake[i].y === player.y) {
        this.tail = INITIAL_BODY_LENGTH;
      }
    }
    // 뱀의 머리를 그리고, 뱀의 꼬리를 지워서 한칸 이동한다
    snake.push({
      x: player.x,
      y: player.y
    });
    while (snake.length > this.tail) {
      snake.shift();
    }
  }

  _renderApple() {
    const { ctx, apple, player, tile } = this;

    // 뱀이 사과를 먹으면 길이를 늘리고 새로운 사과를 그린다
    if (apple.x === player.x && apple.y === player.y) {
      this.tail++;
      apple.x = Math.floor(Math.random() * tile.count);
      apple.y = Math.floor(Math.random() * tile.count);
    }
    ctx.fillStyle = "#e74c3c";
    ctx.fillRect(
      apple.x * tile.size,
      apple.y * tile.size,
      tile.size,
      tile.size
    );
  }

  render() {
    return (
      <div>
        <canvas ref={el => (this.world = el)} width="400" height="400" />
      </div>
    );
  }
}
