import { motion } from 'framer-motion';
import styled from 'styled-components';

import { getThemeObject } from './themableStyles';

export const AccordionContent = styled.div`
  border-radius: ${({ theme }) => getThemeObject(theme.id).borderRadius};
  overflow: hidden;
  margin: 0 0 0.063rem 0;
  border: ${({ theme }) => getThemeObject(theme.id).border};

  &:last-child {
    border-bottom: ${({ theme }) =>
      getThemeObject(theme.id).lastItemBorderBottom};
  }
`;

export const AccordionHeader = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 1.25rem;
  align-items: center;
  background-color: #ffffff;
  user-select: none;

  border-top: ${({ theme }) => getThemeObject(theme.id).headerBorderTop};

  h5 {
    margin: 0;
    letter-spacing: normal;
    color: ${({ theme }) => getThemeObject(theme.id).headerColor};
  }
`;

export const AccordionIcon = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => getThemeObject(theme.id).iconColor};
`;

export const AccordionPanel = styled.div`
  border-top: ${({ theme }) => getThemeObject(theme.id).panelBorderTop};
  padding: 1.25rem;
`;
