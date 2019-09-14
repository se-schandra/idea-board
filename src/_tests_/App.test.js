import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import {shallow} from "enzyme/build";

describe("App renders correct layout", () => {

    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<App/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });


    it("App renders header and container component", () => {
        const wrapper = shallow(<App/>);
        let header = wrapper.find("header");
        expect(header.exists()).toEqual(true);
        expect(header.text()).toEqual("Tech Test");
        let container = wrapper.find("div.container");
        expect(container.exists()).toEqual(true);
    });

});
