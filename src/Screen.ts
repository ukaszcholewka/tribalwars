type Page = 'none' | 'overview'

export default class Screen {
  public page: Page = 'none'

  public constructor() {
    this.reload()
    window.addEventListener('navigate', () => {
      this.reload()
      console.log('navigate', this.page)
    })
  }

  public params() {
    const { search } = window.location
    const params = new URLSearchParams(search)
    return params
  }

  public reload() {
    this.page = (this.params().get('screen') as Page) || "none"
  }
}
