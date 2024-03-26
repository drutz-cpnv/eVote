#!/bin/bash

mv codegen.step1.ts codegen.ts
npm run generate
mv codegen.ts codegen.step1.ts
mv codegen.step2.ts codegen.ts
npm run generate
cp codegen.ts codegen.step2.ts
