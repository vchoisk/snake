import React, { Component } from "react";

export default class Snake extends Component {
  player = { x: 10, y: 10 };
  apple = { x: 15, y: 15 };
  verocity = { x: 0, y: 0 };
  tile = { size: 20, count: 20 };
  snake = [];
  tail = 5;

  _initWorld() {
    this.ctx = this.world.getContext("2d");
    document.addEventListener("keydown", this._keyAction.bind(this));
    this._loop();
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
    // Snake의 움직임을 구현해주세요
    // Snake가 World를 벗어날 경우를 구현해주세요
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
      if (snake[i].x === player.x && snake[i].y === player.y) {
        this.tail = 5;
      }
    }
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

  componentDidMount() {
    this._initWorld();
  }

  render() {
    return (
      <div>
        <canvas ref={el => (this.world = el)} width="400" height="400" />
      </div>
    );
  }
}