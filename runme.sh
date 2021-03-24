#!/bin/bash

cd mock-js-app
npm i
npm start &
cd ..
cd e2e
npm i
npm run test