import React from 'react'
import renderer from 'react-test-renderer'
import BlogIndex from '../pages/index'
//import { StaticQuery } from 'gatsby'

describe('BlogIndex', () =>
  it('renders correctly', () => {
    // StaticQuery.mockReturnValueOnce(({ render }) =>
    //   render({
    //     data: {
    //       site: {
    //         siteMetadata: {
    //           title: `Hello World`,
    //         },
    //       },
    //     },
    //   })
    // )

    const location = {
      pathname: '',
    }

    const data = {
      site: {
        siteMetadata: {
          title: 'Gatsby Starter Blog',
        },
      },
      allMarkdownRemark: {
        edges: [
          {
            node: {
              excerpt:
                'Far far away, behind the word mountains, far from the countries Vokalia and\nConsonantia, there live the blind texts. Separated they live in…',
              fields: {
                slug: '/hi-folks/',
              },
              frontmatter: {
                date: '28 May, 2015',
                title: 'New Beginnings',
              },
            },
          },
        ],
      },
    }

    const tree = renderer
      .create(<BlogIndex location={location} data={data} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  }))
