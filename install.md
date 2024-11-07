# Install Danfe
::: warning

This langauage is in it's **0.0.1** release use it wisly.

:::

There are multiple ways to download and install Danfe

**To Install *Danfe* Follow the bellow steps.**

## Directly from terminal

::: details Info {open}
As of now **mac oS** is not supported using this method go to `build from source` section to install `danfe`.
:::

::: code-group
``` sh [Linux]
wget -qO- https://gist.github.com/sairash/c51cfd6654807ea5bf9eb6e2119b067a/raw/install_danfe.sh| bash
# or 
curl -sSL https://gist.github.com/sairash/c51cfd6654807ea5bf9eb6e2119b067a/raw/install_danfe.sh | bash
```

``` sh [Windows]
# coming soon
```
:::

## Build from source
### Install Vlang

[Vlang](https://vlang.io/) is a statically typed compiled programming language designed for building maintainable software. The language promotes writing simple and clear code with minimal abstraction.

```bash
git clone https://github.com/vlang/v
```
```bash
cd v
```
```bash
make
```

**Verify:**
You can verify that V is installed by typing the following command in a new terminal session.
```bash
v
```

### Build Danfe
Now that you have installed Vlang, You can follow the bellow steps to build Danfe.
```bash
git clone https://github.com/sairash/danfe-v
```
```bash
cd danfe-v
```
```bash
v .
```
**Verify:**
You can verify that you have built Danfe by typing the following command in a new terminal session.
```bash
./danfe
```
You will get a [Danfe REPL](/repl.md) which can run danfe code directly. <br><br>
**Move** the `./danfe` file to your `/bin` folder to get access to it from anywhere. <br>
Learn how to [execute Danfe Program](/execute.md)