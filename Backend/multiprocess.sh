#!/bin/bash

node cache &

node main &

wait -n

exit $?