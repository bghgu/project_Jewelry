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
    "data": {
        "Items": [
            {
                "date": "2017-10-03 20:24",
                "fee": "1",
                "sequenceNum": "3e52e2a0-a832-11e7-838e-b3ba21cfab99",
                "previousblockhash": "QnJcslcFpFFlM9H5x/YrgiRd3rnnvYWd9q7oAb1jXljNpqB9CMAjUm1pF+9WGQEBpWffx+BTa8aGQOMeGBYVJmFiEBQkXAN1qKyNus7rq7VQrHY5EwVqzLtRJwtsJAjpf+k88fpUi0ByLXDMfMMgwPm1/VFSe/nRxiA1Uyk1W6wjofxKz1EzSJRly8IiplAdLJw4/dRDjQhstcMLA6urVvHFqlRAnsV0s64QnJvNaTcwxs75cSyJIdU2bPzsGHd374F8N9HCOsk8avlGfypbJh6H6yN+AYczrGZtxalTL/LX7uNU3FK8T0G8shicpB/B8Zp7TZ4kXlz1tDtR2jj32LSjfPi4nEtE6DLAvDzJKlc=",
                "amount": "1",
                "incommingAddress": "C6ZfF3r1dnV0Bq70pgVrsxbAZB6+eia3Yhz1RBZHihqITKS2f6QayBnuNEcu8XiF",
                "address": "mRC5f6IosqFj3LyLD5mZPBxjWB1pc7mEfIE0z+I0kBiMt4gwEQ41JiCbUJD7Wu0+",
                "merklehash": "84nVXfQJMfUlQ3gPqarDajwRF0/nCNbWsxX+pExIoBYHdQUTiegWOPuRoD3lFPL3D5ZI9wjjylj1vpyV6oWYCZVHuLGA5dKD0BOCpSzkGDp1pMuKbwdXN72FOAM3EujUH2k3SfmbFsQLJX21bAGBpfxCDxZQLLH1wKXaYA8h0WNNWYjiO9ysgFoFWaOOR2HxzaHGhKZOD6EknU7xnmcIWnf+WCAe9g8S1llHhd1eJuAm3IvlxXyKZjUYkmqe+/vCi0Qlbrj11Cm5e8KhXak/NNnEfvcjfl/IX3f8/h1nAhp2bYLEC1Xy9zIf2J1MOTh120I9GcotaQ/br/8A2WrS2kFjO1JmKQAZ6QS/IcC1b0c=",
                "type": "payment"
            },
            {
                "date": "2017-10-03 20:24",
                "fee": "1",
                "sequenceNum": "3c7a5210-a832-11e7-838e-b3ba21cfab99",
                "amount": "1",
                "incommingAddress": "C6ZfF3r1dnV0Bq70pgVrsxbAZB6+eia3Yhz1RBZHihqITKS2f6QayBnuNEcu8XiF",
                "address": "mRC5f6IosqFj3LyLD5mZPBxjWB1pc7mEfIE0z+I0kBiMt4gwEQ41JiCbUJD7Wu0+",
                "merklehash": "QnJcslcFpFFlM9H5x/YrgiRd3rnnvYWd9q7oAb1jXljNpqB9CMAjUm1pF+9WGQEBpWffx+BTa8aGQOMeGBYVJmFiEBQkXAN1qKyNus7rq7VQrHY5EwVqzLtRJwtsJAjpf+k88fpUi0ByLXDMfMMgwPm1/VFSe/nRxiA1Uyk1W6wjofxKz1EzSJRly8IiplAdLJw4/dRDjQhstcMLA6urVvHFqlRAnsV0s64QnJvNaTcwxs75cSyJIdU2bPzsGHd374F8N9HCOsk8avlGfypbJh6H6yN+AYczrGZtxalTL/LX7uNU3FK8T0G8shicpB/B8Zp7TZ4kXlz1tDtR2jj32LSjfPi4nEtE6DLAvDzJKlc=",
                "type": "payment"
            },
            {
                "date": "2017-10-03 21:24",
                "fee": 1,
                "sequenceNum": "4b80cc20-a833-11e7-8f73-79ba1ae75154",
                "previousblockhash": "g8K7WOwZgwmyA9cNg5V9d1GZ3f9XGuf29xVVFxO2TXm2UerXCYHuHV7QawdSLoiqEkWRgiSWgu5OpqoeBU+lHfuhDynvHDsJqBEIQuf5x/+e+cESufoMvxQII48mDOQTwh0/nVMQrRHnbK/o9cr0XHsvpIuEj3u/ZsiIr7HpCKhbRSlvCy9+GoqOdDEUkr5vVpXtPcZFfAitfkJeBGQJMCxjmeQ/SbZ+SxGBmHgNSeF1mQKYyyMghv54wtPpe1ZB6IUz3SMuPsduaOKTeMLA/3GEfn7+tul2P2Gfu8gkkBon/K0odFR6dfbak/s7Z5SD8ZUGtSyjT1Txgj+I8wMjzMo4B5locFUWjPmcZ8PBZ/c=",
                "amount": 10,
                "incommingAddress": "C6ZfF3r1dnV0Bq70pgVrsxbAZB6+eia3Yhz1RBZHihqITKS2f6QayBnuNEcu8XiF",
                "address": "mRC5f6IosqFj3LyLD5mZPBxjWB1pc7mEfIE0z+I0kBiMt4gwEQ41JiCbUJD7Wu0+",
                "merklehash": "vJtVEkbjgN/OA+s59X3zL6OM8ju2lSFcx6G2YgQH/OST1HGUulNHbkvOqjk6/+ZKCbHmGasPFvQ+QKnU6ZGgMpnyuEMvPPPal0PXpcK0lu1PggB0KTv2KfuARO14TVlKVp3tj7XiW7n1RLn+WiLNDLJHkEd240QdHJZchgHv6bhCoi+XtnWKnkO1uhzGTMNptQESgBhJgl7sqU3pWRyk0Gmsz85gLy7Wp+HbkzBxmJrHEQyCixciPw3zPsuDtgWq0GNRdn90ymH+MKyYYMng7bfGXdjhmR4hvQVCeIO5TaVrWVJbngBkQRpdZExD3KHyp/Eee1FZreK2RxkLtPtY1pxu2pu1iRK2PD9dfM/ry+g=",
                "type": "payment"
            },
            {
                "date": "2017-10-03 20:24",
                "fee": "1",
                "sequenceNum": "d53ef8e0-a830-11e7-934d-973446e69520",
                "previousblockhash": "trWgkziQPF3RFHXuCOugH2yRMzkSlscj+SFMqiUk2ToP8cmwf0D/fLCLiatkV2O1GZaWKovWVlWWeVE7RXUTzZ5QA2jF0eW8ZsmzKbJISikfKyGC9yKkmaWHdRUcbDp3w7b6e581e6RSo32OaK+7KZVIOtjg/keMK0ZOqAPEa2vgdiA1qeEk8i72V5lySHTro8qZ6Y+Xuz/u+IVtD+qvph72nsd8284kRoLsbmw+ijNYsTucpMveJ1ivTDParWsC98o+fLlDwijYLFkxzPviunVS6K6c1Hufml1ttrL8UGKTLuqtFYvNk9EYuf390MAltlBx0qWnP60K0nJVZ4P2lqeW67SI/OTzB73mpbvshxm7fr7yZlFYIZy1Qhggl3UiwQ3gh4QU8bfb5ZAAEqNyU5LIgPZbB4ZWuB4Q1ME4VQ+m0ZccXjPBKSjFm7+P7+WD",
                "amount": "1",
                "incommingAddress": "C6ZfF3r1dnV0Bq70pgVrsxbAZB6+eia3Yhz1RBZHihqITKS2f6QayBnuNEcu8XiF",
                "address": "mRC5f6IosqFj3LyLD5mZPBxjWB1pc7mEfIE0z+I0kBiMt4gwEQ41JiCbUJD7Wu0+",
                "merklehash": "TwnyBJjVn8HgjI7kkGGwmms2uBsGQv+Urb24iMCoqMXSB4hmmewHMGDKVckle8tUrawFCpNdJDBjWy0i2iGpBa2LGwMbaVKJ18KOn49f7L2MZ4r07EoqQz1vpZRoIfkhLM6zZ6PQ2ChcWMeaLnahbcVSAhlYC7RqjnfoGrpwdI0Bm64rCYWPccch9PS2+5xZ8SrNEh2ZGD5Taqc1K6wH55R1Vz67zKHBfTUWTmzhUwxgrtkj6uTBj2pn7M9J6MNS03jgr3WvMN46VI/f8TdMvbs5fNGKajaeO556mlH1t/tAL1C9lcCCVS3DuzEAPO3t3oY98/ky9wnhfDN6hE6Nnu9Tg1qhHVmwm0Cac/GOk/8=",
                "type": "payment"
            },
            {
                "date": "2017-10-03 20:24",
                "fee": "1",
                "sequenceNum": "3f682330-a832-11e7-838e-b3ba21cfab99",
                "previousblockhash": "84nVXfQJMfUlQ3gPqarDajwRF0/nCNbWsxX+pExIoBYHdQUTiegWOPuRoD3lFPL3D5ZI9wjjylj1vpyV6oWYCZVHuLGA5dKD0BOCpSzkGDp1pMuKbwdXN72FOAM3EujUH2k3SfmbFsQLJX21bAGBpfxCDxZQLLH1wKXaYA8h0WNNWYjiO9ysgFoFWaOOR2HxzaHGhKZOD6EknU7xnmcIWnf+WCAe9g8S1llHhd1eJuAm3IvlxXyKZjUYkmqe+/vCi0Qlbrj11Cm5e8KhXak/NNnEfvcjfl/IX3f8/h1nAhp2bYLEC1Xy9zIf2J1MOTh120I9GcotaQ/br/8A2WrS2kFjO1JmKQAZ6QS/IcC1b0c=",
                "amount": "1",
                "incommingAddress": "C6ZfF3r1dnV0Bq70pgVrsxbAZB6+eia3Yhz1RBZHihqITKS2f6QayBnuNEcu8XiF",
                "address": "mRC5f6IosqFj3LyLD5mZPBxjWB1pc7mEfIE0z+I0kBiMt4gwEQ41JiCbUJD7Wu0+",
                "merklehash": "IOCaK3ar5HAGk4Bcay7bMFsqtgSft7FDkJMoizXpVU1zRxbeAknqXAWU7cybUc0rFfgiiElYZJQkXfcbmmUOkhtalsvb6Cp9rjglnDzVycwpg0DrAt1qw2ZmsRlp8d/rOk6qMujLCPCVlhHWNwptpsGrRwex236kgi2el/ByLnb62CiUXSYVgJQGPpwuWfhobLDi6b1vHz2miTjPCfgOhfRUk7y7AK4zAbOTu8qOpEVuoeIeFlLKLO30pXWtjuaBL3nt6QuQ0Pt7c2nVCZmlAVr3NFC5dDv6jE5NHgfxYy9oP0w+aAtHHXvuX2w9vW2iV0ZxTEipqTA3vZiykjpZEWWRMGHrwgjYMXIqI7rH8tc=",
                "type": "payment"
            },
            {
                "date": "2017-10-03 20:24",
                "fee": "1",
                "sequenceNum": "b920d510-a831-11e7-b5ea-b533b03a1ec9",
                "amount": "1",
                "incommingAddress": "C6ZfF3r1dnV0Bq70pgVrsxbAZB6+eia3Yhz1RBZHihqITKS2f6QayBnuNEcu8XiF",
                "address": "mRC5f6IosqFj3LyLD5mZPBxjWB1pc7mEfIE0z+I0kBiMt4gwEQ41JiCbUJD7Wu0+",
                "merklehash": "fJLk7pyF9ijpINPy07YrbdfYg4BVa1rDGBZpndPQqUa8WDWDroG4eUg77YpBYfWbkdOi5Y8XPECoTGjCrqxeayCCG36pKTYcTxd61qG1hyyhWK+F7IGLq/ntbXsWrI7ZYTUlVfYYk4VWGmxToIoVONsxIMNVITOKUZfz8sAc3N/U2h8AoosUdYEwq+15gxdUve2adpv3xfMtC9yPRf1J2HD4sA/kaxF6jUfg939w7bCjsOV4bFyNI0C04LJYqZjLM8g3SJ0YJFpwAdMejwS4oJm4FU3P3ABV0gKthHOT/ul2uFqaVyyTlK7iHMnwiADwXj3YBHjeNmh7g/q616EDxoCDJn7IsZl+4cPdbwPWhaU=",
                "type": "payment"
            },
            {
                "date": "2017-10-03 20:24",
                "balance": 100,
                "sequenceNum": "b425eb50-a830-11e7-934d-973446e69520",
                "previousblockhash": "EdoYJo10tg3XRUYa5UOhjbTINnc6VuXo0VUALBCS1mjWy2sQgykgqkRmGrt26h5RWugmvYOhs5pB3xNOUf9mpBu4zMc+AE70brsM1iKuyeDq0oUKMqSDhlx/IiJOwLnskFJwZ3itgObsC7upzRgyJUiYuRLs3FarWXu8U80XZowtphKh10ZAVBvvttDV2KV7YgGftMz7CY6EmjGJfsTqOa/aI6oPqBNoOXQPxvZ01h5VZezUQPQkyv6oxsLp0VuvhPHbM9F5wOO6ErWlzWbG2J09jd9lxVy8y/Z5gtfe76eZZ31CQmVmEnp8ZYhylZOiij2AD6Xkh4YGLbjra1S57Y2R+Vhwapa/0DLaMFZXFv4W29CazLhGDnfLdYjPie7vpT9oXRrKktMoOQhWWr3yub/ARZdITLe1jAkJ1GxBhx5ctxhwn2YfTkwIIIrpL4+K",
                "address": "mRC5f6IosqFj3LyLD5mZPBxjWB1pc7mEfIE0z+I0kBiMt4gwEQ41JiCbUJD7Wu0+",
                "merklehash": "trWgkziQPF3RFHXuCOugH2yRMzkSlscj+SFMqiUk2ToP8cmwf0D/fLCLiatkV2O1GZaWKovWVlWWeVE7RXUTzZ5QA2jF0eW8ZsmzKbJISikfKyGC9yKkmaWHdRUcbDp3w7b6e581e6RSo32OaK+7KZVIOtjg/keMK0ZOqAPEa2vgdiA1qeEk8i72V5lySHTro8qZ6Y+Xuz/u+IVtD+qvph72nsd8284kRoLsbmw+ijNYsTucpMveJ1ivTDParWsC98o+fLlDwijYLFkxzPviunVS6K6c1Hufml1ttrL8UGKTLuqtFYvNk9EYuf390MAltlBx0qWnP60K0nJVZ4P2lqeW67SI/OTzB73mpbvshxm7fr7yZlFYIZy1Qhggl3UiwQ3gh4QU8bfb5ZAAEqNyU5LIgPZbB4ZWuB4Q1ME4VQ+m0ZccXjPBKSjFm7+P7+WD",
                "type": "create_wallet"
            },
            {
                "date": "2017-10-03 21:24",
                "fee": 1,
                "sequenceNum": "4e7776e0-a833-11e7-8f73-79ba1ae75154",
                "previousblockhash": "YEmaWKNIT19Yzrb4yZ3GW/rxsNpwAQXwZxSTyRFIwDvD7jOBalSeFFfmLshL4kUcDZqovqAXVN0YddGJY/3kX2Y/mYwnendqu8Twh3xPzxypVabqNSn8OZTxoEn9b5xFWMy6fQUxuBdH/2sWFrsfIu0faDwfe+bzwauGt62pIEDtXOnG0AwYMJrshQiCdJpcvtrlDxjyFxKvs6elxx9nOrIBoKyfgMKIfgS2St1Mc1B7Cx2Ylqv/CVeYRDdaC95JmjQwFubChjJKPHpk2Z3oNVf1+JEuF7JbA1peeExbL3W7HabrEfuHrXSr1aIy/chRxQsijfDKO4t6kPp9oTm/AS6+ZMNX6Ab91gf8oS3cWwU=",
                "amount": 10,
                "incommingAddress": "C6ZfF3r1dnV0Bq70pgVrsxbAZB6+eia3Yhz1RBZHihqITKS2f6QayBnuNEcu8XiF",
                "address": "mRC5f6IosqFj3LyLD5mZPBxjWB1pc7mEfIE0z+I0kBiMt4gwEQ41JiCbUJD7Wu0+",
                "merklehash": "nzROaYyDLX8Lo/3k7G+2jzzPmPht5ZdcW21Zp0gKZj7WSLN+xuKspsVm2+NXAN7+l0ym7uSKCP2KzlIJuRZoZQFotmtdfeC4qcfwV2JF4wK/+2fUWKtA4118ugMwPdoDk4vu6xd62bQX4Paf+U9qPSWwEhxIkDVIMOEDpviayo4GDZO1ZIKLobV8z3kRABlA0DVf8viF7nMqqopYWE4MW8ikm7HTAT65wDCIVytNt/bDschGUsAz1bNGf/B7L5UVtlCbqzd/0dfEJiCr1w7D6mhKf17pe4HKWkD1rT3yrX+ymAFbNR/Xtxgx53NpqIXlL5apZHtuZN58tOiIQhJ+gEI91tR9pRjC8SXR3XccWOE=",
                "type": "payment"
            },
            {
                "date": "2017-10-03 21:24",
                "fee": 1,
                "sequenceNum": "4d6d59e0-a833-11e7-8f73-79ba1ae75154",
                "previousblockhash": "vJtVEkbjgN/OA+s59X3zL6OM8ju2lSFcx6G2YgQH/OST1HGUulNHbkvOqjk6/+ZKCbHmGasPFvQ+QKnU6ZGgMpnyuEMvPPPal0PXpcK0lu1PggB0KTv2KfuARO14TVlKVp3tj7XiW7n1RLn+WiLNDLJHkEd240QdHJZchgHv6bhCoi+XtnWKnkO1uhzGTMNptQESgBhJgl7sqU3pWRyk0Gmsz85gLy7Wp+HbkzBxmJrHEQyCixciPw3zPsuDtgWq0GNRdn90ymH+MKyYYMng7bfGXdjhmR4hvQVCeIO5TaVrWVJbngBkQRpdZExD3KHyp/Eee1FZreK2RxkLtPtY1pxu2pu1iRK2PD9dfM/ry+g=",
                "amount": 10,
                "incommingAddress": "C6ZfF3r1dnV0Bq70pgVrsxbAZB6+eia3Yhz1RBZHihqITKS2f6QayBnuNEcu8XiF",
                "address": "mRC5f6IosqFj3LyLD5mZPBxjWB1pc7mEfIE0z+I0kBiMt4gwEQ41JiCbUJD7Wu0+",
                "merklehash": "YEmaWKNIT19Yzrb4yZ3GW/rxsNpwAQXwZxSTyRFIwDvD7jOBalSeFFfmLshL4kUcDZqovqAXVN0YddGJY/3kX2Y/mYwnendqu8Twh3xPzxypVabqNSn8OZTxoEn9b5xFWMy6fQUxuBdH/2sWFrsfIu0faDwfe+bzwauGt62pIEDtXOnG0AwYMJrshQiCdJpcvtrlDxjyFxKvs6elxx9nOrIBoKyfgMKIfgS2St1Mc1B7Cx2Ylqv/CVeYRDdaC95JmjQwFubChjJKPHpk2Z3oNVf1+JEuF7JbA1peeExbL3W7HabrEfuHrXSr1aIy/chRxQsijfDKO4t6kPp9oTm/AS6+ZMNX6Ab91gf8oS3cWwU=",
                "type": "payment"
            },
            {
                "date": "2017-10-03 21:24",
                "fee": "1",
                "sequenceNum": "82e6bb80-a832-11e7-b9c7-0f47fc29a2b4",
                "previousblockhash": "62ESr/z/eK52zfTi+Qp/eNWNJVcYB9DqJxekSOFrYXi9IcIxraQCEa9JkevbXAbz9GzU0u6Xf9JMb9/WSBjYme4nPB53ng6rkPDeKUn75I+cW3eIU0VPGPAu4sDCybHZAtuDnZZccxILwqT0kt6EGVno++MVWfqHVHT4AjolARqGopJ6FUCRO3APXaqJfyUsJFZcjbZWBiKUhs9ismcBjsSW6z7+7yDSm9lERrlfDvDMhlyNheLbi0GJuzztwxxwFAdrs2iVjwGvaazn15jXr/r7/VmeIHNlC0GV1F72d2SjpXxtBEMYAOjJt79fygHn7NtW6NUSpdh/yyicFcaJ8X1A85rUlsue1ODNvuv0mcA=",
                "amount": "1",
                "incommingAddress": "C6ZfF3r1dnV0Bq70pgVrsxbAZB6+eia3Yhz1RBZHihqITKS2f6QayBnuNEcu8XiF",
                "address": "mRC5f6IosqFj3LyLD5mZPBxjWB1pc7mEfIE0z+I0kBiMt4gwEQ41JiCbUJD7Wu0+",
                "merklehash": "3bDei+KObmzGCckWul3i0XvoUCtZgK7Uv0uPjBa3Xy1LrM1lVD034GYvdfaTooVqc/+VaGfgqwLFfx6/I2J/difWJFk9r33AjhmCnGhfQK8A3XfUeLrgMMq43z61xdiQ6QFJ1tB6HGdpQVvBzjnIVUjhGxy6JMC6+JpvvDl5suElRkw/++fcjGz1a/pEsdAwGNwCLzdjKHidH3ebrGO6LiWvGbCudOpEK3GQH/4aHhEY2iMnsqSPtuubFHZais0jw65/M4bFsoIDccHT6H6eIwrlJrUMw0WtRIJ11exNADE0qBHyEFxUCYiQP3E4IIZS6v5WNIOkSnofBvu8IIXCWxfi8g8sCeYvP26uZkwxJg8=",
                "type": "payment"
            },
            {
                "date": "2017-10-03 20:24",
                "fee": "1",
                "sequenceNum": "78e86710-a831-11e7-9775-431083a128c7",
                "amount": "1",
                "incommingAddress": "C6ZfF3r1dnV0Bq70pgVrsxbAZB6+eia3Yhz1RBZHihqITKS2f6QayBnuNEcu8XiF",
                "address": "mRC5f6IosqFj3LyLD5mZPBxjWB1pc7mEfIE0z+I0kBiMt4gwEQ41JiCbUJD7Wu0+",
                "merklehash": "DB1mpr41x/xORBuANPloAdRyw/DWqvHfcRX3AqpHCWkhqmO2NNbAx6A8SoMiKGxBN7KW6iVYOZmRxsvfIsyiNGsr4DXOLDd4LWEE6/hV6dFz0duicgH8PSJdxMe7LwQilF6y0qqF110YEc37HMEd7Nfp5e+CCzQq13OEhpGc627pjDtQEfSW5VkkkTQ7+YHMAGnUiAr8IRKHqt9wc1JWWjDf1S0PGFW02g+GBGZmOwcsRQ1jqp3ZXVytyJGvAeU85HSCXCrdLeP6f1M8L6cpqxXkjjgj2Qc7FneZR1iq+96oTh2uW3SxT7RNjJOPjq11U3Uv5JFQ7kzuIa0aeuUWq/t8OPqvwsOHieBfC0ZAK48=",
                "type": "payment"
            },
            {
                "date": "2017-10-03 21:24",
                "fee": 1,
                "sequenceNum": "480735c0-a833-11e7-8f73-79ba1ae75154",
                "previousblockhash": "APXDDzKCUjKokrKgQsIyXN6X7lDvR7DysCDDy6TtU6AFeL2T3fzDqYvI8vnOma65Qy2FgLcOg1Vo5jiyBCoWUoMcENsucr8EvT6/2g1ofNm2vjDTrmcqDHSzlBXa2QGJaNanIdcrPGi8zonik/qoI8BGovHcPnAXkCHLDg2vETlJyKvT019Tow409q51qf2mGyPRcnSezkLC6P4L4dUOGa0ZbwNC18w4t4KetMxqtFNmGkf1+Hwc5+xBhle2ubbnojPJrPmJWhjwUUyYgO5T1gNNEsZeSlSwchWI514PbMXCMwsogYvfVGfGm6mtLngSBcGY5/sUoivxdepATKCEla986Z1A+sNvEovtphz7WW8=",
                "amount": 1,
                "incommingAddress": "C6ZfF3r1dnV0Bq70pgVrsxbAZB6+eia3Yhz1RBZHihqITKS2f6QayBnuNEcu8XiF",
                "address": "mRC5f6IosqFj3LyLD5mZPBxjWB1pc7mEfIE0z+I0kBiMt4gwEQ41JiCbUJD7Wu0+",
                "merklehash": "g8K7WOwZgwmyA9cNg5V9d1GZ3f9XGuf29xVVFxO2TXm2UerXCYHuHV7QawdSLoiqEkWRgiSWgu5OpqoeBU+lHfuhDynvHDsJqBEIQuf5x/+e+cESufoMvxQII48mDOQTwh0/nVMQrRHnbK/o9cr0XHsvpIuEj3u/ZsiIr7HpCKhbRSlvCy9+GoqOdDEUkr5vVpXtPcZFfAitfkJeBGQJMCxjmeQ/SbZ+SxGBmHgNSeF1mQKYyyMghv54wtPpe1ZB6IUz3SMuPsduaOKTeMLA/3GEfn7+tul2P2Gfu8gkkBon/K0odFR6dfbak/s7Z5SD8ZUGtSyjT1Txgj+I8wMjzMo4B5locFUWjPmcZ8PBZ/c=",
                "type": "payment"
            },
            {
                "date": "2017-10-03 21:24",
                "fee": "1",
                "sequenceNum": "e99d70d0-a832-11e7-bb94-4bd11ea64a92",
                "previousblockhash": "oDeHBT5TST+UmgxRjqmNZCnro/fkAoXtltdc4fW1wjyL9xp2cL9XvFk1l5nAy8fzMGLCXGn/uqTyDB6aUO++4rhUX8x9yCW7VlZ0dXzBCIkkNMLSxDLyZ/gAehD902i3g5tNTc0hEwE0yVpcz9/vbzRoUN1oGf7BSvxa5wUu///lQ5j6yBSh4+8I5DZ+ngh5wFUgUTBXHXdbnGv2Yw+L7I3KDYs8CH3YUBM7Jx0F1aA7ISvN2Lm1ShaBzN0GS9mEA7VYbpFaIZfMVyUha3vtPo9nsRTi+N9Bs6HeOYqz5xQSA8Y2gMt8Mckxdm6HjrBCkLhVN9+2wDZjR+ikbW7JOv6FVMXGYmAJQQ8HKP2xLlE=",
                "amount": "3",
                "incommingAddress": "C6ZfF3r1dnV0Bq70pgVrsxbAZB6+eia3Yhz1RBZHihqITKS2f6QayBnuNEcu8XiF",
                "address": "mRC5f6IosqFj3LyLD5mZPBxjWB1pc7mEfIE0z+I0kBiMt4gwEQ41JiCbUJD7Wu0+",
                "merklehash": "74Oq5ZBlcexKFUberhWpu5k7VlwsLty2Td/KqgkefPnaP7Frn40wNiEtN8401ikrPVaoShsh6aBznr40AAW/8d9YofeHKLfyXTHMsG/uS0dPWJHUpYCFE9fbOukKc6Oerf5UMVCvZvk40cWDjDh+niblEVHGRKsHcRU67E5+KVxbRbmJ+spFV81CmYSjsAHgN9fOZGBrcopOfH156yUprCX9cbNQig+cA9IeMf/VfNFWNnU8v8xpC3gNjf4h2wgU/HdPi6Za17fRg0jUHoMcXA1NMLNo36Vq1ltbJ59q85vLLfqDb4QiqluKveAfifitCA8jO5uHYwGytAOm0QhAd43ey6FqloQeEHUh1QIFCaY=",
                "type": "payment"
            },
            {
                "date": "2017-10-03 20:24",
                "fee": "1",
                "sequenceNum": "ced32f20-a831-11e7-b5ea-b533b03a1ec9",
                "previousblockhash": "fJLk7pyF9ijpINPy07YrbdfYg4BVa1rDGBZpndPQqUa8WDWDroG4eUg77YpBYfWbkdOi5Y8XPECoTGjCrqxeayCCG36pKTYcTxd61qG1hyyhWK+F7IGLq/ntbXsWrI7ZYTUlVfYYk4VWGmxToIoVONsxIMNVITOKUZfz8sAc3N/U2h8AoosUdYEwq+15gxdUve2adpv3xfMtC9yPRf1J2HD4sA/kaxF6jUfg939w7bCjsOV4bFyNI0C04LJYqZjLM8g3SJ0YJFpwAdMejwS4oJm4FU3P3ABV0gKthHOT/ul2uFqaVyyTlK7iHMnwiADwXj3YBHjeNmh7g/q616EDxoCDJn7IsZl+4cPdbwPWhaU=",
                "amount": "1",
                "incommingAddress": "C6ZfF3r1dnV0Bq70pgVrsxbAZB6+eia3Yhz1RBZHihqITKS2f6QayBnuNEcu8XiF",
                "address": "mRC5f6IosqFj3LyLD5mZPBxjWB1pc7mEfIE0z+I0kBiMt4gwEQ41JiCbUJD7Wu0+",
                "merklehash": "oy6Cb2YY31JKS+e+nrhX+OE1rBe2BHko36rWtE3zkT7MCQj9MkJFyMyb2IeW6AsOr8d1R18xoZHHrgc4rXJbdKZyjL4dEWyU4Ez4WNcBw28/z8AzJGDaIUEoLsybMnbOzg8Q27cdGmv9Ee9ur2L9BX8BcvnzJlIMFjJhoOmGhBH8b8n7B2SOCnTnqPdOI3K9Do2zCv5DjXUGsBSct+/oZgz1iKQ1tslfjXNK/IdYydg6aih6K4P4UGPE2DT5d/3u1PbtraNUIH0vCcLHduGxy4jHa6rztdU7GT5xnf7vMdOcf4WZo54BnWhgeF02Yx4icWQauQunnsVlsrdDGUn9sDc8dN6IMoLcMsFx2uDKENc=",
                "type": "payment"
            },
            {
                "date": "2017-10-03 21:24",
                "fee": 1,
                "sequenceNum": "469d1e70-a833-11e7-8f73-79ba1ae75154",
                "amount": 1,
                "incommingAddress": "C6ZfF3r1dnV0Bq70pgVrsxbAZB6+eia3Yhz1RBZHihqITKS2f6QayBnuNEcu8XiF",
                "address": "mRC5f6IosqFj3LyLD5mZPBxjWB1pc7mEfIE0z+I0kBiMt4gwEQ41JiCbUJD7Wu0+",
                "merklehash": "APXDDzKCUjKokrKgQsIyXN6X7lDvR7DysCDDy6TtU6AFeL2T3fzDqYvI8vnOma65Qy2FgLcOg1Vo5jiyBCoWUoMcENsucr8EvT6/2g1ofNm2vjDTrmcqDHSzlBXa2QGJaNanIdcrPGi8zonik/qoI8BGovHcPnAXkCHLDg2vETlJyKvT019Tow409q51qf2mGyPRcnSezkLC6P4L4dUOGa0ZbwNC18w4t4KetMxqtFNmGkf1+Hwc5+xBhle2ubbnojPJrPmJWhjwUUyYgO5T1gNNEsZeSlSwchWI514PbMXCMwsogYvfVGfGm6mtLngSBcGY5/sUoivxdepATKCEla986Z1A+sNvEovtphz7WW8=",
                "type": "payment"
            },
            {
                "date": "2017-10-03 21:24",
                "fee": "1",
                "sequenceNum": "cece7ec0-a832-11e7-bb94-4bd11ea64a92",
                "amount": "1",
                "incommingAddress": "C6ZfF3r1dnV0Bq70pgVrsxbAZB6+eia3Yhz1RBZHihqITKS2f6QayBnuNEcu8XiF",
                "address": "mRC5f6IosqFj3LyLD5mZPBxjWB1pc7mEfIE0z+I0kBiMt4gwEQ41JiCbUJD7Wu0+",
                "merklehash": "kk3FjjXooXp3SX7ZldMaJg8/Hz31v05ani2XDUspyCuiNq+Z7bBK/6r9SPZPpD1JGhQk+eFBC71JaNshfXS0S6YnZKIwHpgH/8+inaszrTywnhrP05f45DH5dH/V6vMqoLv3oYKwFwvmRQ5Al5Eo0GKRvT1auxoRLfhu8YRtI78agUZH4fPclKIFc9rsEexjcipQoR/NkZTQ9nPGSt6qqpWZMl0ROC5/2jgtj7rl7gmJMJ579WlGMdbXuD6yknjFHsS5gyiRapP7S22Fbs8BxlKcIM3v/lTPfpmAU+l/lj9C1nIVHC+beIN3nw4rEaTxJrskzrc3aHhJd0gwvFL+s66T2GGWrWqvOpySaQ0B/8U=",
                "type": "payment"
            },
            {
                "date": "2017-10-03 21:24",
                "fee": "1",
                "sequenceNum": "e7a74620-a832-11e7-bb94-4bd11ea64a92",
                "previousblockhash": "kk3FjjXooXp3SX7ZldMaJg8/Hz31v05ani2XDUspyCuiNq+Z7bBK/6r9SPZPpD1JGhQk+eFBC71JaNshfXS0S6YnZKIwHpgH/8+inaszrTywnhrP05f45DH5dH/V6vMqoLv3oYKwFwvmRQ5Al5Eo0GKRvT1auxoRLfhu8YRtI78agUZH4fPclKIFc9rsEexjcipQoR/NkZTQ9nPGSt6qqpWZMl0ROC5/2jgtj7rl7gmJMJ579WlGMdbXuD6yknjFHsS5gyiRapP7S22Fbs8BxlKcIM3v/lTPfpmAU+l/lj9C1nIVHC+beIN3nw4rEaTxJrskzrc3aHhJd0gwvFL+s66T2GGWrWqvOpySaQ0B/8U=",
                "amount": "1",
                "incommingAddress": "C6ZfF3r1dnV0Bq70pgVrsxbAZB6+eia3Yhz1RBZHihqITKS2f6QayBnuNEcu8XiF",
                "address": "mRC5f6IosqFj3LyLD5mZPBxjWB1pc7mEfIE0z+I0kBiMt4gwEQ41JiCbUJD7Wu0+",
                "merklehash": "oDeHBT5TST+UmgxRjqmNZCnro/fkAoXtltdc4fW1wjyL9xp2cL9XvFk1l5nAy8fzMGLCXGn/uqTyDB6aUO++4rhUX8x9yCW7VlZ0dXzBCIkkNMLSxDLyZ/gAehD902i3g5tNTc0hEwE0yVpcz9/vbzRoUN1oGf7BSvxa5wUu///lQ5j6yBSh4+8I5DZ+ngh5wFUgUTBXHXdbnGv2Yw+L7I3KDYs8CH3YUBM7Jx0F1aA7ISvN2Lm1ShaBzN0GS9mEA7VYbpFaIZfMVyUha3vtPo9nsRTi+N9Bs6HeOYqz5xQSA8Y2gMt8Mckxdm6HjrBCkLhVN9+2wDZjR+ikbW7JOv6FVMXGYmAJQQ8HKP2xLlE=",
                "type": "payment"
            },
            {
                "date": "2017-10-03 21:24",
                "fee": "1",
                "sequenceNum": "80e45bd0-a832-11e7-b9c7-0f47fc29a2b4",
                "amount": "1",
                "incommingAddress": "C6ZfF3r1dnV0Bq70pgVrsxbAZB6+eia3Yhz1RBZHihqITKS2f6QayBnuNEcu8XiF",
                "address": "mRC5f6IosqFj3LyLD5mZPBxjWB1pc7mEfIE0z+I0kBiMt4gwEQ41JiCbUJD7Wu0+",
                "merklehash": "62ESr/z/eK52zfTi+Qp/eNWNJVcYB9DqJxekSOFrYXi9IcIxraQCEa9JkevbXAbz9GzU0u6Xf9JMb9/WSBjYme4nPB53ng6rkPDeKUn75I+cW3eIU0VPGPAu4sDCybHZAtuDnZZccxILwqT0kt6EGVno++MVWfqHVHT4AjolARqGopJ6FUCRO3APXaqJfyUsJFZcjbZWBiKUhs9ismcBjsSW6z7+7yDSm9lERrlfDvDMhlyNheLbi0GJuzztwxxwFAdrs2iVjwGvaazn15jXr/r7/VmeIHNlC0GV1F72d2SjpXxtBEMYAOjJt79fygHn7NtW6NUSpdh/yyicFcaJ8X1A85rUlsue1ODNvuv0mcA=",
                "type": "payment"
            },
            {
                "date": "2017-10-03 20:24",
                "fee": "1",
                "sequenceNum": "d4d433b0-a831-11e7-b5ea-b533b03a1ec9",
                "previousblockhash": "oy6Cb2YY31JKS+e+nrhX+OE1rBe2BHko36rWtE3zkT7MCQj9MkJFyMyb2IeW6AsOr8d1R18xoZHHrgc4rXJbdKZyjL4dEWyU4Ez4WNcBw28/z8AzJGDaIUEoLsybMnbOzg8Q27cdGmv9Ee9ur2L9BX8BcvnzJlIMFjJhoOmGhBH8b8n7B2SOCnTnqPdOI3K9Do2zCv5DjXUGsBSct+/oZgz1iKQ1tslfjXNK/IdYydg6aih6K4P4UGPE2DT5d/3u1PbtraNUIH0vCcLHduGxy4jHa6rztdU7GT5xnf7vMdOcf4WZo54BnWhgeF02Yx4icWQauQunnsVlsrdDGUn9sDc8dN6IMoLcMsFx2uDKENc=",
                "amount": "1",
                "incommingAddress": "C6ZfF3r1dnV0Bq70pgVrsxbAZB6+eia3Yhz1RBZHihqITKS2f6QayBnuNEcu8XiF",
                "address": "mRC5f6IosqFj3LyLD5mZPBxjWB1pc7mEfIE0z+I0kBiMt4gwEQ41JiCbUJD7Wu0+",
                "merklehash": "97QgJLz0qXq8S42bgoQ9eR/Xr2muYbkQ3DncCLsAm8fSi09TV6dR4zZetREADh0mwJpDZELupRFbQ9EtJintl59WC+gfHgHDHN7KI6hUvBpQdXBmseWyTUSlvNWSseGFc0Dp2kXhW9ZL5FmANmSu0AsB8rUg4EE1rgPa7lIk/D1/MCHzZjeBNvAA2Z3gdCzqJglMmUWhM6Jzc8yf6vMgFO0H+KXpuG0RksfiR2A3k/ZXbGwEdqvDo5mdQ2+QUe9yTCPcJ0Ei/avC8bXG4uZSEPwjerMlfXrNDYnUQ/wyn7ELwFHHuJrrvgc+D2MrdleCDcUSZieGTV54cY1nuuWr/GOg1XZ/C0zM+6xffo4FXDM=",
                "type": "payment"
            }
        ],
        "Count": 19,
        "ScannedCount": 41
    }
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
	"message" : "SUCCESS"
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
