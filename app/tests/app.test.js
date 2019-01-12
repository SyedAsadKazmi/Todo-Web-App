var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var Clock = require('../components/Clock');


var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');
describe('lets', ()=>{
    it('should properly run', ()=>{
        expect(1).toBe(1);
    })

    it('lets check for component exist', ()=>{
        expect(Clock).toExist();
    })

    it('rendering', ()=>{
        var clock = TestUtils.renderIntoDocument(<Clock/>);
        var seconds = 615;
        var expected = '10:15';
        var actual = clock.formatSeconds(seconds);
        expect(actual).toBe(expected);
    })

    it('should format seconds when mi/sec are less than 10', ()=>{
        var clock = TestUtils.renderIntoDocument(<Clock/>);
        var seconds = 61;
        var expected = '01:01';
        var actual = clock.formatSeconds(seconds);
        expect(actual).toBe(expected);
    })

    it('should render clock to output', ()=>{
        var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={70}/>);
        var $el = $(ReactDOM.findDOMNode(clock));
        var actualText = $el.find('.clock-text').text();
        expect(actualText).toBe('01:10');
    })
})