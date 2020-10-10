import React from 'react';
import { useStaticQuery, StaticQuery } from 'gatsby';
import MerchTemplate from './merch-template';
import siteMetadata from '../../jest/__fixtures__/site-metadata';
import markdownRemark from '../../jest/__fixtures__/markdown-remark';
import { RenderCallback } from '../types';
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

Enzyme.configure({ adapter: new Adapter() })

describe('MerchTemplate', () => {
  const props = {
    data: {
      ...markdownRemark
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
    const wrapper = shallow(<MerchTemplate {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
