import React from 'react'

export default function () {
    return (
        <div className = "footer middle">
            <div className = "footer-header">
                <p>
                Contact me here:
                </p>
            </div>
            <div className = "footer-contactInfo">
                    <a target = "_blank" id = "LinkedIn" href = "https://linkedin.com/in/birat-koirala">
                        <img 
                        src = "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                        alt = "Image failed to load" 
                        className = "contact-logo" 
                        >
                        </img>
                    </a>
                    <a target = "_blank" id = "Twitter" href = "https://twitter.com/biratkk">
                        <img
                        src = "https://pitlochryfestivaltheatre.com/wp-content/uploads/2020/04/2-27646_twitter-logo-png-transparent-background-logo-twitter-png-1024x1024.png"
                         className = "contact-logo">
                        </img>
                    </a>
                    <a target = "_blank" id = "Github" href = "https://github.com/biratkk">
                        <img 
                        src = "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                        className = "contact-logo">
                        </img>
                    </a>
                    <a target = "_blank" id = "Facebook">
                        <img 
                        src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
                        className = "contact-logo">
                        </img>
                    </a>
                    <a target = "_blank" id = "Mail" href = "mailto:koiralabirat@gmail.com">
                        <img
                        src = "https://freepikpsd.com/media/2019/10/mail-logo-png-white-8-Transparent-Images.png"
                        className = "contact-logo">
                        </img>
                    </a>
            </div>
        </div>
    );
}