import { pathOr } from 'ramda';

const useEngineProperties = ({ enginesGroup, handleChange }) => {
  const { engines, currentEngine } = enginesGroup || {};

  const engineId = pathOr(null, ['engineId'], currentEngine);
  const engineName = pathOr('', [engineId, 'engineName'], engines);

  const handleEngineChange = ({ id, value }) => {
    handleChange({
      id: 'engines',
      value: { ...(engines || {}), [engineId]: { ...(engines[engineId] || {}), [id]: value } },
    });
  };

  return {
    engineId,
    engineName,
    handleEngineChange,
  };
};

export default useEngineProperties;
