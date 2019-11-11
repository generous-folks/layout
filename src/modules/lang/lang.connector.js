import { connect } from 'react-redux';

import Lang from './lang.component';
import { switchContent } from './lang.actions';

const mapStateToProps = ({ lang: { currentLang } }) => ({ currentLang });

export default connect(
  mapStateToProps,
  { switchContent },
)(Lang);
