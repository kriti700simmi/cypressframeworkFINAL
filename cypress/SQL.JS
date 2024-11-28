-- Online SQL Editor to Run SQL Online.
-- Use the editor to create new tables, insert data and all other SQL operations.
--INSERT INTO Customers (first_name, country,customer_id) VALUES ('TEST','IN','6');
--INSERT INTO Customers (customer_id) VALUES ('6');
--DELETE FROM Customers WHERE customer_id = '6';
--DELETE FROM Customers WHERE first_name = 'TEST';
--DELETE FROM Customers WHERE country = 'IN';
--UPDATE Customers SET first_name = 'bihari hardik' WHERE customer_id = '6';
--ALTER TABLE Customers ADD EMAIL VARCHAR(50);
--DROP TABLE Shippings;
--Create Table GENZ (
  
 -- Id int NOT NULL PRIMARY KEY,
 -- Name VARCHAR(30),
  --AGE INT
  

--)
--INSERT INTO GENZ (Id,Name, AGE) VALUES (1,'TEST', 67)
--Select c.first_name,c.last_name,o.item from Customers c INNER JOIN Orders o ON c.customer_id = o.customer_id;
--Select * from Customers c LEFT JOIN Orders o ON c.customer_id = o.customer_id;
--Select * from Customers c LEFT JOIN Orders o ON c.customer_id = o.customer_id; UNION Select * from Customers c RIGHT --JOIN Orders o ON c.customer_id = o.customer_id;


Select * from Customers c FULL JOIN Orders o ON c.customer_id = o.customer_id;



