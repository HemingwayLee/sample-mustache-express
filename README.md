# How to run locally
* clone this project
* run the following commands
```
npm install
node index.js
```

* Check `http://localhost:3000/` in your browser

# Run by docker
```
docker build -t myexpress .
docker run -it --rm -p3000:3000 myexpress
```

* Check `http://localhost:3000/` in your browser

