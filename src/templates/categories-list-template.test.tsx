import React from 'react';
import { useStaticQuery, StaticQuery } from 'gatsby';
import CategoriesListTemplate from './categories-list-template';
import siteMetadata from '../../jest/__fixtures__/site-metadata';
import allMarkdownRemark from '../../jest/__fixtures__/all-markdown-remark';
import type { RenderCallback } from '../types';
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

Enzyme.configure({ adapter: new Adapter() })

describe('CategoriesListTemplate', () => {
  const props = {
    ...siteMetadata,
    ...allMarkdownRemark
  };

  beforeEach(() => {
    (StaticQuery as jest.MockedFunction<typeof StaticQuery | any>).mockImplementationOnce(
      ({ render }: RenderCallback) => (
        render(props)
      ),
      (useStaticQuery as jest.MockedFunction<typeof useStaticQuery | any>).mockReturnValue(props)
    );
  });

  it('renders correctly', () => {
    const wrapper = shallow(<CategoriesListTemplate />);
    expect(wrapper).toMatchSnapshot();
  });
});
