import React, { useState } from "react";

export const TopTabs = () => {
  let data = ["All Posts(32)", "Article", "Event", "Education", "Job"];
  const [tab, setTab] = useState(data[0]);
  return (
    <div style={{ display: "flex",borderBottom:"1px solid grey" }}>
      <div style={{ display: "flex",marginBottom:"-16px" }}>
        {data.map((item) => (
          <p
            className={item == tab ? "activetabItem" : "tabItem"}
            onClick={() => setTab(item)}
          >
            {item}
          </p>
        ))}
      </div>
      <div className="end-block">
        <button type="button" class="btn btn-light post-button">
          Write a Post{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            style={{ marginLeft: "10px" }}
            height="16"
            fill="currentColor"
            class="bi bi-caret-down-fill"
            viewBox="0 0 16 16"
          >
            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
          </svg>
        </button>
        <button
          type="button"
          style={{ marginLeft: "10px" }}
          class="btn btn-primary post-button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            style={{ marginRight: "10px" }}
            height="16"
            fill="currentColor"
            class="bi bi-people-fill"
            viewBox="0 0 16 16"
          >
            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
          </svg>{" "}
          Join Group
        </button>
      </div>
    </div>
  );
};
