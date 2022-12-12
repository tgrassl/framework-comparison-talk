import { Component, Show } from "solid-js";
import { createRouteData, RouteDataArgs, useRouteData } from "solid-start";
import fetchAPI from "~/lib/api";

interface IUser {
  error: string;
  id: string;
  created: string;
  karma: number;
  about: string;
}

export const routeData = (props: RouteDataArgs) => {
  return createRouteData<IUser, string>( async () => {
    return fetchAPI(`user/${props.params.id}`)
  });
};

const User: Component = () => {
  const user = useRouteData<typeof routeData>();
  return (
    <div class="user-view">
      <Show when={user()}>
        <Show when={!user()!.error} fallback={<h1>User not found.</h1>}>
          <h1>User : {user()!.id}</h1>
          <ul class="meta">
            <li>
              <span class="label">Created:</span> {user()!.created}
            </li>
            <li>
              <span class="label">Karma:</span> {user()!.karma}
            </li>
            <Show when={user()!.about}>
              <li innerHTML={user()!.about} class="about" />{" "}
            </Show>
          </ul>
          <p class="links">
            <a href={`https://news.ycombinator.com/submitted?id=${user()!.id}`}>submissions</a> |{" "}
            <a href={`https://news.ycombinator.com/threads?id=${user()!.id}`}>comments</a>
          </p>
        </Show>
      </Show>
    </div>
  );
};

export default User;