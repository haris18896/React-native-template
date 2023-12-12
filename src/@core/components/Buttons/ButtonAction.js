import React, {forwardRef} from 'react';
import {ActivityIndicator} from 'react-native';

// ** Custom Components
import {
  ButtonLabel,
  ButtonWrapper,
  LoadingWrapper,
} from '../../../Styles/components';
import {theme} from '../../../infrustructure/theme';

const ButtonAction = forwardRef((props, ref) => {
  const {
    size,
    title,
    color,
    width,
    onPress,
    children,
    loadingColor,
    styles = {},
    end = false,
    start = false,
    loading = false,
    disabled = false,
    labelColor = `#fff`,
  } = props;
  return (
    <ButtonWrapper
      ref={ref}
      color={color}
      size={size}
      width={width}
      onPress={onPress}
      style={{...styles}}
      disabled={disabled || loading}>
      <ButtonLabel labelColor={labelColor}>{title}</ButtonLabel>
      {children}

      <LoadingWrapper size={size} left={start} right={end} loading={loading}>
        <ActivityIndicator size={theme.WP('5')} color={loadingColor} />
      </LoadingWrapper>
    </ButtonWrapper>
  );
});

export {ButtonAction};
