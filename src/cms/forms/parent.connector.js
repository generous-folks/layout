import { connect } from 'react-redux';

import Parent from './parent.component';
import { setParentElement, setChildElement } from '../cms.action';

const mapStateToProps = ({ cms: { items } }) => ({
  items,
});

export default connect(mapStateToProps, { setChildElement, setParentElement })(Parent);
