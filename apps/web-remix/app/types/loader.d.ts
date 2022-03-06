import { AppData, AppLoadContext } from 'remix'

export interface ResponseWithBody<Body> extends Response {}

/**
 * A JSON response. Converts `data` to JSON and sets the `Content-Type` header.
 */
export type json<Body>(
  data: Body,
  init: number | ResponseInit
) => ResponseWithBody<Body>

/**
 * The argument that is passed to a LoaderFunction
 */
export type LoaderFunctionArg = {
  request: Request
  context: AppLoadContext
  params: Params
}

/**
 * A function that loads data for a route.
 */
export interface LoaderFunction {
  (args: LoaderFunctionArg):
    | Promise<Response>
    | Response
    | Promise<AppData>
    | AppData
}

/**
 * Used to infer the JSON body of a LoaderFunction
 */
export type InferLoaderData<Loader extends (arg: LoaderFunctionArg) => any> =
  Loader extends (arg: LoaderFunctionArg) => Promise<infer Resp>
    ? InferLoaderData<(arg: LoaderFunctionArg) => Resp>
    : Loader extends (arg: LoaderFunctionArg) => ResponseWithBody<infer Body>
    ? Body
    : Loader extends (arg: LoaderFunctionArg) => Response
    ? never
    : ReturnType<Loader>
