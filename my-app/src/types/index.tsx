export interface reducerState{
    languageName: string;
    enthusiasmLevel: number;
}

export interface StoreState{
    reducer:reducerState;
}