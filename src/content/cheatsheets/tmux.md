---
title: 'Tmux Cheat Sheet'
description: 'Some useful tmux commands and configs'
isPublished: true
publishedAt: '2024-09-20T07:45:29.958Z'
---

## Prefix `Ctrl+space`

## Commands

```sh
tmux ls # list sessions
```

```sh
tmux new -s session_name # create new session
```

```sh
tmux a -t session_name # attach to an existing session
```

```sh
tmux new-window -n "my_window" # create new window
```

```sh
tmux kill-server # kill all servers
```

```sh
Prefix + ( # next session
Prefix + ) # prev session
Prefix + d # detach session
Prefix + w # show all sessions with windows
Prefix + c # create new window
Prefix + p # prev window
Prefix + n # next window
Prefix + % # create new pan side
Prefix + " # create new pan below
Prefix + & # kills a session
Prefix + Ctrl-s # save sessions
Prefix + Ctrl-r # restore sessions
```
