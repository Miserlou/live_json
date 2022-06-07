# live_json

**LiveJSON** provides LiveView-like updating for JSON objects rather than DOM elements. It works within your existing LiveViews - just use `push_patch` as you would `assign` or `push_event`. 

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

### Problem / Solution

Phoenix LiveView is awesome for automatically updating your webpage's DOM. However, it doesn't work as well for data objects, since it works at the DOM level. So, if you load your data via a templated `script` tag, you'd have to rewrite the whole tag, not just the elements that changed, which could mean sending a lot of data over the wire and cause other headaches on the client-side.

LiveJSON is a simple solution - it uses Jsondiff/JSON-Patch (RFC 6902) to only send the delta of the data, which is then patched client side, similar to how `morphdom` works on the DOM.

This may be useful for **front-end frameworks**, **data visualization**, **games** and anything else where you need dynamically updated data that lives outside of the DOM, like **mobile apps**.

## Installation

## Capabilities and Limitations

### Fast and Non-Standard

By default, LiveJSON uses `jsondiff` for diffing/patching data. This is fast, but isn't defined by an RFC and subject to change, and may not have a client available on all plaforms. This is the best solution if you just want performance on a page you control.

### Slower and Standardized

Alternately, you can use `:rfc` mode to use JSON-Patch (RFC 6902) style patching. This is (currently) slower, but will mean that your data can be used by a larger number of consumers, such as a mobile applications.

## Usage
...

## TODO
...

## Standing on the Shoulders of Giants

There actually isn't very much code in this repo, just a convenient interface and application of work done by other people:

 * [olafura/json_diff_ex](https://github.com/olafura/json_diff_ex )
 * [corka149/jsonpatch](https://github.com/corka149/jsonpatch)
 * [benjamine/jsondiffpatch](https://github.com/benjamine/jsondiffpatch)
 * [Starcounter-Jack/fast-json-patch](https://github.com/Starcounter-Jack/JSON-Patch)

Other people have tried to solve this problem in other ways, but this was the solution that I wanted for my application. If you'd like to explore alternate approaches see:

 * [hanishe/live_data](https://github.com/hansihe/live_data)

## License

2022, Rich Jones, MIT License