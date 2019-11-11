import { connect } from 'react-redux';

import Stepper from './stepper.component';
import { setPreviewElement, setPreviewElementProps, stepperBack, stepperNext, stepperReset } from '../cms.action';

const mapStateToProps = ({ cms: { items, previewElement, activeStep } }) => ({
  items,
  previewElement,
  activeStep,
});

export default connect(
  mapStateToProps,
  { setPreviewElement, setPreviewElementProps, stepperBack, stepperNext, stepperReset },
)(Stepper);
