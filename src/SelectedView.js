import React from 'react';
import {connect} from 'react-redux'

 class ViewCountryState extends React.Component {

   render() {
      // console.log(this.props.value)
     const {newcountry}= this.props
  return (
    newcountry.length!==0 ?(
    <div className="App">
        
{newcountry.map((item)=>
  {
    return(
    <div key={item.id} style={{textAlign:"left"}}>
     <div> {item.id}: <b>{item.con}</b>  
      {item.states.map((Constate)=>{
        return(
          <ul key={Constate.id} >
             <label name={item.con} id={Constate.id} value={Constate.name} /> <i>{Constate.name}</i>
          </ul>
        )
      })}
      </div>
      </div>)
  })} </div>)
  :( <> NO VALUE SELECTED </>
  )
  
  

    
  );
   }
}
const mapStateToProps=(state)=>{
return {
    newcountry:state.NewReducer.newcountry
}
}


export default connect(mapStateToProps)(ViewCountryState);
