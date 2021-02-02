import React from 'react'
import { shallow, mount, configure } from 'enzyme';
import Button from '../components/Button/Button'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({ adapter: new Adapter() });

describe('Testing Button', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Button loading={true} />)
    })
    test('having  div or not', () => {
        expect(wrapper.find("div")).toHaveLength(2)
    })
    test('having loading class', () => {
        expect(wrapper.find("div").first().hasClass("loader")).toEqual(true)
    })

    test('check submit button', () => {
        let wrapper2 = shallow(<Button loading={false} />);
        expect(wrapper2.find("button").text()).toEqual("Ship To This Address")
    })
})