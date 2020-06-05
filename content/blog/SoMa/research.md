---
title: '[논문서치] 3D Pose estimation & Distillation'
date: 2020-06-04 16:06:70
category: SoMa
thumbnail: './images/color.png'
tags: ["SoMa", "기술조사"]
draft: false
---

## 3D Pose Estimation 논문 서치

### A simple yet effective baseline for 3d human pose estimation

* 2017년 ICCV 개제


**프로젝트 인사이트**

* 본 논문에서는 2d joint location 정보만 가지고 3d로 매핑해준다.
    - CNN 없고 Linear한 학습
    - 원본 이미지를 추가하면 더 좋은 성능을 내지 않을까?


### Fast Human Pose Estimation

* 2019년 CVPR 개제

**프로젝트 인사이트**

* Distillation할 때, 로스를 구하는 방법 참고해서 3차원으로 로스 만들면 어떨까?
    - Gaussian confidence map : 레이블 된 좌표의 분포를 만든다.
    - Lfpd = alpha * Lpd + (1 - alpha) * Lmse
    - ground truth - Children, Teacher - Children 간의 로스 구함.
    - Distillation을 짤 때, 3차원으로 분포를 만들면 좋을 것 같음.

* Distillation할 때, Teacher Network와 Student Network가 비슷한 구조여야 하는지?
    - 근거 1. 이 논문
        -> Hourglass가 포즈쪽에서 성능이 높은 걸로 알고 있음.
        -> 만약 뇌피셜이 맞다면, 다른 백본으로 된 포즈 모델을 찾아야함.
    - 근거 2. Improved Knowledge Distillation via Teacher Assistant

* hourglass와 Mobilenet과 엮을 수 있을지?
* Distillation하는 모델은 직접 짜야 할 것 같음!

## Distillation 논문 서치

### MobileNet V1 & V2

**Key Idea**

V1
* Channel Reduction
* Depthwise Seperable Convolution
    - Depthwise Conv(channel 분리) -> Pointwise Conv 하겠다.

V2
* Linear Bottlenecks
    - 1x1 convolution을 통해 채널 수 감소시킴 -> 3x3 Conv -> 1x1 채널 복구
* Inverted Residuals