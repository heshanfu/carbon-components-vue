import { shallow } from 'vue-test-utils';
import CaIcon from './CaIcon';

describe('CaIcon', () => {
  test('is a Vue instance', () => {
    const wrapper = shallow(CaIcon);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('Mathes snapshot', () => {
    const wrapper = shallow(CaIcon);
    expect(wrapper.html()).toMatchSnapshot()
  });
})
