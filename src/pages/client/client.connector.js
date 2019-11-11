import { connect } from 'react-redux';

import Client from './client.component';
import { getPathname } from '../../utils/routing.utils';
import { getPages } from '../../modules/app/app.selectors';

const mapStateToProps = state => ({ content: getPages(state)[getPathname(state)] });

export default connect(mapStateToProps)(Client);
