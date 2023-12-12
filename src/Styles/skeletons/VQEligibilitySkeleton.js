import React from 'react';

// ** Custom Components
import {theme as AppTheme} from '../../infrustructure/theme';

// ** Skeleton
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const VQEligibilitySkeleton = () => {
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
        justifyContent={'space-around'}>
        <SkeletonPlaceholder.Item
          flexDirection="column"
          alignItems="center"
          justifyContent={'center'}
          margin={AppTheme.WP(1)}>
          <SkeletonPlaceholder.Item
            width={AppTheme.WP(12)}
            height={AppTheme.WP(12)}
            borderRadius={AppTheme.WP(20)}
          />

          <SkeletonPlaceholder.Item
            marginTop={AppTheme.WP(3)}
            width={AppTheme.WP(15)}
            height={AppTheme.WP(3)}
          />
        </SkeletonPlaceholder.Item>

        <SkeletonPlaceholder.Item
          flexDirection="column"
          alignItems="center"
          justifyContent={'center'}
          margin={AppTheme.WP(1)}>
          <SkeletonPlaceholder.Item
            width={AppTheme.WP(12)}
            height={AppTheme.WP(12)}
            borderRadius={AppTheme.WP(20)}
          />

          <SkeletonPlaceholder.Item
            marginTop={AppTheme.WP(3)}
            width={AppTheme.WP(15)}
            height={AppTheme.WP(3)}
          />
        </SkeletonPlaceholder.Item>

        <SkeletonPlaceholder.Item
          flexDirection="column"
          alignItems="center"
          justifyContent={'center'}
          margin={AppTheme.WP(1)}>
          <SkeletonPlaceholder.Item
            width={AppTheme.WP(12)}
            height={AppTheme.WP(12)}
            borderRadius={AppTheme.WP(20)}
          />

          <SkeletonPlaceholder.Item
            marginTop={AppTheme.WP(3)}
            width={AppTheme.WP(15)}
            height={AppTheme.WP(3)}
          />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};
export {VQEligibilitySkeleton};
