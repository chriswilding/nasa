import React from "react";
import { shallow } from "enzyme";

import Page from "../../../src/components/search/Page";

describe("Search Page", () => {
  it("displays search", () => {
    const component = shallow(<Page />);
    expect(component.text()).toEqual("Search");
  });
});
