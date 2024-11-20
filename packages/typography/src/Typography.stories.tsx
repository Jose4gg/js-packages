import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';

import { TypographyProps } from './Typography.types';

import Typography from '.';

const CustomHeader = styled(Typography)`
  margin: 0 0 0.75rem 0;
`;

export default {
  title: '@nayya-com/typography',
  component: Typography,
} as Meta;

const Template: Story<TypographyProps> = (args) => <Typography {...args} />;
const CustomTemplate: Story<TypographyProps> = (args) => <CustomHeader {...args} />;

export const Heading = Template.bind({});
Heading.args = {
  variant: 'h1',
  children: 'This is an h1 tag',
};

export const HeadingOverride = Template.bind({});
HeadingOverride.args = {
  variant: 'h4',
  as: 'h1',
  children: 'This is an h1 tag with h4 tag styles',
};

export const HeadingAsSpan = Template.bind({});
HeadingAsSpan.args = {
  variant: 'h1',
  children: 'This is a span with h1 styles',
  as: 'span',
};

export const Body = Template.bind({});
Body.args = {
  variant: 'body3',
  children: 'This is a p(body3) tag',
};

export const BodyBold = Template.bind({});
BodyBold.args = {
  variant: 'body3',
  bold: true,
  children: 'This is a p(body3) tag with bold styles',
};

export const BodyOverride = Template.bind({});
BodyOverride.args = {
  variant: 'label1',
  as: 'p',
  children: 'This is a p tag with label1 tag styles',
};

export const FinePrint = Template.bind({});
FinePrint.args = {
  variant: 'finePrint',
  children: 'This is a p(finePrint) tag',
};

export const Label = Template.bind({});
Label.args = {
  variant: 'label1',
  children: 'This is a p(label1) tag',
};

export const LabelAsSpan = Template.bind({});
LabelAsSpan.args = {
  variant: 'label1',
  children: 'This is a span with label1 styles',
  as: 'span',
};

export const LabelWithTestId = Template.bind({});
LabelWithTestId.args = {
  variant: 'label1',
  children: 'This text has a test id',
  testId: 'sample-testid',
};

export const CustomHeaderWithVariant = CustomTemplate.bind({});
CustomHeaderWithVariant.args = {
  variant: 'h3',
  children: 'This component extends Typography and uses h3 tag with h3 styles',
};

export const CustomHeaderWithAsTag = CustomTemplate.bind({});
CustomHeaderWithAsTag.args = {
  variant: 'h3',
  asTag: 'h1',
  children: 'This component extends Typography and uses asTag to use h1 tag with h3 styles',
};
