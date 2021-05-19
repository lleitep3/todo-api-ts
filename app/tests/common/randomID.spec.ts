import randomID from "../../src/common/randomID"

describe('randomID', () => {
  it(' should work', () => {
    expect(randomID()).not.toBeNull()
  })
})