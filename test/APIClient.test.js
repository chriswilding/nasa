import APIClient from "../src/APIClient";
import searchCrabNebula from "./fixtures/crabNebula.json";

describe("APIClient", () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockReturnValueOnce(
      Promise.resolve({
        json: () => searchCrabNebula
      })
    );
  });

  afterEach(() => {
    global.fetch.mockRestore();
  });

  it("calls the NASA image and video library API", () =>
    APIClient.search({ audio: false, image: false, query: "crab nebula" }).then(() => {
      expect(global.fetch).toBeCalledWith("https://images-api.nasa.gov/search?q=crab%20nebula");
    }));

  it("only requests audio media type", () =>
    APIClient.search({ audio: true, image: false, query: "crab nebula" }).then(() => {
      expect(global.fetch).toBeCalledWith(
        "https://images-api.nasa.gov/search?q=crab%20nebula&media_type=audio"
      );
    }));

  it("only requests image media type", () =>
    APIClient.search({ audio: false, image: true, query: "crab nebula" }).then(() => {
      expect(global.fetch).toBeCalledWith(
        "https://images-api.nasa.gov/search?q=crab%20nebula&media_type=image"
      );
    }));

  it("requests both audio and image media types", () =>
    APIClient.search({ audio: true, image: true, query: "crab nebula" }).then(() => {
      expect(global.fetch).toBeCalledWith(
        "https://images-api.nasa.gov/search?q=crab%20nebula&media_type=audio,image"
      );
    }));
});
