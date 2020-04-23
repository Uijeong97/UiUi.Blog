---
title: '[SQL] SQL 완벽정리'
date: 2020-04-22 22:04:78
category: SQL
thumbnail: './images/color.png'
draft: false
---

해당 게시물은 SQL 코딩테스트를 위해 작성되었습니다. 예제는 프로그래머스 고득점 SQL Kit 바탕으로 작성하였습니다.

# 목차
1. [SQL SELECT 관련 키워드(DISTINCT, ORDER BY, GROUB BY, LIMIT) 정리](#1-sql-select-관련-키워드-정리)
    * [SQL DISTINCT](#-sql-distinct)
    * [SQL WHERE](#-sql-where)
    * [SQL GROUP BY, HAVING](#-sql-group-by-having)
    * [SQL ORDER BY](#-sql-order-by)
    * [SQL LIMIT](#-sql-limit)
2. [SQL 집계함수(COUNT, AVG, MAX, MIN, SUM) 정리](#2-sql-집계함수min-max-count-avg-sum-정리)
    * [MIN, MAX](#-min-max)
    * [COUNT, AVG, SUM](#-count-avg-sum)
3. [SQL JOIN 정리](#3-sql-join-정리)
    * SQL Inner Join
    * SQL Left Join
    * SQL Right Join
    * SQL FULL Join
    * SQL Self Join
4. [SQL Type(String, Date) 정리](#4-sql-typestring-date-정리)
    * SQL String
    * SQL Date
5. [SQL 연산자(Operator) 정리](#5-sql-연산자operator-정리)
    * SQL 논리연산자(AND, OR, NOT 연산자)
    * SQL LIKE 연산자
    * SQL IN 연산자
    * SQL BETWEEN 연산자
    * SQL IS NULL 연산자
6. SQL Aliases - 별명 붙이기

# 1. SQL SELECT 관련 키워드 정리

**SELECT**는 데이터베이스에서 데이터를 선택할 때 사용한다. SELECT문은 기본적으로 SELECT-FROM-WHERE 순으로 작성된다. 

대상 테이블로부터(FROM절) 조건에 맞는(WHERE절) 칼럼을 필터하여 새로운 테이블이 구성된 후, SELECT 절이 적용된다.

아래는 SELECT 를 이용한 기본적인 데이터 조회 코드이다.

```sql
# 프로그래머스 모든 레코드 조회하기
SELECT * FROM ANIMAL_INS;

# 프로그래머스 동물의 아이디와 이름
SELECT ANIMAL_ID, NAME FROM ANIMAL_INS
```

## 📌 **SQL DISTINCT**

**SELECT DISTINCT** 문은 중복된 레코드를 제거하고 유일한 값에 대해서만 결과를 출력하려면 사용한다.

* **칼럼 범주 조회**
```sql
# 프로그래머스 예제에서 ANIMAL_TYPE 만을 뽑기
SELECT DISTINCT ANIMAL_TYPE FROM ANIMAL_INS; # 결과는 CAT, DOG
```

* **조건 처리 후 칼럼 범주 조회**<br>
여기서 WHERE 로 조건에 맞게 테이블이 필터된 후, SELECT 연산을 처리 한다.
```sql
# 프로그래머스 예제에서 ANIMAL_TYPE 만을 뽑기
SELECT DISTINCT ANIMAL_TYPE FROM ANIMAL_INS
WHERE ANIMAL_TYPE = 'CAT'; # 결과는 CAT
```

* **칼럼 범주 COUNT**
```sql
# 프로그래머스 예제에서 ANIMAL_TYPE 만을 뽑기
SELECT COUNT(DISTINCT ANIMAL_TYPE) FROM ANIMAL_INS; 
# 결과는 100, 50 : CAT, DOG 각각 카운트
```

## 📌 **SQL WHERE**

**WHERE** 절은 레코드를 필터할 때 사용한다. 앞서 언급했듯이, 테이블로부터 레코드를 필터한 후 SELECT 를 한다는 점 잊지 말자.

아래는 Text Field 를 조회한 WHERE 예제이다. Numeric Fields 는 따옴표를 붙이지 않는다.(예시 ID = 1) 

```sql
# 프로그래머스 아픈 동물 찾기
SELECT ANIMAL_ID, NAME FROM ANIMAL_INS
WHERE INTAKE_CONDITION = "Sick"

# 프로그래머스 어린 동물 찾기
SELECT ANIMAL_ID, NAME FROM ANIMAL_INS
WHERE INTAKE_CONDITION != "Aged"
```

<br>

* **WHERE WHERE 문에 사용될 수 있는 연산자**

| | 연산자 | 설명 |
| :--: | :------------: | :-----: | 
| | =, != | 같다, 다르다 |
| | >, <, >=, <= | 기본적인 비교연산자 |
| | AND, OR, NOT | 비교 연산자 |
| | BETWEEN | 어떤 범위 사이에 있다 |
| | LIKE | 어떤 패턴에 대해 찾기 |
| | IN | 열에 대해 다양한 값들의 가능성 지정 |

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
WHERE 문에 사용될 수 있는 **연산자**들은 [5번](#5-sql-연산자operator-정리) 항목에서 다시 정리하겠다.

## 📌 **SQL GROUP BY, HAVING**

**GROUP BY** 절은 데이터를 원하는 그룹으로 나누고자 할 때 사용한다. 나누고자 하는 그룹을 SELECT 절과 ORDER BY 절 사이에 추가하면 된다. 

**HAVING** 절은 그룹화한 결과에 조건을 걸고자 할 때 사용한다. HAVING 절은 **집계함수를 이용한 조건비교**를 할 때 사용한다. WHERE 절에서는 집계함수를 이용할 수 없다는 점이 차이점이다. 

* **GROUP BY**

    **GROUP BY** 는 **집계함수를 사용**하여 특정 그룹으로 그룹화하고 싶을 때 자주 사용된다. 반면, DISTINCT 는 특정 그룹에 구분없이 중복된 데이터를 제거할 경우에 사용한다. 

    ```sql
    # 프로그래머스 고양이와 개는 몇마리 있을까
    SELECT ANIMAL_TYPE, COUNT(ANIMAL_TYPE) FROM ANIMAL_INS
    GROUP BY ANIMAL_TYPE
    # ANIMAL_TYPE 으로 그룹화를 한 후, 
    # ANIMAL_TYPE 과 집계함수(COUNT)를 사용하여
    # 해당 ANIMAL_TYPE 의 수를 알 수 있다.
    ```

* **WHERE + GROUP BY**

    WHERE 로 조건에 맞게 테이블이 필터된 후, GROUP BY 로 그룹화 한다. 그 후 SELECT 연산을 처리한다.

    WHERE 은 HAVING 과 달리, 그룹화 전에 조건이 처리된다. 선후관계에 주목하자.

    ```sql
    # 프로그래머스 입양 시각 구하기
    SELECT HOUR(DATETIME), count(HOUR(DATETIME)) COUNT from animal_outs
    WHERE HOUR(DATETIME) >= 9 and HOUR(DATETIME) <= 19
    GROUP BY HOUR(DATETIME)
    ```

* **GROUP BY + HAVING**

    그룹화 한 후 조건처리를 하고 싶을 때, HAVING 절을 사용한다.
    ```sql
    # 프로그래머스 동명 동물 수 찾기
    SELECT NAME, COUNT(NAME) FROM ANIMAL_INS
    GROUP BY NAME
    HAVING COUNT(NAME) >= 2
    ```

* **WHERE + GROUP BY + HAVING**

    WHERE 로 조건 처리 후, GROUP BY 로 그룹화 한다. 그 후 HAVING 으로 다시 한번 조건처리하고자 할 때 사용한다.

    위의 예제에서 동물 타입이 DOG인 동명 동물 수 찾기로 예제를 바꿔보았다.

    ```sql
    # 프로그래머스 동물 타입이 DOG 인 동명 동물 수 찾기
    SELECT NAME, COUNT(NAME) FROM ANIMAL_INS
    WHERE ANIMAL_TYPE = 'DOG'
    GROUP BY NAME
    HAVING COUNT(NAME) >= 2
    ```

* **GROUP BY + ORDER BY**

    GROUP BY - SELECT - ORDER BY 순으로 작업이 이루어진다.

    ```sql
    # 프로그래머스 동명 동물 수 찾기
    SELECT NAME, COUNT(NAME) FROM ANIMAL_INS
    GROUP BY NAME
    HAVING COUNT(NAME) >= 2
    ORDER BY NAME DESC;
    ```

## 📌 **SQL ORDER BY**

**ORDER BY** 절은 특정한 칼럼을 기준으로 테이블을 정렬시킬 떄 사용한다.

기본적으로 오름차순(ASC) 정렬을 한다. 내림차순 정렬을 원한다면 DESC 키워드를 사용한다.

여러기준으로 정렬할 때는 나열을 통해 해결한다.

* 역순 정렬
    ```sql
    # 프로그래머스 역순 정렬하기
    SELECT NAME, DATETIME FROM ANIMAL_INS
    ORDER BY ANIMAL_ID DESC
    ```

* 여러 칼럼으로 정렬
    ```sql
    # 프로그래머스 여러기준으로 정렬하기
    SELECT ANIMAL_ID, NAME, DATETIME FROM ANIMAL_INS
    ORDER BY NAME ASC, DATETIME DESC
    ```

## 📌 **SQL LIMIT**

**LIMIT** 절은 특정 개수의 레코드만 뽑고싶을 때 사용한다.

```sql
# 프로그래머스 상위 n 개 레코드
SELECT NAME FROM ANIMAL_INS
ORDER BY DATETIME
LIMIT 1
```

# 2. SQL 집계함수(MIN, MAX, COUNT, AVG, SUM) 정리

집계함수 5가지를 살펴본다.

## 📌 **MIN, MAX**
* MIN
    ```sql
    # 프로그래머스 최솟값 구하기
    SELECT MIN(DATETIME) from ANIMAL_INS
    ```

* MAX
    ```sql
    # 프로그래머스 최댓값 구하기
    SELECT MAX(DATETIME) FROM ANIMAL_INS
    ```

## 📌 **COUNT, AVG, SUM**
* COUNT

    COUNT 함수는 주의할 점이 있다.
    
    COUNT(*) 일 떄, NULL 값을 포함한다는 점이다.

    COUNT(칼럼) 같이 칼럼명을 정확히 명시하는 경우 NULL 값을 포함하지 않는다.

    1. 전체 행 개수 가져오기(NULL 값 포함 O)
        ```sql
        # 프로그래머스 동물 수 구하기
        SELECT COUNT(*) FROM ANIMAL_INS # NULL 값 포함
        ```
    2. 칼럼 데이터 가져오기(NULL 값 포함 X)
        ```sql
        SELECT COUNT(ANIMAL_ID) FROM ANIMAL_INS # NULL 값 포함 X
        ```
    3. 중복 허용 X + NULL 값 포함 X
        ```sql
        # 프로그래머스 중복 제거하기
        SELECT COUNT(DISTINCT NAME) FROM ANIMAL_INS
        ```

* AVG
    ```sql
    SELECT AVG(SALARY) FROM COMPANY
    ```
* SUM
    ```sql
    # 프로그래머스 최댓값 구하기
    SELECT SUM(SALARY) FROM COMPANY
    ```

# 3. SQL JOIN 정리

## 📌 **SQL Inner Join**

## 📌 **SQL Left Join**

## 📌 **SQL Right Join**

## 📌 **SQL FULL Join**

## 📌 **SQL Self Join**

# 4. SQL Type(String, Date) 정리
* SQL String
* SQL Date

# 5. SQL 연산자(Operator) 정리

## 📌 **SQL 논리연산자(AND, OR, NOT 연산자)**

AND 와 OR 연산자는 일반 프로그래밍 언어에서의 연산과 동일하다.
NOT 은 조건이 아닌 레코드를 보여준다.

```sql
# ANIMAL_TYPE 이 CAT 이고, INTAKE_CONDITION 이 NORMAL 이면서,
# NAME 이 RAVEN 이 아닌 레코드 찾기
SELECT * FROM ANIMAL_INS
WHERE ANIMAL_TYPE = 'CAT' AND INTAKE_CONDITION = 'NORMAL' 
AND NOT NAME = 'RAVEN'
```
## 📌 **SQL LIKE 연산자**
## 📌 **SQL IN 연산자**
## 📌 **SQL BETWEEN 연산자**
## 📌 **SQL IS NULL 연산자**

# 6. SQL Aliases - 별명 붙이기

    
