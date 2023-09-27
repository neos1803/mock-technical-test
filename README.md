# mock-technical-test

# SQL Challenge 1

Customers Table
![image](https://user-images.githubusercontent.com/38176579/198935485-bf96c15e-45d8-43d7-ba44-b4fd39253212.png)

Orders Table
![image](https://user-images.githubusercontent.com/38176579/198935570-91aad51c-a34d-4aaa-bd7f-b6ba58628cc4.png)

The challenge is to find customers who don't make any order or don't have any order. Create a query that will return a result like the image below
![image](https://user-images.githubusercontent.com/38176579/198941947-d002afc5-3176-46fe-8d41-7f9dd59249ae.png)

## SQL Challenge 1 Answers
```sql
SELECT `customers`.`name`
FROM `customers`
WHERE NOT EXISTS(
    SELECT 1 FROM `orders`
    WHERE `orders`.`customer_id` = `orders`.`id`
);
```

# SQL Challenge 2
Table mahasiswa

![image](https://user-images.githubusercontent.com/38176579/198942375-1bf45f81-7ec6-4eb4-8078-7c9fcc4d0b3a.png)

Challenge:
Buatlah query untuk menemukan NIM yang memiliki duplikasi kode_matakuliah seperti contoh di bawah

![image](https://user-images.githubusercontent.com/38176579/198942457-dab82929-ac5e-4274-8a2c-27eca2ff1cee.png)

## SQL Challenge 2 Answers

```sql
SELECT *, COUNT(*) AS Jumlah_duplikasi
FROM mahasiswa
GROUP BY nim, kode_matakuliah
HAVING Jumlah_duplikasi > 1;
```