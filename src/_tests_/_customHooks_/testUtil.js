import React from "react";
import {mount} from "enzyme";

const testHook = (callback) => {
    function TestHookWrapperComponent() {
        callback();
        return null;
    }

    mount(<TestHookWrapperComponent callback={callback}/>);
};

export default testHook;
