import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { RemixRouteComponent } from "@pankod/refine-remix-router";

export const loader: LoaderFunction = async ({ request }) => {
  return json({});
};

export default RemixRouteComponent;

/**
 * To define a custom initial route for refine to redirect and start with:
 *
 * Bind the `initialRoute` value to the `RemixRouteComponent` like the following:
 *
 * export default RemixRouteComponent.bind({ initialRoute: "/posts" });
 *
 **/
