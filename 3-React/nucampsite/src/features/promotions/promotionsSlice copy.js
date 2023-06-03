/*import { createSlice } from '@reduxjs/toolkit';
//import { PROMOTIONS } from '../../app/shared/PROMOTIONS';
import { baseUrl } from '../../app/shared/baseUrl';
import { mapImageURL } from '../../utils/mapImageURL';

const initialState = {
    promotionsArray: PROMOTIONS
};

const promotionsSlice = createSlice({
    name: 'promotions',
    initialState
});

export const promotionsReducer = promotionsSlice.reducer;

export const selectFeaturedPromotion = (state) => {
    return state.promotions.promotionsArray.find((promotion) => promotion.featured);
};*\