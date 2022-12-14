import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import { json } from "@remix-run/node";

import type { IStory } from "~/types";
import Comment from "../../components/comment";
import fetchAPI from "~/api";

export const loader: LoaderFunction = async ({ params }) => {
  console.log("Hello from the server");
  const story = await fetchAPI(`item/${params.id}`);

  return json({ story });
};

const Story = () => {
  const { story } = useLoaderData<{ story: IStory }>();
  return (
    story && (
      <div className="item-view">
        <div className="item-view-header">
          <a href={story.url} target="_blank">
            <h1>{story.title}</h1>
          </a>
          {story.domain && <span className="host">({story.domain})</span>}
          <p className="meta">
            {story.points} points | by{" "}
            <Link to={`/users/${story.user}`}>{story.user}</Link>{" "}
            {story.time_ago} ago
          </p>
        </div>
        <div className="item-view-comments">
          <p className="item-view-comments-header">
            {story.comments_count
              ? story.comments_count + " comments"
              : "No comments yet."}
          </p>
          <ul className="comment-children">
            {story.comments.map((comment) => (
              <Comment key={comment.id} comment={comment} />
            ))}
          </ul>
        </div>
      </div>
    )
  );
};

export default Story;
