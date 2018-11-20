#!/bin/bash

hugo server --bind $(ip route get 1 | awk '{print $NF;exit}')
