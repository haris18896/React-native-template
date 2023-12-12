import React from 'react';
import {Modal, Icon} from 'react-native-paper';
import {theme as AppTheme} from '../../../infrustructure/theme';
import {SpaceBetweenWrapper, Title} from '../../../Styles/infrustucture';
import {Pressable} from 'react-native';

const ModalView = props => {
  const {open, toggleModal, title, children} = props;
  const containerStyle = {
    borderRadius: AppTheme.WP(2),
    borderWidth: AppTheme.WP(0.5),
    paddingVertical: AppTheme.WP(4),
    paddingHorizontal: AppTheme.WP(4),
    marginHorizontal: AppTheme.WP(4.5),
    borderColor: AppTheme.DefaultPalette().borders.inputBorder,
    backgroundColor: AppTheme.DefaultPalette().primary.mainRevert,
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={open}
      dismissableBackButton={true}
      contentContainerStyle={containerStyle}
      onDismiss={() => toggleModal()}>
      <SpaceBetweenWrapper style={{marginBottom: AppTheme.WP(5)}}>
        <Title>{title}</Title>
        <Pressable onPress={toggleModal}>
          <Icon
            source="close"
            size={AppTheme.WP(6)}
            color={AppTheme.DefaultPalette().primary.contrastText}
          />
        </Pressable>
      </SpaceBetweenWrapper>
      {children}
    </Modal>
  );
};
export {ModalView};
