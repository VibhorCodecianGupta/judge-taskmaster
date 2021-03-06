import {execRun} from '../src/tasks/run'
import {expect} from 'chai'


describe('run - ruby', () => {
  it('.rb file runs correctly', () => {
    execRun({
      id: 27,
      lang: 'ruby',
      source: (new Buffer(`
puts "Hello " + gets.to_s
      `)).toString('base64'),
      stdin: (new Buffer('World')).toString('base64')
    }, (runResult) => {
      expect(new Buffer(runResult.stdout, 'base64').toString('ascii')).to.eq('Hello World\n')
    })
  })
})