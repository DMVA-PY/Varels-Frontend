import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useRegisterMutation } from '@/redux/features/authApiSlice';
import { toast } from 'react-toastify';


export default function useRegister() {
	const router = useRouter();
	const [register, { isLoading }] = useRegisterMutation();

	const [formData, setFormData] = useState({
		first_name: '',
		last_name: '',
		email: '',
		password: '',
		re_password: '',
	});

	const { first_name, last_name, email, password, re_password } = formData;

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		// Client-side validation
		if (!first_name || !last_name || !email || !password || !re_password) {
			toast.error("All fields are required");
			return;
		}

		if (password !== re_password) {
			toast.error("Passwords do not match");
			return;
		}

		// Simple email format validation
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			toast.error("Invalid email format");
			return;
		}

		// Password strength validation (example: at least 8 characters)
		if (password.length < 8) {
			toast.error("Password must be at least 8 characters long");
			return;
		}

		register({ first_name, last_name, email, password, re_password })
			.unwrap()
			.then(() => {
				toast.success('Please check your email to verify your account');
				router.push('/account/login');
			})
			.catch((error) => {
				// Server-side error handling
				if (error.data?.email) {
					toast.error("Email is already in use");
				} else if (error.data?.password) {
					toast.error("Password is too weak");
				} else if (error.status === 400) {
					toast.error("Invalid data submitted");
				} else if (error.status === 500) {
					toast.error("Server error, please try again later");
				} else if (error.status === 0) {
					toast.error("Network error, please check your connection");
				} else {
					toast.error("Failed to register account");
				}
			});
	};

	return {
		first_name,
		last_name,
		email,
		password,
		re_password,
		isLoading,
		onChange,
		onSubmit,
	};
}
