import { ExtensionOilPrimitives } from '../src/Plugin';
import { version } from './../package.json';

describe('ExtensionOilPrimitives:getRegistrationMeta', () => {
  test('should be defined', () => {
    expect(ExtensionOilPrimitives.getRegistrationMeta).toBeDefined();
  });

  test('should return proper data', () => {
    expect(ExtensionOilPrimitives.getRegistrationMeta()).toEqual({
      version,
      type: 'extension',
      target: expect.any(Array),
      title: 'Примитивы нефтедобывающей отрасли',
      name: 'ExtensionOilPrimitives',
    });
  });
});

describe('ExtensionOilPrimitives:getExtensionInfo', () => {
  test('should be defined', () => {
    expect(ExtensionOilPrimitives.getExtensionInfo).toBeDefined();
  });

  test('should return proper data', () => {
    expect(ExtensionOilPrimitives.getExtensionInfo()).toEqual(expect.any(Array));
  });
});
