import { BeanUtils } from './bean.utils';

describe('BeanUtils', () => {
  it('should retrieve value', () => {
    const obj = {a: {b: 42}};
    expect(BeanUtils.getValueOf(obj, 'a.b')).toBe(42);
  });

  it('should retrieve value', () => {
    const obj = {a: {b: 42}, c: 43};
    expect(BeanUtils.getValueOf(obj, 'c')).toBe(43);
  });

  it('should retrieve undefined value on non-existing path', () => {
    const obj = {a: {b: 42}};
    expect(BeanUtils.getValueOf(obj, 'a.c')).toBe(null);
  });

  it('should retrieve undefined value on non-existing path (2)', () => {
    const obj = {a: {b: 42}};
    expect(BeanUtils.getValueOf(obj, 'a.c.d')).toBe(null);
  });

  it('should retrieve null value', () => {
    const obj = {a: {b: null}};
    expect(BeanUtils.getValueOf(obj, 'a.b')).toBe(null);
  });

  it('should not undefined if object undefined', () => {
    const obj = null;
    expect(BeanUtils.getValueOf(obj, 'a.c')).toBe(null);
  });

  it('string as object should deliver undefined', () => {
    const obj = 'test string';
    expect(BeanUtils.getValueOf(obj, 'a.c')).toBe(null);
  });

  it('map as object should work', () => {
    const obj = {'a': 42};
    expect(BeanUtils.getValueOf(obj, 'a')).toBe(42);
  });
});
