import { ReactSelector } from 'testcafe-react-selectors'

fixture `App test`
  .page('http://localhost:8081')

test('Load with add button disabled', async t => {
  const AddButton = ReactSelector('SearchBar').find('button')
  await t
    .expect(AddButton.hasAttribute('disabled')).ok()
})

test('Button should be enabled after valid url', async t => {
  const AddButton = ReactSelector('SearchBar').find('button')
  const InputBar = ReactSelector('SearchBar').find('input')
  await t
    .typeText(InputBar, 'google.com')
    .expect(AddButton.hasAttribute('disabled')).notOk()
})

// HERE MORE TESTS....
