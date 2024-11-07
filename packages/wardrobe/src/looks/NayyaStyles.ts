import { css } from 'styled-components';

const NayyaStyles = css`
  body {
    margin: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  div {
    margin: 0;
  }

  p,
  span,
  div,
  a,
  caption,
  button,
  input,
  textarea,
  select,
  option,
  label,
  legend,
  fieldset,
  ul,
  li,
  ol,
  dl,
  dt,
  dd,
  table,
  thead,
  tbody,
  tr,
  th,
  td,
  img,
  svg,
  video,
  audio,
  iframe,
  object,
  embed,
  canvas {
    font-family: ${(props) => props.theme.typography.bodyFont};
  }

  .bold {
    font-weight: bold;
  }

  .underlined {
    text-decoration: underline;
  }

  .super1 {
    ${(props) => props.theme.typography.super1}
  }

  .super2 {
    ${(props) => props.theme.typography.super2}
  }

  .super3 {
    ${(props) => props.theme.typography.super3}
  }

  h1,
  .h1 {
    ${(props) => props.theme.typography.h1}
  }

  h2,
  .h2 {
    ${(props) => props.theme.typography.h2}
  }

  h3,
  .h3 {
    ${(props) => props.theme.typography.h3}
  }

  h4,
  .h4 {
    ${(props) => props.theme.typography.h4}
  }

  h5,
  .h5 {
    ${(props) => props.theme.typography.h5}
  }

  .body1 {
    ${(props) => props.theme.typography.body1}
  }

  .body1 + .body1 {
    ${(props) => props.theme.typography.body1Spacing}
  }

  .body2 {
    ${(props) => props.theme.typography.body2}
  }

  .body2 + .body2 {
    ${(props) => {
      return props.theme.typography.body2Spacing;
    }};
  }

  .body3 {
    ${(props) => props.theme.typography.body3}
  }

  .body3 + .body3 {
    ${(props) => {
      return props.theme.typography.body3Spacing;
    }};
  }

  .finePrint {
    ${(props) => props.theme.typography.finePrint}
  }

  .label1 {
    ${(props) => props.theme.typography.label1}
  }

  .label2 {
    ${(props) => props.theme.typography.label2}
  }

  .label3 {
    ${(props) => props.theme.typography.label3}
  }

  .label4 {
    ${(props) => props.theme.typography.label4}
  }

  /* Pill Styles */
  .pill {
    ${(props) => props.theme.pill.styles}

    &.recommended {
      ${(props) => props.theme.pill.variants.recommended}
    }

    &.optional {
      ${(props) => props.theme.pill.variants.optional}
    }

    &.modified {
      ${(props) => props.theme.pill.variants.modified}
    }

    &.waived {
      ${(props) => props.theme.pill.variants.waived}
    }
  }

  /* Link Styles */
  a,
  .linkStyles {
    ${(props) => props.theme.link.base.styles}

    &:hover {
      ${(props) => props.theme.link.base.states.hover}
    }

    &.light {
      ${(props) => props.theme.link.light.styles}

      &:hover {
        ${(props) => props.theme.link.light.states.hover}
      }

      &.active {
        ${(props) => props.theme.link.light.states.active}
      }

      &:disabled,
      &.disabled {
        ${(props) => props.theme.link.light.states.disabled}
      }
    }

    &.dark {
      ${(props) => props.theme.link.dark.styles}

      &:hover {
        ${(props) => props.theme.link.dark.states.hover}
      }

      &.active {
        ${(props) => props.theme.link.dark.states.active}
      }

      &:disabled,
      &.disabled {
        ${(props) => props.theme.link.dark.states.disabled}
      }
    }
  }
`;
export { NayyaStyles };
