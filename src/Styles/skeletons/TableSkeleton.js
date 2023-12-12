import React from 'react';

// ** Custom Components
import {theme as AppTheme} from '../../infrustructure/theme';

// ** Skeleton
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const TableSkeleton = () => {
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
        justifyContent={'space-between'}>
        <SkeletonPlaceholder.Item
          marginTop={AppTheme.WP(2)}
          width={AppTheme.WP(20)}
          height={AppTheme.WP(3)}
        />

        <SkeletonPlaceholder.Item
          marginTop={AppTheme.WP(2)}
          width={AppTheme.WP(20)}
          height={AppTheme.WP(7)}
          borderRadius={AppTheme.WP(10)}
        />
      </SkeletonPlaceholder.Item>

      <SkeletonPlaceholder.Item
        flexDirection="column"
        alignItems="center"
        justifyContent={'flex-start'}>
        <SkeletonPlaceholder.Item
          marginTop={AppTheme.WP(5)}
          width={'100%'}
          height={AppTheme.WP(3)}
        />
        <SkeletonPlaceholder.Item
          marginTop={AppTheme.WP(5)}
          width={'100%'}
          height={AppTheme.WP(3)}
        />
        <SkeletonPlaceholder.Item
          marginTop={AppTheme.WP(5)}
          width={'100%'}
          height={AppTheme.WP(3)}
        />
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};
export {TableSkeleton};
