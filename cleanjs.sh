#!/bin/bash

JS_FILES=$(find ./src/app -name "*.js" -o -name "*.js.map")

for i in $JS_FILES
do
  rm $i
done
