class Routers {
  constructor(app, express) {
    this.app = app;
    this.express = express;
  }
  get(path, controller) {
    return this.app.get(path, controller);
  }
  post(path, controller) {
    return this.app.post(path, controller);
  }
  patch(path, controller) {
    return this.app.patch(path, controller);
  }
  put(path, controller) {
    return this.app.put(path, controller);
  }
  delete(path, controller) {
    return this.app.delete(path, controller);
  }
  prefix() {
    return this.method;
  }
}

module.exports = Routers;
