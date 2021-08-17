---
title: A very long excepteur deserunt esse proident adipisicing enim officia esse
slug: test-slug
publishedAt: 2021-07-30
isPublished: true
tags:
  - test
  - web dev
---

Lorem Voluptate excepteur deserunt esse proident adipisicing enim officia esse labore elit. Aliquip do in tempor occaecat nisi nisi consequat sint ullamco velit et duis aliquip do. Cillum nulla deserunt ex ipsum amet incididunt ut velit nisi ullamco elit fugiat.

Voluptate excepteur deserunt esse proident adipisicing enim officia esse labore elit. Aliquip do in tempor occaecat nisi nisi consequat sint ullamco velit et duis aliquip do. Cillum nulla deserunt ex ipsum amet incididunt ut velit nisi ullamco elit fugiat.

```jsx
const TagListWrapper = styled.ul`
  margin: ${({ theme }) => theme.space.xl}px 0 -16px 0;
  padding: 0;
  text-align: center;

  li {
    margin-right: ${({ theme }) => theme.space.lg}px;
    display: inline-block;
    font-size: ${({ theme }) => theme.fontSizes.body}px;
    background-color: ${({ theme }) =>
      theme.name === 'light' ? theme.colors.dark[0] : theme.colors.light[0]};
    border-radius: 8px;
    padding: 0 8px;
    transition: all ease-in-out 0.3s;
    opacity: 0.8;

    :hover {
      opacity: 1;
      background-color: ${({ theme }) => theme.colors.primary1};
    }

    ::before {
      content: '';
      margin-right: 0;
    }

    &:last-child {
      margin-right: 0;
    }

    svg {
      position: relative;
      top: -2px;
      margin-left: -5px;
      stroke: ${({ theme }) =>
        theme.name === 'light' ? theme.colors.light[1] : theme.colors.dark[1]};
    }

    a {
      color: ${({ theme }) =>
        theme.name === 'light' ? theme.colors.light[1] : theme.colors.dark[1]};
    }
  }
`;
```

At the end...
