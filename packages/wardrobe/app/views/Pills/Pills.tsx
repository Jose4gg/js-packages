import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 20px 0 0 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  .pill {
    width: fit-content;
  }
`;

const Pills = () => {
  return (
    <Wrapper>
      <span className="pill recommended">Recommended</span>
      <span className="pill optional">Optional</span>
      <span className="pill modified">Modified</span>
      <span className="pill waived">Waived</span>
    </Wrapper>
  );
};

export default Pills;
