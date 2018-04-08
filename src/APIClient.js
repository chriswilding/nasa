import config from "./config";

export default {
  search({ audio, image, query }) {
    const mediaType = [];
    if (audio) {
      mediaType.push("audio");
    }
    if (image) {
      mediaType.push("image");
    }

    let uri = `${config.BASE_URL}/search?q=${query}`;
    if (mediaType.length > 0) {
      uri += `&media_type=${mediaType.join(",")}`;
    }

    const encodedURI = encodeURI(uri);

    return fetch(encodedURI);
  }
};
