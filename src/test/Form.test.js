import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Form from '../components/Form/Form1'
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { initialValues } from '../constants/InitalValuesConstant';
const mockStore = configureStore([]);
configure({ adapter: new Adapter() });

describe('Testing Form', () => {
    let store = mockStore({});
    let wrapper;
    const onSubmit = jest.fn();
    beforeEach(() => {
        wrapper = mount(<Provider store={store}><Form onSubmit={onSubmit} /></Provider>);
    })
    test('check Button', () => {
        expect(wrapper.find('button').length).toBe(2)
    })
    test('check Input Component', () => {
        expect(wrapper.find("Input")).toHaveLength(5);
    })
    test('check Select Component', () => {
        expect(wrapper.find("Select")).toHaveLength(2);
    })

    test('check change Form values', () => {
        wrapper.find("Input").first().find("input").instance().value = "Ashokkumar";
        wrapper.find("Input").first().find('input').simulate('change');
        expect(wrapper.find("Input").first().find("input").props().value).toEqual("Ashokkumar")

    })
    test('check get form value', () => {
        let reset = wrapper.find("Input").first();
        expect(reset.find("input").props().value).toEqual("Ashok")
    })
    test('check reset button', () => {
        wrapper.find("Input").first().find("input").instance().value = "Ashokkumar";
        wrapper.find("Input").first().find('input').simulate('change')
        let button = wrapper.find("button[type='reset']");
        button.simulate("click");
        expect(wrapper.find("Input").first().find("input").props().value).toEqual("Ashok")

    })

    test('check submit button disabled', () => {
        wrapper.find("Input").first().find("input").instance().value = "Ashokkumar";
        wrapper.find("Input").first().find('input').simulate('change');
        expect(wrapper.find("button[type='submit']").props().disabled).toEqual(false)
    })

    test('checking initial values', () => {
        expect(wrapper.find("ReactFinalForm").props().initialValues).toMatchObject({ Name: "Ashok", Address: "Erode", City: "Namakkal", Country: "india", States: "tamilnadu", PinCode: "638-008", Phone: "1234567890", Checkbox: true })
    })



})