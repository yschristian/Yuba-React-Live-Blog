import {useState} from 'react';
import BlogList from './BlogList';
const Home =()=>{
      const [blogs , setBlogs]=useState([
            {title:'my new bblog',body:'lorem ipsum....',author:'chris',id:1 },
            {title:'my new bblog12',body:'lorem ipsum....',author:'shema',id:2 },
            {title:'my new bblog13',body:'lorem ipsum....',author:'yub',id:3 }
        ])
    const handleDelete = (id)=>{
       const newBlogs = blogs.filter(blog => blog.id !== id);
       setBlogs(newBlogs);
        }

    return(
          
         <div className="home">
              <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
         </div>
    );
}
export default  Home;