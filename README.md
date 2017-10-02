# 보석 코인 API
---
## 지갑 생성

메소드 | 경로 | 짧은 설명
--- | --- | ---
GET | /wallet/create | 지갑 생성

### 응답 바디
#### 지갑 생성 성공
```json
{
    "message" : "SUCCESS",
    "address" : "X7s160SG8/9dfl7fbaYQXTTQOoC6obiOgnHccC0vv841dvWup14nlLLJa+DVeyAM",
    "private_key" : "wOicMVWadF0VmZfdseKY71FE+C8QV8t1zLq+n8qq1c/dY4bn4zOBRT8KYosN8xDEE0Dy5JB69k5lxTiOW2ny5GJJJGPSzaM/kKmbWQsTaxw=",
    "create_date" : "2017-10-02 11:24"
}
```
#### 지갑 생성 실패
```json
{
    "message" : "FAILED"
}
```
---

## 지갑 잔액 조회

메소드 | 경로 | 짧은 설명
--- | --- | ---
POST | /wallet/create | 지갑 잔액 조회

### 요청 바디
```json
{
	"address" : "tkFbQk/CTZX62DQJPlr2ZuF9unW+15IjBcKzI+yxdDCL+n0ixAmQrP6u3o+v7oO1"
}
```

### 응답 바디
#### 잔액 조회 성공
```json
{
    "balance" : 0.00428254
}
```
#### 잔액 조회 실패
```json
{
    "message" : "FAILED"
}
```
---

## 거래 기록 조회

메소드 | 경로 | 짧은 설명
--- | --- | ---
POST | /wallet/transactions | 거래 기록 조회

### 요청 바디
```json
{
	"address" : "tkFbQk/CTZX62DQJPlr2ZuF9unW+15IjBcKzI+yxdDCL+n0ixAmQrP6u3o+v7oO1"
}
```
### 응답 바디
#### 거래 기록 조회 성공
```json
{
    "sendAddress" :	"k6S6d5RPQUcBYBRvkx9si0w2tAiYsc9APWnMuCKj9GsK4GHE6AOEeI8kjpapC2Hw",
    "amount" :	"1",
    "fee" :	"0",
    "incommingAddress" : "k6S6d5RPQUcBYBRvkx9si0w2tAiYsc9APWnMuCKj9GsK4GHE6AOEeI8kjpapC2Hw",
    "date" : "2017-09-27 21:24"
}
```
#### 잘못된 주소
```json
{
    "message" : "FAILED"
}
```
---

## 송금

메소드 | 경로 | 짧은 설명
--- | --- | ---
POST | /payment | 송금

### 요청 바디
```json
{
	"sendAddress" : "tkFbQk/CTZX62DQJPlr2ZuF9unW+15IjBcKzI+yxdDCL+n0ixAmQrP6u3o+v7oO1",
    "amount" : 0.001,
    "fee" : 0.00000001,
    "privateKey" : "6TyR/rbiYY1FeWJP7KWbN6dTEvkAWtbER8ifeBEvyb9R2RIbUXOiisf79H7hb5XQicOBala+7Se1tWLcWXne69XZyaoD+bFo6wMfXrVUd",
    "incommingAddress" : "L7m3oxpJzFn5L81T3O1gc/r95lL9uq+PemYT+Nh6wK8DhM4dB25sIh/tqpGTfa5U"
}
```

### 응답 바디
#### 송금 성공
```json
{
	"message" : "FAILED"
}
```
#### 보내는 사람 주소 오류
```json
{
    "message": "NO SENDADDRESS"
}
```
#### 받는 사람 주소 오류
```json
{
    "message": "NO INCOMMINGADDRESS"
}
```
#### 잔액 부족
```json
{
    "message": "NO AMOUNT"
}
```
#### 기타 예외
```json
{
    "message": "ERROR"
}
```
---
