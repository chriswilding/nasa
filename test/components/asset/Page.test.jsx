import React from "react";
import { shallow } from "enzyme";

import Page from "../../../src/components/asset/Page";

describe("Asset Page", () => {
  it("displays an asset", () => {
    const props = {
      match: {
        params: {
          id: "example"
        }
      }
    };
    const component = shallow(<Page {...props} />);
    expect(component.text()).toEqual("Asset example");
  });
});
