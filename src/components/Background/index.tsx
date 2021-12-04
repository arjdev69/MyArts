import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, SIZES} from 'styles';

export default styled(LinearGradient).attrs({
  start: SIZES.gradient.position.start,
  end: SIZES.gradient.position.end,
  locations: SIZES.gradient.location,
  colors: [COLORS.secondary, COLORS.primary],
})`
  flex: 1;
`;
