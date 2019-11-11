import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/styles';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import StringForm from './string.form';
import { Row, Col } from '../../../../components/grid.components';
import { StepContent } from '@material-ui/core';
// import Radios from './radios.component';
import Configurator from './configurator.component';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: `${theme.spacing(3)}px 0 ${theme.spacing(5)}px`,
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  resetButton: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['Élément', 'Design', 'Prévisualisation'];

const Preview = () => <div>Preview</div>;

function getStepContent(step) {
  switch (step) {
    case 0:
      return <StringForm />;
    case 1:
      return <Configurator />;
    case 2:
      return <Preview />;
    default:
      throw new Error('Unknown step');
  }
}
//  previewElement, setPreviewElement, setPreviewElementProps
const TemplateForm = ({ activeStep, stepperBack, stepperNext, stepperReset }) => {
  const classes = useStyles(useTheme());

  return (
    <Row justify="center" spacing={8} className={classes.paper}>
      <Col xs={10} sm={10} md={10} lg={10}>
        <Typography component="h1" variant="h4" align="center">
          TemplateForm
        </Typography>
        <Stepper orientation="vertical" activeStep={activeStep} className={classes.stepper}>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
              <StepContent>
                {activeStep === steps.length ? (
                  <React.Fragment>
                    <Button variant="contained" color="primary" onClick={stepperNext} className={classes.button}>
                      Enregistrer
                    </Button>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    {getStepContent(activeStep)}
                    <div className={classes.buttons}>
                      <Button disabled={activeStep === 0} onClick={stepperBack} className={classes.button}>
                        Back
                      </Button>
                      <Button variant="contained" color="primary" onClick={stepperNext} className={classes.button}>
                        {activeStep === steps.length - 1 ? 'Confirm' : 'Next'}
                      </Button>
                    </div>
                  </React.Fragment>
                )}
              </StepContent>
            </Step>
          ))}
        </Stepper>
        <div className={classes.resetButton}>
          <Button color="secondary" onClick={stepperReset} className={classes.button}>
            Reset All
          </Button>
        </div>
      </Col>
    </Row>
  );
};

TemplateForm.propTypes = {
  activeStep: PropTypes.bool.isRequired,
  stepperBack: PropTypes.func.isRequired,
  stepperNext: PropTypes.func.isRequired,
  stepperReset: PropTypes.func.isRequired,
  // previewElement: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.array]).isRequired,
  // setPreviewElement: PropTypes.func.isRequired,
  // setPreviewElementProps: PropTypes.func.isRequired,
};

export default TemplateForm;
