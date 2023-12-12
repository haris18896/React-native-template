import React from 'react';

// ** Custom Components
import {theme as AppTheme} from '../../infrustructure/theme';

// ** Skeleton
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const BallIndicatorSkeleton = () => {
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
        marginTop={AppTheme.WP(5)}
        marginBottom={AppTheme.WP(2)}
        justifyContent={'flex-start'}>
        <SkeletonPlaceholder.Item
          width={AppTheme.WP(8)}
          height={AppTheme.WP(8)}
          borderRadius={AppTheme.WP(20)}
        />

        <SkeletonPlaceholder.Item
          width={AppTheme.WP(10)}
          height={AppTheme.WP(3)}
          marginLeft={AppTheme.WP(3)}
        />
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};

const BallStateSkeleton = () => {
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
        marginTop={AppTheme.WP(3)}
        justifyContent={'center'}>
        <SkeletonPlaceholder.Item
          width={AppTheme.WP(20)}
          height={AppTheme.WP(7)}
          marginRight={AppTheme.WP(3)}
          borderRadius={AppTheme.WP(5)}
        />

        <SkeletonPlaceholder.Item
          width={AppTheme.WP(20)}
          height={AppTheme.WP(7)}
          borderRadius={AppTheme.WP(5)}
        />
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};

export {BallIndicatorSkeleton, BallStateSkeleton};
