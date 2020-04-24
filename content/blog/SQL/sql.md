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
    * [SQL CASE](#-sql-case)
    * [SQL AS(Aliases)](#-sql-Aliases)
    * [SQL WHERE](#-sql-where)
    * [SQL GROUP BY, HAVING](#-sql-group-by-having)
    * [SQL ORDER BY](#-sql-order-by)
    * [SQL LIMIT](#-sql-limit)
2. [SQL 집계함수(COUNT, AVG, MAX, MIN, SUM) 정리](#2-sql-집계함수min-max-count-avg-sum-정리)
    * [MIN, MAX](#-min-max)
    * [COUNT, AVG, SUM](#-count-avg-sum)
3. [SQL 연산자(Operator) 정리](#3-sql-연산자operator-정리)
    * [SQL 논리연산자(AND, OR, NOT 연산자)](#-sql-논리연산자and-or-not-연산자)
    * [SQL LIKE 연산자](#-sql-like-연산자)
    * [SQL IN 연산자](#-sql-in-연산자)
    * [SQL BETWEEN 연산자](#-sql-between-연산자)
    * [SQL IS NULL 연산자](#-sql-is-null-연산자)
4. [SQL Type(String, Date) 정리](#4-sql-typestring-date-정리)
    * [SQL String]()
    * [SQL Date]()
5. [SQL JOIN 정리](#5-sql-join-정리)
    * [SQL Left Join](#-sql-left-join)
    * [SQL Right Join](#-sql-right-join)
    * [SQL Inner Join](#-sql-inner-join)
    * [SQL FULL Join](#-sql-full-join)
    * [SQL Self Join](#-sql-self-join)

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

## 📌 **SQL CASE**

**SELECT CASE** 문은 프로그래밍 언어에서 스위치(switch)문과 비슷하다.

CASE - [WHEN - THEN]* - ELSE - END 의 순서로 구성된다.

```sql
# 프로그래머스 예제에서 ANIMAL_TYPE 만을 뽑기
SELECT NAME,
    CASE
        WHEN ANIMAL_TYPE = 'Dog'
        THEN '강아지'
        WHEN ANIMAL_TYPE = 'CAT'
        THEN '고양이'
        ELSE '동물'
    END AS ANIMAL_KR
FROM ANIMAL_INS
```

## 📌 **SQL AS(Aliases)**

Alias 를 사용해서 테이블이나 열에 임시로 별명을 붙일 수 있다. JOIN 시 테이블 이름을 간단하게 줄일 때 자주 사용된다.

**AS** 를 사용하여 원하는 Alias 를 설정할 수 있다.

* **열에 대한 Alias**
    ```sql
    SELECT ANIMAL_ID AS ID, NAME AS '이름' FROM ANIMAL_INS
    ```
    **결과**

    | ID | 이름 |
    | :-: | :-: |
    | ... | ... |

<br>

* **테이블에 대한 Alias**

    다른 것 보다 Alias 가 어떻게 쓰이는지 확인해보자.

    테이블을 각각 I, O 로 별명을 붙여주면 테이블 참조가 쉬워진다.

    ```sql
    # 프로그래머스 없어진 기록 찾기
    SELECT O.ANIMAL_ID, O.NAME
    FROM ANIMAL_INS AS I RIGHT OUTER JOIN ANIMAL_OUTS AS O
    ON I.ANIMAL_ID = O.ANIMAL_ID
    WHERE I.ANIMAL_ID IS NULL
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

# 3. SQL 연산자(Operator) 정리

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

**LIKE** 연산자는 WHERE 절 안에서 쓰이는데, 열에서 어떤 특정한 패턴에 부합하는 부분을 찾으려 할 때 사용한다.

LIKE 연산자는 아래의 와일드 카드를 사용한다.
* % : 0, 1 혹은 하나이상의 char
* _ : 한개의 char
* \[charlist\] : 안의 알파벳 중 한개의 알파벳(or)

셋 다 함께 사용될 수 있다.

LIKE '값%', LIKE '%값', LIKE '%값%'<br>
LIKE '값\_', LIKE '\_값', LIKE '\_값\_'<br>
LIKE '\[a-e\]%', LIKE '%\[bsp\]_'

```sql
# 이름에 el 이 들어가는 동물 찾기
SELECT ANIMAL_ID, NAME FROM ANIMAL_INS
WHERE NAME LIKE '%el%' AND ANIMAL_TYPE = 'dog'
ORDER BY NAME
```

## 📌 **SQL IN 연산자**

**IN** 연산자는 WHERE 절 안에서 쓰이는데, 열에서 다양한 값들을 선택할 때 사용한다. 여러개의 OR 조건을 연속으로 사용하는 것과 같은 효과를 가진다.

* IN : 안에 있는 값이 하나라도 있는 경우(OR)
* NOT IN : 안에 있는 값이 모두 없는 경우(AND)

```sql
# 루시와 엘라 찾기
SELECT ANIMAL_ID, NAME, SEX_UPON_INTAKE FROM ANIMAL_INS
WHERE NAME IN ('Lucy', 'Ella', 'Pickle', 'Rogan', 'Sabrina', 'Mitty')
```

## 📌 **SQL BETWEEN 연산자**

**BETWEEN** 연산자는 WHERE 절 안에서 쓰이는데, 주어진 range 에 대해서 값을 선택할 수 있도록 해준다.

중요한 점은 **inclucive** 하다는 점이다. 예를들어, BETWEEN 1 AND 10 이면 1과 10이 포함된다. [1, 10]

* BETWEEN : 사이에 있는 값이 하나라도 있는 경우(OR)
* NOT BETWEEN : 사이에 있는 값이 모두 없는 경우(AND)

#### **적용 타입**
* 숫자
* 텍스트 : 알파벳 순서

```sql
# L-S 사이의 이름을 가진 동물들 찾기
SELECT ANIMAL_ID, NAME, SEX_UPON_INTAKE FROM ANIMAL_INS
WHERE NAME BETWEEN 'L' AND 'S'
```

## 📌 **SQL IS NULL 연산자**

**NULL** 값은 value 가 없는 필드를 말한다. IS NULL, IS NOT NULL 연산자는 WHERE 절 안에서 쓰인다.

새 레코드를 추가하거나 업데이트를 할 때, 지정을 해주지 않으면 NULL 값이 자동으로 들어갈 수 있다.

* IS NULL : 사이에 있는 값이 하나라도 있는 경우(OR)
* IS NOT NULL : 사이에 있는 값이 모두 없는 경우(AND)

```sql
# 프로그래머스 이름이 없는 동물의 아이디
SELECT ANIMAL_ID FROM ANIMAL_INS
WHERE NAME IS NULL
```

```sql
# 프로그래머스 이름이 있는 동물의 아이디
SELECT ANIMAL_ID FROM ANIMAL_INS
WHERE NAME IS NOT NULL
```

* **SQL IFNULL 함수 - NULL 값 처리하기**

    IS NULL 연산자는 WHERE 절에서만 사용하며, NULL 인 값들만 선택한다. 만약 NULL인 값은 다른 값으로 채우고 싶다면 IFNULL 함수를 사용한다.

    **IF NULL(A, B)** 함수는 A가 NULL일 때 B를, 그렇지 않다면 A를 출력한다.

    ```sql
    SELECT ANIMAL_TYPE, IFNULL(NAME, "No name"), SEX_UPON_INTAKE FROM ANIMAL_INS
    ORDER BY ANIMAL_ID
    ```

# 4. SQL Type(String, Date, Number) 정리

## 📌 **SQL String**

### 문자열 공백 또는 문자 제거 (TRIM, LTRIM, RTRIM)

* TRIM : 문자열에 공백 또는 문자 제거
```sql
TRIM(문자열)
```

    * LEADING : 좌측 공백 혹은 문자 제거
    ```sql
    TRIM(LEADING FROM 문자열)
    TRIM(LEADING 제거할 문자 FROM 문자열)
    ```
    * TRAILING : 우측 공백 혹은 문자 제거
    ```sql
    TRIM(TRAILING FROM 문자열)
    TRIM(TRAILING 제거할 문자 FROM 문자열)
    ```
    * BOTH : 좌우 공백 혹은 문자 제거(기본)
    ```sql
    TRIM(문자열)
    TRIM(BOTH 제거할 문자 FROM 문자열)
    ```
* LTRIM : 문자열에 좌측 공백 제거
```sql
LTRIM(문자열)
```
* RTRIM : 문자열에 우측 공백 제거
```sql
RTRIM(문자열)
```
<br>

### 문자열 길이 가져오기 (LENGTH, CHAR_LENGTH)

* LENGTH : 문자열의 Byte 길이
```sql
LENGTH(문자열)
```

* CHAR_LENGTH : 문자 개수만 가져온다.
```sql
CHAR_LENGTH(문자열)
```

<br>

### 문자열 부분 가져오기 (LEFT, MID, RIGHT)

문자열에 일부분을 가져오는 함수는 3가지가 존재합니다.

* LEFT : 문자에 왼쪽을 기준으로 일정 갯수를 가져오는 함수
```sql
LEFT(문자, 가져올 개수)
```

* MID, SUBSTR, SUBSTRING : 문자에 지정한 시작 위치를 기준으로 일정 갯수를 가져오는 함수
```sql
MID(문자, 시작 위치, 가져올 개수)
```

* RIGHT : 문자에 오른쪽을 기준으로 일정 갯수를 가져오는 함수
```sql
RIGHT(문자, 가져올 개수)
```

<br>

### 문자열 대/소문자로 변경하기 (UPPER, LOWER)

* UPPER : 소 -> 대문자로 변경
```sql
UPPER(문자)
```
* LOWER : 대 -> 소문자로 변경
```sql
LOWER(문자)
```

<br>

### 여러 문자열을 하나의 문자열로 합치기 (CONCAT, CONCAT_WS)

* CONCAT : 여러 문자열을 합치는 함수
```sql
CONCAT(문자열1, 문자열2, ...)
```

* CONCAT_WS : 여러 문자열을 구분하여 합치는 함수
```sql
CONCAT_WS(구분자, 문자열1, 문자열2, ...)
```
<br>

### 칼럼 값을 하나의 문자열로 합치기 (GROUP_CONCAT)

* GROUP_CONCAT
```sql
GROUP_CONCAT(칼럼1, 구분자, 칼럼2)
```


## 📌 **SQL Date**

### 날짜 데이터에서 일부만 추출하기

아래 함수들은 날짜 데이터에서 일부만을 추출할 수 있다.
* YEAR : 연도
* MONTH : 월
* DAY : 일
* HOUR : 시
* MINUTE : 분
* SECOND : 초

```sql
YEAR(기준 날짜);
MONTH(기준 날짜);
DAY(기준 날짜);
HOUR(기준 날짜);
MINUTE(기준 날짜);
SECOND(기준 날짜);
```

<br>

### 시간 더하기, 빼기 (DATE\_ADD, DATE\_SUB)

특정 시간을 기준으로 기간을 더하거나 빼야하는 경우 사용한다. INTERVAL 뒤의 단위의 종류에는 YEAR, MONTH, DAY, HOUR, MINUTE, SECOND 가 있다.
* DATE\_ADD(기준 날짜, INTERVAL 숫자 단위)
* DATE\_SUB(기준 날짜, INTERVAL 숫자 단위)

```sql
DATE\_ADD(NOW(), INTERVAL 1 YEAR)
DATE\_ADD(NOW(), INTERVAL 1 MONTH)
DATE\_ADD(NOW(), INTERVAL 1 DAY)
DATE\_ADD(NOW(), INTERVAL 1 HOUR)
DATE\_ADD(NOW(), INTERVAL 1 MINUTE)
```
<br>

### 현재 시간 가져오기 (NOW)

* NOW
```sql
NOW()
```


## 📌 **SQL Number**

### 소수점 관련 함수 (CEILING, FLOOR, ROUND, TRUNCATE)
* **CEILING (소수점 올림)**
```sql
CEILING(숫자)
```

* **FLOOR (소수점 버림)**
```sql
FLOOR(숫자)
```

* **ROUND (소수점 반올림)**
소수점 이하 자릿수를 남기고 반올림하는 함수
```sql
ROUND(숫자, 자릿수)
```

* **TRUNCATE (소수점 자릿수 버림)**
소수점 이하 자릿수를 남기고 버림하는 함수
```sql
TRUNCATE(숫자, 자릿수)
```

### 절댓값, 제곱, 나머지 관련 함수 (ABS, POW, MOD)
* **ABS (절댓값)**
```sql
ABS(숫자)
```

* **POW (제곱)**
```sql
POW(숫자, n)
```

* **MOD (나머지)**
분자를 분모로 나눈 나머지를 가져오는 함수(% 연산자)
```sql
MOD(분자, 분모)
```

### 가장 큰/작은 수 (GREATEST, LEAST)
* **GREATEST**
```sql
GREATEST(수1, 수2, 수3, ...)
```

* **LEAST**
```sql
LEAST(수1, 수2, 수3, ...)
```

# 5. SQL JOIN 정리

**JOIN** 절은 두 개 이상의 테이블에서 열을 종합하려고 할 때 사용한다. 

* **LEFT JOIN** : 테이블 1 전체 값 + 조건에 해당하는 테이블 2의 선택된 값, 만약 테이블 2에 조건에 해당하는 값이 없으면 null
* **RIGHT JOIN** : 테이블 2 전체 값 + 조건에 해당하는 테이블 1의 선택된 값, 만약 테이블 1에 조건에 해당하는 값이 없으면 null
* **INNER JOIN** : 테이블 1과 2의 교집합
* **FULL OUTER JOIN** : 테이블 1과 2의 합집합
* **SELF JOIN** : 자기 자신 테이블에 대한 집합

## 📌 **SQL Left Join**

**Left Join** 은 table1 의 모든 레코드를 반환하고, table2 에서 해당되는 레코드를 반환한다. 오른쪽에 매치되는 결과가 없을 경우 null 이다.

* 문법
```sql
SELECT column_name
FROM table1 LEFT JOIN table2
ON table1.column_name = table2.column.name
```

* 예제
```sql
# 프로그래머스 오랜 기간 보호한 동물(1)
SELECT I.NAME, I.DATETIME
FROM ANIMAL_INS I LEFT JOIN ANIMAL_OUTS O ON I.ANIMAL_ID = O.ANIMAL_ID
WHERE O.ANIMAL_ID IS NULL
ORDER BY I.DATETIME
LIMIT 3
```

## 📌 **SQL Right Join**

**Right Join** 은 table2 의 모든 레코드를 반환하고, table1 에서 해당되는 레코드를 반환한다. 왼쪽에 매치되는 결과가 없을 경우 null 이다.

* 문법
```sql
SELECT column_name
FROM table1 RIGHT JOIN table2
ON table1.column_name = table2.column.name
```

* 예제
```sql
# 프로그래머스 없어진 기록 찾기
SELECT O.ANIMAL_ID, O.NAME
FROM ANIMAL_INS AS I RIGHT JOIN ANIMAL_OUTS AS O
ON O.ANIMAL_ID = I.ANIMAL_ID
WHERE I.ANIMAL_ID IS NULL
```

## 📌 **SQL Inner Join**

**Inner Join** 은 교집합이다. 즉 두 테이블에 모두 매칭되는 값들에 대한 레코드를 선택한다.

* 문법
```sql
SELECT column_name
FROM table1 INNER JOIN table2
ON table1.column_name = table2.column.name
```

* 예제
```sql
# 프로그래머스 있었는데요 없없습니다.
SELECT I.ANIMAL_ID, I.NAME
FROM ANIMAL_INS I INNER JOIN ANIMAL_OUTS O
ON I.ANIMAL_ID = O.ANIMAL_ID
WHERE I.DATETIME > O.DATETIME
ORDER BY I.DATETIME
```

## 📌 **SQL FULL Join**

**FULL Join** 은 합집합이다. 즉, 두 테이블에 모두 존재하는 값들에 대한 레코드를 선택한다.

* 문법
```sql
SELECT column_name
FROM table1 FULL OUTER JOIN table2
ON table1.column_name = table2.column.name
```

* 예제
```sql
# 프로그래머스 있었는데요 없없습니다.
SELECT I.ANIMAL_ID, I.NAME
FROM ANIMAL_INS I FULL OUTER JOIN ANIMAL_OUTS O
ON I.ANIMAL_ID = O.ANIMAL_ID
```

## 📌 **SQL Self Join**

**Self Join** 은 자기 자신에 대한 Join이다.

* 문법
```sql
SELECT column_name
FROM table1 T1, table2 T2
WHERE condition
```

    
