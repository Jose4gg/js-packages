import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  p {
    margin: 0 0 0.5rem 0;
    text-align: center;
  }
  .color {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem 0;
  }
`;
