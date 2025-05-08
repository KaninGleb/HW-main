import {AppStoreType} from '../store';


export const selectIsLoading = (state: AppStoreType): boolean => state.loading.isLoading