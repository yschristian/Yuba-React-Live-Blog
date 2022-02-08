import BlogList from '../BlogList';
import useFetch from '../useFetch';
const Home =()=>{
    const {error,isPending,data: blogs} = useFetch('http://localhost:8000/blogs')
        // const [blogs , setBlogs]=useState([
        //     {title:'my new bblog',body:'lorem ipsum....',author:'chris',id:1 },
        //     {title:'my new bblog12',body:'lorem ipsum....',author:'shema',id:2 },
        //     {title:'my new bblog13',body:'lorem ipsum....',author:'yub',id:3 }
        // ])
    // const handleDelete = (id)=>{
    //    const newBlogs = blogs.filter(blog => blog.id !== id);
    //    setBlogs(newBlogs);
    //     }
return(
          
        <div className="home">
            {/* conditional templating */}
            {error && <div>{error}</div>}
            {isPending && <div>loading....</div>}
            {/* <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/> */}
            {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
         </div>
    );
}
export default  Home;