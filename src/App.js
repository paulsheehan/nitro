import { useEffect, useState } from "react";
import "./App.css";
import ListView from "./ListView/ListView";
import PostView from "./PostView/PostView";

// initially group data by date

// group by author

// group by location

function App() {
  const [posts, setPosts] = useState([]);
  const [groupedPosts, setGroupedPosts] = useState({});
  const [currentPost, setCurrentPost] = useState({});

  useEffect(() => {
    getPosts();
  }, []);

  // get json data
  const getPosts = async () => {
    return fetch("http://localhost:3004/posts")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPosts(data);
      });
  };

  const groupPostsByWeek = () => {
    console.log("Grouping data by week", posts[0].time);
  };

  const groupPosts = (key) => {
    console.log(key);
    if (key === "week") {
      const groupedPosts = groupPostsByWeek();
    } else {
      const groupedPosts = posts.reduce(function (storage, item) {
        var group = item[key];
        storage[group] = storage[group] || [];
        storage[group].push(item);
        return storage;
      }, {});
      setGroupedPosts(groupedPosts);
    }
  };

  return (
    <div className="App">
      {posts.length ? (
        <ListView
          posts={posts}
          groupedPosts={groupedPosts}
          groupPosts={groupPosts}
        />
      ) : (
        <div>No data</div>
      )}
      <PostView currentPost={currentPost} />
    </div>
  );
}

export default App;
