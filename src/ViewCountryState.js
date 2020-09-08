import React from 'react';
import {connect} from 'react-redux'

 class ViewCountryState extends React.Component {
    
   render() {
    const handleChange=(event)=>{
      var Svalue={
        id: event.target.id,
        country: event.target.name,
        state:event.target.value
       }
      if(event.target.checked){
      this.props.value(Svalue)
      this.props.addvalue(Svalue);
    }
    else {
      this.props.value(Svalue)
      this.props.deletevalue(Svalue);
    }
    }
    console.log(this.props)
     const {country}= this.props
     
  return (
    <div className="App">
{country.map((item)=>
  {
    return(
    <div key={item.id} style={{textAlign:"left"}}>
     <div> {item.id}: <b>{item.con}</b>  
      {item.states.map((Constate)=>{
        return(
          <ul key={Constate.id} >
             <input type="checkbox" name={item.con} id={item.id} onChange={handleChange} value={Constate.name} /> <i>{Constate.name}</i>
          </ul>
        )
      })}
      </div>
      </div>)
  })}
    </div>
  );
   }
}
const mapStateToProps=(state)=>{
return {
  country:state.ConStatReducer.country
  
}
}

const mapDispatchToProps = (dispatch) => {
    return {
      addvalue: function addvalue(id){dispatch({type: 'Add', id: id})},
      deletevalue: function deletevalue(id){dispatch({type: 'Delete', id: id})}
    }
  }



export default connect(mapStateToProps,mapDispatchToProps)(ViewCountryState);
