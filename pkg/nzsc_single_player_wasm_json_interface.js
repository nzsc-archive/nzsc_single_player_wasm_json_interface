/* tslint:disable */
import * as wasm from './nzsc_single_player_wasm_json_interface_bg';

let cachedDecoder = new TextDecoder('utf-8');

let cachegetUint8Memory = null;
function getUint8Memory() {
    if (cachegetUint8Memory === null ||
        cachegetUint8Memory.buffer !== wasm.memory.buffer)
        cachegetUint8Memory = new Uint8Array(wasm.memory.buffer);
    return cachegetUint8Memory;
}

function getStringFromWasm(ptr, len) {
    return cachedDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));
}

let cachedGlobalArgumentPtr = null;
function globalArgumentPtr() {
    if (cachedGlobalArgumentPtr === null)
        cachedGlobalArgumentPtr = wasm.__wbindgen_global_argument_ptr();
    return cachedGlobalArgumentPtr;
}

let cachegetUint32Memory = null;
function getUint32Memory() {
    if (cachegetUint32Memory === null ||
        cachegetUint32Memory.buffer !== wasm.memory.buffer)
        cachegetUint32Memory = new Uint32Array(wasm.memory.buffer);
    return cachegetUint32Memory;
}

let cachedEncoder = new TextEncoder('utf-8');

function passStringToWasm(arg) {

    const buf = cachedEncoder.encode(arg);
    const ptr = wasm.__wbindgen_malloc(buf.length);
    getUint8Memory().set(buf, ptr);
    return [ptr, buf.length];
}

export class SinglePlayerNZSCWebInterface {

                static __construct(ptr) {
                    return new SinglePlayerNZSCWebInterface(ptr);
                }

                constructor(ptr) {
                    this.ptr = ptr;
                }

            free() {
                const ptr = this.ptr;
                this.ptr = 0;
                wasm.__wbg_singleplayernzscwebinterface_free(ptr);
            }
        static new(arg0) {
    return SinglePlayerNZSCWebInterface.__construct(wasm.singleplayernzscwebinterface_new(arg0));
}
initial_output() {
    return OutputWebInterface.__construct(wasm.singleplayernzscwebinterface_initial_output(this.ptr));
}
next(arg0) {
    const [ptr0, len0] = passStringToWasm(arg0);
    try {
        return OutputWebInterface.__construct(wasm.singleplayernzscwebinterface_next(this.ptr, ptr0, len0));
    } finally {
        wasm.__wbindgen_free(ptr0, len0 * 1);
    }
}
}

export class OutputWebInterface {

                static __construct(ptr) {
                    return new OutputWebInterface(ptr);
                }

                constructor(ptr) {
                    this.ptr = ptr;
                }

            free() {
                const ptr = this.ptr;
                this.ptr = 0;
                wasm.__wbg_outputwebinterface_free(ptr);
            }
        notifications() {
    const retptr = globalArgumentPtr();
    wasm.outputwebinterface_notifications(retptr, this.ptr);
    const mem = getUint32Memory();
    const ptr = mem[retptr / 4];
    const len = mem[retptr / 4 + 1];
    const realRet = getStringFromWasm(ptr, len).slice();
    wasm.__wbindgen_free(ptr, len * 1);
    return realRet;
}
question() {
    const retptr = globalArgumentPtr();
    wasm.outputwebinterface_question(retptr, this.ptr);
    const mem = getUint32Memory();
    const ptr = mem[retptr / 4];
    const len = mem[retptr / 4 + 1];
    const realRet = getStringFromWasm(ptr, len).slice();
    wasm.__wbindgen_free(ptr, len * 1);
    return realRet;
}
}

export function __wbindgen_throw(ptr, len) {
    throw new Error(getStringFromWasm(ptr, len));
}

