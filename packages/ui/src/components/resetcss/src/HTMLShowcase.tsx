import { HTMLAttributes } from 'react';

import ResetStyles from './ResetStyles';

type HTMLShowcaseProps = HTMLAttributes<HTMLDivElement> & {
  testId?: string;
  disableReset?: boolean;
};

const HTMLShowcase = ({ disableReset, ...props }: HTMLShowcaseProps) => (
  <>
    {!disableReset && <ResetStyles />}
    <div {...props}>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <p>This is a paragraph showcasing text styling.</p>
      <a href="#">This is a link</a>
      <table>
        <thead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Data 1</td>
            <td>Data 2</td>
          </tr>
        </tbody>
      </table>
      <button>Test Button</button>
    </div>
  </>
);

export default HTMLShowcase;
