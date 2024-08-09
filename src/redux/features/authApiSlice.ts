import { apiSlice } from '../services/apiSlice';
import { setAuth } from './authSlice';
import { setUser } from './userSlice';

interface User {
	first_name: string;
	last_name: string;
	email: string;
}

interface SocialAuthArgs {
	provider: string;
	state: string;
	code: string;
}

interface CreateUserResponse {
	success: boolean;
	user: User;
}

const authApiSlice = apiSlice.injectEndpoints({

	endpoints: (builder) => ({
		
		retrieveUser: builder.query<User, void>({
			query: () => '/users/me/',
		}),

		socialAuthenticate: builder.mutation<CreateUserResponse, SocialAuthArgs>({
			query: ({ provider, state, code }) => ({
				url: `/o/${provider}/?state=${encodeURIComponent(
					state
				)}&code=${encodeURIComponent(code)}`,
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/x-www-form-urlencoded',
				},
			}),
		}),

		/* real login mutation */
/* 		login: builder.mutation({
			query: ({ email, password }) => ({
				url: '/jwt/create/',
				method: 'POST',
				body: { email, password },
			}),
		}), */
		login: builder.mutation({
			query: ({ email, password }) => ({
			  url: '/jwt/create/',
			  method: 'POST',
			  body: { email, password },
			}),
			async onQueryStarted(args, { dispatch, queryFulfilled }) {
			  try {
				const { data } = await queryFulfilled;
				const { access, first_name } = data;
				dispatch(setAuth()); // Set authentication status
				dispatch(setUser({ first_name })); // Set user info
				// Optionally store the tokens in local storage or cookies
			  } catch (error) {
				console.log(error);
			  }
			},
		}),
		register: builder.mutation({
			query: ({
				first_name,
				last_name,
				email,
				password,
				re_password,
			}) => ({
				url: '/users/',
				method: 'POST',
				body: { first_name, last_name, email, password, re_password },
			}),
		}),

		verify: builder.mutation({
			query: () => ({
				url: '/jwt/verify/',
				method: 'POST',
			}),
		}),

		logout: builder.mutation({
			query: () => ({
				url: '/logout/',
				method: 'POST',
			}),
		}),

		activation: builder.mutation({
			query: ({ uid, token }) => ({
				url: '/users/activation/',
				method: 'POST',
				body: { uid, token },
			}),
		}),

		resetPassword: builder.mutation({
			query: email => ({
				url: '/users/reset_password/',
				method: 'POST',
				body: { email },
			}),
		}),

		resetPasswordConfirm: builder.mutation({
			query: ({ uid, token, new_password, re_new_password }) => ({
				url: '/users/reset_password_confirm/',
				method: 'POST',
				body: { uid, token, new_password, re_new_password },
			}),
		}),
		
	}),
});

export const {
	useRetrieveUserQuery,
	useSocialAuthenticateMutation,
	useLoginMutation,
	useRegisterMutation,
	useVerifyMutation,
	useLogoutMutation,
	useActivationMutation,
	useResetPasswordMutation,
	useResetPasswordConfirmMutation,
} = authApiSlice;

/*
	An API slice defines the logic for interacting with your backend, 
	including the endpoints of your Django application. 
	Specifically, when you create a slice using Redux Toolkit's createApi or createSlice, 
	you're essentially connecting the frontend to the backend 
	by specifying the endpoints and the methods (e.g., POST, GET) you want to use. 
*/