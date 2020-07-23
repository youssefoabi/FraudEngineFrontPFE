import { Button, Footer, Screen } from '@cdiscount/backoffice-ui';
import { func, shape, string } from 'prop-types';
import { pathOr } from 'ramda';
import { Save } from '@material-ui/icons';
import React from 'react';

import RuleForm from '../../components/RuleForm';
import ServerActionBackdrop from '../../components/ServerActionBackdrop';
import TitleBar from '../../components/TitleBar';

const RuleScreen = ({ rule, setRule, action, title }) => {
  const name = pathOr('', ['name'], rule);

  return (
    <Screen
      titlebar={
        <TitleBar
          title={`${title} d'une règle : ${name || ''}`}
          actions={[
            {
              id: 'save_rule_button',
              label: 'Enregistrer',
              icon: Save,
              size: 'large',
              onClick: () => action(rule),
            },
          ]}
        />
      }
      bottombar={
        <Footer>
          <Button
            onClick={() => action(rule)}
            startIcon={<Save />}
            size="large"
            color="tertiary"
            label="Enregistrer"
            variant="contained"
          />
        </Footer>
      }
    >
      <RuleForm rule={rule} setRule={setRule} />
      <ServerActionBackdrop />
    </Screen>
  );
};

RuleScreen.propTypes = {
  rule: shape({}),
  title: string,
  action: func,
  setRule: func,
};

RuleScreen.defaultProps = {
  rule: null,
  title: '',
  action: Function.Prototype,
  setRule: Function.Prototype,
};

export default RuleScreen;
