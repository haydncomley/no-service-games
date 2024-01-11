import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ITemplateNameState {
}

const initialState: ITemplateNameState = {
};

export const TemplateNameSlice = createSlice({
	initialState,
	name: 'templateName',
	reducers: {
		setState: (state, action: PayloadAction<ITemplateNameState>) => {
			state = action.payload;
		},
	}
});

export const { 
	setState
} = TemplateNameSlice.actions;

// Async Thunk
// export const loadData = <T>(options: string) => async (dispatch: TypedDispatch, getState: () => RootState) => {
// 	const state = getState();
// 	dispatch(setState({} as T));
// };

export default TemplateNameSlice.reducer;