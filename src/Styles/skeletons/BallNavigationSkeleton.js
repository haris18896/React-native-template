import React from 'react';

// ** Custom Components
import {theme as AppTheme} from '../../infrustructure/theme';

// ** Skeleton
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const BallNavigationSkeleton = () => {
  return (
    <SkeletonPlaceholder
      borderRadius={4}
      enabled={true}
      speed={1000}
      backgroundColor={AppTheme.DefaultPalette().skeleton.backgroundColor}
      highlightColor={AppTheme.DefaultPalette().skeleton.highlightColor}>
      <SkeletonPlaceholder.Item
        flexDirection="row"
        alignItems="center"
        justifyContent={'flex-start'}>
        <SkeletonPlaceholder.Item
          width={AppTheme.WP(30)}
          height={AppTheme.WP(3)}
        />

        <SkeletonPlaceholder.Item
          marginLeft={AppTheme.WP(5)}
          width={AppTheme.WP(10)}
          height={AppTheme.WP(5)}
          borderRadius={AppTheme.WP(8)}
        />
        <SkeletonPlaceholder.Item
          marginLeft={AppTheme.WP(3)}
          width={AppTheme.WP(10)}
          height={AppTheme.WP(5)}
          borderRadius={AppTheme.WP(8)}
        />
        <SkeletonPlaceholder.Item
          marginLeft={AppTheme.WP(3)}
          width={AppTheme.WP(10)}
          height={AppTheme.WP(5)}
          borderRadius={AppTheme.WP(8)}
        />
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};
export {BallNavigationSkeleton};
