const fetchPosts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const posts = ["Post 1", "Post 2", "Post 3"];
      const error = true;

      if (error) {
        reject("Hubo un error");
      } else {
        resolve(posts);
      }
    }, 2000);
  });
};

fetchPosts()
  .then((posts) => {
    console.log(posts);
  })
  .catch((err) => {
    console.log(err);
  });


// const miVariable = fetchPosts()
// console.log(miVariable);