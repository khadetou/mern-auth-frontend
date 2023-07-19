import { apiSlice } from "./api-slice";

const USERS_URL = "auth";

export const userAppSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: `${USERS_URL}/signin`,
        method: "POST",
        body: credentials,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/signout`,
        method: "POST",
      }),
    }),
    register: builder.mutation({
      query: (credentials) => ({
        url: `${USERS_URL}/signup`,
        method: "POST",
        body: credentials,
      }),
    }),
    updateUser: builder.mutation({
      query: (credentials) => ({
        url: `${USERS_URL}/update`,
        method: "PUT",
        body: credentials,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useUpdateUserMutation,
} = userAppSlice;
