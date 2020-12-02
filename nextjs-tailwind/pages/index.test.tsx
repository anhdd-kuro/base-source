import React from 'react';
import { shallow } from 'enzyme';
import Index from '.';

const index = shallow(<Index />);

describe('Demo', () => {
  test('Demo test', () => {
    expect(index.find('title')).toBeTruthy();
  });
});
