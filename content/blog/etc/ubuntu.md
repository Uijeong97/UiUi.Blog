---
title: '[Ubuntu 18.04] 의존성 문제, cuda dependencies, apt --fix-broken install'
date: 2020-07-13 14:07:76
category: etc
thumbnail: './images/color.png'
tags: ['etc', 'error', 'ubuntu', 'cuda']
draft: false
---

얼마 전에 소마 연수생 컴퓨터 지원금(?)으로 딥러닝용 컴퓨터를 장만했습니다.

우분투, cuda, cudnn 차례로 설치하고 버전 안 맞아서 여러번 포맷하였습니다..ㅎ

참 쉽지가 않다는 생각을 하면서,

헤맸던 오류에 대해 기록해두고 나중에 보려고 쓰는 글입니다.

## E: Unmet Dependencies. Try 'apt --fix-broken install' with no packages

![E: Unmet Dependencies. Try 'apt --fix-broken install' with no packages (or specify a solution)](./images/ubuntu/apt-get-error.png)

이 에러 보고 내 잘못이겠거니 포맷을 2번정도 한 것 같다..ㅎ

apt-get이 의존성 문제 때문에 아예 실행이 안된다.

구글링 했을 때는,

`sudo apt --fix-broken install`

`apt-get update`

`apt-get upgrade`

이렇게 해주면 된다고 했지만

아래와 같이 첫 번째부터 에러가 난다.

![dpkg-deb error](./images/ubuntu/dpkg-deb-err.png)

### 해결 방법

![solution](./images/ubuntu/solution.png)

`sudo dpkg -i --force-overwrite /경로`

(경고가 너무 많이 뜨지만 PASS)

의존성 때문에 nvidia-cuda-dev가 설치가 안됐던 터라

overwrite 해주는 과정이다.

끝나면 아래 명령어 사용해보고 에러가 안나면 성공이다.

`sudo apt-get -f install`

`sudo apt-get upgrade`

### 결과

![success](./images/ubuntu/apt-get-success.png)

이제 apt-get 이 잘 작동한다.
