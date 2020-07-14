import React from 'react';
import Enzyme, { shallow, render, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {createSerializer} from 'enzyme-to-json';
import sinon from 'sinon';

// Set the default serializer for Jest to be the from enzyme-to-json
// This produces an easier to read (for human) serialized format.
expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

// Make Enzyme functions available in all test files without importing
// Note: all tests run in node environment. The golbal object is 'global' not 'window'
global.React = React;
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.sinon = sinon;


// shallow mounts the component but does not do the DOM tree. It is a lite version of your component
// render gives you the result of the render function. The HTML that the component output
// mount goes throught the entire DOM tree. Use it if you would like to trigger DOM events

// render is more in details than shallow