import React from "react";
import { mount } from "enzyme";
import { MemoryRouter, Route } from "react-router-dom";

import Image from "../../../../src/components/search/results/Image";

describe("Image", () => {
  let component;

  beforeAll(() => {
    const props = {
      id: "PIA03606",
      description:
        "The Crab Nebula is one of the most intricately structured and highly  dynamical objects ever observed. The new Hubble image of the Crab was  assembled from 24 individual exposures taken with the NASA/ESA Hubble  Space Telescope",
      thumb: "https://images-assets.nasa.gov/image/PIA03606/PIA03606~thumb.jpg",
      title: "Most Detailed Image of the Crab Nebula",
      type: "image"
    };

    component = mount(
      <MemoryRouter>
        <Route>
          <Image {...props} />
        </Route>
      </MemoryRouter>
    );
  });

  it("renders an Image component with a corrent link", () => {
    expect(component.find("a").prop("href")).toEqual("/asset/PIA03606");
  });

  it("renders an Image component with a corrent img", () => {
    expect(component.find("img").prop("src")).toEqual(
      "https://images-assets.nasa.gov/image/PIA03606/PIA03606~thumb.jpg"
    );
  });
});
