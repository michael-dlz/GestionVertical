import { Link } from 'react-router-dom';
import { dbblogs } from '../data/Blogs';

export default function Blog() {
    return (
        <div>
            <h1>Lista de Blogs</h1>
            <ul>
                {dbblogs.map(blog => (
                    <li key={blog.id}>
                        <Link to={`/blog/${blog.id}`}>{blog.firstTitle}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
