# Git

## Resources

[Git Cheatsheat](https://training.github.com/downloads/github-git-cheat-sheet.pdf)

## Git Config

First setup your [git configuration](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup) for all local repos.

```shell
touch ~/.gitconfig
```

Input your config and save your changes.

```shell
[user]
  name = Javi Cardenas
  email = javicard@pm.me
[github]
  user   = javi-cardenas
[alias]
  a      = add
  cm     = commit -m
  s      = status
  p      = push
  co     = checkout
  fp     = fetch --prune --all
  l      = log --oneline --decorate --graph
[push]
        autoSetupRemote = true
[filter "lfs"]
        required = true
        clean = git-lfs clean -- %f
        smudge = git-lfs smudge -- %f
        process = git-lfs filter-process
[color]
        ui = auto
```

## GitHub SSH
