import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 20px 0 0 0;
`;

const Links = () => {
  return (
    <Wrapper>
      <a href="#" className="light">
        Link
      </a>
      <br />
      <a href="#" className="active light">
        Active Link
      </a>
      <br />
      <a href="#" className="disabled light">
        Disabled Link
      </a>
      <br />
      <button type="button" className="light linkStyles">
        Button as Link
      </button>
      <br />
      <button type="button" className="light linkStyles active">
        Active Button as Link
      </button>
      <br />
      <button type="button" className="light linkStyles disabled">
        Disabled Button as Link
      </button>
      <br />
    </Wrapper>
  );
};

export default Links;
