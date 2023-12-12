import {
  DataPointWrapper,
  GraphLabel,
  GraphLabelWrapper,
} from '../../../Styles/Pages';
import React from 'react';

const ChartLabel = val => {
  return (
    <GraphLabelWrapper>
      <GraphLabel>{val}</GraphLabel>
    </GraphLabelWrapper>
  );
};

const DataPoint = props => {
  const {borderColor} = props;
  return <DataPointWrapper borderColor={borderColor} />;
};

export {ChartLabel, DataPoint};
