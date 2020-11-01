import styled from 'styled-components';
import PerfectScroll from 'react-perfect-scrollbar';

export const Scroll = styled(PerfectScroll)`
  padding: 16px;
  position: relative;
  right: 16px;
  bottom: 16px;

  overflow-x: ${props =>
    props.orientation === 'column' ? 'hidden' : 'visible'};
  overflow-y: ${props => (props.orientation === 'row' ? 'hidden' : 'visible')};
`;

export const Container = styled.div``;

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const LoaderList = styled(List)``;

export const Cell = styled.div``;
