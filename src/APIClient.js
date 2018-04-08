import config from "./config";

const transformItem = item => {
  const data = item.data[0];
  const newItem = {
    id: data.nasa_id,
    description: data.description,
    title: data.title,
    type: data.media_type
  };

  if (newItem.type === "image") {
    newItem.thumb = item.links[0].href;
  }
  return newItem;
};

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

    return fetch(encodedURI)
      .then(result => result.json())
      .then(({ collection: { items } }) => items)
      .then(items => items.map(transformItem));
  }
};
