# live_json
[![GitHub](https://img.shields.io/github/stars/Miserlou/live_json?style=social)](https://github.com/Miserlou/live_json)
[![Hex.pm](https://img.shields.io/hexpm/v/live_json.svg)](https://hex.pm/packages/live_json)
[![WIP](https://img.shields.io/badge/status-alpha-yellow)](https://github.com/Miserlou/live_json)

**LiveJSON** is an Elixir/Phoenix provides LiveView-like updating for JSON objects rather than DOM elements. It works within your existing LiveViews - just use `push_patch` as you would `assign` or `push_event`. Only the changes to the data are sent over the wire, not the whole object every time, so it can end up being quite fast indeed.

This may be useful for **front-end frameworks**, **data visualization**, **games** and anything else where you need dynamically updated data that lives outside of the DOM, like **mobile apps**.

### Example

```elixir
def handle_info({:new_data_to_visualize, new_data} = _event, socket) do
  {:noreply, 
    socket
    |> push_patch("viz_data", new_data)
  }
end
```

Now, check your JS console:
```javascript
window.viz_data
// {1: ["a"], 2: ["b"] ... 99999: ["zzzzz"]}
```

The data is automatically updated, but if you check the WebSocket, you'll see that only the data that changed has been sent.

### Problem / Solution

Phoenix LiveView is awesome for automatically updating your webpage's DOM. However, it doesn't work as well for data objects, since it only works at the DOM level out of the box, meaning any complex data objects need to be entirely re-sent every time. So, if you load your JS app's data via a templated `script` tag, LiveView will rewrite the whole tag, not just the elements that changed, which means sending a lot of data over the wire and other headaches on the client-side.

LiveJSON is a simple alternative - it uses Jsondiff/JSON-Patch (RFC 6902) to only send the delta of the data, which is then patched client side, similar to how `morphdom` works on the DOM. 

## Installation

First, the usual:

```elixir
def deps do
  [
    {:live_json, "~> 0.1.0"}
  ]
end
```

Next, you'll need to set up the hooks in your `app.js`:

```javascript
// Import the JS..
import { createLiveJsonHooks } from 'live_json';
const liveJsonHooks = createLiveJsonHooks();

// ..then define all your hooks..
const Hooks = {
  // your other hooks
  // ...
  ...liveJsonHooks,
};

// ..and use them!
let csrfToken = document.querySelector("meta[name='csrf-token']").getAttribute("content")
let liveSocket = new LiveSocket("/live", Socket, {
  hooks: Hooks,
  params: {_csrf_token: csrfToken},
});
```

If your app uses an `assets/package.json`, you'll also need to add:

```json
{
  "dependencies": {
    "live_json": "file:../deps/live_json"
  }
}
```

and then `npm install`.

Finally, you'll need to put a tag for the hook somewhere on the related Heex:

```html
<div id="lj" phx-hook="LiveJSON"></div>
```

## Usage

There are only two commands: `initialize` and `push_patch`.

On your mount, initialize the state:

```elixir
def mount(_params, _, socket) do
  data = get_your_data()

  {:ok,
    socket
    |> LiveJson.initialize("dataviz", data)
  }
end
```

Then, to send updated data:

```elixir
def handle_info({:new_data_to_visualize, new_data} = _event, socket) do
  {:noreply, 
    socket
    |> LiveJson.push_patch("dataviz", new_data)
  }
end
```

Or, in RFC 6902 mode:

```elixir
def handle_info({:new_data_to_visualize, new_data} = _event, socket) do
  {:noreply, 
    socket
    |> LiveJson.push_patch("dataviz", new_data, :rfc)
  }
end
```

In your JS console `window.dataviz` will now hold the updated data for this example. Also note that `dataviz` is just an example - you can call it whatever you want the object to be called, and you can have multiple objects on the same page.

Each init/patch also emits a global event, which you can listen to with:

```javascript
window.addEventListener('dataviz_initialized', event => doSomethingOnInit(), false)
window.addEventListener('dataviz_patch', event => doSomethingOnPatch(), false)
```

## Capabilities and Limitations

### Fast and Non-Standard

By default, LiveJSON uses `jsondiff` for diffing/patching data. This is fast, but isn't defined by an RFC and subject to change, and may not have a client available on all plaforms. This is the best solution if you just want performance on a page you control.

### Slower and Standardized

Alternately, you can use `:rfc` mode to use JSON-Patch (RFC 6902) style patching. This is (currently) slower, but will mean that your data can be used by a larger number of consumers, such as a mobile applications.

_As of 0.2.1, this is [much faster](https://github.com/corka149/jsonpatch/issues/11)!_

## TODO
 - Tests
 - Example Projects
 - Perf Testing, with Numbers
 - Elixirify Code

## Standing on the Shoulders of Giants

There actually isn't very much code in this repo, just a convenient interface and application of work done by other people:

 * [olafura/json_diff_ex](https://github.com/olafura/json_diff_ex )
 * [corka149/jsonpatch](https://github.com/corka149/jsonpatch)
 * [benjamine/jsondiffpatch](https://github.com/benjamine/jsondiffpatch)
 * [Starcounter-Jack/fast-json-patch](https://github.com/Starcounter-Jack/JSON-Patch)

Other people have tried to solve this problem in other ways, but this was the solution that I wanted for my application. If you'd like to explore alternate approaches see:

 * [hanishe/live_data](https://github.com/hansihe/live_data)
 * [surferseo/live_data](https://github.com/surferseo/live_data)
 
The project structure for building and packaging hooks comes from:

 * [benvp/live_motion](https://github.com/benvp/live_motion)

## License

2022, Rich Jones, MIT License
