import { mount } from '@vue/test-utils'
import WordleBoard from '../WordleBoard.vue'
import { VICTORY_MESSAGE } from '@/settings'

describe('WordleBoard', () => {
  test('a victory message appears when the user makes a right guess', async () => {
    // Arrange
    const wrapper = mount(WordleBoard, {
      props: {
        wordOfTheDay: 'hello'
      }
    })
    const input = wrapper.find('input')

    // Act
    await input.setValue('hello')
    await input.trigger('keydown.enter')

    // Assert
    expect(wrapper.text()).toContain(VICTORY_MESSAGE)
  })
})
