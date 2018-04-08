import React from "react";
import { shallow } from "enzyme";

import App from "../../src/components/App";

describe("App", () => {
  it("displays hello world", () => {
    const component = shallow(<App />);
    expect(component.text()).toEqual("Hello World!");
  });
});
