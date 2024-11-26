import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import Typography from '@nayya-com/typography';

import {
  AccordionContent,
  AccordionHeader,
  AccordionIcon,
  AccordionPanel,
} from './Accordion.styled';
import Add from './icons/Add';
import Subtract from './icons/Subtract';
import { AccordionPanelsProps } from './types';

const AccordionPanels = (props: AccordionPanelsProps) => {
  const { allowMultipleOpens, defaultIndices, items } = props;

  const [activeIndices, setActiveIndices] = useState(defaultIndices || []);

  const onChangeIndex = (index: number) => {
    if (!allowMultipleOpens) {
      setActiveIndices([index === activeIndices[0] ? -1 : index]);
      return;
    }

    setActiveIndices((currentActiveIndices: number[]) => {
      if (currentActiveIndices.includes(index)) {
        return currentActiveIndices.filter((i) => i !== index);
      }

      return currentActiveIndices.concat(index);
    });
  };

  return items.map((item, index) => {
    const isActive = allowMultipleOpens
      ? activeIndices.includes(index)
      : activeIndices[0] === index;

    return (
      <AccordionContent className="accordionPanels" key={item.id}>
        <AccordionHeader
          role="button"
          aria-expanded={Boolean(isActive)}
          data-analytics={item.analyticsId}
          data-testid={item.analyticsId}
          onClick={() => onChangeIndex(index)}
        >
          <Typography variant="h5">{item.title}</Typography>

          <AccordionIcon>{isActive ? <Subtract /> : <Add />}</AccordionIcon>
        </AccordionHeader>

        <AnimatePresence initial={false}>
          {isActive && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ type: 'spring', duration: 0.4, bounce: 0 }}
            >
              <AccordionPanel className="accordionPanel">
                {item.content}
              </AccordionPanel>
            </motion.div>
          )}
        </AnimatePresence>
      </AccordionContent>
    );
  });
};

export default AccordionPanels;
