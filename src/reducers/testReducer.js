import * as testConsts from '../constants/testsConsts';

export function testReducer(state = {entitys: [], isLoading: false}, action) {
  switch(action.type) {
    case testConsts.GET_SOMTHING_PENDING: {
      state = {...state, isLoading: true};
      break;
    }
    case testConsts.GET_SOMTHING_FULFILLED: {
      state = {...state, isLoading: false, entitys: action.payload.data};
      break;
    }
    case testConsts.GET_SOMTHING_REJECTED: {
      state = {...state, isLoading: false, entitys: [], error: "Error"}
    }
  }

  return state;
}