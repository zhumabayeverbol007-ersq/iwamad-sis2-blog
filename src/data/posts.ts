export interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
}

export const posts: Post[] = [
  {
    id: 1,
    title: 'Starting with React',
    content: 'When I first opened React, it felt strange. Everything was a component, and I did not understand why. After a few days of writing small pieces like Header and Footer, I got used to it. Now I like how easy it is to reuse the same component in different places.',
    author: 'Yerbol',
    date: '2026-09-15',
  },
  {
    id: 2,
    title: 'Why TypeScript helps me',
    content: 'At the beginning I typed "any" everywhere because it was faster. Then I wrote a props type for ProfileCard and saw how many mistakes TypeScript catches before I even run the app. It is slower to write, but I spend less time fixing bugs later.',
    author: 'Yerbol',
    date: '2026-09-22',
  },
  {
    id: 3,
    title: 'First steps with React Router',
    content: 'This week I split my card into pages. The Header stays in one place, and only the middle changes when I click a link. NavLink shows which page I am on. It is the first time my app feels like a real website instead of one long page.',
    author: 'Yerbol',
    date: '2026-09-29',
  },
  {
    id: 4,
    title: 'Sharing state with Context',
    content: 'Before, when I liked the card and moved to another page, the counter reset. I moved the likes into a Context, and now the number stays the same everywhere. I also moved the button into its own file, so ProfileCard is shorter and easier to read.',
    author: 'Yerbol',
    date: '2026-10-06',
  },
  {
    id: 5,
    title: 'My first tests',
    content: 'Writing tests felt like extra work at first, but it helped me find a bug in my Button. When I removed the rest props by accident, the test failed and told me exactly what was wrong. Now I understand why teachers keep saying that tests save time.',
    author: 'Yerbol',
    date: '2026-10-13',
  },
];