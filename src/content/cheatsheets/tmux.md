---
title: 'Tmux Cheat Sheet'
description: 'Some useful tmux commands and configs'
isPublished: true
publishedAt: '2024-09-20T07:45:29.958Z'
---

## Prefix `Ctrl+space`

## Config

```tmux
set-option -sa terminal-overrides ",xterm*:Tc"
set-option -g allow-passthrough on

unbind C-b
set -g prefix C-Space
bind C-Space send-prefix

bind -n M-H previous-window
bind -n M-L next-window

# Plugins

set -g @plugin 'tmux-plugins/tpm'
set -g @plugin 'tmux-plugins/tmux-sensible'
set -g @plugin 'christoomey/vim-tmux-navigator'
set -g @plugin 'tmux-plugins/tmux-yank'
set -g @plugin 'tmux-plugins/tmux-resurrect'
set -g @plugin 'tmux-plugins/tmux-open'

set-option -g mouse on
set -g @continuum-restore 'on'

# Theme
source-file ~/.config/tmux/tmux.theme.dark
# source-file ~/.config/tmux/tmux.theme.light

set -g @plugin 'tmux-plugins/tmux-cpu'
set -g @plugin 'tmux-plugins/tmux-continuum'

set-environment -g PATH "$HOMEBREW_PREFIX/bin:/usr/local/bin:/bin:/usr/bin:/usr/sbin:/sbin"

run '$HOMEBREW_PREFIX/opt/tpm/share/tpm/tpm'
```

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
```
