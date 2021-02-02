import React from 'react'
import { shallow, mount, configure } from 'enzyme';
import Select from '../components/Select'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Country } from '../constants/CoutryConstants';
import { Form } from 'react-final-form'
configure({ adapter: new Adapter() });

describe('Testing Button', () => {
    const promise = Promise.resolve();
    const mockSubmit = jest.fn(() => promise);
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<Form onSubmit={mockSubmit}>{({ }) => (<Select name="Country" label="Country" validate={jest.fn()} options={Country} />)}</Form>);
    })
    test('Check Label Name', () => {
        expect(wrapper.find("label").text()).toEqual("Country")
    })

    test('change the Select values', () => {
        wrapper.find("select").instance().value = "pakistan";
        wrapper.find('select').simulate('change');
        expect(wrapper.find("select").props().value).toEqual("pakistan")
    })

    test('select tag length', () => {
        expect(wrapper.find("select")).toHaveLength(1);
    })

    test('check option tag length', () => {
        expect(wrapper.find("option")).toHaveLength(5)
    })

})