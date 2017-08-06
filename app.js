// 组件划分
//list
//Item
//itemEdit
 


const ItemEdit=React.createClass({
    render(){
        return <li className="list-group-item">
               <input type="text" className="edit" />
               <a href="#"  className=" glyphicon glyphicon-check"></a>
               <a href="#"  className=" glyphicon glyphicon-pencil"></a>
               </li>
    }
})

const Item =React.createClass({
    render(){
        return <li className="list-group-item">hello
             <a href="#"className="right glyphicon glyphicon-remove"></a>
             <a href="#" className="right glyphicon glyphicon-pencil"></a>
        </li>
    }
});

const List=React.createClass({
     render(){
         return <div>
           <button className="btn btn-default">Add</button>
           <ul className="list-group">
           <Item />
           <ItemEdit />
           </ul>
         </div>
    }
 });
 
 ReactDOM.render(
    <List />,
     document.getElementById("example")
 )
     
