export type AccordionItem = {
  id: string;
  title: string;
  content: React.ReactElement;
  analyticsId: string;
};

export interface AccordionProps {
  id: string;
  label: string;
  items: AccordionItem[];
  allowMultipleOpens?: boolean;
  defaultIndices?: number[];
  testId?: string;
}

export interface AccordionPanelsProps {
  items: AccordionItem[];
  allowMultipleOpens?: boolean;
  defaultIndices?: number[];
}
