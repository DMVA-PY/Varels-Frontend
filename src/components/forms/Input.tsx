import { ChangeEvent } from 'react';
import Link from 'next/link';
import '/home/vare/project/farm_varels/Varels-Frontend/src/styles/forms.css'

interface Props {
	labelId: string;
	type: string;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
	value: string;
	children: React.ReactNode;
	link?: {
		linkText: string;
		linkUrl: string;
	};
	required?: boolean;
}

export default function Input({
	labelId,
	type,
	onChange,
	value,
	children,
	link,
	required = false,
}: Props) {
	return (	
		<div>
			<div>
				<label
					htmlFor={labelId}
					className='form-label'
				>
					{children}
				</label>
				{link && (
					<div className='text-sm'>
						<Link
							href={link.linkUrl}
						>
							{link.linkText}
						</Link>
					</div>
				)}
			</div>

			<div className='mt-2 my-2'>
				<input
					id={labelId}
					className='input-box'
					name={labelId}
					type={type}
					onChange={onChange}
					value={value}
					required={required}
				/>
			</div>
			
		</div>
	);
}