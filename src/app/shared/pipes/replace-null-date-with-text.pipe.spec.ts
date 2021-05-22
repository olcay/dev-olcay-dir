import { ReplaceNullDateWithTextPipe } from './replace-null-date-with-text.pipe';

describe('ReplaceNullDateWithTextPipe', () => {
  it('create an instance', () => {
    const pipe = new ReplaceNullDateWithTextPipe();
    expect(pipe).toBeTruthy();
  });
});
