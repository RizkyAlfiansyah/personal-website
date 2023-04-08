import axios from 'axios';

const BASE_URL = import.meta.env.VITE_REACT_APP_API_URL;
export const getProducts = () => {
  return async (dispatch) => {
    dispatch({
      type: 'GET_PRODUCTS',
      payload: {
        loading: true,
        products: [],
        errorMessage: null,
      },
    });

    axios
      .get(`${BASE_URL}/products`)
      .then((response) => {
        dispatch({
          type: 'GET_PRODUCTS',
          payload: {
            loading: false,
            products: response.data,
            errorMessage: null,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: 'GET_PRODUCTS',
          payload: {
            loading: false,
            products: [],
            errorMessage: error.message,
          },
        });
      });
  };
};

export const getProductCategories = () => {
  return async (dispatch) => {
    dispatch({
      type: 'GET_PRODUCT_CATEGORIES',
      payload: {
        loading: true,
        categories: [],
        errorMessage: null,
      },
    });

    axios
      .get(`${BASE_URL}/products/categories`)
      .then((response) => {
        dispatch({
          type: 'GET_PRODUCT_CATEGORIES',
          payload: {
            loading: false,
            categories: response.data,
            errorMessage: null,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: 'GET_PRODUCT_CATEGORIES',
          payload: {
            loading: false,
            categories: [],
            errorMessage: error.message,
          },
        });
      });
  };
};
