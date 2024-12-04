import { describe, expect, test } from "vitest";

export const testStoryLengths = ({
  defaultStoriesObj,
  adpStoriesObj,
  upwiseStoriesObj,
}: {
  defaultStoriesObj: Record<never, never>;
  adpStoriesObj: Record<never, never>;
  upwiseStoriesObj: Record<never, never>;
}) => {
  describe('all themed stories exist', () => {
    test('the adp story number are equal', () => {
      expect(
        Object.keys(defaultStoriesObj).length ===
          Object.keys(adpStoriesObj).length,
      ).toBe(true);
    });

    test('the upwise story number are equal', () => {
      expect(
        Object.keys(defaultStoriesObj).length ===
          Object.keys(upwiseStoriesObj).length,
      ).toBe(true);
    });
  });
};
