import {Table } from 'react-bootstrap';
function Lloopmap(){
  const studnet = ['Avhishek','developer','React','node'];
  const result = [
{
    name:"avhishek",
    add:"sagar",
    mobile:123
},
{
    name:"dev",
    add:"bhopal",
    mobile:12334
},
{
    name:"parv",
    add:"saraf",
    mobile:2133
} ,
{
    name:"parv",
    add:"saraf",
    mobile:2143
} 

  ];
    studnet.map((item)=>{
        console.warn(item);
    })
    return (
        <>
        <h1>Table</h1>
        <Table>
            <tbody>
        <tr>
            <th>Nameeee</th>
            <th>add</th>
            <th>phone</th>
        </tr>
        {
        result.map((item,i)=>
        <tr key={i}>
           <td>{item.name}</td>
           <td>{item.add}</td>
           <td>{item.mobile}</td>
        </tr>
        )
}
</tbody>
        </Table>
        
        </>
    )
}
export default Lloopmap;