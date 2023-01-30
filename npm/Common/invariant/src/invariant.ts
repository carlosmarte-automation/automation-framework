import kindOf from "kind-of";
import * as expect from './expect';

import assert from "./assert";

export const isObject = (input:object, message: string) => assert(kindOf(input) === 'object', message)