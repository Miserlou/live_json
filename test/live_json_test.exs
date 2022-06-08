defmodule LiveJsonTest do
  use ExUnit.Case
  doctest LiveJson

  test "greets the world" do
    assert LiveJson.safer_string_to_atom("hello") == :hello
  end
end
