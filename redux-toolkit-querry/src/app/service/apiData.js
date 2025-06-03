import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    //Get all products (Reading)
    getAllProducts: builder.query({
      query: () => "/products",
    }),
    //Get single product (Reading)
    getSingleProduct: builder.query({
      query: (id) => `/product/${id}`,
    }),
    //Add new product (Mutating)
    addNewProduct: builder.mutation({
      query: (newProduct) => ({
        url: `/products/add`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: newProduct,
      }),
    }),
    //Update product (Mutating)
    updateProduct: builder.mutation({
      query: ({ id, updatedProduct }) => ({
        url: `/products/${id}`,
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: updatedProduct,
      }),
    }),
    //Delete product (Mutating)
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

// Под капотом RTKQ сделает хук по принципу: `use${GetAllProducts}Query`

export const {
  useGetAllProductsQuery,
  useGetSingleProductQuery,
  useAddNewProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApi;
