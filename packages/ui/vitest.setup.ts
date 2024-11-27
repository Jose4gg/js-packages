import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import tabbable from 'tabbable';
import { afterEach, vi } from 'vitest';

// Automatically cleanup after each test
afterEach(() => {
  cleanup();
});

// tabbable is build in CJS, vitest does not intercept require, so we have to hoist a manual require interception
// vitest also does not seem to traverse workspace node modules during setup
// so tabbable is installed as a dev dep in the same level as vitest's config

vi.hoisted(async () => {
  const { Module } = await import('module');

  const PatchedModule = Module as unknown as NodeJS.Module & {
    _load: (uri: string, parent?: NodeJS.Module) => any;
    _load_original?: (uri: string, parent?: NodeJS.Module) => any;
  };

  PatchedModule._load_original = PatchedModule._load;
  PatchedModule._load = (uri, parent) => {
    if (uri === 'tabbable') {
      return {
        ...tabbable,
        tabbable: (node: HTMLElement, options?: Record<string, unknown>) =>
          tabbable.tabbable(node, { ...options, displayCheck: 'none' }),
        focusable: (node: HTMLElement, options?: Record<string, unknown>) =>
          tabbable.focusable(node, { ...options, displayCheck: 'none' }),
        isFocusable: (node: HTMLElement, options?: Record<string, unknown>) =>
          tabbable.isFocusable(node, { ...options, displayCheck: 'none' }),
        isTabbable: (node: HTMLElement, options?: Record<string, unknown>) =>
          tabbable.isTabbable(node, { ...options, displayCheck: 'none' }),
      };
    }
    return PatchedModule._load_original!(uri, parent);
  };
});
