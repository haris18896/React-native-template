import React from 'react';

// ** Custom Components
import {theme as AppTheme} from '../../infrustructure/theme';

// ** Skeleton
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const CumulativeStatisticsSkeleton = () => {
  return (
    <SkeletonPlaceholder
      borderRadius={4}
      enabled={true}
      speed={1000}
      backgroundColor={AppTheme.DefaultPalette().skeleton.backgroundColor}
      highlightColor={AppTheme.DefaultPalette().skeleton.highlightColor}>
      <SkeletonPlaceholder.Item
        flexDirection="column"
        alignItems="center"
        marginTop={AppTheme.WP(5)}
        marginBottom={AppTheme.WP(5)}
        justifyContent={'flex-start'}>
        <SkeletonPlaceholder.Item
          width={AppTheme.WP(15)}
          height={AppTheme.WP(3)}
        />
        <SkeletonPlaceholder.Item
          marginTop={AppTheme.WP(3)}
          width={AppTheme.WP(7)}
          height={AppTheme.WP(4)}
        />
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};
export {CumulativeStatisticsSkeleton};
