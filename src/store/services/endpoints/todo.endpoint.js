import { ApiService } from "../apiService";

const todoEndpoint = ApiService.injectEndpoints({
  endpoints: (builder) => ({
    getTodo: builder.query({
      query: () => "/todos",
    }),
    postTodo: builder.mutation({
      query: (formData) => ({
        url: "/todos",
        body: formData,
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
      }),
    }),
    editTodo: builder.mutation({
      query: ({ id, ...newData }) => ({
        url: `/todos/${id}`,
        method: "PATCH",
        body: newData,
        headers: {
          "Content-type": "application/json",
        },
      }),
    }),
    deleteTodo: builder.mutation({
      query: (id) => ({
        url: `/todos/${id}`,
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      }),
    }),
  }),
});

export const {
  useGetTodoQuery,
  usePostTodoMutation,
  useEditTodoMutation,
  useDeleteTodoMutation,
} = todoEndpoint;
