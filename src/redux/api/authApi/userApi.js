import { createApi } from "@reduxjs/toolkit/query/react";
import { setUser } from "redux/features/User/userSlice";
import { APIBaseQuery } from "../axiosBase";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: APIBaseQuery,
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getMe: builder.query({
      query() {
        return {
          url: "siteUser/profile",
        };
      },
      transformResponse: (result) => result,
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data));
        } catch (error) {}
      },
    }),
  }),
});
