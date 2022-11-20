import { useEffect } from "react";
import "./postView.css";

function PostView() {
  useEffect(() => {
    // console.log("recieving props", posts);
  }, []);

  return (
    <div className="PostView">
      <div>PostView</div>
    </div>
  );
}

export default PostView;
