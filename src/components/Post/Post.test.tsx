import React from 'react';
import { useStaticQuery, StaticQuery } from 'gatsby';
import Post from './Post';
import siteMetadata from '../../../jest/__fixtures__/site-metadata';
import type { RenderCallback } from '../../types';
import Enzyme, { shallow } from 'enzyme';
import Adapter from "enzyme-adapter-react-16"

Enzyme.configure({adapter: new Adapter()})

describe('Post', () => {
  beforeEach(() => {
    (StaticQuery as jest.MockedFunction<typeof StaticQuery | any>).mockImplementationOnce(
      ({ render }: RenderCallback) => (
        render(siteMetadata)
      ),
      (useStaticQuery as jest.MockedFunction<typeof useStaticQuery | any>).mockReturnValue(siteMetadata)
    );
  });

  const props = {
    post: {
      id: 'test-123',
      html: '<p>test</p>',
      fields: {
        slug: '/test',
        categorySlug: '/test-category',
        tagSlugs: [
          '/test_0',
          '/test_1'
        ]
      },
      frontmatter: {
        date: '2016-09-01',
        tags: [
          'test_0',
          'test_1'
        ],
        title: 'test'
      }
    }
  };

  it('renders correctly', () => {
    const wrapper = shallow(<Post {...props} />)
    expect(wrapper).toMatchSnapshot()
  });
});
