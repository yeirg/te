import { supabase } from '$lib/supaBaseClient';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const {data: posts, error } = await supabase.from('posts').select('id, title, excerpt, image').order('id', { ascending: false });

    if (error) {
        console.log(error.message)
        throw error;
    }

    return {
        props: {
            posts
        }
    }
}