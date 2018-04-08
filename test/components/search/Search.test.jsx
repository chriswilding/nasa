import React from "react";
import { shallow } from "enzyme";

import Search from "../../../src/components/search/Search";

describe("Search component", () => {
  it("sets the default state", () => {
    const component = shallow(<Search search={() => {}} />);
    expect(component.state()).toEqual({
      audio: false,
      images: false,
      query: ""
    });
  });

  it("calls the search callback when submitted", done => {
    expect.assertions(1);

    const search = state => {
      expect(state).toEqual({
        audio: false,
        images: false,
        query: ""
      });

      done();
    };

    const component = shallow(<Search search={search} />);
    component.simulate("submit");
  });

  it("updates the search box when the input is changed", () => {
    const component = shallow(<Search search={() => {}} />);

    const event = {
      target: {
        value: "example",
        name: "query"
      }
    };
    component.find("#query").simulate("change", event);

    expect(component.state()).toEqual({
      audio: false,
      images: false,
      query: "example"
    });
  });

  it("updates the state when the image checkbox is toggled", () => {
    const component = shallow(<Search search={() => {}} />);

    const event = {
      target: {
        checked: true,
        name: "images",
        type: "checkbox"
      }
    };
    component.find("#images").simulate("change", event);

    expect(component.state()).toEqual({
      audio: false,
      images: true,
      query: ""
    });
  });

  it("updates the state when the audio checkbox is toggled", () => {
    const component = shallow(<Search search={() => {}} />);

    const event = {
      target: {
        checked: true,
        name: "audio",
        type: "checkbox"
      }
    };
    component.find("#audio").simulate("change", event);

    expect(component.state()).toEqual({
      audio: true,
      images: false,
      query: ""
    });
  });
});
