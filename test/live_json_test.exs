defmodule LiveJsonTest do
  use ExUnit.Case
  doctest LiveJson

  test "greets the world" do
    assert LiveJson.hello() == :world
  end
end
