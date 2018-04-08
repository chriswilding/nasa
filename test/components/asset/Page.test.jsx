import React from "react";
import { shallow, mount } from "enzyme";
import Page from "../../../src/components/asset/Page";

import assetCrabNebula from "../../fixtures/asset/crabNebula.json";
import searchCrabNebula from "../../fixtures/search/crabNebula.json";

describe("Asset Page", () => {
  beforeEach(() => {
    global.fetch = jest
      .fn()
      .mockReturnValueOnce(
        Promise.resolve({
          json: () => assetCrabNebula
        })
      )
      .mockReturnValueOnce(
        Promise.resolve({
          json: () => searchCrabNebula
        })
      );
  });

  afterEach(() => {
    global.fetch.mockRestore();
  });

  it("displays a loading page", () => {
    const props = {
      match: {
        params: {
          id: "PIA03606"
        }
      }
    };
    const component = shallow(<Page {...props} />);
    expect(component.text()).toEqual("Loading . . .");
  });

  it("displays a image asset on the page", () => {
    const props = {
      match: {
        params: {
          id: "PIA03606"
        }
      }
    };

    const component = mount(<Page {...props} />);
    component.setState({
      item: {
        id: "example id",
        description: "example description",
        title: "example title",
        type: "image",
        href: "example href"
      },
      loading: false
    });

    expect(component.find("Image").exists()).toBeTruthy();
  });
});
