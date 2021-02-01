import React from 'react'
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Input } from '../components/Input/Input'
configure({ adapter: new Adapter() });

describe('Testing Input', () => {
    test('check label name', () => {
        let wrapper = shallow(<Input name="Address" label="Address" validate={jest.fn()} placeholder="Address" type="text" />);
        expect(wrapper.props().label).toEqual("Address")

    });
});


