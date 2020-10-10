import React from 'react'
import { useStaticQuery, StaticQuery } from 'gatsby'
import Author from './Author'
import siteMetadata from '../../../../jest/__fixtures__/site-metadata'
import type { RenderCallback } from '../../../types'
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

Enzyme.configure({adapter: new Adapter()})

describe('Author', () => {
  beforeEach(() => {
    (StaticQuery as jest.MockedFunction<typeof StaticQuery | any>).mockImplementationOnce(
      ({ render }: RenderCallback) => (
        render(siteMetadata)
      ),
      (useStaticQuery as jest.MockedFunction<typeof useStaticQuery | any>).mockReturnValue(siteMetadata)
    );
  });

  it('renders correctly', () => {
    const wrapper = shallow(<Author />);
    expect(wrapper).toMatchSnapshot();
  });
});
