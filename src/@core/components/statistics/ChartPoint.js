import React from 'react';

// ** Custom Components
import {
  PopoverDetails,
  PopoverText,
  PopoverTitle,
  PopoverWrapper,
} from '../../../Styles/Pages';
import {theme as AppTheme} from '../../../infrustructure/theme';

const ChartPoint = props => {
  const {data} = props;
  return (
    <PopoverWrapper>
      <PopoverTitle>{data.title}</PopoverTitle>
      <PopoverDetails borderBottom={true}>
        <PopoverText style={{marginRight: AppTheme.WP(5)}}>
          {data?.totalLabel}
        </PopoverText>
        <PopoverText style={{marginRight: AppTheme.WP(5)}}>
          {data?.total}
        </PopoverText>
      </PopoverDetails>
      <PopoverDetails borderBottom={false}>
        <PopoverText style={{marginRight: AppTheme.WP(5)}}>
          {data?.percentLabel}
        </PopoverText>
        <PopoverText style={{marginRight: AppTheme.WP(5)}}>
          {data?.percent}
        </PopoverText>
      </PopoverDetails>
    </PopoverWrapper>
  );
};
export default ChartPoint;
