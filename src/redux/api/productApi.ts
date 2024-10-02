import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type Product = {
    _id: string;
    name: string;
    description: string;
    price: number;
}

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
    tagTypes: ["Products", "Product"],
    endpoints: (builder) => ({
        getProducts: builder.query<{products: Product[]}, void>({
            query: () => '/products',
        providesTags: ["Products"],
        }),
        getProductById: builder.query<{product: Product}, string>({
            query: (id) => `/products/${id}`,
            providesTags: ["Product"],
        }),
        createProduct: builder.mutation<Product, Partial<Product>>({
            query: (product) => ({
                url: "/products",
                method: "POST",
                body: product,
            })
        }),
        updateProduct: builder.mutation<Product, {id: string} & Partial<Product>>({
            query: (id, ...product) => ({
                url: `/products/${id}`,
                method: "PUT",
                body: product,
            }),
            invalidatesTags: ["Product"],
        }),
        deleteProduct: builder.mutation<void, string>({
            query: (id) => ({
                url: `/products/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Products"],
        })
    }),
});

export const { useGetProductsQuery, useLazyGetProductsQuery, useGetProductByIdQuery, useCreateProductMutation, useUpdateProductMutation, useDeleteProductMutation } = productApi;