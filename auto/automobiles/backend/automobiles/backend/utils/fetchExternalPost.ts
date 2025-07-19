import axios from 'axios';
import { ExternalPost } from '../models/ExternalPost';

const fetchExternalPost = async (url: string): Promise<ExternalPost | null> => {
    try {
        const response = await axios.get(url);
        const data = response.data;

        // Assuming the external post has a title, content, and image
        const externalPost: ExternalPost = {
            title: data.title || 'Untitled',
            content: data.content || '',
            image: data.image || '',
            sourceUrl: url,
        };

        return externalPost;
    } catch (error) {
        console.error('Error fetching external post:', error);
        return null;
    }
};

export default fetchExternalPost;