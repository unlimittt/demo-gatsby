import React from 'react';
import { useStaticQuery, StaticQuery } from 'gatsby';
import ShopTemplate from './shop-template';
import siteMetadata from '../../jest/__fixtures__/site-metadata';
import allMarkdownRemark from '../../jest/__fixtures__/shop-all-markdown-remark';
import { RenderCallback } from '../types';
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

Enzyme.configure({ adapter: new Adapter() })

describe('ShopTemplate', () => {
  const props = {
    data: {
      ...allMarkdownRemark
    }
  };

  beforeEach(() => {
    (StaticQuery as jest.MockedFunction<typeof StaticQuery | any>).mockImplementationOnce(
      ({ render }: RenderCallback) => (
        render(siteMetadata)
      ),
      (useStaticQuery as jest.MockedFunction<typeof useStaticQuery | any>).mockReturnValue(siteMetadata)
    );
  });

  it('renders correctly', () => {
    const wrapper = shallow(<ShopTemplate {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
