import articlesObj from '../json/articles.json'

const getData = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve(articlesObj);
  }, 1500);
});

export default getData;