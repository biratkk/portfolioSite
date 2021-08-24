import React,{Component} from 'react'
import PastBlog from './BlogTypes/PastBlog'
import res from './db.json';


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

    renderPosts(){
        try{
        const posts = res.posts;
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
            <div id = "virtual-root" className = "blog-page page color3">
                <div className = "title">
                    <h1>My Blogs - a sketch of my journey through development :)</h1>
                </div>
                <div className = "posts-container">
                    {posts.reverse()}
                </div>
            </div>
        );
    }
}
export default App