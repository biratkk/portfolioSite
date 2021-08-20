import React from 'react'
import "../Styles/index.css"


function PastBlog(props){
    return (
                <div className = "pastBlog effect1">
                    <h3 className = "title-date">
                        <span>
                        {props.date}
                        </span>
                    </h3>
                    <p className = "content">
                        {props.content}
                    </p>
                </div>
    );
}

export default PastBlog