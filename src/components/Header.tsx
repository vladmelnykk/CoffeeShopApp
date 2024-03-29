import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/theme';
import CustomIcon from './CustomIcon';
import GradientIcon from './GradientIcon';
import ProfileIcon from './ProfileIcon';

interface HeaderProps {
  iconName: string;
  hasProfilePhoto: boolean;
  handlePressOnIcon?: () => void;
  title?: string;
}

const Header: React.FC<HeaderProps> = ({
  title,
  hasProfilePhoto,
  iconName,
  handlePressOnIcon,
}) => {
  return (
    <View
      style={[
        styles.container,
        // {justifyContent: hasProfilePhoto ? 'space-between' : 'flex-start'},
      ]}>
      <TouchableOpacity onPress={handlePressOnIcon}>
        <GradientIcon
          name={iconName}
          color={COLORS.primaryWhiteHex}
          size={FONTSIZE.size_14}
        />
      </TouchableOpacity>
      <Text style={[styles.title]}>{title}</Text>
      <View style={{opacity: hasProfilePhoto ? 1 : 0}}>
        <ProfileIcon />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    padding: SPACING.space_30,
  },
  title: {
    fontFamily: FONTFAMILY.poppins_semibold,
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_20,
    lineHeight: 36,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default React.memo(Header, (prevProps, nextProps) => {
  return (
    prevProps.title === nextProps.title &&
    prevProps.hasProfilePhoto === nextProps.hasProfilePhoto &&
    prevProps.iconName === nextProps.iconName
  );
});
