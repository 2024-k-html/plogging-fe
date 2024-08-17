#!/bin/bash
echo "Dev container를 위한 IP 수집 중"

# 네트워크 인터페이스 이름에 맞게 조정
interface_prefix="en"
iname=$(ip -o link show | sed -rn "/^[0-9]+: ${interface_prefix}/{s/.: ([^:]*):.*/\1/p}")
ip=$(ifconfig $iname | grep -Eo 'inet (addr:)?([0-9]*\.){3}[0-9]*' | sed 's/inet //g')

echo "REACT_NATIVE_PACKAGER_HOSTNAME=$ip" > .devcontainer/.env
