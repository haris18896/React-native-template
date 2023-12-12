import React from 'react';

// ** Third Party Packages
import {Checkbox} from 'react-native-paper';

// ** Custom Components
import {CheckBoxLabel, CheckBoxWrapper} from '../../../Styles/infrustucture';

const CheckBox = props => {
  const {
    state,
    color,
    label,
    onPress,
    variant,
    uncheckedColor,
    position = 'leading',
  } = props;

  return (
    <CheckBoxWrapper>
      <Checkbox.Android
        color={color}
        status={state}
        onPress={onPress}
        position={position}
        labelVariant={variant}
        uncheckedColor={uncheckedColor}
      />
      <CheckBoxLabel>{label}</CheckBoxLabel>
    </CheckBoxWrapper>
  );
};
export default CheckBox;
