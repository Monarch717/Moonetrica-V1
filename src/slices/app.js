import {createSlice} from "@reduxjs/toolkit"

const appSlice = createSlice({
    name: "app",
    initialState: {
        wallet: {
            address: null,
            Id: 0
        }
    },
    reducers: {
        setWallet: (state, action) => {
            state.wallet = {
                address: action.payload.address || null,
                Id: action.payload.Id || null
            }
        }
    }
})

export const reducer = appSlice.reducer
export const actions = appSlice.actions

export const {
    setWallet
} = appSlice.actions

export default appSlice
