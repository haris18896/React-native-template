import React from 'react';

// ** Custom Components
import {
  HomeEmptyImage,
  HomeEmptyState,
  HomeEmptyStateLabel,
} from '../../../Styles/Pages';
import {CardWrapper, Card} from '../../../Styles/infrustucture';

const EmptyStates = props => {
  const {title, image} = props;
  return (
    <CardWrapper>
      <Card>
        <HomeEmptyState>
          {image && <HomeEmptyImage source={image} />}
          {title && <HomeEmptyStateLabel>{title}</HomeEmptyStateLabel>}
        </HomeEmptyState>
      </Card>
    </CardWrapper>
  );
};
export default EmptyStates;
