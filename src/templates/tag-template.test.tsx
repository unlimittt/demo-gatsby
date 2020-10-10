import React from 'react';
import { useStaticQuery, StaticQuery } from 'gatsby';
import TagTemplate from './tag-template';
import siteMetadata from '../../jest/__fixtures__/site-metadata';
import allMarkdownRemark from '../../jest/__fixtures__/all-markdown-remark';
import pageContext from '../../jest/__fixtures__/page-context';
import type { RenderCallback } from '../types';
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

Enzyme.configure({ adapter: new Adapter() })

describe('TagTemplate', () => {
  beforeEach(() => {
    (StaticQuery as jest.MockedFunction<typeof StaticQuery | any>).mockImplementationOnce(
      ({ render }: RenderCallback) => (
        render(siteMetadata)
      ),
      (useStaticQuery as jest.MockedFunction<typeof useStaticQuery | any>).mockReturnValue(siteMetadata)
    );
  });

  const props = {
    data: {
      ...allMarkdownRemark
    },
    ...pageContext
  };

  it('renders correctly', () => {
    const wrapper = shallow(<TagTemplate {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
