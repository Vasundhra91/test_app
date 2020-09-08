const country =
    [{
        "id": 1,
        "con": "Portugal",
        "states": [
            { "name": "Alentejo", "id": 1 },
            { "name": "Algarve", "id": 2 },
            { "name": "Beira", "id": 3 },
            { "name": "Estremadura", "id": 4 }
        ]
    }, {
        "id": 2, "con": "United States Of America",
        "states": [
            { "name": "California", "id": 1 },
            { "name": "Colorado", "id": 2 },
            { "name": "New Jersey", "id": 3 },
            { "name": "New York", "id": 4 }
        ]
    }, {
        "id": 3, "con": "United Kingdom",
        "states": [
            { "name": "Birmingham", "id": 1 },
            { "name": "Newcastle", "id": 2 },
            { "name": "Manchester", "id": 3 },
            { "name": "Durham", "id": 4 }
        ]
    }
    ]

const newcountry = []

export const ConStatReducer = (state = { country }, action) => {
    var jsonObj = []
    if (action.type === "Add") {
        let data = country.filter(coun => {
            return coun.con === action.id.country & coun.states.name === action.id.value
        })
        let statedata = data[0].states.filter(coun => {
            return coun.name === action.id.state
        })

        var newselected = {
            id: data[0].id,
            con: data[0].con,
            states: [{ "id": statedata[0].id, "name": statedata[0].name }]
        }
        jsonObj.push({ "id": statedata[0].id, "name": statedata[0].name })

        if (newcountry[newselected.id - 1] !== undefined && newcountry[newselected.id - 1].con === data[0].con) {

            newcountry[newselected.id - 1].states.push(jsonObj[0])

        } else {
            newcountry.push(newselected)
        }
       // console.log(newcountry[data[0].id-1].states)
    }else{
        
        if (action.type === "Delete") {
            let data = country.filter(coun => {
                return coun.con === action.id.country & coun.states.name === action.id.value
            })
            let statedata = data[0].states.filter(coun => {
                return coun.name === action.id.state
            })
           for (var i = 0; i < newcountry[data[0].id-1].states.length; i++){
            // look for the entry with a matching `code` value
            if (newcountry[data[0].id-1].states[i].name == action.id.state){
                newcountry[data[0].id-1].states.splice(i,1)
                // if(newcountry[data[0].id-1].states.length===0)
                // {
                //     console.log(newcountry[data[0].id-1]) 
                //    // newcountry.splice(data[0].id-1],1)
                // }
            }
          }
           console.log(data)
           // newcountry[data1[0].id-1].states.splice(sdata[0].id-1,sdata[0].id-1)
            console.log( newcountry )
        }
    }
    return state;
}
export const NewReducer = (state = { newcountry }, action) => {
    return state;
}
