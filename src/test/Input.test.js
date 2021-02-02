import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Input } from '../components/Input/Input'
import { Form } from 'react-final-form'
configure({ adapter: new Adapter() });

describe('Testing Input', () => {
    const promise = Promise.resolve();
    const mockSubmit = jest.fn(() => promise);
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<Form onSubmit={mockSubmit}>{({ }) => (<Input name="Ashok" label="Name" validate={jest.fn()} placeholder="Enter Name" />)}</Form>);
    })
    test('check Label Name', () => {
        expect(wrapper.find("label").text()).toEqual("Name")
    })
    test("check input name and placeholder", () => {
        expect(wrapper.find("input").props().placeholder).toEqual("Enter Name");
        expect(wrapper.find("input").props().name).toEqual("Ashok");
    })

    test('the div has or not', () => {
        expect(wrapper.find('div')).toHaveLength(1)
    })
})