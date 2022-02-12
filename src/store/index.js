import {combineReducers} from "redux"
import {configureStore} from "@reduxjs/toolkit"
import {persistReducer} from "redux-persist"
import AsyncStorage from "@react-native-async-storage/async-storage"
import {reducer as appReducer} from "../slices/app"
import thunk from "redux-thunk"
import {reducer as toastrReducer} from "react-redux-toastr"

const mainPersistConfig = {
    key: "root",
    storage: AsyncStorage
}

const appPersistConfig = {
    key: "app",
    storage: AsyncStorage
}

const rootReducer = combineReducers({
    app: persistReducer(appPersistConfig, appReducer),
    toastr: toastrReducer
})

const persistedReducer = persistReducer(mainPersistConfig, rootReducer)

export default configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: ['setWallet'],
            ignoredActionPaths: ['register', 'rehydrate'],
            ignoredPaths: []
        }
    }).concat(thunk)
})
