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
    endpoints: (builder) => ({
        getProducts: builder.query<{products: Product[]}, void>({
            query: () => '/products'
        }),
        getProductById: builder.query<{product: Product}, string>({
            query: (id) => `/products/${id}`
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
            })
        }),
        deleteProduct: builder.mutation<void, string>({
            query: (id) => ({
                url: `/products/${id}`,
                method: "DELETE"
            }),
        })
    }),
});

export const { useGetProductsQuery, useGetProductByIdQuery, useCreateProductMutation, useUpdateProductMutation, useDeleteProductMutation } = productApi;