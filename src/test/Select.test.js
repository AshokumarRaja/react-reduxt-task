import React from 'react'
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Select from '../components/Select'
configure({ adapter: new Adapter() });

describe('Testing Input', () => {
    test('check className', () => {
        let wrapper = shallow(<Select />);
        expect(wrapper.hasClass('form-control')).toEqual(true)

    });
    test('check  labelName', () => {
        let wrapper = shallow(<Select name="Ashok" label="Country" validate={jest.fn()} />);
        expect(wrapper.props().name).toEqual("Ashok")

    });
    test('check  SelectTag', () => {
        let wrapper = shallow(<Select name="Ashok" label="Country" validate={jest.fn()} />);
        expect(wrapper.find("select")).toEqual("Ashok")

    });
});


