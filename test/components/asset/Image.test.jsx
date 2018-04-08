import React from "react";
import { shallow } from "enzyme";

import Image from "../../../src/components/asset/Image";

describe("Image", () => {
  let component;

  beforeAll(() => {
    const props = {
      id: "PIA03606",
      description:
        "The Crab Nebula is one of the most intricately structured and highly  dynamical objects ever observed. The new Hubble image of the Crab was  assembled from 24 individual exposures taken with the NASA/ESA Hubble  Space Telescope",
      thumb: "https://images-assets.nasa.gov/image/PIA03606/PIA03606~thumb.jpg",
      title: "Most Detailed Image of the Crab Nebula",
      type: "image",
      href: "http://images-assets.nasa.gov/image/PIA03606/PIA03606~large.jpg"
    };

    component = shallow(<Image {...props} />);
  });

  it("renders a title", () => {
    expect(component.find("h1").text()).toEqual("Most Detailed Image of the Crab Nebula");
  });

  it("renders a description", () => {
    expect(component.find("p").text()).toEqual(
      "The Crab Nebula is one of the most intricately structured and highly  dynamical objects ever observed. The new Hubble image of the Crab was  assembled from 24 individual exposures taken with the NASA/ESA Hubble  Space Telescope"
    );
  });

  it("renders an image", () => {
    const img = component.find("img");
    expect(img.prop("src")).toEqual(
      "http://images-assets.nasa.gov/image/PIA03606/PIA03606~large.jpg"
    );
  });
});
