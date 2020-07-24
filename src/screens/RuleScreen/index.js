import { Button, Footer, Screen } from '@cdiscount/backoffice-ui';
import { func, shape, string } from 'prop-types';
import { pathOr } from 'ramda';
import { Save } from '@material-ui/icons';
import React, { useState } from 'react';

import RuleForm from '../../components/RuleForm';
import SaveRulesConfirmationModal from '../../components/SaveRulesConfirmationModal';
import ServerActionBackdrop from '../../components/ServerActionBackdrop';
import TitleBar from '../../components/TitleBar';

const RuleScreen = ({ rule, setRule, action, title }) => {
  const name = pathOr('', ['name'], rule);
  const [saveModalOpen, setSaveModalOpen] = useState(false);

  const toggleSaveModal = () => {
    setSaveModalOpen(!saveModalOpen);
  };

  return (
    <>
      <SaveRulesConfirmationModal
        confirm={() => action(rule)}
        open={saveModalOpen}
        toggle={toggleSaveModal}
      />
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
                onClick: () => toggleSaveModal(),
              },
            ]}
          />
        }
        bottombar={
          <Footer>
            <Button
              onClick={() => toggleSaveModal()}
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
    </>
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
