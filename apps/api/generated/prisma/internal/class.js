import * as runtime from "@prisma/client/runtime/client";
const config = {
    "previewFeatures": [],
    "clientVersion": "7.10.0",
    "engineVersion": "0edf323efd1d98336f3f0a68684b56f689b900d3",
    "activeProvider": "postgresql",
    "inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Get a free hosted Postgres database in seconds: `npx create-db`\n\ngenerator client {\n  provider = \"prisma-client\"\n  output   = \"../generated/prisma\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n}\n\nmodel User {\n  id           String   @id @default(uuid())\n  email        String   @unique\n  passwordHash String\n  name         String\n  createdAt    DateTime @default(now())\n}\n",
    "runtimeDataModel": {
        "models": {},
        "enums": {},
        "types": {}
    },
    "parameterizationSchema": {
        "strings": [],
        "graph": ""
    }
};
config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"passwordHash\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null,\"schema\":null}},\"enums\":{},\"types\":{}}");
config.parameterizationSchema = {
    strings: JSON.parse("[\"where\",\"User.findUnique\",\"User.findUniqueOrThrow\",\"orderBy\",\"cursor\",\"User.findFirst\",\"User.findFirstOrThrow\",\"User.findMany\",\"data\",\"User.createOne\",\"User.createMany\",\"User.createManyAndReturn\",\"User.updateOne\",\"User.updateMany\",\"User.updateManyAndReturn\",\"create\",\"update\",\"User.upsertOne\",\"User.deleteOne\",\"User.deleteMany\",\"having\",\"_count\",\"_min\",\"_max\",\"User.groupBy\",\"User.aggregate\",\"AND\",\"OR\",\"NOT\",\"id\",\"email\",\"passwordHash\",\"name\",\"createdAt\",\"equals\",\"in\",\"notIn\",\"lt\",\"lte\",\"gt\",\"gte\",\"not\",\"contains\",\"startsWith\",\"endsWith\",\"set\"]"),
    graph: "KQkQCBoAACIAMBsAAAQAEBwAACIAMB0BAAAAAR4BAAAAAR8BACMAISABACMAISFAACQAIQEAAAABACABAAAAAQAgCBoAACIAMBsAAAQAEBwAACIAMB0BACMAIR4BACMAIR8BACMAISABACMAISFAACQAIQADAAAABAAgAwAABQAwBAAAAQAgAwAAAAQAIAMAAAUAMAQAAAEAIAMAAAAEACADAAAFADAEAAABACAFHQEAAAABHgEAAAABHwEAAAABIAEAAAABIUAAAAABAQgAAAkAIAUdAQAAAAEeAQAAAAEfAQAAAAEgAQAAAAEhQAAAAAEBCAAACwAwAQgAAAsAMAUdAQAoACEeAQAoACEfAQAoACEgAQAoACEhQAApACECAAAAAQAgCAAADgAgBR0BACgAIR4BACgAIR8BACgAISABACgAISFAACkAIQIAAAAEACAIAAAQACACAAAABAAgCAAAEAAgAwAAAAEAIA8AAAkAIBAAAA4AIAEAAAABACABAAAABAAgAxUAACUAIBYAACcAIBcAACYAIAgaAAAaADAbAAAXABAcAAAaADAdAQAbACEeAQAbACEfAQAbACEgAQAbACEhQAAcACEDAAAABAAgAwAAFgAwFAAAFwAgAwAAAAQAIAMAAAUAMAQAAAEAIAgaAAAaADAbAAAXABAcAAAaADAdAQAbACEeAQAbACEfAQAbACEgAQAbACEhQAAcACEOFQAAHgAgFgAAIQAgFwAAIQAgIgEAAAABIwEAAAAEJAEAAAAEJQEAAAABJgEAAAABJwEAAAABKAEAAAABKQEAIAAhKgEAAAABKwEAAAABLAEAAAABCxUAAB4AIBYAAB8AIBcAAB8AICJAAAAAASNAAAAABCRAAAAABCVAAAAAASZAAAAAASdAAAAAAShAAAAAASlAAB0AIQsVAAAeACAWAAAfACAXAAAfACAiQAAAAAEjQAAAAAQkQAAAAAQlQAAAAAEmQAAAAAEnQAAAAAEoQAAAAAEpQAAdACEIIgIAAAABIwIAAAAEJAIAAAAEJQIAAAABJgIAAAABJwIAAAABKAIAAAABKQIAHgAhCCJAAAAAASNAAAAABCRAAAAABCVAAAAAASZAAAAAASdAAAAAAShAAAAAASlAAB8AIQ4VAAAeACAWAAAhACAXAAAhACAiAQAAAAEjAQAAAAQkAQAAAAQlAQAAAAEmAQAAAAEnAQAAAAEoAQAAAAEpAQAgACEqAQAAAAErAQAAAAEsAQAAAAELIgEAAAABIwEAAAAEJAEAAAAEJQEAAAABJgEAAAABJwEAAAABKAEAAAABKQEAIQAhKgEAAAABKwEAAAABLAEAAAABCBoAACIAMBsAAAQAEBwAACIAMB0BACMAIR4BACMAIR8BACMAISABACMAISFAACQAIQsiAQAAAAEjAQAAAAQkAQAAAAQlAQAAAAEmAQAAAAEnAQAAAAEoAQAAAAEpAQAhACEqAQAAAAErAQAAAAEsAQAAAAEIIkAAAAABI0AAAAAEJEAAAAAEJUAAAAABJkAAAAABJ0AAAAABKEAAAAABKUAAHwAhAAAAAS0BAAAAAQEtQAAAAAEAAAAAAxUABhYABxcACAAAAAMVAAYWAAcXAAgBAgECAwEFBgEGBwEHCAEJCgEKDAILDQMMDwENEQIOEgQREwESFAETFQIYGAUZGQk"
};
async function decodeBase64AsWasm(wasmBase64) {
    const { Buffer } = await import('node:buffer');
    const wasmArray = Buffer.from(wasmBase64, 'base64');
    return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
    getRuntime: async () => await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.mjs"),
    getQueryCompilerWasmModule: async () => {
        const { wasm } = await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.wasm-base64.mjs");
        return await decodeBase64AsWasm(wasm);
    },
    importName: "./query_compiler_fast_bg.js"
};
export function getPrismaClientClass() {
    return runtime.getPrismaClient(config);
}
//# sourceMappingURL=class.js.map