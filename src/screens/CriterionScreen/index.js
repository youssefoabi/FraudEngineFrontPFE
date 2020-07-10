import { Button, Footer, Screen } from '@cdiscount/backoffice-ui';
import { func, shape, string } from 'prop-types';
import { pathOr } from 'ramda';
import { Save } from '@material-ui/icons';
import React from 'react';

import CriterionForm from '../../components/CriterionForm';
import ServerActionBackdrop from '../../components/ServerActionBackdrop';
import TitleBar from '../../components/TitleBar';

const CriterionScreen = ({ criterion, setCriterion, action, title }) => {
  const name = pathOr('', ['explanation'], criterion);

  return (
    <Screen
      titlebar={
        <TitleBar
          title={`${title} d'un critère : ${name || ''}`}
          actions={[
            {
              id: 'save_criterion_button',
              label: 'Enregistrer',
              icon: Save,
              size: 'large',
              onClick: () => action(criterion),
            },
          ]}
        />
      }
      bottombar={
        <Footer>
          <Button
            onClick={() => action(criterion)}
            startIcon={<Save />}
            size="large"
            color="tertiary"
            label="Enregistrer"
            variant="contained"
          />
        </Footer>
      }
    >
      <CriterionForm criterion={criterion} setCriterion={setCriterion} />
      <ServerActionBackdrop />
    </Screen>
  );
};

CriterionScreen.propTypes = {
  criterion: shape({}),
  title: string,
  action: func,
  setCriterion: func,
};

CriterionScreen.defaultProps = {
  criterion: null,
  title: '',
  action: Function.Prototype,
  setCriterion: Function.Prototype,
};

export default CriterionScreen;
