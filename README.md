# Getting started with Docker

## Setting up the docker enviornment

```
docker build -t interactivity/frontend:{build_version} .
docker run -p 3000:3000 {docker_image_id} 

// To stop the container instance from running
docker stop {docker_image_id}

```

_Note: build_version will change whenever you re-build the application. For example, when a new feature is deployed you will re-build on docker and build_version will be 2, or 3 etc. etc. It should start out as 1._

When you are developing normally you can just use npm start so you get hot reload and all the features it entails. You should only be using docker when you're trying to test your new feature in a "production" enviornment. 
