import { useEffect, useState } from "react";
import "./listView.css";

function ListView({ posts, groupPosts, groupedPosts }) {
  useEffect(() => {
    console.log("posts props changed", posts);
  }, [posts]);

  useEffect(() => {
    const parentNames = Object.keys(groupedPosts);
    const printValue = groupedPosts[parentNames[0]];
    console.log("Group data changed", printValue);
    setParentItems(parentNames);
  }, [groupedPosts]);

  const [activeButton, setActiveButton] = useState(0);
  const [activeParentItem, setActiveParentItem] = useState(0);
  const [parentItems, setParentItems] = useState([]);
  const categories = ["week", "author", "location"];

  const onGroupButtonClick = (buttonNumber) => {
    const category = categories[buttonNumber];
    setActiveButton(buttonNumber);
    groupPosts(category);
  };

  const onParentItemClick = (index) => {
    setActiveParentItem(index);
  };

  // Keep array of parent items

  // Keep object of arrays of sorted data

  return (
    <div className="ListView">
      <div className="list-btn-menu">
        <button
          onClick={() => onGroupButtonClick(0)}
          className={activeButton === 0 ? "selected" : null}
        >
          Week
        </button>
        <button
          onClick={() => onGroupButtonClick(1)}
          className={activeButton === 1 ? "selected" : null}
        >
          Author
        </button>
        <button
          onClick={() => onGroupButtonClick(2)}
          className={activeButton === 2 ? "selected" : null}
        >
          Location
        </button>
      </div>

      <div className="tree-view">
        {parentItems.length > 1
          ? parentItems.map((parentItem, i) => {
              return (
                <div className="parent-list-item">
                  <div
                    onClick={() => onParentItemClick(i)}
                    className="parent-item-selectable"
                  >
                    {parentItem}
                  </div>
                  <div
                    className={
                      "list-item-group " +
                      (activeParentItem === i ? "selected" : null)
                    }
                  >
                    {groupedPosts[parentItems[i]]
                      ? groupedPosts[parentItems[i]].map((item) => {
                          return (
                            <div className="list-item" nodeId="2">
                              {item.author}
                            </div>
                          );
                        })
                      : null}
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}

export default ListView;
