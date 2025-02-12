// src/Screen.ts
class Screen {
  page = "none";
  constructor() {
    this.reload();
  }
  params() {
    const { search } = window.location;
    const params = new URLSearchParams(search);
    return params;
  }
  reload() {
    this.page = this.params().get("screen") || "none";
    console.log(this.page);
  }
}

// index.ts
class App {
  screen;
  constructor() {
    this.screen = new Screen;
  }
}
new App;
