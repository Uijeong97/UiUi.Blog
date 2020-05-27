---
title: '[멘토특강] 최신 인공지능 기술 (CVPR, NeuralPS 등)'
date: 2020-05-25 14:05:71
category: SoMa
thumbnail: './images/color.png'
tags: ["특강"]
draft: false
---


## 최근 기술

### StyleGAN
- 레이어 단에서 건드려서 이미지 생성.
- 소스는 얼굴로 했으나 다른 기술에도 충분히 응용이 가능

### ArcFace
- Style Transfer
- 안면인식에서 SOTA
- 각도정보: Key Point를 찍고 각도 정보를 본다. 각도가 틀어지더라도 높은 Accurancy를 보여준다.

### GauGAN (Nvidia)
- 가이드를 주면 그 가이드대로 생성을 함.
- Class를 지정해주면 그거대로 생성하는 것.
- 내가 원하는 배경을 제너레이트 한다던가 할 수 있음.

### Pythia (facebook)
- Visual QA(VQA)
- 이미지를 주고 질문을 하면 기계가 스스로 대답을 하는 것.
- Image Description과 결합해서 토익 등 교육용 컨텐츠를 만들 수 있지 않을까.

### 3D Pose Estimatie
- 3D human pose estimate가 가능
- 2D 카메라로 3D 하게 구현
- COCO Dataset 에 3D 라벨이 있음.

### DeepFashion2
- 옷에 키포인트를 가져와서 어떻게 입혀지는지, 입히는 Generate를 할 수 있음.
- 키 포인트 중심으로 옷이 어떻게 입혀져 있는지 표현, 변형 유리
- 데이터셋 공개

### PIFu
- 3D scanner 로 우리 인체를 스캔 후에 모델 형성.
- 키 포인트가 정리되어있지 않음. 2D 로만 제공
- 3D를 2D로 제공

### Depth-Aware Video Frame Interpolation
- 프레임 사이사이에 이어지는 프레임을 넣어주는 것.
- 카메라 장비가 비싸니까 프레임을 생성해서 90FPS, 120FPS 이렇게 만들어 낼 수 있음.

### Fast Online Object Tracking and Segmentation: A Unifying Approach(oxford)
- 제일 성능 좋음
- Object Detection and Segmentation

### Super-Resolution
- Deep Plug-and-Play Super-Resolution for Arbitrary Blur Kernels
- 저해상도 이미지를 고해상도로 만들어줌.
- 델타를 학습시켜서 다른 사진에 적용

### Denoising
- Unprocessing Images for Learned Raw Denoising (google)

### Pose-Transfer
- 사람의 움직임의 본을 뽑아서 이미지에 매핑
- 본만 파라미터로 만들어주면 매핑된 이미지로 제너레이팅

### Animating Arbitrary Objects via Deep Motion Transfer
- 몽키넷
- 남을 흉내낼 수 있게끔 구조화

### Deep Video Inpainting (KAIST)
- 사진 / 동영상에 있는 물체를 지우는 것
- 사이버 장의사: 커플과 헤어졌을때 남친만 지울 수 있음.

### Style Transfer
- 앞쪽을 뜯어서 뒤쪽을 교체해서 텍스쳐를 바꾸게끔

### Real-Time Voice Cloning
- 1초 내외의 목소리만 가지고도 그 사람의 목소리를 만들 수 있음.
- 따로 학습시킬 필요가 없다.
- 사람의 목소리를 임베딩(벡터라이징)

### pix2code
- 이미지를 코드로 만들어주는 것.
- 이미지-> 웹, ios

### Image Stylization (Nvidia)

### Few-Shot Vidio-to-Video Synthesis (Nvidia)
- 비디오 레벨에서 가능
- 다양한 형태로 변형 가능
- Deep Fake 영상만들 때 사용할 수 있음.

### Machine Reading Comprehension(MRC)
- 답을 찾아서 검색했을때 답을 알려줌
- 구글 알버트 모델이 1등
- SQuAD, 답이 없는 걸 물어보는 것. Open Domain
- 표를 독해하는 방법이 없음.

### OCR
- Tesseract OCR : 오픈소스, 수준은 안좋음

### Smart Factory

### Autonomous Car/Drone
- AirSim: 자율 주행 하기위한 데이터셋 줌
- 유니티 베타버전

### Bioscience (AlphaFold of Deepmind)
- 단백질 구조를 모델링

