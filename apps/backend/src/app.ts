import express, { Application } from 'express';

class App {
  public express: Application;

  constructor() {
    this.express = express();

    this.middleware();
    this.routes();
  }

  private middleware(): void {
    this.express.use(express.json());
  }

  private routes(): void {}
}

export default new App().express;
