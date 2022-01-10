# Prerequisite

- [Node JS](https://nodejs.org/ "Nodejs")
- [Postgres](https://node-postgres.com// "postgres")

## How to run Back End

**1)** Using npm `npm install`

**2)** Make sure Postgres is running or setup your hosting

**3)** run `npm start`

**4)** Node server listening on `http://localhost:5000`

## encrypt decrypt

- encrypt Methods (**bcrypt**,**crypto** )
- for encrypt decrypt I have added two logics in the code one is crypto and the algorithm which I have added is aes-256 and with crypto, we can two way which can be decrypted with ENCRYPTION_KEY and IV

- and the logic which I have added is bcrypt hash functions which are used to do a **one-way hash**. and this one is impossible to reverse.

## Luhn algorithm

- Luhn makes it possible to check numbers (credit card, SIRET, etc.) the reason we are using it for the same purpose we to validate the user's card is Ok or Not
