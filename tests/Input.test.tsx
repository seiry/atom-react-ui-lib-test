import renderer, { act } from 'react-test-renderer';
import { Combination, Input } from '../src';

it('Combination renders correctly', () => {
  const tree = renderer
    .create(<Combination defaultText="I'm groot" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
  // renderer.act(() => {
  //   tree.props.onMouseEnter();
  // });
});

// it('Input renders correctly', () => {
//   const tree = renderer.create(<Input />).toJSON();
//   expect(tree).toMatchSnapshot();
// });

describe('Combination组件', () => {
  test('输入框和按钮能够正常交互', () => {
    let component = renderer.create(<Combination defaultText="测试文本" />);
    act(() => {
      component = renderer.create(<Combination defaultText="测试文本" />);
    });
    const instance = component.root;

    // 验证默认文本是否正确显示
    const h1Element = instance.findByType('h1');
    expect(h1Element.props.children).toBe('测试文本');

    // 获取输入框和按钮实例

    // 模拟输入框输入事件
    const inputInstance = instance.findByType('input');
    const buttonInstance = instance.findByType('button');
    act(() => {
      inputInstance.props.onChange({ target: { value: '输入测试' } });
    });
    // expect(inputInstance.props.value).toBe('输入测试');
    expect(buttonInstance.props.children).toContain('输入测试');

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
