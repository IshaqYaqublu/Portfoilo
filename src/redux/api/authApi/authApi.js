import { createApi } from "@reduxjs/toolkit/query/react";
import { setToken } from "redux/features/User/userSlice";
import { APIBaseQuery } from "../axiosBase";
// import FetchBase from '../FetchBase';
// import { userApi } from "./userApi";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: APIBaseQuery,
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query(data) {
        return {
          url: "siteUser/token",
          method: "POST",
          data,
        };
      },
      transformResponse: (result) => result,

      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          await dispatch(setToken(data));
          // await dispatch(userApi.endpoints.getMe.initiate(null));
        } catch (error) {}
      },
    }),
  }),
});

export const { useLoginUserMutation } = authApi;
