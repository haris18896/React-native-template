import React from 'react';

// ** Custom Components
import {theme as AppTheme} from '../../infrustructure/theme';

// ** Skeleton
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const OfficailSpeedSkeleton = () => {
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
        <SkeletonPlaceholder.Item flexDirection="row" alignItems="flex-start">
          <SkeletonPlaceholder.Item
            marginTop={AppTheme.WP(3)}
            width={AppTheme.WP(30)}
            height={AppTheme.WP(5)}
          />
          <SkeletonPlaceholder.Item
            marginTop={AppTheme.WP(3)}
            marginLeft={AppTheme.WP(13)}
            width={AppTheme.WP(5)}
            height={AppTheme.WP(5)}
            borderRadius={AppTheme.WP(5)}
          />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>

      <SkeletonPlaceholder.Item
        flexDirection="column"
        alignItems="flex-start"
        justifyContent={'flex-start'}>
        <SkeletonPlaceholder.Item flexDirection="row" alignItems="flex-start">
          <SkeletonPlaceholder.Item
            marginTop={AppTheme.WP(7)}
            width={AppTheme.WP(30)}
            height={AppTheme.WP(3)}
          />
          <SkeletonPlaceholder.Item
            marginTop={AppTheme.WP(7)}
            marginLeft={AppTheme.WP(13)}
            width={AppTheme.WP(5)}
            height={AppTheme.WP(3)}
          />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>

      <SkeletonPlaceholder.Item
        flexDirection="column"
        alignItems="flex-start"
        justifyContent={'flex-start'}>
        <SkeletonPlaceholder.Item flexDirection="row" alignItems="flex-start">
          <SkeletonPlaceholder.Item
            marginTop={AppTheme.WP(5)}
            width={AppTheme.WP(30)}
            height={AppTheme.WP(3)}
          />
          <SkeletonPlaceholder.Item
            marginTop={AppTheme.WP(5)}
            marginLeft={AppTheme.WP(13)}
            width={AppTheme.WP(5)}
            height={AppTheme.WP(3)}
          />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>

      <SkeletonPlaceholder.Item
        flexDirection="column"
        alignItems="flex-start"
        justifyContent={'flex-start'}>
        <SkeletonPlaceholder.Item flexDirection="row" alignItems="flex-start">
          <SkeletonPlaceholder.Item
            marginTop={AppTheme.WP(5)}
            width={AppTheme.WP(30)}
            height={AppTheme.WP(3)}
          />
          <SkeletonPlaceholder.Item
            marginTop={AppTheme.WP(5)}
            marginLeft={AppTheme.WP(13)}
            width={AppTheme.WP(5)}
            height={AppTheme.WP(3)}
          />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};

export {OfficailSpeedSkeleton};
