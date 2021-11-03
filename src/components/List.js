import Item from "./Item"

function List(){
    return (
     <>
     <h1>Minha Lista</h1>
     <ul>
         <li>
             <Item marca="ferrari" ano_lançamento={1965}/>
             <Item marca="gurgel"ano_lançamento={1954}/>
             <Item/>
         </li>
         <li>
             item2
         </li>
     </ul>
     </>
    )
}

export default List
