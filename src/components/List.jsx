import Card from "./Card"

const List = ({data}) => {
console.log(data)
  return (
    <div style={{ padding:'3px'}}>
      {data.map((e)=><Card key={e.id} element={e} color='red' lugar='bs as'/>)}
    </div>
  )
}

export default List
