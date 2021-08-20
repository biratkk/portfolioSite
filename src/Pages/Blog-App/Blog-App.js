import React,{Component} from 'react'
import axios from 'axios'
import AddBlog from './BlogTypes/AddBlog';
import PastBlog from './BlogTypes/PastBlog'


class App extends Component{

    constructor(){
        super();
        this.state = {
            Posts:[]
        }
    }
    componentDidMount() {
        this.renderPosts();
    }

    async renderPosts(){
        try{
        const res = await axios.get("http://localhost:1234/posts");
        const posts = res.data;
        this.setState({
            Posts:posts
        })
        }
        catch(err){
            console.log(err);
        }
    }

    render(){
        const posts = this.state.Posts?.map
        (post => <PastBlog key = {post.id} date = {post.date} content = {post.content}/>);
        return(
            <div id = "virtual-root" className = "blog-page">
                <div className = "title">
                    <h1>My Blogs</h1>
                </div>
                <div className = "posts-container">
                    {posts.reverse()}
                </div>
            </div>
        );
    }
}
export default App