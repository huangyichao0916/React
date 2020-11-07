import { Dispatch } from './store'

export interface MiddlewareAPI<D extends Dispatch = Dispatch, S = any> {
  dispatch: D
  getState(): S
}

/**
 * A middleware is a higher-order function that composes a dispatch function
 * to return a new dispatch function. It often turns async actions into
 * actions.
 *
 * Middleware is composable using function composition. It is useful for
 * logging actions, performing side effects like routing, or turning an
 * asynchronous API call into a series of synchronous actions.
 *
 * @template DispatchExt Extra Dispatch signature added by this middleware.
 * @template S The type of the state supported by this middleware.
 * @template D The type of Dispatch of the store where this middleware is
 *   installed.
 */
export interface Middleware<
  _DispatchExt = {}, // TODO: remove unused component (breaking change)
  S = any,
  D extends Dispatch = Dispatch
> {
  (api: MiddlewareAPI<D, S>): (next: D) => (action: D extends Dispatch<infer A> ? A : never) => any
}

// const myThunk = ({ dispatch, getState }) => next => action => {

//   //如果action是一个函数，那么这次的dispatch将会在这里被阻断，然后跳入action函数里面，重新执行每一个dispatch
//   if (typeof action === 'function') {
//       return action(dispatch, getState);
//   }

//   //如果action不是函数，那么正常执行thunk函数
//   return next(action);
// };