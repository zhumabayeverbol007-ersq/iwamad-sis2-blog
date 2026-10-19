# iwamad-sis2-blog

Pages: https://zhumabayeverbol007-ersq.github.io/iwamad-sis2-blog/
Tests: Test Files 3 passed (3)
Tests: Tests 3 passed (3)
Protected: /dashboard

## About

A small blog application built with React, TypeScript and React Router for
SIS Assignment 2. It has five posts rendered dynamically, a like button on
each post, a custom 404 page, and a protected dashboard route that requires
sign-in.

## Design decisions

1. **Layout route for shared header and footer.** The `<Layout>` component
   wraps all pages using `<Outlet />`, so the navigation and footer never
   re-render when the route changes.

2. **Auth state in Context.** The sign-in state is one boolean in a React
   Context, so any component can read it without prop drilling. The
   `ProtectedRoute` component checks it and redirects to `/signin` when
   signed out.

3. **Simple validation on the sign-in form.** The form checks that the name
   is not empty before calling `signIn()`, keeping the logic easy to read.