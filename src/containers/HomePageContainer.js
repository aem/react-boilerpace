import { connect } from 'react-redux';
import HomePage from 'components/home/HomePage';
import { updateText } from 'actions/testActions';

export default connect((state) => ({
  test: state.test
}), {
  updateText
})(HomePage);
