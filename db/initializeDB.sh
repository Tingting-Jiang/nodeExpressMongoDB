#!/bin/bash

mongoimport -h localhost:27017 -d TweetsForDB -c Airbnb --file airbnb.json