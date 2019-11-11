import { connect } from 'react-redux';

import Toast from './toast.component';
import { hideToast } from './toaster.action';

const mapStateToProps = ({ toaster: { visible, content, variant, options } }) => ({
  visible,
  content,
  variant,
  options,
});
export default connect(
  mapStateToProps,
  { hideToast },
)(Toast);
