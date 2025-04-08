#!/bin/bash

# Loop to create files 3-main.js to 12-main.js
for i in {1..10}; do
    touch "${i}-main.js"
    echo "Created ${i}-main.js"
done

echo "All main.js files generated successfully!"
