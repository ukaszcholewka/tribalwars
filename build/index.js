// src/Screen.ts
class Screen {
  page = "none";
  constructor() {
    this.reload();
    window.addEventListener("navigate", () => {
      this.reload();
      console.log("navigate", this.page);
    });
  }
  params() {
    const { search } = window.location;
    const params = new URLSearchParams(search);
    return params;
  }
  reload() {
    this.page = this.params().get("screen") || "none";
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
