import React from "react";
import { shallow } from "enzyme";

import App from "../../src/components/App";

describe("App", () => {
  it("renders a router", () => {
    const component = shallow(<App />);
    expect(component.find("BrowserRouter").exists()).toBeTruthy();
  });
});
