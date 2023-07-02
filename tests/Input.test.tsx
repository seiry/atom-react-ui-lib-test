import renderer from 'react-test-renderer';
import { Combination } from '../src';

it('renders correctly', () => {
  const tree = renderer
    .create(<Combination defaultText="I'm groot" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
