// import React from 'react'
// import axios from 'axios'
// import "../Styles/index.css"
// class Submit extends React.Component{
//     render(){
//         return (
//             <button className = "submit" 
//             onClick = {this.props.updateDB}
//             >
//                 Submit
//             </button>
//         );
//     }
// }

// class InputArea extends React.Component{
//     render(){
//         return (
//             <textarea 
//             onChange = {this.props.handleChange} 
//             id = "blogAdd" 
//             className = "newBlog" 
//             placeholder = "Enter blog here..."
//             value = {this.props.value}>
           
//             </textarea>
//         );
//     }
// }

// class AddBlog extends React.Component{
//     constructor(){
//         super();
//         this.state = {
//             blogText:""
//         }
//         this.updateDB = this.updateDB.bind(this);
//         this.updateText = this.updateText.bind(this);
//         this.resetText = this.resetText.bind(this);
//     }
//     updateText(event){
//         this.setState({
//             blogText:event.target.value
//         });
//     }
//     resetText(){
//         this.setState({
//             blogText:""
//         });

//     }
//     addZeroBefore(n) {
//         return (n < 10 ? '0' : '') + n;
//       }
//     getCurrentFormattedDate(){
//         const date = new Date();
//         return this.addZeroBefore(date.getHours())
//             +":"+this.addZeroBefore(date.getMinutes())
//             +" "+this.addZeroBefore(date.getDate())
//             +"/"+this.addZeroBefore(date.getMonth()+1)
//             //issue with date.getMonth() getting an earlier month (-1)
//             //incremented one so the month is correct
//             +"/"+date.getFullYear();
//     }

//     async updateDB(){

//         // get current date in proper formatting
//         const formattedDate = this.getCurrentFormattedDate()
//         const currentText = this.state.blogText;

//         axios.post("http://localhost:1234/posts",{
//             "id":this.props.nextBlog,
//             "date":formattedDate,
//             "content":currentText
//         });
//         this.props.updateData();
//         this.resetText();
//     }
//     render(){
//         return (
//             <div className = "middle">
//                <InputArea value = {this.state.blogText} handleChange = {this.updateText}/>
//                <Submit updateDB = {this.updateDB}/>
//             </div>
//         );
        
//     }
// }


// export default AddBlog