import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import theme from '../../global/styles/theme';
import { SvgProps } from 'react-native-svg';

import { ContentContainer, LinearGrad, Content } from './styles';

type Props = RectButtonProps & {
  title: string;
  icon: React.FC<SvgProps>;
  checked?: boolean;
}

export function Category({
  title,
  icon: Icon,
  checked = false,
  ...rest
}: Props) {
  const { secondary50, secondary70 } = theme.colors;
  return (
    <ContentContainer {...rest}>
      <LinearGrad
        colors={[secondary50, secondary70]}
      >
        <Content style={{ opacity: checked ? 1 : 0.4 }}>

        </Content>
      </LinearGrad>
    </ContentContainer>
  )
}