import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../../components';

import { storyConfigs } from './storyConfigs';

const meta: Meta = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

const {
  default: storyDefault,
  defaultDisabled,
  defaultLoading,
  defaultDisabledAndLoading,
  defaultFullWidth,
  defaultMini,
  defaultDark,
  defaultDarkAndDisabled,
  defaultDarkAndLoading,
  text,
  textDisabled,
  textLoading,
  textDisabledAndLoading,
  textFullWidth,
  textMini,
  textDark,
  textDarkAndDisabled,
  textDarkAndLoading,
  link,
  linkDisabled,
  linkLoading,
  linkDisabledAndLoading,
  linkFullWidth,
  linkMini,
  linkDark,
  linkDarkAndDisabled,
  linkDarkAndLoading,
  outlined,
  outlinedDisabled,
  outlinedLoading,
  outlinedDisabledAndLoading,
  outlinedFullWidth,
  outlinedMini,
  outlinedDark,
  outlinedDarkAndDisabled,
  outlinedDarkAndLoading,
} = storyConfigs;

export const Default: Story = storyDefault;
export const DefaultFullWidth: Story = defaultFullWidth;
export const DefaultMini: Story = defaultMini;
// Have to clone this object because the hover parameters
export const DefaultHovered: Story = { ...storyDefault };
DefaultHovered.parameters = { pseudo: { hover: true } };
export const DefaultActive: Story = { ...storyDefault };
DefaultActive.parameters = { pseudo: { active: true } };
// This matters because of the specificity (in this case the order) of the CSS
// hovered state should take presidence over the active state
export const DefaultActiveAndHovered: Story = { ...storyDefault };
DefaultActiveAndHovered.parameters = { pseudo: { hover: true, active: true } };
export const DefaultDisabled: Story = defaultDisabled;
// These ones disabled should take presidence over all the states
export const DefaultDisabledAndHovered: Story = { ...defaultDisabled };
DefaultDisabledAndHovered.parameters = { pseudo: { hover: true } };
export const DefaultDisabledAndActive: Story = { ...defaultDisabled };
DefaultDisabledAndActive.parameters = { pseudo: { active: true } };
export const DefaultDisabledAndLoading: Story = defaultDisabledAndLoading;
export const DefaultLoading: Story = defaultLoading;
export const DefaultLoadingAndHovered: Story = { ...defaultLoading };
DefaultLoadingAndHovered.parameters = { pseudo: { hover: true } };
export const DefaultLoadingAndActive: Story = { ...defaultLoading };
DefaultLoadingAndActive.parameters = { pseudo: { active: true } };
export const DefaultLoadingAndHoveredAndActive: Story = { ...defaultLoading };
DefaultLoadingAndHoveredAndActive.parameters = {
  pseudo: { hover: true, active: true },
};

export const DefaultDark: Story = defaultDark;
export const DefaultDarkHovered: Story = { ...defaultDark };
DefaultDarkHovered.parameters = { pseudo: { hover: true } };
export const DefaultDarkActive: Story = { ...defaultDark };
DefaultDarkActive.parameters = { pseudo: { active: true } };
export const DefaultDarkActiveAndHovered: Story = { ...defaultDark };
DefaultDarkActiveAndHovered.parameters = {
  pseudo: { hover: true, active: true },
};
export const DefaultDarkDisabled: Story = defaultDarkAndDisabled;
export const DefaultDarkDisabledAndHovered: Story = {
  ...defaultDarkAndDisabled,
};
DefaultDarkDisabledAndHovered.parameters = { pseudo: { hover: true } };
export const DefaultDarkDisabledAndActive: Story = {
  ...defaultDarkAndDisabled,
};
DefaultDarkDisabledAndActive.parameters = { pseudo: { active: true } };
export const DefaultDarkLoading: Story = defaultDarkAndLoading;
export const DefaultDarkLoadingAndHovered: Story = {
  ...defaultDarkAndLoading,
};
DefaultDarkLoadingAndHovered.parameters = { pseudo: { hover: true } };
export const DefaultDarkLoadingAndActive: Story = { ...defaultDarkAndLoading };
DefaultDarkLoadingAndActive.parameters = { pseudo: { active: true } };
export const DefaultDarkLoadingAndHoveredAndActive: Story = {
  ...defaultDarkAndLoading,
};
export const Text: Story = text;
export const TextFullWidth: Story = textFullWidth;
export const TextMini: Story = textMini;
// Have to clone this object because the hover parameters
export const TextHovered: Story = { ...text };
TextHovered.parameters = { pseudo: { hover: true } };
export const TextActive: Story = { ...text };
TextActive.parameters = { pseudo: { active: true } };
// This matters because of the specificity (in this case the order) of the CSS
// hovered state should take presidence over the active state
export const TextActiveAndHovered: Story = { ...text };
TextActiveAndHovered.parameters = { pseudo: { hover: true, active: true } };
export const TextDisabled: Story = textDisabled;
// These ones disabled should take presidence over all the states
export const TextDisabledAndHovered: Story = { ...textDisabled };
TextDisabledAndHovered.parameters = { pseudo: { hover: true } };
export const TextDisabledAndActive: Story = { ...textDisabled };
TextDisabledAndActive.parameters = { pseudo: { active: true } };
export const TextDisabledAndLoading: Story = textDisabledAndLoading;
export const TextLoading: Story = textLoading;
export const TextLoadingAndHovered: Story = { ...textLoading };
TextLoadingAndHovered.parameters = { pseudo: { hover: true } };
export const TextLoadingAndActive: Story = { ...textLoading };
TextLoadingAndActive.parameters = { pseudo: { active: true } };
export const TextLoadingAndHoveredAndActive: Story = { ...textLoading };
TextLoadingAndHoveredAndActive.parameters = {
  pseudo: { hover: true, active: true },
};

export const TextDark: Story = textDark;
export const TextDarkHovered: Story = { ...textDark };
TextDarkHovered.parameters = { pseudo: { hover: true } };
export const TextDarkActive: Story = { ...textDark };
TextDarkActive.parameters = { pseudo: { active: true } };
export const TextDarkActiveAndHovered: Story = { ...textDark };
TextDarkActiveAndHovered.parameters = {
  pseudo: { hover: true, active: true },
};
export const TextDarkDisabled: Story = textDarkAndDisabled;
export const TextDarkDisabledAndHovered: Story = {
  ...textDarkAndDisabled,
};
TextDarkDisabledAndHovered.parameters = { pseudo: { hover: true } };
export const TextDarkDisabledAndActive: Story = {
  ...textDarkAndDisabled,
};
TextDarkDisabledAndActive.parameters = { pseudo: { active: true } };
export const TextDarkLoading: Story = textDarkAndLoading;
export const TextDarkLoadingAndHovered: Story = {
  ...textDarkAndLoading,
};
TextDarkLoadingAndHovered.parameters = { pseudo: { hover: true } };
export const TextDarkLoadingAndActive: Story = { ...textDarkAndLoading };
TextDarkLoadingAndActive.parameters = { pseudo: { active: true } };
export const TextDarkLoadingAndHoveredAndActive: Story = {
  ...textDarkAndLoading,
};

export const Link: Story = link;
export const LinkFullWidth: Story = linkFullWidth;
export const LinkMini: Story = linkMini;
// Have to clone this object because the hover parameters
export const LinkHovered: Story = { ...link };
LinkHovered.parameters = { pseudo: { hover: true } };
export const LinkActive: Story = { ...link };
LinkActive.parameters = { pseudo: { active: true } };
// This matters because of the specificity (in this case the order) of the CSS
// hovered state should take presidence over the active state
export const LinkActiveAndHovered: Story = { ...link };
LinkActiveAndHovered.parameters = { pseudo: { hover: true, active: true } };
export const LinkDisabled: Story = linkDisabled;
// These ones disabled should take presidence over all the states
export const LinkDisabledAndHovered: Story = { ...linkDisabled };
LinkDisabledAndHovered.parameters = { pseudo: { hover: true } };
export const LinkDisabledAndActive: Story = { ...linkDisabled };
LinkDisabledAndActive.parameters = { pseudo: { active: true } };
export const LinkDisabledAndLoading: Story = linkDisabledAndLoading;
export const LinkLoading: Story = linkLoading;
export const LinkLoadingAndHovered: Story = { ...linkLoading };
LinkLoadingAndHovered.parameters = { pseudo: { hover: true } };
export const LinkLoadingAndActive: Story = { ...linkLoading };
LinkLoadingAndActive.parameters = { pseudo: { active: true } };
export const LinkLoadingAndHoveredAndActive: Story = { ...linkLoading };
LinkLoadingAndHoveredAndActive.parameters = {
  pseudo: { hover: true, active: true },
};

export const LinkDark: Story = linkDark;
export const LinkDarkHovered: Story = { ...linkDark };
LinkDarkHovered.parameters = { pseudo: { hover: true } };
export const LinkDarkActive: Story = { ...linkDark };
LinkDarkActive.parameters = { pseudo: { active: true } };
export const LinkDarkActiveAndHovered: Story = { ...linkDark };
LinkDarkActiveAndHovered.parameters = {
  pseudo: { hover: true, active: true },
};
export const LinkDarkDisabled: Story = linkDarkAndDisabled;
export const LinkDarkDisabledAndHovered: Story = {
  ...linkDarkAndDisabled,
};
LinkDarkDisabledAndHovered.parameters = { pseudo: { hover: true } };
export const LinkDarkDisabledAndActive: Story = {
  ...linkDarkAndDisabled,
};
LinkDarkDisabledAndActive.parameters = { pseudo: { active: true } };
export const LinkDarkLoading: Story = linkDarkAndLoading;
export const LinkDarkLoadingAndHovered: Story = {
  ...linkDarkAndLoading,
};
LinkDarkLoadingAndHovered.parameters = { pseudo: { hover: true } };
export const LinkDarkLoadingAndActive: Story = { ...linkDarkAndLoading };
LinkDarkLoadingAndActive.parameters = { pseudo: { active: true } };
export const LinkDarkLoadingAndHoveredAndActive: Story = {
  ...linkDarkAndLoading,
};

export const Outlined: Story = outlined;
export const OutlinedFullWidth: Story = outlinedFullWidth;
export const OutlinedMini: Story = outlinedMini;
// Have to clone this object because the hover parameters
export const OutlinedHovered: Story = { ...outlined };
OutlinedHovered.parameters = { pseudo: { hover: true } };
export const OutlinedActive: Story = { ...outlined };
OutlinedActive.parameters = { pseudo: { active: true } };
// This matters because of the specificity (in this case the order) of the CSS
// hovered state should take presidence over the active state
export const OutlinedActiveAndHovered: Story = { ...outlined };
OutlinedActiveAndHovered.parameters = { pseudo: { hover: true, active: true } };
export const OutlinedDisabled: Story = outlinedDisabled;
// These ones disabled should take presidence over all the states
export const OutlinedDisabledAndHovered: Story = { ...outlinedDisabled };
OutlinedDisabledAndHovered.parameters = { pseudo: { hover: true } };
export const OutlinedDisabledAndActive: Story = { ...outlinedDisabled };
OutlinedDisabledAndActive.parameters = { pseudo: { active: true } };
export const OutlinedDisabledAndLoading: Story = outlinedDisabledAndLoading;
export const OutlinedLoading: Story = outlinedLoading;
export const OutlinedLoadingAndHovered: Story = { ...outlinedLoading };
OutlinedLoadingAndHovered.parameters = { pseudo: { hover: true } };
export const OutlinedLoadingAndActive: Story = { ...outlinedLoading };
OutlinedLoadingAndActive.parameters = { pseudo: { active: true } };
export const OutlinedLoadingAndHoveredAndActive: Story = { ...outlinedLoading };
OutlinedLoadingAndHoveredAndActive.parameters = {
  pseudo: { hover: true, active: true },
};

export const OutlinedDark: Story = outlinedDark;
export const OutlinedDarkHovered: Story = { ...outlinedDark };
OutlinedDarkHovered.parameters = { pseudo: { hover: true } };
export const OutlinedDarkActive: Story = { ...outlinedDark };
OutlinedDarkActive.parameters = { pseudo: { active: true } };
export const OutlinedDarkActiveAndHovered: Story = { ...outlinedDark };
OutlinedDarkActiveAndHovered.parameters = {
  pseudo: { hover: true, active: true },
};
export const OutlinedDarkDisabled: Story = outlinedDarkAndDisabled;
export const OutlinedDarkDisabledAndHovered: Story = {
  ...outlinedDarkAndDisabled,
};
OutlinedDarkDisabledAndHovered.parameters = { pseudo: { hover: true } };
export const OutlinedDarkDisabledAndActive: Story = {
  ...outlinedDarkAndDisabled,
};
OutlinedDarkDisabledAndActive.parameters = { pseudo: { active: true } };
export const OutlinedDarkLoading: Story = outlinedDarkAndLoading;
export const OutlinedDarkLoadingAndHovered: Story = {
  ...outlinedDarkAndLoading,
};
OutlinedDarkLoadingAndHovered.parameters = { pseudo: { hover: true } };
export const OutlinedDarkLoadingAndActive: Story = {
  ...outlinedDarkAndLoading,
};
OutlinedDarkLoadingAndActive.parameters = { pseudo: { active: true } };
export const OutlinedDarkLoadingAndHoveredAndActive: Story = {
  ...outlinedDarkAndLoading,
};
