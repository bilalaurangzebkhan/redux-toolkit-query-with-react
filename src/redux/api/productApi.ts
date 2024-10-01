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
        getProducts: builder.query<Product[], void>({
            query: () => '/products'
        }),
        createProduct: builder.mutation<Product, Partial<Product>>({
            query: (product) => ({
                url: "/products",
                method: "POST",
                body: product,
            })
        })
    }),
});

export const { useGetProductsQuery, useCreateProductMutation } = productApi;