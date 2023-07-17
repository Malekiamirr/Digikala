import { createApi, fetchBaseQuery } from '@reduxjs/toolkit//query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  endpoints: (builder) => ({
    getStories: builder.query({
      query: () => '/stories',
    }),
    getSwipers: builder.query({
      query: () => '/swiper',
    }),
    getFeatures: builder.query({
      query: () => '/features',
    }),
    getFeaturesDetails: builder.query({
      query: () => '/featuresDetails',
    }),
    getMainCategory: builder.query({
      query: () => '/mainCategory',
    }),
    getCategory: builder.query({
      query: () => '/category',
    }),
    getBrands: builder.query({
      query: () => '/brand',
    }),
    getDigitalGoods: builder.query({
      query: () => '/digitalGoods',
    }),
    getBestSelling: builder.query({
      query: () => '/bestSelling',
    }),
    getSelectionDiscount: builder.query({
      query: () => '/selectionDiscount',
    }),
    getBlog: builder.query({
      query: () => '/blog',
    }),
    getFooterBrands: builder.query({
      query: () => '/footerBrands',
    }),
    getPopularPhones: builder.query({
      query: () => '/popularPhones',
    }),
    getPhoneProducts: builder.query({
      query: () => '/products?category=گوشی موبایل',
    }),
    getCustomersComment: builder.query({
      query: () => '/customersComment',
    }),
    getUsers: builder.query({
      query: () => '/users',
    }),
    getAmazingOffer: builder.query({
      query: () => '/amazingOffer',
    }),
    createUser: builder.mutation({
      query: (newUser) => ({
        url: '/users',
        method: 'POST',
        body: newUser,
      }),
    }),
  }),
});

export const {
  useGetStoriesQuery,
  useGetSwipersQuery,
  useGetFeaturesQuery,
  useGetFeaturesDetailsQuery,
  useGetMainCategoryQuery,
  useGetCategoryQuery,
  useGetBrandsQuery,
  useGetDigitalGoodsQuery,
  useGetBestSellingQuery,
  useGetSelectionDiscountQuery,
  useGetBlogQuery,
  useGetFooterBrandsQuery,
  useGetPopularPhonesQuery,
  useGetPhoneProductsQuery,
  useGetCustomersCommentQuery,
  useGetUsersQuery,
  useGetAmazingOfferQuery,
  useCreateUserMutation,
} = apiSlice;
