import {createSlice} from '@reduxjs/toolkit'

const slice = createSlice({
    name : "Mycart",
    initialState : {
        value : []
    },
    reducers : {
        addCart : (state,action)=>{
            let ob = action.payload
            let status = state.value.some(p=>p.id==ob.id)
            if(status)
            {
                state.value = state.value.map(p=>p.id==ob.id?{...p,qty:p.qty+1}:p)
                // console.log(state.value)
            }
            else 
            {
                let status = window.confirm("Yes, I'm Adding This Product For You")
                if(status)
                {
                    let obj = {...ob,qty:1}
                    state.value = [...state.value,obj]
                }
            }
        },
        delCart : (state,action)=>{
            state.value = state.value.filter(ob=>ob.id!=action.payload)
        },
        IncQty : (state,action) =>{
            state.value = state.value.map(p=>p.id==action.payload?{...p,qty:p.qty+1}:p)
        },
        DecQty : (state,action)=>{
            state.value = state.value.map(p=>(p.id==action.payload.id && action.payload.qty>1)?{...p,qty:p.qty-1}:p)
        },
        ClrCart : (state,action)=>{
            state.value = []
        }
    }
})

export const {addCart,delCart,IncQty,DecQty,ClrCart} = slice.actions
export default slice.reducer