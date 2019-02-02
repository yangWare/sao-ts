import test from 'ava'
import demo from '../dist'

test('main', t => {
  t.is(typeof demo, 'function')
})
