import React from 'react';

// ** Custom Components
import {theme as AppTheme} from '../../infrustructure/theme';

// ** Skeleton
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const ShotStatisticsTabsSkeleton = () => {
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
        marginTop={AppTheme.WP(2)}
        marginBottom={AppTheme.WP(1)}
        justifyContent={'flex-start'}>
        <SkeletonPlaceholder.Item
          width={AppTheme.WP(14)}
          height={AppTheme.WP(5.5)}
          borderRadius={AppTheme.WP(5)}
        />
        <SkeletonPlaceholder.Item
          width={AppTheme.WP(15)}
          height={AppTheme.WP(5.5)}
          marginLeft={AppTheme.WP(2)}
          borderRadius={AppTheme.WP(5)}
        />
        <SkeletonPlaceholder.Item
          width={AppTheme.WP(20)}
          height={AppTheme.WP(5.5)}
          marginLeft={AppTheme.WP(2)}
          borderRadius={AppTheme.WP(5)}
        />
        <SkeletonPlaceholder.Item
          width={AppTheme.WP(20)}
          height={AppTheme.WP(5.5)}
          marginLeft={AppTheme.WP(2)}
          borderRadius={AppTheme.WP(5)}
        />
        {AppTheme.scrWidth > 500 && (
          <SkeletonPlaceholder.Item
            flexDirection="row"
            alignItems="center"
            marginBottom={AppTheme.WP(1)}
            justifyContent={'flex-start'}>
            <SkeletonPlaceholder.Item
              width={AppTheme.WP(25)}
              height={AppTheme.WP(5.5)}
              marginLeft={AppTheme.WP(2)}
              borderRadius={AppTheme.WP(5)}
            />
            <SkeletonPlaceholder.Item
              width={AppTheme.WP(15)}
              height={AppTheme.WP(5.5)}
              marginLeft={AppTheme.WP(2)}
              borderRadius={AppTheme.WP(5)}
            />
          </SkeletonPlaceholder.Item>
        )}
      </SkeletonPlaceholder.Item>

      {AppTheme.scrWidth < 500 && (
        <SkeletonPlaceholder.Item
          flexDirection="column"
          alignItems="flex-start"
          justifyContent={'center'}>
          <SkeletonPlaceholder.Item
            flexDirection="row"
            alignItems="center"
            marginBottom={AppTheme.WP(1)}
            justifyContent={'flex-start'}>
            <SkeletonPlaceholder.Item
              width={AppTheme.WP(28)}
              height={AppTheme.WP(5.5)}
              borderRadius={AppTheme.WP(5)}
            />
            <SkeletonPlaceholder.Item
              width={AppTheme.WP(35)}
              height={AppTheme.WP(5.5)}
              marginLeft={AppTheme.WP(2)}
              borderRadius={AppTheme.WP(5)}
            />
          </SkeletonPlaceholder.Item>

          <SkeletonPlaceholder.Item
            flexDirection="row"
            alignItems="center"
            marginBottom={AppTheme.WP(1)}
            justifyContent={'flex-start'}>
            <SkeletonPlaceholder.Item
              width={AppTheme.WP(20)}
              height={AppTheme.WP(5.5)}
              borderRadius={AppTheme.WP(5)}
            />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>
      )}
    </SkeletonPlaceholder>
  );
};

const ChartPointSkeleton = () => {
  return (
    <SkeletonPlaceholder
      borderRadius={4}
      enabled={true}
      speed={1000}
      marginBottom={AppTheme.WP(5)}
      backgroundColor={AppTheme.DefaultPalette().skeleton.backgroundColor}
      highlightColor={AppTheme.DefaultPalette().skeleton.highlightColor}>
      <SkeletonPlaceholder.Item
        flexDirection="column"
        alignItems="center"
        marginTop={AppTheme.WP(2)}
        marginBottom={AppTheme.WP(5)}
        justifyContent={'flex-start'}>
        <SkeletonPlaceholder.Item
          width={AppTheme.WP(50)}
          height={AppTheme.WP(4)}
        />

        <SkeletonPlaceholder.Item
          flexDirection="column"
          alignItems="flex-start"
          marginTop={AppTheme.WP(2)}
          justifyContent={'flex-start'}>
          <SkeletonPlaceholder.Item
            flexDirection={'row'}
            alignItems={'center'}
            marginTop={AppTheme.WP(2)}
            justifyContent={'flex-start'}>
            <SkeletonPlaceholder.Item
              width={AppTheme.WP(30)}
              height={AppTheme.WP(3)}
              marginRight={AppTheme.WP(10)}
            />
            <SkeletonPlaceholder.Item
              width={AppTheme.WP(10)}
              height={AppTheme.WP(3)}
            />
          </SkeletonPlaceholder.Item>
          <SkeletonPlaceholder.Item
            flexDirection={'row'}
            alignItems={'center'}
            marginTop={AppTheme.WP(1)}
            justifyContent={'flex-start'}>
            <SkeletonPlaceholder.Item
              width={AppTheme.WP(30)}
              height={AppTheme.WP(3)}
              marginRight={AppTheme.WP(10)}
            />
            <SkeletonPlaceholder.Item
              width={AppTheme.WP(10)}
              height={AppTheme.WP(3)}
            />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};
export {ShotStatisticsTabsSkeleton, ChartPointSkeleton};
