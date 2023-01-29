export const selectAuthUser = state => state.auth.user;
export const selectAuthToken = state => state.auth.token;
export const selectIsFetchingCurrentUser = state =>
  state.auth.isFetchingCurrentUser;
