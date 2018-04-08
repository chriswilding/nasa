import config from "./config";

const toQueryString = object =>
  Object.keys(object)
    .map(key => `${key}=${object[key]}`)
    .join("&");

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
  search({ audio, id, image, query }) {
    const queryObject = {};

    if (query) {
      queryObject.q = query;
    }

    if (audio) {
      queryObject.media_type = "audio";
    }

    if (image) {
      queryObject.media_type = audio ? `${queryObject.media_type},image` : "image";
    }

    if (id) {
      queryObject.nasa_id = id;
    }

    const uri = `${config.BASE_URL}/search?${toQueryString(queryObject)}`;

    const encodedURI = encodeURI(uri);

    return fetch(encodedURI)
      .then(result => result.json())
      .then(({ collection: { items } }) => items)
      .then(items => items.map(transformItem));
  }
};
