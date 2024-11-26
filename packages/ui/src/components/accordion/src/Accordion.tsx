import { getRootWebUiTheme } from '@nayya-com/wardrobe';
import { ThemeProvider } from 'styled-components';

import AccordionPanels from './AccordionPanels';
import { AccordionProps } from './types';

const Accordion = (props: AccordionProps) => {
  const { allowMultipleOpens, defaultIndices, id, items, testId } = props;
  const rootWebUiTheme = getRootWebUiTheme();

  return (
    <ThemeProvider theme={rootWebUiTheme}>
      <div id={id} data-testid={testId}>
        <AccordionPanels
          allowMultipleOpens={allowMultipleOpens}
          defaultIndices={defaultIndices}
          items={items}
        />
      </div>
    </ThemeProvider>
  );
};

export default Accordion;
