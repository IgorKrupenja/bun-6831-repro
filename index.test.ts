import { describe, expect, it } from 'bun:test';
import { getUploadPath } from '.';

describe('getUploadPath', () => {
  it('should return correct path', () => {
    expect(getUploadPath('public/images/articles/foo/bar.jpg')).toEqual(
      'images/articles/foo/bar.jpg'
    );
  });
});
