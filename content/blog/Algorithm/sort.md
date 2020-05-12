---
title: '[Algorithm] 정렬(Sort) 완벽정리'
date: 2020-04-22 02:04:52
category: Algorithm
thumbnail: './images/color.png'
draft: false
---

# Sort

여러 개의 원소로 구성된 리스트가 주어졌을 때, 이 원소들을 순서대로 재배치.

## 1. 특징

Sorting Algorithm 은 크게 Comparisons 방식과 Non-Comparisons 방식으로 나눌 수 있다.

**비교기반 정렬 VS 분포기반 정렬**

> 여기서 주목해야할 점은 **시간효율성**과 **공간효율성**이다. 비교기반 정렬은 정렬시 대부분 추가적인 메모리 사용이 없고 상대적으로 시간이 오래걸린다. 분포기반 정렬은 추가적인 메모리 사용이 필요하지만, 시간이 적게걸린다.

* **Comparisons Sorting Algorithm (비교기반 정렬)**

 선택정렬(Selection Sort), 버블정렬(Bubble Sort), 삽입정렬(Insertion Sort), <br>
쉘정렬(Shell Sort), 퀵정렬(Quick Sort), 합병정렬(Merge Sort), 히프정렬(Heap Sort)

* **Non-Comparisons Sorting Algorithm (분포기반 정렬)** `공간효율/제자리성 X`

계수정렬(Count Sort), 기수정렬(Radix Sort), 버킷정렬(Bucket Sort)

## 2. 도구
* **Sorting Algorithm's Complexity 정리**

|   Algorithm    | Space Complexity | (average) Time Complexity | (worst) Time Complexity |
| :------------: | :--------------: | :-----------------------: | :---------------------: |
|  Bubble sort   |       O(1)       |          O(n^2)           |         O(n^2)          |
| Selection sort |       O(1)       |          O(n^2)           |         O(n^2)          |
| Insertion sort |       O(1)       |          O(n^2)           |         O(n^2)          |
|   Merge sort   |       O(n)       |         O(nlogn)          |        O(nlogn)         |
|   Heap sort    |       O(1)       |         O(nlogn)          |        O(nlogn)         |
|   **Quick sort**   |       O(1)       |         O(nlogn)          |         O(n^2)          |
|   **Count sort**   |      O(n+k)      |           O(n)            |          O(n+k)           |
|   Radix sort   |       O(n+k)       |           O(n)            |          O(dn)           |
|   Bucket sort   |     O(n+k)       |           O(n)            |          O(n^2)           |

<br>

* **Quick Sort**

Python 에서 sort 함수는 Quick Sort이다.
```python
>>> L.sort()
```

* **Count Sort**

계수정렬은 원소간 비교없이 정렬할 수 있는 정렬 방법이다.

모든 원소는 양의 정수여야 하며 일정 수(k) 이하일떄 사용한다.

k : 가장 큰 수<br>
C : len(L) 만큼 개수 갖는 리스트<br>
count : lenL 만큼 반복<br>
rearrange : 0~k 까지 C[j]만큼 리스트에 재배열<br>

```python
def count_sort(L):
    k = max(L) + 1
    C = [0] * k
    lenL = len(L)

    # count
    for j in range(lenL):
        C[L[j]] = C[L[j]] + 1
    
    # rearrange
    i = 0
    for j in range(k):
        while C[j] > 0:
            L[i] = j
            C[j] = C[j] - 1
            i += 1
```


## 3. 느낀점

시간과 공간효율성을 확인한다. 시간제한이 유독 짧을 때는 분포기반 정렬을 사용하고, 나머지는 일단 Quick Sort 로 풀자. 퀵 소트로 안풀리는 경우 추후 기재하겠다.

1. 시간제한 O -> Count Sort
2. 시간제한 X -> Quick Sort
> Python 기본 라이브러리 sort()가 Quick sort이다.


<p><br></p>

# 백준

* [2750 수 정렬하기](/백준/2750)

    시간 복잡도가 O(n²)인 정렬 알고리즘으로 풀 수 있습니다. 예를 들면 삽입 정렬, 거품 정렬 등이 있습니다.

* [2751 수 정렬하기 2](/백준/2751)

    시간 복잡도가 O(nlogn)인 정렬 알고리즘으로 풀 수 있습니다. 예를 들면 병합 정렬, 힙 정렬 등이 있지만, 어려운 알고리즘이므로 지금은 언어에 내장된 정렬 함수를 쓰는 것을 추천드립니다.

* [10989 수 정렬하기 3](/백준/10989)

    수의 범위가 작다면 카운팅 정렬을 사용하여 더욱 빠르게 정렬할 수 있습니다.

* [2108 통계학](/백준/2108)

    정렬을 활용하는 문제

* [1427 소트 인사이드](/백준/1427)

    숫자를 정렬하는 문제

* [11650 좌표 정렬하기](/백준/11650)

    좌표를 정렬하는 문제

* [11651 좌표 정렬하기 2](/백준/11651)

    좌표를 다른 순서로 정렬하는 문제

* [1181 단어 정렬](/백준/1181)

    단어의 순서를 정의하여 정렬하는 문제

* [10814 나이순 정렬](/백준/10814)

    값이 같은 원소의 전후관계가 바뀌지 않는 정렬 알고리즘을 안정 정렬(stable sort)이라고 합니다.


    



