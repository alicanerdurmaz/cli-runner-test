import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import { Refine } from "@pankod/refine-core";

import routerProvider from "@pankod/refine-remix-router";

import dataProvider from "@pankod/refine-simple-rest";

const API_URL = "https://api.fake-rest.refine.dev";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix + Refine App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Refine
          routerProvider={routerProvider}
          dataProvider={dataProvider(API_URL)}
        >
          <Outlet />
        </Refine>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function links() {
  return [];
}
