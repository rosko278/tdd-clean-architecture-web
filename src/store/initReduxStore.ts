import {Action, configureStore, Store, ThunkDispatch} from "@reduxjs/toolkit";
import {AppState} from "./appState";

interface Dependencies {
}

export const initReduxStore = (dependencies: Partial<Dependencies>) => {
    return configureStore({
            reducer: {},
            devTools: true,
            middleware: getDefaultMiddleware =>
                getDefaultMiddleware({
                    thunk: {
                        extraArgument: dependencies
                    }
                })
        }
    );
}

export type ReduxStore = Store<AppState> & { dispatch: ThunkDispatch<AppState, Dependencies, Action> }
