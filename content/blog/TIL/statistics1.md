---
title: '[멘토특강] 최신 인공지능 기술 (CVPR, NeuralPS 등)'
date: 2020-05-25 14:05:71
category: TIL
thumbnail: './images/color.png'
tags: ['TIL', 'SoMa', '특강']
draft: true
---

## 데이터 분석을 통한 기계학습 기술 응용

R-squre, 다중공선성, 표본오차, 카이스퀘어 검정(chi-squared test) - 독립성, 종속성, 이 인자가 여러개에 속해있는가, 독립적으로 나타나는가.
엔트로피

### Normal Distribution

비모수 -> median 값 가지고 비교해야함

가설검정(Hyphothesis test)
기무가설(차이가 없다.), 대립가설(차이가 있다.)

유의수준 5%가 되면 95%가 맞다고 해석. -> p-value가 0.05보다 크면 가설 만족

정규분포인지 확인하려면?
mean 고 50%를 찍어보고 확인해보기
25%-50%-75% 값 확인해보기

### Correlation and Regression

샘플 분포를 t분포라고 함.
자유도가 30일때 정규분포에 가까워진다.
최소 가설검정을 하기 위해서는 30을 넘어야한다.

상관계수(CORRELATION)를 안다고 해서 상관관계(CAUSATION)를 아는건 아님
PCA : 선형적으로 차원축소,
t-SNE : 거리별로 차원축소 -> 개량 UMAP

### k-means

- 실루엣 알고리즘(응집도, 결합성 비로 계산하는 알고리즘), 사이킷 런에 라이브러리 있음.
- 원형 군집만 가능
- 메트릭 러닝 사용하면 더 좋음

### Hierarchical clustering

- 데이터가 원형 군집이 아니어도 사용 가능.
- 장점: 여러개의 모양의 군집은 가능
- 단점: chain effect

### DBSCAN

- 해석할 수 없음. 시각적으로 클러스터링 보여준다는거

### SVM

non-linear : 커널트릭을 이용해서 데이터를 태워서 다른 표현으로 transform
-> 조건: 노멀라이즈 후에 하이퍼파라미터 튜닝을 해야함
multi-class : one vs others, one vs one 으로 나누기 여러번

jini-index, entropy 컨셉 이해하기
