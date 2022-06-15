defmodule LiveJson do

  alias Phoenix.LiveView.Utils

  require Jsonpatch
  require JsonDiffEx

  ##
  # Diff-Based
  ##

  def initialize(socket, doc_name, data) do
    doc_atom = safer_string_to_atom("lj" <> doc_name)
    socket
    |> Utils.assign(doc_atom, data)
    |> Utils.push_event("lj:init", %{doc_name: doc_name, data: data})
  end

  def push_patch(socket, doc_name, new_data, method \\ :jsondiff) do

    doc_atom = safer_string_to_atom("lj" <> doc_name)
    old_data = Map.get(socket.assigns, doc_atom)

    data_patch = if method == :rfc do
       Jsonpatch.diff(old_data, new_data)
      |> Jsonpatch.Mapper.to_map()
    else
      JsonDiffEx.diff(old_data, new_data)
    end

    # If there's no data in the patch, no reason to send it.
    if data_patch != %{} do
      socket
      |> Utils.assign(doc_atom, new_data)
      |> Utils.push_event("lj:patch", %{doc_name: doc_name, patch: data_patch, method: method})
    else
      socket
    end

  end

  ##
  # Utilities
  ##

  # Assign data on the window, but don't track it.
  def assign(socket, doc_name, data) do
    socket
    |> Utils.push_event("lj:assign", %{doc_name: doc_name, data: data})
  end

  # Append data to a list, but don't track it.
  def append(socket, doc_name, data) do
    socket
    |> Utils.push_event("lj:append", %{doc_name: doc_name, data: data})
  end

  # Set a key in a map
  def put(socket, doc_name, key, value) do
    socket
    |> Utils.push_event("lj:put", %{doc_name: doc_name, key: key, value: value})
  end

  ##
  # Helpers
  ##

  # XXX: Don't know if this is wise or necessary,
  # but maybe will help avoid the atom limit.
  @spec safer_string_to_atom(binary) :: atom
  def safer_string_to_atom(str) do
    try do
      String.to_existing_atom(str)
    rescue
      ArgumentError -> String.to_atom(str)
    end
  end

end
