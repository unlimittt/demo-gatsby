import React  from "react"
import { useStaticQuery, StaticQuery } from 'gatsby';
import siteMetadata from '../../../../jest/__fixtures__/site-metadata';
import type { RenderCallback } from '../../../types';
import Enzyme, { shallow } from 'enzyme';
import Adapter from "enzyme-adapter-react-16"
import SEO from "./SEO";

Enzyme.configure({adapter: new Adapter()})

describe('SEO', () => {
  const props = {
    ...siteMetadata,
    title: 'test',
    description: 'test',
    lang: 'ru'
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
    const wrapper = shallow(<SEO {...props} />)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('HelmetWrapper').prop('htmlAttributes')).toEqual({lang: "ru"})
    expect(wrapper.find('HelmetWrapper').prop('meta')).toContainEqual({
      property: "og:image",
      content: "http://localhost/test.jpg",
    })
  });
});
