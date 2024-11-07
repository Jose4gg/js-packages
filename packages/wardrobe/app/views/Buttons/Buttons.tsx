import styled from 'styled-components';

const Container = styled.div``;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0.5rem 0;
  width: 100%;
`;

const DarkContainer = styled.div`
  background-color: ${(props) => {
    // TODO: Fix this so it is dynamic
    const color = props.theme.id === 'nayya' ? '#001842' : '#20337d';
    return color;
  }};
  h1,
  h2 {
    color: #fff;
  }
`;

const Buttons = () => {
  return (
    <Container>
      <h1>Buttons</h1>
      <h2>Base</h2>
      <ButtonGroup>
        <button type="button" className="light">
          Standard
        </button>
        <button type="button" className="light active">
          Active
        </button>
        <button type="button" className="light loading">
          <span />
        </button>
        <button type="button" className="light" disabled>
          Disabled
        </button>
      </ButtonGroup>
      <ButtonGroup>
        <button type="button" className="light outlined">
          Standard
        </button>
        <button type="button" className="light outlined active">
          Active
        </button>
        <button type="button" className="light outlined loading">
          <span />
        </button>
        <button type="button" className="light outlined" disabled>
          Disabled
        </button>
      </ButtonGroup>
      <ButtonGroup>
        <button type="button" className="light text">
          Standard
        </button>
        <button type="button" className="light text active">
          Active
        </button>
        <button type="button" className="light text loading">
          <span />
        </button>
        <button type="button" className="light text" disabled>
          Disabled
        </button>
      </ButtonGroup>

      <h2>Mini</h2>
      <ButtonGroup>
        <button type="button" className="light mini">
          Standard
        </button>
        <button type="button" className="light mini active">
          Active
        </button>
        <button type="button" className="light mini loading">
          <span />
        </button>
        <button type="button" className="light mini" disabled>
          Disabled
        </button>
      </ButtonGroup>
      <ButtonGroup>
        <button type="button" className="light mini outlined">
          Standard
        </button>
        <button type="button" className="light mini outlined active">
          Active
        </button>
        <button type="button" className="light mini outlined loading">
          <span />
        </button>
        <button type="button" className="light mini outlined" disabled>
          Disabled
        </button>
      </ButtonGroup>
      <ButtonGroup>
        <button type="button" className="light mini text">
          Standard
        </button>
        <button type="button" className="light mini text active">
          Active
        </button>
        <button type="button" className="light mini text loading">
          <span />
        </button>
        <button type="button" className="light mini text" disabled>
          Disabled
        </button>
      </ButtonGroup>

      <h2>Large</h2>
      <ButtonGroup>
        <button type="button" className="light large">
          Standard
        </button>
        <button type="button" className="light large active">
          Active
        </button>
        <button type="button" className="light large loading">
          <span />
        </button>
        <button type="button" className="light large" disabled>
          Disabled
        </button>
      </ButtonGroup>
      <ButtonGroup>
        <button type="button" className="light large outlined">
          Standard
        </button>
        <button type="button" className="light large outlined active">
          Active
        </button>
        <button type="button" className="light large outlined loading">
          <span />
        </button>
        <button type="button" className="light large outlined" disabled>
          Disabled
        </button>
      </ButtonGroup>
      <ButtonGroup>
        <button type="button" className="light large text">
          Standard
        </button>
        <button type="button" className="light large text active">
          Active
        </button>
        <button type="button" className="light large text loading">
          <span />
        </button>
        <button type="button" className="light large text" disabled>
          Disabled
        </button>
      </ButtonGroup>

      <h2>Marketing</h2>
      <ButtonGroup>
        <button type="button" className="light marketing">
          Standard
        </button>
        <button type="button" className="light marketing active">
          Active
        </button>
        <button type="button" className="light marketing loading">
          <span />
        </button>
        <button type="button" className="light marketing" disabled>
          Disabled
        </button>
      </ButtonGroup>
      <ButtonGroup>
        <button type="button" className="light marketing outlined">
          Standard
        </button>
        <button type="button" className="light marketing outlined active">
          Active
        </button>
        <button type="button" className="light marketing outlined loading">
          <span />
        </button>
        <button type="button" className="light marketing outlined" disabled>
          Disabled
        </button>
      </ButtonGroup>
      <ButtonGroup>
        <button type="button" className="light marketing text">
          Standard
        </button>
        <button type="button" className="light marketing text active">
          Active
        </button>
        <button type="button" className="light marketing text loading">
          <span />
        </button>
        <button type="button" className="light marketing text" disabled>
          Disabled
        </button>
      </ButtonGroup>

      <DarkContainer>
        <h2>Base</h2>
        <ButtonGroup>
          <button type="button" className="dark">
            Standard
          </button>
          <button type="button" className="dark active">
            Active
          </button>
          <button type="button" className="dark loading">
            <span />
          </button>
          <button type="button" className="dark" disabled>
            Disabled
          </button>
        </ButtonGroup>
        <ButtonGroup>
          <button type="button" className="dark outlined">
            Standard
          </button>
          <button type="button" className="dark outlined active">
            Active
          </button>
          <button type="button" className="dark outlined loading">
            <span />
          </button>
          <button type="button" className="dark outlined" disabled>
            Disabled
          </button>
        </ButtonGroup>
        <ButtonGroup>
          <button type="button" className="dark text">
            Standard
          </button>
          <button type="button" className="dark text active">
            Active
          </button>
          <button type="button" className="dark text loading">
            <span />
          </button>
          <button type="button" className="dark text" disabled>
            Disabled
          </button>
        </ButtonGroup>

        <h2>Mini</h2>
        <ButtonGroup>
          <button type="button" className="dark mini">
            Standard
          </button>
          <button type="button" className="dark mini active">
            Active
          </button>
          <button type="button" className="dark mini loading">
            <span />
          </button>
          <button type="button" className="dark mini" disabled>
            Disabled
          </button>
        </ButtonGroup>
        <ButtonGroup>
          <button type="button" className="dark mini outlined">
            Standard
          </button>
          <button type="button" className="dark mini outlined active">
            Active
          </button>
          <button type="button" className="dark mini outlined loading">
            <span />
          </button>
          <button type="button" className="dark mini outlined" disabled>
            Disabled
          </button>
        </ButtonGroup>
        <ButtonGroup>
          <button type="button" className="dark mini text">
            Standard
          </button>
          <button type="button" className="dark mini text active">
            Active
          </button>
          <button type="button" className="dark mini text loading">
            <span />
          </button>
          <button type="button" className="dark mini text" disabled>
            Disabled
          </button>
        </ButtonGroup>

        <h2>Large</h2>
        <ButtonGroup>
          <button type="button" className="dark large">
            Standard
          </button>
          <button type="button" className="dark large active">
            Active
          </button>
          <button type="button" className="dark large loading">
            <span />
          </button>
          <button type="button" className="dark large" disabled>
            Disabled
          </button>
        </ButtonGroup>
        <ButtonGroup>
          <button type="button" className="dark large outlined">
            Standard
          </button>
          <button type="button" className="dark large outlined active">
            Active
          </button>
          <button type="button" className="dark large outlined loading">
            <span />
          </button>
          <button type="button" className="dark large outlined" disabled>
            Disabled
          </button>
        </ButtonGroup>
        <ButtonGroup>
          <button type="button" className="dark large text">
            Standard
          </button>
          <button type="button" className="dark large text active">
            Active
          </button>
          <button type="button" className="dark large text loading">
            <span />
          </button>
          <button type="button" className="dark large text" disabled>
            Disabled
          </button>
        </ButtonGroup>

        <h2>Marketing</h2>
        <ButtonGroup>
          <button type="button" className="dark marketing">
            Standard
          </button>
          <button type="button" className="dark marketing active">
            Active
          </button>
          <button type="button" className="dark marketing loading">
            <span />
          </button>
          <button type="button" className="dark marketing" disabled>
            Disabled
          </button>
        </ButtonGroup>
        <ButtonGroup>
          <button type="button" className="dark marketing outlined">
            Standard
          </button>
          <button type="button" className="dark marketing outlined active">
            Active
          </button>
          <button type="button" className="dark marketing outlined loading">
            <span />
          </button>
          <button type="button" className="dark marketing outlined" disabled>
            Disabled
          </button>
        </ButtonGroup>
        <ButtonGroup>
          <button type="button" className="dark marketing text">
            Standard
          </button>
          <button type="button" className="dark marketing text active">
            Active
          </button>
          <button type="button" className="dark marketing text loading">
            <span />
          </button>
          <button type="button" className="dark marketing text" disabled>
            Disabled
          </button>
        </ButtonGroup>
      </DarkContainer>
    </Container>
  );
};

export default Buttons;
