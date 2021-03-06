/a/lib/tsc.js -w
//// [/a/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }

//// [/users/username/projects/project/file1.ts]
const x = 10;

//// [/users/username/projects/project/file2.ts]
const y = 20;

//// [/users/username/projects/project/tsconfig.json]
{"compilerOptions":{"incremental":true,"outFile":"out.js"}}

//// [/users/username/projects/project/out.js]
var x = 10;
var y = 20;


//// [/users/username/projects/project/out.tsbuildinfo]
{
  "bundle": {
    "commonSourceDirectory": "./",
    "sourceFiles": [
      "./file1.ts",
      "./file2.ts"
    ],
    "js": {
      "sections": [
        {
          "pos": 0,
          "end": 24,
          "kind": "text"
        }
      ]
    }
  },
  "version": "FakeTSVersion"
}

//// [/users/username/projects/project/out.tsbuildinfo.baseline.txt]
======================================================================
File:: /users/username/projects/project/out.js
----------------------------------------------------------------------
text: (0-24)
var x = 10;
var y = 20;

======================================================================


Output::
>> Screen clear
12:00:23 AM - Starting compilation in watch mode...



12:00:28 AM - Found 0 errors. Watching for file changes.


Program root files: ["/users/username/projects/project/file1.ts","/users/username/projects/project/file2.ts"]
Program options: {"incremental":true,"outFile":"/users/username/projects/project/out.js","watch":true,"configFilePath":"/users/username/projects/project/tsconfig.json"}
Program files::
/a/lib/lib.d.ts
/users/username/projects/project/file1.ts
/users/username/projects/project/file2.ts

No cached semantic diagnostics in the builder::

WatchedFiles::
/users/username/projects/project/tsconfig.json:
  {"pollingInterval":250}
/users/username/projects/project/file1.ts:
  {"pollingInterval":250}
/users/username/projects/project/file2.ts:
  {"pollingInterval":250}
/a/lib/lib.d.ts:
  {"pollingInterval":250}

FsWatches::

FsWatchesRecursive::
/users/username/projects/project/node_modules/@types:
  {"fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/users/username/projects/project:
  {"fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}

exitCode:: ExitStatus.undefined
