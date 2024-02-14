import { supabase } from '$lib/supaBaseClient';


/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		const form = await request.formData();
		console.log(form);
		let post = {
			title: form.get('title'),
			excerpt: form.get('excerpt'),
			image: form.get('image'),
			md: form.get('md'),
		}
		const { data, error } = await supabase
		.from('posts')
		.insert(post)
		.select()
		if (error) {
			return {
				status: 500,
				body: error
			}
		}
		return {
			status: 200,
			body: data
		}
	}
};