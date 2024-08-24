import { mount } from '@vue/test-utils'
import WordleBoard from '../WordleBoard.vue'
import { VICTORY_MESSAGE, DEFEAT_MESSAGE } from '@/settings'

describe('WordleBoard', () => {
  const wordOfTheDay = 'TESTS'
  let wrapper: ReturnType<typeof mount>

  beforeEach(() => {
    wrapper = mount(WordleBoard, { props: { wordOfTheDay } })
  })

  async function playerSubmitsGuess(guess: string) {
    const guessInput = wrapper.find('input[type=text]')
    await guessInput.setValue(guess)
    await guessInput.trigger('keydown.enter')
  }

  test('a victory message appears when the user makes a right guess', async () => {
    await playerSubmitsGuess(wordOfTheDay)
    expect(wrapper.text()).toContain(VICTORY_MESSAGE)
  })

  test('a failure message appears when the user makes a wrong guess', async () => {
    await playerSubmitsGuess('WRONG')
    expect(wrapper.text()).toContain(DEFEAT_MESSAGE)
  })

  test('no end-of-game message appears if the user has not yet made a guess', () => {
    expect(wrapper.text()).not.toContain(VICTORY_MESSAGE)
    expect(wrapper.text()).not.toContain(DEFEAT_MESSAGE)
  })

  test('If a word of the day provided does not have exactly 5 characters, a warning is emitted', () => {
    console.warn = vi.fn()
    mount(WordleBoard, { props: { wordOfTheDay: 'FOUR' } })
    expect(console.warn).toHaveBeenCalled()
  })

  test('if the word of the day is not all in uppercase, a warning is emitted', () => {
    console.warn = vi.fn()
    mount(WordleBoard, { props: { wordOfTheDay: 'tests' } })
    expect(console.warn).toHaveBeenCalled()
  })

  test('if the word of the day is not a real English word, a warning is emitted', () => {
    console.warn = vi.fn()
    mount(WordleBoard, { props: { wordOfTheDay: 'ABCDE' } })
    expect(console.warn).toHaveBeenCalled()
  })

  test('no warning is emitted if the word of the day provided is a real uppercase English word with 5 characters', () => {
    console.warn = vi.fn()
    mount(WordleBoard, { props: { wordOfTheDay: 'RIGHT' } })
    expect(console.warn).not.toHaveBeenCalled()
  })
})
