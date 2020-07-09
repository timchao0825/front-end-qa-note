console.log('promist js')
// ------ example post api
// [ 
//   {
//     "title": "文章1",
//     "id": 1
//   },
//   {
//     "title": "文章2",
//     "id": 2
//   },
//   {
//     "title": "文章3",
//     "id": 3
//   }
// ]
// {
//   "authorId": 5,
//   "content": "content",
//   "timestamp": "2015-08-26"
// }

// ------ example post content api
// {
//   "email": "test@gmail.com",
//   "name": "test",
//   "id": 5
// }

// ------ callback function
function getArticleList(callback){
	$.ajax(
    "https://jsonplaceholder.typicode.com/todos/1")
    .done(function(result){
        callback(result);
    });
}

function getArticle(id, callback){
  let newID = id + 1; // 2
  let url = `https://jsonplaceholder.typicode.com/posts/${newID}`
  $.ajax(url,{
    // id: id
  }).done(function(result){
    callback(result);
  })
}

function getAuthor(id, callback){
  let newID = id + 1; // 3
  let url =`https://jsonplaceholder.typicode.com/posts/${newID}/comments`
  $.ajax(url,{
    author: id
  }).done(function(result){
    callback(result);
  })
}

// call back function 
// getArticleList(function(post){
// 	getArticle(post.id, function(post){
//     getAuthor(post.id, function(comment){
//       console.log('post comment ID =>' + comment[0].postId);
//       console.log('post comment name =>' + comment[0].name);
//     })
//   })
// })


/// promise function
function getArticleListPromise(){
  return new Promise(function(resolve, reject){
     $.ajax(
      "https://jsonplaceholder.typicode.com/todos/1")
      .done(function(result){
          resolve(result);
      }); 
  });
}
function getArticlePromise(id){
  let newID = id + 1; // 2
  let url = `https://jsonplaceholder.typicode.com/posts/${newID}`
  return new Promise(function(resolve, reject){
     $.ajax(
      url)
      .done(function(result){
          resolve(result);
      }); 
  });
}

// getArticleListPromise()
//   .then(function(articleslist){
//     console.log('article list return =>> ');
//     console.log(articleslist);
//     return getArticlePromise(articleslist.id);
//   })
//   .then(function(article){
//     console.log('article list =>> ')
//     console.log(article)
//   })

// ----- promise arrow function
// getArticleListPromise()
//   .then( 
//     // function(articlelist){
//     //   return etArticlePromise(articleslist.id);
//     // }
//     articlelist => {
//       return getArticlePromise(articlelist.id)
//     }
//   )
//   .then( article => {
//     console.log(article)
//   })

// let myFirstPromise = new Promise((resolve, reject) => {
//   // 當非同步作業成功時，呼叫 resolve(...),而失敗時則呼叫 reject(...)。
//   // 在這個例子中，使用 setTimeout(...) 來模擬非同步程式碼。
//   // 在實務中，您將可能使用像是 XHR 或者一個 HTML5 API.
//   setTimeout(function(){
//     resolve("Success!"); // Yay！非常順利！
//   }, 2000);
// });

// myFirstPromise.then((successMessage) => {
//   // successMessage 是任何您由上方 resolve(...) 傳入的東西。
//   // 在此僅作為成功訊息，但是它不一定是字串。
//   console.log("Yay! " + successMessage);
// }); // 2秒後才會執行

// ----- async function
async function run(){
  let articles = await getArticleListPromise();
  let article = await getArticlePromise(articles.id);
  console.log(article);
}
run();
