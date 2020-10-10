import React from 'react';
import { useStaticQuery, StaticQuery } from 'gatsby';
import ContactTemplate from './contact-template';
import siteMetadata from '../../jest/__fixtures__/site-metadata';
import type { RenderCallback } from '../types';
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

Enzyme.configure({ adapter: new Adapter() })

describe('ContactTemplate', () => {

  beforeEach(() => {
    (StaticQuery as jest.MockedFunction<typeof StaticQuery | any>).mockImplementationOnce(
      ({ render }: RenderCallback) => (
        render(siteMetadata)
      ),
      (useStaticQuery as jest.MockedFunction<typeof useStaticQuery | any>).mockReturnValue(siteMetadata)
    );
  });

  it('renders correctly', () => {
    const wrapper = shallow(<ContactTemplate />);
    expect(wrapper).toMatchSnapshot();
  });
});
