<a name="car-ksjiekou"></a>
# car-ksjiekou

汽车接口考试<br />列表数据<br />访问：[http://localhost:3000/api/caroutside/](http://localhost:3000/api/caroutside/) 为列表数据<br />**请求方式：**GET<br />**返回示例**
```java
{
    "data": [
        {
            "id": "1",
            "name": "宝马mrt",
            "img": "https://www.bmw.com.cn/content/dam/bmw/marketCN/bmw_com_cn/model_card/F52_2022.png",
            "color": "白色",
            "manei": "20",
            "time": "2023/12/8"
        },
        {
            "id": "3",
            "name": "宝马M50",
            "img": "https://e-images.bmw-emall.cn/de077b04-2bcf-46b6-b70d-3de9b0fcc186",
            "color": "蓝色",
            "manei": "122",
            "time": "2023/12/8"
        },
        {
            "id": "4",
            "name": "宝马1",
            "img": "https://www.bmw.com.cn/content/dam/bmw/marketCN/bmw_com_cn/model_card/4_series_coupe_2023.png",
            "color": "海军蓝",
            "manei": "50",
            "time": "2023/12/8"
        }
    ]
}
```
**URL 参数：**

| **        参数名** | **          必选** | **         说明** |
| --- | --- | --- |
| id | 是 | 汽车id |
| name | 是 | 汽车名称 |
| img | 是 | 汽车图片 |
| color | 是 | 汽车颜色 |
| manei | 是 | 汽车价格 |
| time | 是 | 汽车添加时间 |

 删除汽车<br />**请求URL：**[http://localhost:3000/api/caroutside/del?id=](http://localhost:3000/api/caroutside/) 为列删除<br />**请求方式：**GET<br />**URL 参数：**

| **        参数名** | **          必选** | **         类型** | **         说明** |
| --- | --- | --- | --- |
|          id |           是 |         string | 通过id查找进行删除 |

**返回示例**
```java
{
  "status": 0,
  "message": "删除汽车成功！"
}

```
**返回参数说明**

| **参数名** | **类型** | **说明** |
| --- | --- | --- |
| status | int | 请求是否成功，0：成功；1：失败 |
| message | string | 请求结果的描述消息 |

修改汽车<br />访问：[http://localhost:3000/api/user/xouser](http://localhost:3000/api/user/xouser) 为列修改<br />**请求方式：**POST<br />添加汽车<br />访问：[http://localhost:3000/api/caroutside/increase](http://localhost:3000/api/caroutside/) 为列添加<br />**请求方式：**POST<br />**URL 参数：**

| **        参数名** | **          必选** | **         类型** | **         说明** |
| --- | --- | --- | --- |
|          id |           是 |         string | 通过id查找进行回显 |

```java
{
  "status": 0,
  "message": "更新汽车信息成功！"
}
```
**返回参数说明**

| **参数名** | **类型** | **说明** |
| --- | --- | --- |
| status | int | 请求是否成功，0：成功；1：失败 |
| message | string | 请求结果的描述消息 |

**URL 参数：**

| **        参数名** | **          必选** | **         说明** |
| --- | --- | --- |
| id | 是 | 汽车id |
| name | 是 | 汽车名称 |
| img | 是 | 汽车图片 |
| color | 是 | 汽车颜色 |
| manei | 是 | 汽车价格 |
| time | 是 | 汽车添加时间 |

```java
{
  "status": 0,
  "message": "新增汽车成功！"
}
```
**返回参数说明**

| **参数名** | **类型** | **说明** |
| --- | --- | --- |
| status | int | 请求是否成功，0：成功；1：失败 |
| message | string | 请求结果的描述消息 |


