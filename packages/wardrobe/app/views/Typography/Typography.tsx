import styled from 'styled-components';

const TextRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const Typography = () => {
  return (
    <div>
      <h1 className="super3">Super / 120</h1>
      <h1 className="super2">Super / 90</h1>
      <h1 className="super1">Super / 67</h1>
      <h1>Heading 1 / 51</h1>
      <h2>Heading 2 / 38</h2>
      <h3>Heading 3 / 28</h3>
      <h4>Heading 4 / 21</h4>
      <h5>Heading 5 / 16</h5>
      <TextRow>
        <p className="body3">Body / 21</p>
        <p className="body3 bold">Body / 21 Bold</p>
        <p className="body3 underlined">Body / 21 Underlined</p>
        <p className="body3 underlined bold">Body / 21 Underlined Bold</p>
      </TextRow>
      <TextRow>
        <p className="body2">Body / 16</p>
        <p className="body2 bold">Body / 16 Bold</p>
        <p className="body2 underlined">Body / 16 Underlined</p>
        <p className="body2 underlined bold">Body / 16 Underlined Bold</p>
      </TextRow>
      <TextRow>
        <p className="body1">Body / 14</p>
        <p className="body1 bold">Body / 14 Bold</p>
        <p className="body1 underlined">Body / 14 Underlined</p>
        <p className="body1 underlined bold">Body / 14 Underlined Bold</p>
      </TextRow>
      <TextRow>
        <p className="finePrint">Fine print / 12</p>
        <p className="finePrint bold">Fine print / 12 Bold</p>
        <p className="finePrint underlined">Fine print / 12 Underlined</p>
        <p className="finePrint underlined bold">
          Fine print / 12 Underlined Bold
        </p>
      </TextRow>
      <TextRow>
        <p className="label4">Label / 16</p>
        <p className="label4 bold">Label / 16 Bold</p>
        <p className="label4 underlined">Label / 16 Underlined</p>
        <p className="label4 underlined bold">Label / 16 Underlined Bold</p>
      </TextRow>
      <TextRow>
        <p className="label3">Label / 14</p>
        <p className="label3 bold">Label / 14 Bold</p>
        <p className="label3 underlined">Label / 14 Underlined</p>
        <p className="label3 underlined bold">Label / 14 Underlined Bold</p>
      </TextRow>
      <TextRow>
        <p className="label2">Label / 12</p>
        <p className="label2 bold">Label / 12 Bold</p>
        <p className="label2 underlined">Label / 12 Underlined</p>
        <p className="label2 underlined bold">Label / 12 Underlined Bold</p>
      </TextRow>
      <TextRow>
        <p className="label1">Label / 10</p>
        <p className="label1 bold">Label / 10 Bold</p>
        <p className="label1 underlined">Label / 10 Underlined</p>
        <p className="label1 underlined bold">Label / 10 Underlined Bold</p>
      </TextRow>
    </div>
  );
};

export default Typography;
