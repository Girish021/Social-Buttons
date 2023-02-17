const Button = props => {
  //  Write your code here.
  const {button_1, className} = props; 
  return <button className ={`button ${className}`}>{button_1}</button>
  
}

const element = (
  //  Write your code here.
   <div className = "bg-container">
       <h1 className = "heading">Social Buttons</h1>
       <div className = "row-container">
           <Button = button_1 = "like" className = "btn-1"/> 
           <Button  = button_1 = "Comment" className = "btn-2"/>
           <Button = button_1 = "Share" className = "btn-3" />

       </div>
   </div>
)

ReactDOM.render(element, document.getElementById('root'))
