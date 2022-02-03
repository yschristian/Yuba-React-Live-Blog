 const BlogList  = ({blogs,title,handleDelete})=>{
//  const blogs=props.blogs;
//  const  title=  props.title;
  
  return(
  <div className='blog-lists'>
       <h2>{title}</h2>
       {blogs.map((blog)=>(
        <div className='blog-preview' key={blog.id}>
             <h2>{blog.title}</h2>
             <p>writen by {blog.author}</p>
             <button onClick={()=>{handleDelete(blog.id)}}>Delete Blog</button>
        </div>
       
       ))}
</div>
  
  );
}
export default BlogList;