import React from 'react';
import LinkFragment from '../../components/LinksList/LinkFragment/LinkFragment'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

it('renders item correct', () => {
  const mockLink = {
    shortcode: 'oV9VC1',
    url: 'google.com',
    isUpdating: false,
    startDate: '2018-05-10T20:25:12+00:00',
    redirectCount: 0
  }
  const tree = renderer
    .create(<LinkFragment link={mockLink} />)
    .toJSON()
  expect(tree).toMatchSnapshot('link-with-0-visits')
})

// OTHER COMPONENTS HERE
