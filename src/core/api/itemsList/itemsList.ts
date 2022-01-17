import axios from "axios";


const ItemsListApi = () =>
  axios
    .get(
      `https://systemapi.prod.ashish.me/movies`
    )
    .then(result => {
      return result.data;
    });

export default ItemsListApi;
