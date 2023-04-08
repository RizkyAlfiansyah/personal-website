const initialState = {
  loading: false,
  products: [],
  errorMessage: null,
};

export default function products(state = initialState, action) {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return {
        ...state,
        loading: action.payload.loading,
        products: action.payload.products,
        errorMessage: action.payload.errorMessage,
      };
    case 'GET_PRODUCT_CATEGORIES':
      return {
        ...state,
        loading: action.payload.loading,
        categories: action.payload.categories,
        errorMessage: action.payload.errorMessage,
      };
    default:
      return state;
  }
}
