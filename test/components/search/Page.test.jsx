import React from "react";
import { shallow } from "enzyme";

import Page from "../../../src/components/search/Page";

describe("Search Page", () => {
  it("renders a Search compnent", () => {
    const component = shallow(<Page />);
    expect(component.find("Search").exists()).toBeTruthy();
  });
});
