type ArmyItem = {
  speed: number
  cap: number
}

export const army: Record<string, ArmyItem> = {
  spear: {
    speed: 18,
    cap: 25
  },
  sword: {
    speed: 22,
    cap: 15
  }
}
