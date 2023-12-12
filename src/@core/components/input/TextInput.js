import React, {useState, forwardRef} from 'react';
import {Pressable, StyleSheet} from 'react-native';

// ** third Party Packages
import Icon from 'react-native-vector-icons/FontAwesome';

// ** Custom Components
import {
  Input,
  InputLabel,
  InputContainer,
  TextInputWrapper,
  LeftIconWrapper,
  RightIconWrapper,
} from '../../../Styles/components';
import {ErrorText} from '../../../Styles/infrustucture';
import {theme, theme as AppTheme} from '../../../infrustructure/theme';
import button from 'react-native-paper/src/components/Button/Button';

const TextInput = forwardRef((props, ref) => {
  const {
    error,
    title,
    submit,
    leftIcon,
    disabled,
    rightIcon,
    placeholder,
    formikError,
    nextInputRef,
    defaultValue,
    formikTouched,
    maxLength = 40,
    inputMode = 'text',
    textAlign = 'left',
    autoFocus = false,
    variant = 'outlined',
    autoComplete = 'off',
    returnKeyType = 'next',
    autoCorrect = false,
    blurOnSubmit = false,
    autoCapitalize = 'none',
    keyboardType = 'default',
    secureTextEntry = false,
    iconColor = theme.DefaultPalette().primary.contrastText,
    ...rest
  } = props;

  const [showPass, setShowPass] = useState(true);

  return (
    <TextInputWrapper>
      <InputLabel>{title}</InputLabel>
      <InputContainer
        left={leftIcon}
        right={rightIcon}
        secureTextEntry={secureTextEntry}
        error={formikTouched && formikError}>
        <LeftIconWrapper>
          {leftIcon && (
            <Icon name={leftIcon} color={iconColor} size={AppTheme.WP(5)} />
          )}
        </LeftIconWrapper>

        <Input
          {...rest}
          ref={ref}
          mode={variant}
          editable={!disabled}
          maxLength={maxLength}
          autoFocus={autoFocus}
          inputMode={inputMode}
          textAlign={textAlign}
          placeholder={placeholder}
          autoCorrect={autoCorrect}
          enterKeyHint={returnKeyType}
          keyboardType={keyboardType}
          defaultValue={defaultValue}
          blurOnSubmit={blurOnSubmit}
          autoComplete={autoComplete}
          returnKeyType={returnKeyType}
          autoCapitalize={autoCapitalize}
          secureTextEntry={secureTextEntry && showPass}
          placeholderTextColor={AppTheme.DefaultPalette().primary.main}
          onSubmitEditing={() => {
            if (nextInputRef && nextInputRef.current) {
              nextInputRef.current.focus();
            } else {
              ref.current.blur();
              submit();
            }
          }}
        />

        <RightIconWrapper>
          {rightIcon && !secureTextEntry && (
            <Icon name={rightIcon} color={iconColor} size={AppTheme.WP(5.5)} />
          )}

          {secureTextEntry && !rightIcon && (
            <Pressable onPress={() => setShowPass(!showPass)}>
              <Icon
                color={iconColor}
                name={showPass ? 'eye-slash' : 'eye'}
                size={AppTheme.WP(5)}
              />
            </Pressable>
          )}
        </RightIconWrapper>
      </InputContainer>

      {formikTouched && formikError && (
        <ErrorText style={styles.errorStyles}>{formikError}</ErrorText>
      )}
    </TextInputWrapper>
  );
});

export {TextInput};

const styles = StyleSheet.create({
  errorStyles: {
    position: 'absolute',
    bottom: AppTheme.WP('-6'),
    left: AppTheme.WP('3'),
  },
});
