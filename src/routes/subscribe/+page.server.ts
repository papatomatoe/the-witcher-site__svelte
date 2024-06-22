import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { ZodError, z } from 'zod';

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png'];

const registerScheme = z.object({
	city: z
		.string({ required_error: 'Город не выбран' })
		.min(1, { message: 'Город не выбран' })
		.trim(),
	username: z
		.string({ required_error: 'Поле не заполнено' })
		.min(1, { message: 'Поле не заполнено' })
		.max(100, { message: 'Не должно превышать более 100 символов' })
		.trim(),
	email: z
		.string({ required_error: 'Поле не заполнено' })
		.min(1, { message: 'Поле не заполнено' })
		.max(100, { message: 'Не должно превышать более 100 символов' })
		.email({ message: 'Невалидный E-mail адрес' }),
	phone: z
		.string({ required_error: 'Поле не заполнено' })
		.min(1, { message: 'Поле не заполнено' })
		.max(10, { message: 'Невалидный номер телефона' })
		.length(10, { message: 'Поле не заполнено' }),
	message: z
		.string({ required_error: 'Поле не заполнено' })
		.min(1, { message: 'Поле не заполнено' })
		.trim(),
	file: z
		.any()
		.refine((file) => file && file.size !== 0, 'Поле не заполнено')
		.refine((file) => file.size < MAX_FILE_SIZE, 'Максимальный размер 5MB')
		.refine(
			(file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
			'Поддерживаются только изображения в формате jpg, jpeg, png'
		),
	personalData: z.enum(['on'], { required_error: 'Поле не заполнено' })
});
export const actions = {
	default: async ({ request }) => {
		const formData = Object.fromEntries(await request.formData());
		try {
			const result = registerScheme.parse(formData);
			console.log(result);
		} catch (err) {
			if (err instanceof ZodError) {
				const { fieldErrors } = err.flatten();

				return fail(400, {
					errors: fieldErrors
				});
			} else {
				console.error(err);
			}
		}

		redirect(303, '/subscribe/success');
	}
} satisfies Actions;
