#!/bin/bash

mongoimport -h localhost:27017 -d AirbnbDB -c Airbnb --file airbnb.json