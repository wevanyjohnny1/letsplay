import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import theme from '../../global/styles/theme';
import { SvgProps } from 'react-native-svg';

import { Container, ContentContainer, CheckBox, Content, Title } from './styles';

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
    <Container {...rest}>
      <ContentContainer
        colors={[secondary50, secondary70]}
      >
        <Content style={{ opacity: checked ? 1 : 0.4 }}>
          <CheckBox style={{
            backgroundColor: checked ? theme.colors.primary : theme.colors.secondary100,
            width: checked ? 10 : 12,
            height: checked ? 10 : 12
          }} />
          < Icon width={48} height={48} />
          <Title>{title}</Title>
        </Content>
      </ContentContainer>
    </Container>
  )
}