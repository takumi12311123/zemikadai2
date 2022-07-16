# zemikadai2

# dockerについて

### docker start
```sudo service docker start```

### compose up
```docker-compose up```

### docker stop
```sudo service docker stop```

# backendについて

### prisma studioの起動
```npx prisma studio```

### migrateの切り方
```npx prisma migrate dev --name post```

### seedのデータを変えて入れなおす時
```npx prisma migrate reset```

### localhostを立ち上げるとき
```npm run start:dev```<br>
[playground](http://localhost:3000/graphql)<br>
[localhost](http://localhost:3000)<br>

# frontend

### localhostを立ち上げるとき(localhost:3001を使ってください)
```npm start```<br>
backendを立ち上げてからじゃないと動きません<br>
gqlの接続先を<br>
https://localhost:3000/graphql<br>
にしているからです

