import type { IUser } from "../../../types";
import fetchAPI from "../../../api";

const User = async ({ params }: { params: { id: string } }) => {
  const user: IUser | null = await fetchAPI(`user/${params.id}`);

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="user-view">
      <div className="user-view-header">
        <h1>User: {user.id}</h1>
        <ul className="meta">
          <li>
            <span className="label">Created:</span> {user.created}
          </li>
          <li>
            <span className="label">Karma:</span> {user.karma}
          </li>
          {user.about && (
            <li
              dangerouslySetInnerHTML={{ __html: user.about }}
              className="about"
            />
          )}
        </ul>
        <p className="links">
          <a href={`https://news.ycombinator.com/submitted?id=${user.id}`}>
            submissions
          </a>{" "}
          |{" "}
          <a href={`https://news.ycombinator.com/threads?id=${user.id}`}>
            comments
          </a>
        </p>
      </div>
    </div>
  );
};

export default User;
