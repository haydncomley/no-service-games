import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IExampleState {
}

const initialState: IExampleState = {
};

export const ExampleSlice = createSlice({
	initialState,
	name: 'example',
	reducers: {
		setState: (state, action: PayloadAction<IExampleState>) => {
			state = action.payload;
		},
	}
});

export const { 
	setState
} = ExampleSlice.actions;

// Async Thunk
// export const loadData = <T>(options: string) => async (dispatch: TypedDispatch, getState: () => RootState) => {
// 	const state = getState();
// 	dispatch(setState({} as T));
// };

export default ExampleSlice.reducer;