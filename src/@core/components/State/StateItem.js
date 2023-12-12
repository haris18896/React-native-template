import React from 'react';

// ** Custom Components
import {
  StateLabel,
  StateValue,
  StateValueWrapper,
  StateWrapper,
} from '../../../Styles/components';

// ** Skeleton
import {CumulativeStatisticsSkeleton} from '../../../Styles/skeletons';

const StateItem = props => {
  const {title, value, width, borderRight, refreshing = false} = props;
  return (
    <StateWrapper width={width} borderRight={borderRight}>
      {refreshing ? (
        <CumulativeStatisticsSkeleton />
      ) : (
        <>
          <StateLabel>{title}</StateLabel>
          <StateValueWrapper>
            <StateValue>{value}</StateValue>
          </StateValueWrapper>
        </>
      )}
    </StateWrapper>
  );
};
export {StateItem};
