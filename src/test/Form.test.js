import React from 'react'
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Form1 } from '../components/Form/Form1';
configure({ adapter: new Adapter() });

describe('checking Form', () => {
    test('Checking div in form', () => {
        let wrapper1 = shallow(<Form1 />);
        expect(wrapper1.find("div")).toHaveLength(1)
    })

})