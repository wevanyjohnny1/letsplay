import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import theme from '../../global/styles/theme';
import { SvgProps } from 'react-native-svg';

import { Container, ContentContainer, CheckBox, Content, Title } from './styles';

interface Props extends RectButtonProps {
  title: string;
  icon: React.FC<SvgProps>;
  hasCheckBox?: boolean;
  checked?: boolean;
}

export function Category({
  title,
  icon: Icon,
  checked = false,
  hasCheckBox = false,
  ...rest
}: Props) {
  const { secondary40, secondary50, secondary70, secondary75 } = theme.colors;
  return (
    <Container {...rest}>
      <ContentContainer
        colors={[secondary50, secondary70]}
      >
        <Content
          style={{ opacity: checked ? 1 : 0.5 }}
          colors={[checked ? secondary75 : secondary50, secondary40]}
        >
          {
            hasCheckBox &&
            <CheckBox style={{
              backgroundColor: checked ? theme.colors.primary : theme.colors.secondary100,
            }} />
          }

          < Icon width={48} height={48} />
          <Title>{title}</Title>
        </Content>
      </ContentContainer>
    </Container>
  )
}